(() => {
  const style = document.createElement('style'); style.textContent='.admin-tabs{position:static!important;transform:none!important;width:auto!important;justify-content:flex-start!important;box-shadow:none!important;border:0!important;padding:8px 0!important;background:transparent!important}.admin-tabs .btn{flex:0 1 auto!important;display:inline-flex!important;flex-direction:row!important;width:auto!important} .order-card{padding:12px 0;border-bottom:1px solid var(--line)}.order-card:last-child{border-bottom:0}.order-head{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}.status-chip{display:inline-block;background:var(--soft);color:var(--red);border-radius:20px;padding:4px 9px;font-size:13px}.order-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}.order-progress{list-style:none;padding:0;margin:12px 0;display:grid;gap:7px}.order-progress li{display:flex;align-items:center;gap:8px;color:var(--muted)}.order-progress li:before{content:"•";display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#eee;color:#777;font-weight:bold}.order-progress li.done,.order-progress li.current{color:var(--ink);font-weight:bold}.order-progress li.done:before,.order-progress li.current:before{content:"✓";background:#b4232e;color:#fff}.order-rejected{margin:12px 0;padding:10px;border-radius:10px;background:#fff0f0;color:#a31522;font-weight:bold}.notify-customer{margin:10px 0}'; document.head.appendChild(style);
  let seenOrderIds = new Set();
  let baselineLoaded = false;
  let pollingOrders = false;
  let pollingCustomerOrders = false;
  let trackedOrderCode = '';
  const knownCustomerStatuses = new Map();

  function ensureOrderUi() {
    const tracking = document.getElementById('orders');
    if (tracking && !document.getElementById('trackOrderForm')) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = '<h2>تابع طلبك</h2><p class="muted">اكتب رقم الطلب الموجود في رسالة التأكيد، أو افتح «طلباتي» لمتابعة الطلبات من هذا الجهاز.</p><form id="trackOrderForm" class="row"><input id="trackOrderCode" placeholder="مثال: BZ12345678" required><button class="primary">عرض حالة الطلب</button></form><button class="soft notify-customer" type="button" onclick="enableCustomerOrderNotifications()">فعّل إشعارات حالة الطلب على هذا الجهاز</button><p class="muted">التنبيهات تظهر بعد السماح بها مع إبقاء صفحة الموقع مفتوحة.</p><div id="trackingResult" aria-live="polite"></div>';
      tracking.prepend(card);
    }
    const panel = document.getElementById('adminPanel');
    if (panel && !document.getElementById('ordersAdmin')) {
      const nav = panel.querySelector('.tabs');
      const inventory = document.getElementById('inventory');
      const ordersView = document.createElement('div');
      ordersView.id = 'ordersAdmin'; ordersView.className = 'hidden';
      ordersView.innerHTML = '<div class="section-title"><h3>إدارة الطلبات</h3><button class="soft" id="refreshOrders" type="button">تحديث</button></div><div id="adminOrdersList" class="card" aria-live="polite"></div>';
      const kitchenView = document.createElement('div');
      kitchenView.id = 'kitchenAdmin'; kitchenView.className = 'hidden';
      kitchenView.innerHTML = '<h3>شاشة المطبخ — الطلبات الجديدة وقيد التحضير</h3><div id="kitchenOrdersList" class="card" aria-live="polite"></div>';
      if (inventory) { panel.insertBefore(ordersView, inventory); panel.insertBefore(kitchenView, inventory); }
      if (nav) {
        nav.classList.add('admin-tabs');
        [['ordersAdmin','الطلبات'],['kitchenAdmin','المطبخ']].forEach(([id,label]) => {
          const button=document.createElement('button'); button.className='btn'; button.dataset.admin=id; button.textContent=label; nav.insertBefore(button,nav.firstChild);
          button.onclick=()=>{
            nav.querySelectorAll('[data-admin]').forEach(x=>x.classList.toggle('active',x===button));
            ['ordersAdmin','kitchenAdmin','inventory','settings'].forEach(view=>{const el=document.getElementById(view);if(el)el.classList.toggle('hidden',view!==id)});
          };
        });
        nav.querySelector('[data-admin=inventory]')?.classList.add('active');
        nav.querySelector('[data-admin=ordersAdmin]')?.classList.remove('active');
        nav.querySelectorAll('[data-admin]').forEach(button=>button.onclick=()=>{nav.querySelectorAll('[data-admin]').forEach(x=>x.classList.toggle('active',x===button));document.getElementById('adminOverview')?.classList.add('hidden');['ordersAdmin','kitchenAdmin','inventory','settings'].forEach(view=>{const el=document.getElementById(view);if(el)el.classList.toggle('hidden',view!==button.dataset.admin)});});
      }
      const refresh=document.getElementById('refreshOrders'); if(refresh)refresh.onclick=()=>renderAdmin();
    }
  }

  ensureOrderUi();

  const openOrders=document.getElementById('openOrdersShortcut'); if(openOrders)openOrders.onclick=()=>document.querySelector('[data-admin="ordersAdmin"]')?.click();

  function statusActions(order) {
    const choices = {
      'جديد': [['قبول','مقبول'],['رفض','مرفوض']],
      'مقبول': [['بدء التحضير','قيد التحضير'],['رفض','مرفوض']],
      'قيد التحضير': order.order_type==='توصيل' ? [['تم التجهيز وإرسال الطلب للدليفري','خرج للتوصيل']] : [['جاهز للاستلام','جاهز']],
      'جاهز': [['تم التسليم','مكتمل']],
      'خرج للتوصيل': []
    };
    return (choices[order.status]||[]).map(([label,next])=>'<button class="soft" type="button" onclick="changeOrderStatus(\''+String(order.id).replace(/'/g,'')+'\',\''+next+'\')">'+label+'</button>').join('');
  }
  function orderCard(order, showActions) {
    const date=new Intl.DateTimeFormat('ar-EG',{timeZone:'Africa/Cairo',hour:'numeric',minute:'2-digit'}).format(new Date(order.created_at));
    return '<article class="order-card"><div class="order-head"><b>'+esc(order.code)+' — '+esc(order.customer)+'</b><span class="status-chip">'+esc(customerStatusLabel(order.status,order.order_type))+'</span></div><div class="muted">'+esc(order.phone)+' • '+esc(order.branch)+' • '+esc(order.order_type)+' • '+esc(order.payment)+'</div><div>'+esc(order.summary)+'</div><div class="row"><b>'+Number(order.total).toFixed(0)+' ج.م</b><span class="muted">'+date+'</span></div>'+(order.address?'<div class="muted">العنوان: '+esc(order.address)+'</div>':'')+(showActions?'<div class="order-actions">'+statusActions(order)+'</div>':'')+'</article>';
  }

  function cairoDayKey(value){const parts=new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Cairo',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date(value));const part=key=>parts.find(x=>x.type===key)?.value||'00';return part('year')+'-'+part('month')+'-'+part('day')}
  function cairoDayLabel(value){return new Intl.DateTimeFormat('ar-EG',{timeZone:'Africa/Cairo',weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(new Date(value))}
  function ordersByDay(list,showActions){const sorted=[...list].sort((a,b)=>new Date(b.created_at)-new Date(a.created_at)),groups=new Map();for(const order of sorted){const key=cairoDayKey(order.created_at);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(order)}return [...groups.values()].map(dayOrders=>'<section class="order-day-group"><h3 class="order-day-heading">'+esc(cairoDayLabel(dayOrders[0].created_at))+'</h3>'+dayOrders.map(order=>orderCard(order,showActions)).join('')+'</section>').join('')||'<p class="muted">لا توجد طلبات مسجلة.</p>'}
  async function fetchAllOrders(){const pageSize=1000;let all=[],offset=0;while(true){const {data,error}=await db.from('orders').select('*').order('created_at',{ascending:false}).range(offset,offset+pageSize-1);if(error)return{data:null,error};const page=data||[];all.push(...page);if(page.length<pageSize)break;offset+=pageSize}return{data:all,error:null}}

  window.changeOrderStatus = async (id,status) => {
    const {error}=await db.rpc('set_order_status',{p_order_id:id,p_status:status});
    if(error){toast('تعذر تحديث حالة الطلب: '+error.message);return;}
    toast('حالة الطلب أصبحت: '+status); await renderAdmin();
  };

  function customerStatusLabel(status,orderType){return ({'جديد':'تم استلام الطلب','مقبول':'تم قبول الطلب','قيد التحضير':'جاري تجهيز الطلب','جاهز':orderType==='توصيل'?'تم التجهيز':'جاهز للاستلام','خرج للتوصيل':orderType==='توصيل'?'جاري التوصيل':status,'مكتمل':orderType==='توصيل'?'تم التوصيل':'تم التسليم','مرفوض':'تم رفض الطلب'})[status]||status||'جاري تحديث الحالة'}
  function customerProgress(order){if(order.status==='مرفوض')return '<div class="order-rejected">تم رفض الطلب. تواصل مع الفرع لمعرفة التفاصيل.</div>';const delivery=order.order_type==='توصيل',steps=[['جديد','تم استلام الطلب'],['مقبول','تم قبول الطلب'],['قيد التحضير','جاري تجهيز الطلب']];if(delivery)steps.push(['جاهز','تم التجهيز']);else steps.push(['جاهز','جاهز للاستلام']);if(delivery)steps.push(['خرج للتوصيل','جاري التوصيل']);steps.push(['مكتمل',delivery?'تم التوصيل':'تم التسليم']);const active=steps.findIndex(([status])=>status===order.status);return '<ol class="order-progress">'+steps.map(([status,label],index)=>'<li class="'+(active>=0&&index<active?'done':index===active?'current':'')+'">'+label+'</li>').join('')+'</ol>'}
  function deliveryConfirmationButton(order){return order.order_type==='توصيل'&&order.status==='خرج للتوصيل'?'<button class="primary customer-delivery-confirm" type="button" onclick="confirmCustomerDelivery(\''+esc(order.code)+'\')">تم التوصيل</button>':''}
  function customerOrderCard(order){return '<article class="order-card"><div class="order-head"><b>طلب '+esc(order.code)+' — '+esc(order.branch||'')+'</b><span class="status-chip">'+esc(customerStatusLabel(order.status,order.order_type))+'</span></div><div>'+esc(order.summary||'')+' • '+Number(order.total||0).toFixed(0)+' ج.م</div><div class="muted">'+esc(order.order_type||'')+' • '+new Date(order.created_at||Date.now()).toLocaleString('ar-EG')+'</div>'+customerProgress(order)+deliveryConfirmationButton(order)+'</article>'}
  function drawCustomerOrders(local){const list=document.getElementById('ordersList');if(list)list.innerHTML=local.map(customerOrderCard).join('')||'<p class="muted">لا توجد طلبات مسجلة على هذا الجهاز.</p>'}
  window.renderOrders = async function() {const local=JSON.parse(sessionStorage.getItem('bz-orders')||'[]');local.forEach(o=>{if(o.code&&!knownCustomerStatuses.has(o.code))knownCustomerStatuses.set(o.code,o.status)});drawCustomerOrders(local);refreshCustomerOrderStatuses()};

  function renderTrackedOrder(order){const out=document.getElementById('trackingResult');if(!out)return;out.innerHTML='<article class="order-card"><div class="order-head"><b>طلب '+esc(order.code)+' — '+esc(order.branch)+'</b><span class="status-chip">'+esc(customerStatusLabel(order.status,order.order_type))+'</span></div><div>'+esc(order.summary)+' • '+Number(order.total).toFixed(0)+' ج.م</div><div class="muted">'+esc(order.order_type)+' • '+new Date(order.created_at).toLocaleString('ar-EG')+'</div>'+customerProgress(order)+deliveryConfirmationButton(order)+'</article>'}
  window.confirmCustomerDelivery=async function(code){const {data,error}=await db.rpc('confirm_delivery_by_code',{p_code:code});if(error){toast('تعذر تأكيد الاستلام. تأكد من تحديث قاعدة البيانات ثم حاول مجدداً.');return}const result=Array.isArray(data)?data[0]:data;if(!result||result.status!=='مكتمل'){toast('لم يتم تأكيد التوصيل. حاول مرة أخرى.');return}const local=JSON.parse(sessionStorage.getItem('bz-orders')||'[]');const order=local.find(o=>o.code===code);if(order){order.status='مكتمل';sessionStorage.setItem('bz-orders',JSON.stringify(local))}knownCustomerStatuses.set(code,'مكتمل');if(order)drawCustomerOrders(local);if(trackedOrderCode===code)renderTrackedOrder({...order,status:'مكتمل',order_type:'توصيل'});toast('تم تأكيد استلام طلبك')};
  window.trackCustomerOrder=async function(code){const normalized=String(code||'').trim().toUpperCase();if(!normalized)return;const {data,error}=await db.rpc('track_order_by_code',{p_code:normalized});if(error){const out=document.getElementById('trackingResult');if(out)out.innerHTML='<p class="muted">تعذر البحث عن الطلب. حاول مرة أخرى.</p>';return}const order=Array.isArray(data)?data[0]:data;if(!order){const out=document.getElementById('trackingResult');if(out)out.innerHTML='<p class="muted">لم نعثر على طلب بهذا الرقم.</p>';return}trackedOrderCode=order.code;knownCustomerStatuses.set(order.code,order.status);const local=JSON.parse(sessionStorage.getItem('bz-orders')||'[]');if(!local.some(o=>o.code===order.code)){local.unshift({...order,customer:'طلبك'});sessionStorage.setItem('bz-orders',JSON.stringify(local))}renderTrackedOrder(order);drawCustomerOrders(JSON.parse(sessionStorage.getItem('bz-orders')||'[]'))};
  window.enableCustomerOrderNotifications=async function(){if(!('Notification'in window)){toast('المتصفح لا يدعم إشعارات الموقع');return}try{const permission=await Notification.requestPermission();if(permission==='granted')toast('تم تفعيل الإشعارات لهذا الجهاز');else toast('لم يتم السماح بإشعارات الموقع')}catch(e){toast('تعذر تفعيل الإشعارات على هذا الجهاز')}};
  function notifyCustomerOrderStatus(order,status){if(!('Notification'in window)||Notification.permission!=='granted')return;const label=customerStatusLabel(status,order.order_type);try{new Notification('تحديث طلبك '+order.code,{body:label,tag:'bazez-order-'+order.code})}catch(e){console.warn('Customer notification unavailable',e)}}
  async function refreshCustomerOrderStatuses(){if(pollingCustomerOrders)return;pollingCustomerOrders=true;try{const local=JSON.parse(sessionStorage.getItem('bz-orders')||'[]');let changed=false;await Promise.all(local.filter(o=>o.code&&!['مكتمل','مرفوض'].includes(o.status)).map(async order=>{const {data,error}=await db.rpc('track_order_by_code',{p_code:order.code});if(error)return;const live=Array.isArray(data)?data[0]:data;if(!live)return;const previous=knownCustomerStatuses.has(order.code)?knownCustomerStatuses.get(order.code):order.status;if(previous&&previous!==live.status)notifyCustomerOrderStatus({...order,...live},live.status);knownCustomerStatuses.set(order.code,live.status);if(order.status!==live.status){Object.assign(order,live);changed=true}if(trackedOrderCode===order.code)renderTrackedOrder(live)}));if(changed){sessionStorage.setItem('bz-orders',JSON.stringify(local));if(!document.getElementById('orders')?.classList.contains('hidden'))drawCustomerOrders(local)}}finally{pollingCustomerOrders=false}}

  document.getElementById('trackOrderForm')?.addEventListener('submit',e=>{e.preventDefault();const out=document.getElementById('trackingResult');if(out)out.innerHTML='<p class="muted">جارٍ البحث عن الطلب…</p>';window.trackCustomerOrder(document.getElementById('trackOrderCode').value)});

  const baseRenderAdmin=window.renderAdmin;
  window.renderAdmin=async function(){
    if(typeof baseRenderAdmin==='function')await baseRenderAdmin();
    if(!logged)return; ensureOrderUi();
    const status=document.getElementById('notificationStatus');
    const {data:isAdmin,error:roleError}=await db.rpc('is_bazez_admin');
    if(roleError||isAdmin!==true){if(status)status.textContent='حساب الدخول غير مضاف كمسؤول في Supabase. أضفه إلى public.admin_users لعرض الطلبات وإدارتها.';return;}
    const {data:list,error}=await fetchAllOrders();
    if(error){if(status)status.textContent='تعذر تحميل الطلبات: '+error.message;return;}
    orders=list||[];
    document.getElementById('statOrders').textContent=orders.length;
    document.getElementById('adminOrdersList').innerHTML=ordersByDay(orders,true);
    document.getElementById('kitchenOrdersList').innerHTML=orders.filter(o=>['جديد','مقبول','قيد التحضير'].includes(o.status)).map(o=>orderCard(o,true)).join('')||'<p class="muted">لا توجد طلبات للمطبخ الآن.</p>';
    if(status&&('Notification' in window)&&Notification.permission==='granted')status.textContent='الإدارة متصلة. الطلبات تظهر هنا مباشرة، وحالات المطبخ تتحدث تلقائياً.';
    if(!baselineLoaded){orders.forEach(o=>seenOrderIds.add(o.id));baselineLoaded=true;}
  };

  function notifyNewOrder(order){
    if(!order||seenOrderIds.has(order.id))return; seenOrderIds.add(order.id);
    showOrderNotification(order);
  }
  window.subscribeOrderNotifications=function(){
    if(!logged)return;
    if(orderChannel){db.removeChannel(orderChannel);orderChannel=null;}
    orderChannel=db.channel('bazez-admin-orders-v2')
      .on('postgres_changes',{event:'INSERT',schema:'public',table:'orders'},p=>notifyNewOrder(p.new))
      .on('postgres_changes',{event:'UPDATE',schema:'public',table:'orders'},()=>renderAdmin())
      .subscribe(s=>{const el=document.getElementById('notificationStatus');if(!el)return;if(s==='SUBSCRIBED')el.textContent='الإدارة متصلة مباشرة؛ اترك صفحة الإدارة مفتوحة لاستقبال الطلبات.';else if(s==='CHANNEL_ERROR'||s==='TIMED_OUT')el.textContent='الاتصال الفوري تعذر. تحقق من Realtime وصلاحيات المسؤول في Supabase.';});
  };

  async function pollForNewOrders(){
    if(!logged||pollingOrders)return; pollingOrders=true;
    try{
      const {data:list,error}=await db.from('orders').select('*').order('created_at',{ascending:false}).limit(100);
      if(error){const el=document.getElementById('notificationStatus');if(el)el.textContent='لا توجد صلاحية لقراءة الطلبات. أضف حسابك إلى public.admin_users.';return;}
      if(!baselineLoaded){(list||[]).forEach(o=>seenOrderIds.add(o.id));baselineLoaded=true;return;}
      (list||[]).forEach(notifyNewOrder);
      if((list||[]).some(o=>!seenOrderIds.has(o.id)))renderAdmin();
    }finally{pollingOrders=false;}
  }


  document.getElementById('orderForm').onsubmit=async e=>{
    e.preventDefault(); if(!cart.length){toast('السلة فارغة');return;}
    const selectedBranch=document.getElementById('branch').value;
    const branchPhone=selectedBranch===cfg.b1?cfg.p1:cfg.p2,whatsapp=normalizeWhatsapp(branchPhone);
    if(!whatsapp){toast('أضف رقم كاشير الفرع من إعدادات الإدارة أولاً');return;}
    const alphabet='0123456789ABCDEFGHJKMNPQRSTVWXYZ';
    const bytes=crypto.getRandomValues(new Uint8Array(8));
    const code='BZ'+Array.from(bytes,b=>alphabet[b&31]).join('');
    const payload={code,customer:document.getElementById('custName').value.trim(),phone:document.getElementById('custPhone').value.trim(),branch:selectedBranch,order_type:document.getElementById('orderType').value,payment:document.getElementById('payment').value,address:document.getElementById('address').value.trim()};
    const lines=cart.map(x=>({id:x.id,label:x.label,qty:x.qty}));
    const waWindow=window.open('about:blank','_blank');
    const {data,error}=await db.rpc('place_order',{p_order:payload,p_items:lines});
    if(error){if(waWindow)waWindow.close();toast('تعذر تسجيل الطلب: '+error.message);return;}
    const saved=Array.isArray(data)?data[0]:data;
    if(!saved||!saved.code){toast('لم يصل تأكيد حفظ الطلب. راجع الإدارة قبل إعادة الطلب.');return;}
    const local=JSON.parse(sessionStorage.getItem('bz-orders')||'[]');local.unshift({...saved,order_type:payload.order_type});sessionStorage.setItem('bz-orders',JSON.stringify(local));
    const msg='طلب '+saved.code+'\nالاسم: '+payload.customer+'\nالهاتف: '+payload.phone+'\n'+payload.order_type+' — '+payload.branch+'\nالدفع: '+payload.payment+'\nالعنوان: '+payload.address+'\n'+saved.summary+'\nالإجمالي: '+saved.total+' ج.م';
    if(waWindow)waWindow.location='https://wa.me/'+whatsapp+'?text='+encodeURIComponent(msg);cart=[];await loadItems();renderCart();toast('تم تسجيل الطلب: '+saved.code);
  };

  if(logged)subscribeOrderNotifications();
  setInterval(pollForNewOrders,12000);
  setInterval(refreshCustomerOrderStatuses,12000);
})();


