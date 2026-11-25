(() => {
  const style = document.createElement('style'); style.textContent='.admin-tabs{position:static!important;transform:none!important;width:auto!important;justify-content:flex-start!important;box-shadow:none!important;border:0!important;padding:8px 0!important;background:transparent!important}.admin-tabs .btn{flex:0 1 auto!important;display:inline-flex!important;flex-direction:row!important;width:auto!important} .order-card{padding:12px 0;border-bottom:1px solid var(--line)}.order-card:last-child{border-bottom:0}.order-head{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap}.status-chip{display:inline-block;background:var(--soft);color:var(--red);border-radius:20px;padding:4px 9px;font-size:13px}.order-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:8px}'; document.head.appendChild(style);
  let seenOrderIds = new Set();
  let baselineLoaded = false;
  let pollingOrders = false;

  function ensureOrderUi() {
    const tracking = document.getElementById('orders');
    if (tracking && !document.getElementById('trackOrderForm')) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = '<h2>تابع طلبك</h2><p class="muted">اكتب رقم الطلب الموجود في رسالة التأكيد.</p><form id="trackOrderForm" class="row"><input id="trackOrderCode" placeholder="مثال: BZ12345678" required><button class="primary">عرض حالة الطلب</button></form><div id="trackingResult" aria-live="polite"></div>';
      tracking.prepend(card);
    }
    const panel = document.getElementById('adminPanel');
    if (panel && !document.getElementById('ordersAdmin')) {
      const nav = panel.querySelector('.tabs');
      const inventory = document.getElementById('inventory');
      const ordersView = document.createElement('div');
      ordersView.id = 'ordersAdmin';
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
        nav.querySelector('[data-admin=ordersAdmin]')?.classList.add('active');
        nav.querySelector('[data-admin=inventory]')?.classList.remove('active');
        nav.querySelectorAll('[data-admin]').forEach(button=>button.onclick=()=>{nav.querySelectorAll('[data-admin]').forEach(x=>x.classList.toggle('active',x===button));['ordersAdmin','kitchenAdmin','inventory','settings'].forEach(view=>{const el=document.getElementById(view);if(el)el.classList.toggle('hidden',view!==button.dataset.admin)});});
      }
      const refresh=document.getElementById('refreshOrders'); if(refresh)refresh.onclick=()=>renderAdmin();
    }
  }

  function statusActions(order) {
    const choices = {
      'جديد': [['قبول','مقبول'],['رفض','مرفوض']],
      'مقبول': [['بدء التحضير','قيد التحضير'],['رفض','مرفوض']],
      'قيد التحضير': order.order_type==='توصيل' ? [['جاهز','جاهز'],['خرج للتوصيل','خرج للتوصيل']] : [['جاهز للاستلام','جاهز']],
      'جاهز': [['تم التسليم','مكتمل']],
      'خرج للتوصيل': [['تم التسليم','مكتمل']]
    };
    return (choices[order.status]||[]).map(([label,next])=>'<button class="soft" type="button" onclick="changeOrderStatus(\''+String(order.id).replace(/'/g,'')+'\',\''+next+'\')">'+label+'</button>').join('');
  }
  function orderCard(order, showActions) {
    const date=new Date(order.created_at).toLocaleString('ar-EG');
    return '<article class="order-card"><div class="order-head"><b>'+esc(order.code)+' — '+esc(order.customer)+'</b><span class="status-chip">'+esc(order.status)+'</span></div><div class="muted">'+esc(order.phone)+' • '+esc(order.branch)+' • '+esc(order.order_type)+' • '+esc(order.payment)+'</div><div>'+esc(order.summary)+'</div><div class="row"><b>'+Number(order.total).toFixed(0)+' ج.م</b><span class="muted">'+date+'</span></div>'+(order.address?'<div class="muted">العنوان: '+esc(order.address)+'</div>':'')+(showActions?'<div class="order-actions">'+statusActions(order)+'</div>':'')+'</article>';
  }

  window.changeOrderStatus = async (id,status) => {
    const {error}=await db.rpc('set_order_status',{p_order_id:id,p_status:status});
    if(error){toast('تعذر تحديث حالة الطلب: '+error.message);return;}
    toast('حالة الطلب أصبحت: '+status); await renderAdmin();
  };

  window.renderOrders = async function() {
    const local=JSON.parse(sessionStorage.getItem('bz-orders')||'[]');
    const list=document.getElementById('ordersList');
    if(list)list.innerHTML=local.map(o=>'<div class="order"><b>'+esc(o.code)+' — '+esc(o.status)+'</b><div class="muted">'+esc(o.customer)+' • '+esc(o.branch)+'</div><div>'+esc(o.summary)+' — '+o.total+' ج.م</div></div>').join('')||'<p class="muted">لا توجد طلبات من هذا الجهاز.</p>';
  };

  document.getElementById('trackOrderForm')?.addEventListener('submit',async e=>{
    e.preventDefault(); const out=document.getElementById('trackingResult');
    out.innerHTML='<p class="muted">جارٍ البحث عن الطلب…</p>';
    const {data,error}=await db.rpc('track_order_by_code',{p_code:document.getElementById('trackOrderCode').value.trim().toUpperCase()});
    if(error){out.innerHTML='<p class="muted">تعذر البحث. طبّق تحديث قاعدة البيانات ثم حاول مجدداً.</p>';return;}
    const order=Array.isArray(data)?data[0]:data;
    if(!order){out.innerHTML='<p class="muted">لم نعثر على طلب بهذا الرقم.</p>';return;}
    out.innerHTML='<article class="order-card"><div class="order-head"><b>طلب '+esc(order.code)+' — '+esc(order.branch)+'</b><span class="status-chip">'+esc(order.status)+'</span></div><div>'+esc(order.summary)+' • '+Number(order.total).toFixed(0)+' ج.م</div><div class="muted">'+esc(order.order_type)+' • '+new Date(order.created_at).toLocaleString('ar-EG')+'</div></article>';
  });

  const baseRenderAdmin=window.renderAdmin;
  window.renderAdmin=async function(){
    if(typeof baseRenderAdmin==='function')await baseRenderAdmin();
    if(!logged)return; ensureOrderUi();
    const status=document.getElementById('notificationStatus');
    const {data:isAdmin,error:roleError}=await db.rpc('is_bazez_admin');
    if(roleError||isAdmin!==true){if(status)status.textContent='حساب الدخول غير مضاف كمسؤول في Supabase. أضفه إلى public.admin_users لعرض الطلبات وإدارتها.';return;}
    const {data:list,error}=await db.from('orders').select('*').order('created_at',{ascending:false}).limit(100);
    if(error){if(status)status.textContent='تعذر تحميل الطلبات: '+error.message;return;}
    orders=list||[];
    document.getElementById('statOrders').textContent=orders.filter(o=>!['مكتمل','مرفوض'].includes(o.status)).length;
    document.getElementById('adminOrdersList').innerHTML=orders.filter(o=>!['مكتمل','مرفوض'].includes(o.status)).map(o=>orderCard(o,true)).join('')||'<p class="muted">لا توجد طلبات نشطة.</p>';
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

  ensureOrderUi();

  if(logged)subscribeOrderNotifications();
  setInterval(pollForNewOrders,12000);
})();


