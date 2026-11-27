const initialItems=[
  {
    "visible": true,
    "name": "ميكس جبن",
    "id": 1,
    "startPrice": 80,
    "cat": "ميكس كريب",
    "options": [
      {
        "price": 80,
        "label": "عادي"
      }
    ],
    "stock": 30,
    "ingredients": "موتزاريلا + تركي + شيدر + رومي"
  },
  {
    "visible": true,
    "name": "ميكس فراخ",
    "id": 2,
    "startPrice": 120,
    "cat": "ميكس كريب",
    "options": [
      {
        "price": 120,
        "label": "عادي"
      }
    ],
    "stock": 30,
    "ingredients": "استربس + كريسبي + شاورما"
  },
  {
    "visible": true,
    "name": "ميكس لحوم",
    "id": 3,
    "startPrice": 125,
    "cat": "ميكس كريب",
    "options": [
      {
        "price": 125,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "لحمة + سوسيس + كفتة + سجق"
  },
  {
    "visible": true,
    "name": "ميكس مستر كريب",
    "id": 4,
    "startPrice": 125,
    "cat": "ميكس كريب",
    "options": [
      {
        "price": 125,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "زنجر + شيدر بانيه"
  },
  {
    "visible": true,
    "name": "عموجو",
    "id": 5,
    "startPrice": 125,
    "cat": "ميكس كريب",
    "options": [
      {
        "price": 125,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "سوسيس + استربس"
  },
  {
    "visible": true,
    "name": "ميكس الحرامي",
    "id": 6,
    "startPrice": 180,
    "cat": "ميكس كريب",
    "options": [
      {
        "price": 180,
        "label": "عادي"
      }
    ],
    "stock": 20,
    "ingredients": "ميكس فراخ + ميكس لحوم"
  },
  {
    "visible": true,
    "name": "ميكس الشاويش",
    "id": 7,
    "startPrice": 135,
    "cat": "ميكس كريب",
    "options": [
      {
        "price": 135,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "شيش + استربس"
  },
  {
    "visible": true,
    "name": "ميكس كريب بيتزا",
    "id": 8,
    "startPrice": 230,
    "cat": "ميكس كريب",
    "options": [
      {
        "price": 230,
        "label": "عادي"
      }
    ],
    "stock": 20,
    "ingredients": "ميكس فراخ + ميكس لحوم"
  },
  {
    "visible": true,
    "name": "كريب باظظ",
    "id": 9,
    "startPrice": 100,
    "cat": "ميكس كريب",
    "options": [
      {
        "price": 100,
        "label": "السعر يحدد"
      }
    ],
    "stock": 20,
    "ingredients": "ميكس فراخ + ميكس لحوم"
  },
  {
    "visible": true,
    "name": "مستر العيلة",
    "id": 10,
    "startPrice": 110,
    "cat": "ميكس كريب",
    "options": [
      {
        "price": 110,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "سوسيس + بطاطس + كريسبي"
  },
  {
    "visible": true,
    "name": "بانية علي بطاطس",
    "id": 11,
    "startPrice": 75,
    "cat": "كريبات",
    "options": [
      {
        "price": 75,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "كريب بانية مع بطاطس"
  },
  {
    "visible": true,
    "name": "بطاطس",
    "id": 12,
    "startPrice": 55,
    "cat": "كريبات",
    "options": [
      {
        "price": 55,
        "label": "عادي"
      }
    ],
    "stock": 35,
    "ingredients": "كريب بطاطس مقرمشة"
  },
  {
    "visible": true,
    "name": "بانية",
    "id": 13,
    "startPrice": 65,
    "cat": "كريبات",
    "options": [
      {
        "price": 65,
        "label": "عادي"
      }
    ],
    "stock": 30,
    "ingredients": "كريب بانية"
  },
  {
    "visible": true,
    "name": "استربس",
    "id": 14,
    "startPrice": 100,
    "cat": "كريبات",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "كريب استربس"
  },
  {
    "visible": true,
    "name": "كريسبي",
    "id": 15,
    "startPrice": 75,
    "cat": "كريبات",
    "options": [
      {
        "price": 75,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "كريب كريسبي"
  },
  {
    "visible": true,
    "name": "شاورما فراخ",
    "id": 16,
    "startPrice": 100,
    "cat": "كريبات",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "كريب شاورما فراخ"
  },
  {
    "visible": true,
    "name": "شاورما لحمة",
    "id": 17,
    "startPrice": 120,
    "cat": "كريبات",
    "options": [
      {
        "price": 120,
        "label": "عادي"
      }
    ],
    "stock": 20,
    "ingredients": "كريب شاورما لحمة"
  },
  {
    "visible": true,
    "name": "سوسيس",
    "id": 18,
    "startPrice": 80,
    "cat": "كريبات",
    "options": [
      {
        "price": 80,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "كريب سوسيس"
  },
  {
    "visible": true,
    "name": "سجق",
    "id": 19,
    "startPrice": 80,
    "cat": "كريبات",
    "options": [
      {
        "price": 80,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "كريب سجق"
  },
  {
    "visible": true,
    "name": "شيش",
    "id": 20,
    "startPrice": 100,
    "cat": "كريبات",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      }
    ],
    "stock": 22,
    "ingredients": "كريب شيش"
  },
  {
    "visible": true,
    "name": "سوبر كرانشي",
    "id": 21,
    "startPrice": 85,
    "cat": "كريبات",
    "options": [
      {
        "price": 85,
        "label": "عادي"
      },
      {
        "price": 85,
        "label": "عادي"
      }
    ],
    "stock": 22,
    "ingredients": "سلامي + كريسبي"
  },
  {
    "visible": true,
    "name": "فاهيتا فراخ",
    "id": 23,
    "startPrice": 105,
    "cat": "كريبات",
    "options": [
      {
        "price": 105,
        "label": "عادي"
      }
    ],
    "stock": 20,
    "ingredients": "كريب فاهيتا فراخ"
  },
  {
    "visible": true,
    "name": "برجر",
    "id": 24,
    "startPrice": 90,
    "cat": "كريبات",
    "options": [
      {
        "price": 90,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "كريب برجر"
  },
  {
    "visible": true,
    "name": "بانية",
    "id": 25,
    "startPrice": 80,
    "cat": "الوجبات",
    "options": [
      {
        "price": 80,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "أرز بسمتي + تومية + مخلل + بطاطس + صوصات + الحشو"
  },
  {
    "visible": true,
    "name": "استربس",
    "id": 26,
    "startPrice": 100,
    "cat": "الوجبات",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      }
    ],
    "stock": 25,
    "ingredients": "أرز بسمتي + تومية + مخلل + بطاطس + صوصات + الحشو"
  },
  {
    "visible": true,
    "name": "شاورما فراخ",
    "id": 27,
    "startPrice": 105,
    "cat": "الوجبات",
    "options": [
      {
        "price": 105,
        "label": "عادي"
      }
    ],
    "stock": 22,
    "ingredients": "أرز بسمتي + تومية + مخلل + بطاطس + صوصات + الحشو"
  },
  {
    "visible": true,
    "name": "شيش",
    "id": 28,
    "startPrice": 100,
    "cat": "الوجبات",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      }
    ],
    "stock": 22,
    "ingredients": "أرز بسمتي + تومية + مخلل + بطاطس + صوصات + الحشو"
  },
  {
    "visible": true,
    "name": "برجر",
    "id": 29,
    "startPrice": 100,
    "cat": "الوجبات",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      }
    ],
    "stock": 22,
    "ingredients": "أرز بسمتي + تومية + مخلل + بطاطس + صوصات + الحشو"
  },
  {
    "visible": true,
    "name": "شاورما لحمة",
    "id": 30,
    "startPrice": 110,
    "cat": "الوجبات",
    "options": [
      {
        "price": 110,
        "label": "عادي"
      }
    ],
    "stock": 20,
    "ingredients": "أرز بسمتي + تومية + مخلل + بطاطس + صوصات + الحشو"
  },
  {
    "visible": true,
    "name": "كفتة",
    "id": 31,
    "startPrice": 100,
    "cat": "الوجبات",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      }
    ],
    "stock": 20,
    "ingredients": "أرز بسمتي + تومية + مخلل + بطاطس + صوصات + الحشو"
  },
  {
    "visible": true,
    "name": "ميكس فراخ",
    "id": 32,
    "startPrice": 135,
    "cat": "الوجبات",
    "options": [
      {
        "price": 135,
        "label": "عادي"
      }
    ],
    "stock": 18,
    "ingredients": "أرز بسمتي + تومية + مخلل + بطاطس + صوصات + الحشو"
  },
  {
    "visible": true,
    "name": "ميكس لحوم",
    "id": 33,
    "startPrice": 135,
    "cat": "الوجبات",
    "options": [
      {
        "price": 135,
        "label": "عادي"
      }
    ],
    "stock": 18,
    "ingredients": "أرز بسمتي + تومية + مخلل + بطاطس + صوصات + الحشو"
  },
  {
    "visible": true,
    "name": "برجر شيدر",
    "id": 34,
    "startPrice": 100,
    "cat": "برجر",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      },
      {
        "price": 140,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 25,
    "ingredients": "برجر شيدر طازج"
  },
  {
    "visible": true,
    "name": "برجر فراخ",
    "id": 35,
    "startPrice": 100,
    "cat": "برجر",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      },
      {
        "price": 140,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 25,
    "ingredients": "برجر فراخ مقرمش"
  },
  {
    "visible": true,
    "name": "ميكس فاير",
    "id": 36,
    "startPrice": 110,
    "cat": "برجر",
    "options": [
      {
        "price": 110,
        "label": "عادي"
      },
      {
        "price": 145,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 20,
    "ingredients": "ميكس فاير برجر"
  },
  {
    "visible": true,
    "name": "مشروم رانش",
    "id": 37,
    "startPrice": 120,
    "cat": "برجر",
    "options": [
      {
        "price": 120,
        "label": "عادي"
      },
      {
        "price": 160,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 20,
    "ingredients": "مشروم مع صوص رانش"
  },
  {
    "visible": true,
    "name": "برجر باظظ",
    "id": 38,
    "startPrice": 180,
    "cat": "برجر",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      },
      {
        "price": 180,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 15,
    "ingredients": "قطعة فراخ + قطعة لحم + تركي مدخن أو سلامي"
  },
  {
    "visible": true,
    "name": "برجر كوردن بلو",
    "id": 39,
    "startPrice": 120,
    "cat": "برجر",
    "options": [
      {
        "price": 120,
        "label": "عادي"
      },
      {
        "price": 160,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 18,
    "ingredients": "برجر كوردن بلو"
  },
  {
    "visible": true,
    "name": "بطاطس",
    "id": 40,
    "startPrice": 20,
    "cat": "السندوتشات",
    "options": [
      {
        "price": 20,
        "label": "سوري"
      },
      {
        "price": 30,
        "label": "فرنساوي"
      },
      {
        "price": 30,
        "label": "فينو"
      }
    ],
    "stock": 40,
    "ingredients": "ساندوتش بطاطس"
  },
  {
    "visible": true,
    "name": "بانية",
    "id": 41,
    "startPrice": 25,
    "cat": "السندوتشات",
    "options": [
      {
        "price": 25,
        "label": "سوري"
      },
      {
        "price": 40,
        "label": "فرنساوي"
      },
      {
        "price": 40,
        "label": "فينو"
      }
    ],
    "stock": 35,
    "ingredients": "ساندوتش بانية"
  },
  {
    "visible": true,
    "name": "استربس",
    "id": 42,
    "startPrice": 35,
    "cat": "السندوتشات",
    "options": [
      {
        "price": 35,
        "label": "سوري"
      },
      {
        "price": 50,
        "label": "فرنساوي"
      },
      {
        "price": 75,
        "label": "فينو"
      },
      {
        "price": 50,
        "label": "سوري"
      },
      {
        "price": 70,
        "label": "فرنساوي"
      },
      {
        "price": 85,
        "label": "فينو"
      }
    ],
    "stock": 30,
    "ingredients": "ساندوتش استربس"
  },
  {
    "visible": true,
    "name": "شاورما لحمة",
    "id": 44,
    "startPrice": 55,
    "cat": "السندوتشات",
    "options": [
      {
        "price": 55,
        "label": "سوري"
      },
      {
        "price": 80,
        "label": "فرنساوي"
      },
      {
        "price": 100,
        "label": "فينو"
      }
    ],
    "stock": 25,
    "ingredients": "ساندوتش شاورما لحمة"
  },
  {
    "visible": true,
    "name": "شيش",
    "id": 45,
    "startPrice": 50,
    "cat": "السندوتشات",
    "options": [
      {
        "price": 50,
        "label": "سوري"
      },
      {
        "price": 70,
        "label": "فرنساوي"
      },
      {
        "price": 85,
        "label": "فينو"
      }
    ],
    "stock": 25,
    "ingredients": "ساندوتش شيش"
  },
  {
    "visible": true,
    "name": "سوسيس",
    "id": 46,
    "startPrice": 40,
    "cat": "السندوتشات",
    "options": [
      {
        "price": 40,
        "label": "سوري"
      },
      {
        "price": 60,
        "label": "فرنساوي"
      },
      {
        "price": 70,
        "label": "فينو"
      }
    ],
    "stock": 30,
    "ingredients": "ساندوتش سوسيس"
  },
  {
    "visible": true,
    "name": "كفتة",
    "id": 47,
    "startPrice": 35,
    "cat": "السندوتشات",
    "options": [
      {
        "price": 35,
        "label": "سوري"
      },
      {
        "price": 50,
        "label": "فرنساوي"
      },
      {
        "price": 80,
        "label": "فينو"
      }
    ],
    "stock": 25,
    "ingredients": "ساندوتش كفتة"
  },
  {
    "visible": true,
    "name": "فاهيتا",
    "id": 48,
    "startPrice": 55,
    "cat": "السندوتشات",
    "options": [
      {
        "price": 55,
        "label": "سوري"
      },
      {
        "price": 70,
        "label": "فرنساوي"
      },
      {
        "price": 95,
        "label": "فينو"
      }
    ],
    "stock": 25,
    "ingredients": "ساندوتش فاهيتا"
  },
  {
    "visible": true,
    "name": "سجق",
    "id": 49,
    "startPrice": 40,
    "cat": "السندوتشات",
    "options": [
      {
        "price": 40,
        "label": "سوري"
      },
      {
        "price": 70,
        "label": "فرنساوي"
      },
      {
        "price": 80,
        "label": "فينو"
      }
    ],
    "stock": 25,
    "ingredients": "ساندوتش سجق"
  },
  {
    "visible": true,
    "name": "كريب نوتيلا",
    "id": 50,
    "startPrice": 40,
    "cat": "وافل",
    "options": [
      {
        "price": 40,
        "label": "عادي"
      },
      {
        "price": 50,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 30,
    "ingredients": "نوتيلا أصلية"
  },
  {
    "visible": true,
    "name": "كريب هوهوز",
    "id": 51,
    "startPrice": 50,
    "cat": "وافل",
    "options": [
      {
        "price": 50,
        "label": "عادي"
      },
      {
        "price": 60,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 25,
    "ingredients": "هوهوز + شوكولاتة"
  },
  {
    "visible": true,
    "name": "وافل شيكولاتة نوتيلا",
    "id": 52,
    "startPrice": 25,
    "cat": "وافل",
    "options": [
      {
        "price": 25,
        "label": "عادي"
      },
      {
        "price": 35,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 30,
    "ingredients": "وافل نوتيلا"
  },
  {
    "visible": true,
    "name": "وافل شيكولاتة وايت",
    "id": 53,
    "startPrice": 25,
    "cat": "وافل",
    "options": [
      {
        "price": 25,
        "label": "عادي"
      },
      {
        "price": 35,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 30,
    "ingredients": "وافل وايت شوكليت"
  },
  {
    "visible": true,
    "name": "وافل شيكولاتة لوتس",
    "id": 54,
    "startPrice": 30,
    "cat": "وافل",
    "options": [
      {
        "price": 30,
        "label": "عادي"
      },
      {
        "price": 40,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 25,
    "ingredients": "وافل لوتس"
  },
  {
    "visible": true,
    "name": "وافل شيكولاتة بستاشيو",
    "id": 55,
    "startPrice": 40,
    "cat": "وافل",
    "options": [
      {
        "price": 40,
        "label": "عادي"
      },
      {
        "price": 60,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 22,
    "ingredients": "وافل بستاشيو"
  },
  {
    "visible": true,
    "name": "وافل كراميل - فراولة",
    "id": 56,
    "startPrice": 40,
    "cat": "وافل",
    "options": [
      {
        "price": 40,
        "label": "عادي"
      },
      {
        "price": 50,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 25,
    "ingredients": "كراميل وفراولة"
  },
  {
    "visible": true,
    "name": "وافل ميكس",
    "id": 57,
    "startPrice": 30,
    "cat": "وافل",
    "options": [
      {
        "price": 30,
        "label": "عادي"
      },
      {
        "price": 40,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 25,
    "ingredients": "تشكيلة صوصات حلوة"
  },
  {
    "visible": true,
    "name": "وافل فواكه باظظ",
    "id": 58,
    "startPrice": 60,
    "cat": "وافل",
    "options": [
      {
        "price": 100,
        "label": "عادي"
      },
      {
        "price": 60,
        "label": "دبل"
      },
      {
        "price": 100,
        "label": "تربل"
      }
    ],
    "stock": 20,
    "ingredients": "فواكه موسمية + صوصات"
  },
  {
    "visible": true,
    "name": "مارجريتا",
    "id": 59,
    "startPrice": 70,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 70,
        "label": "S"
      },
      {
        "price": 90,
        "label": "M"
      },
      {
        "price": 130,
        "label": "L"
      }
    ],
    "stock": 25,
    "ingredients": "صلصة بيتزا إيطالي + موتزاريلا"
  },
  {
    "visible": true,
    "name": "سجق إسكندراني",
    "id": 60,
    "startPrice": 85,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 85,
        "label": "S"
      },
      {
        "price": 110,
        "label": "M"
      },
      {
        "price": 170,
        "label": "L"
      }
    ],
    "stock": 22,
    "ingredients": "سجق إسكندراني متبل"
  },
  {
    "visible": true,
    "name": "سجق بلدي",
    "id": 61,
    "startPrice": 100,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 145,
        "label": "M"
      },
      {
        "price": 195,
        "label": "L"
      }
    ],
    "stock": 22,
    "ingredients": "سجق بلدي طازج"
  },
  {
    "visible": true,
    "name": "لحمة مفرومة",
    "id": 62,
    "startPrice": 100,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 145,
        "label": "M"
      },
      {
        "price": 195,
        "label": "L"
      },
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 145,
        "label": "M"
      },
      {
        "price": 210,
        "label": "L"
      }
    ],
    "stock": 20,
    "ingredients": "لحمة مفرومة معصجة"
  },
  {
    "visible": true,
    "name": "تونة",
    "id": 64,
    "startPrice": 115,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 115,
        "label": "S"
      },
      {
        "price": 160,
        "label": "M"
      },
      {
        "price": 220,
        "label": "L"
      }
    ],
    "stock": 20,
    "ingredients": "تونة + زيتون + فلفل"
  },
  {
    "visible": true,
    "name": "بسطرمة",
    "id": 65,
    "startPrice": 115,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 115,
        "label": "S"
      },
      {
        "price": 150,
        "label": "M"
      },
      {
        "price": 200,
        "label": "L"
      }
    ],
    "stock": 20,
    "ingredients": "بسطرمة أصلية"
  },
  {
    "visible": true,
    "name": "جمبري",
    "id": 66,
    "startPrice": 220,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 220,
        "label": "M"
      },
      {
        "price": 300,
        "label": "L"
      }
    ],
    "stock": 15,
    "ingredients": "جمبري طازج + جبن"
  },
  {
    "visible": true,
    "name": "سوبر سوبريم",
    "id": 67,
    "startPrice": 125,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 125,
        "label": "S"
      },
      {
        "price": 170,
        "label": "M"
      },
      {
        "price": 220,
        "label": "L"
      }
    ],
    "stock": 18,
    "ingredients": "بسطرمة + سلامي + مشروم"
  },
  {
    "visible": true,
    "name": "تشيكن رانش",
    "id": 68,
    "startPrice": 110,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 110,
        "label": "S"
      },
      {
        "price": 155,
        "label": "M"
      },
      {
        "price": 220,
        "label": "L"
      }
    ],
    "stock": 20,
    "ingredients": "فراخ + صوص رانش"
  },
  {
    "visible": true,
    "name": "تشيكن باربيكيو",
    "id": 69,
    "startPrice": 110,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 110,
        "label": "S"
      },
      {
        "price": 155,
        "label": "M"
      },
      {
        "price": 220,
        "label": "L"
      }
    ],
    "stock": 20,
    "ingredients": "فراخ + صوص باربيكيو"
  },
  {
    "visible": true,
    "name": "سوسيس",
    "id": 70,
    "startPrice": 95,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 95,
        "label": "S"
      },
      {
        "price": 140,
        "label": "M"
      },
      {
        "price": 190,
        "label": "L"
      }
    ],
    "stock": 22,
    "ingredients": "سوسيس مدخن"
  },
  {
    "visible": true,
    "name": "سلامي",
    "id": 71,
    "startPrice": 100,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 150,
        "label": "M"
      },
      {
        "price": 200,
        "label": "L"
      }
    ],
    "stock": 20,
    "ingredients": "سلامي إيطالي"
  },
  {
    "visible": true,
    "name": "مشروم",
    "id": 72,
    "startPrice": 100,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 145,
        "label": "M"
      },
      {
        "price": 190,
        "label": "L"
      }
    ],
    "stock": 22,
    "ingredients": "مشروم طازج"
  },
  {
    "visible": true,
    "name": "استربس",
    "id": 73,
    "startPrice": 110,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 110,
        "label": "S"
      },
      {
        "price": 155,
        "label": "M"
      },
      {
        "price": 220,
        "label": "L"
      }
    ],
    "stock": 20,
    "ingredients": "استربس مقرمش"
  },
  {
    "visible": true,
    "name": "ميكس جبن",
    "id": 74,
    "startPrice": 100,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 150,
        "label": "M"
      },
      {
        "price": 210,
        "label": "L"
      }
    ],
    "stock": 25,
    "ingredients": "رومي + موتزاريلا + شيدر + كيري"
  },
  {
    "visible": true,
    "name": "ميكس لحوم",
    "id": 75,
    "startPrice": 125,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 125,
        "label": "S"
      },
      {
        "price": 170,
        "label": "M"
      },
      {
        "price": 230,
        "label": "L"
      }
    ],
    "stock": 18,
    "ingredients": "سجق + لحمة + بسطرمة"
  },
  {
    "visible": true,
    "name": "ميكس فراخ",
    "id": 76,
    "startPrice": 125,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 125,
        "label": "S"
      },
      {
        "price": 170,
        "label": "M"
      },
      {
        "price": 230,
        "label": "L"
      }
    ],
    "stock": 18,
    "ingredients": "استربس + بانية + شاورما"
  },
  {
    "visible": true,
    "name": "بيتزا باظظ",
    "id": 77,
    "startPrice": 200,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 200,
        "label": "M"
      },
      {
        "price": 280,
        "label": "L"
      }
    ],
    "stock": 15,
    "ingredients": "بسطرمة + تركي + ميكس جبن"
  },
  {
    "visible": true,
    "name": "بيتزا ميكس الحياة",
    "id": 78,
    "startPrice": 200,
    "cat": "بيتزا إيطالي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 200,
        "label": "M"
      },
      {
        "price": 280,
        "label": "L"
      }
    ],
    "stock": 15,
    "ingredients": "استربس + ميكس جبن + شيدر"
  },
  {
    "visible": true,
    "name": "جبنة رومي",
    "id": 79,
    "startPrice": 75,
    "cat": "بيتزا شرقي",
    "options": [
      {
        "price": 75,
        "label": "S"
      },
      {
        "price": 115,
        "label": "M"
      },
      {
        "price": 145,
        "label": "L"
      }
    ],
    "stock": 25,
    "ingredients": "عجينة شرقي + جبنة رومي"
  },
  {
    "visible": true,
    "name": "سجق إسكندراني",
    "id": 80,
    "startPrice": 70,
    "cat": "بيتزا شرقي",
    "options": [
      {
        "price": 70,
        "label": "S"
      },
      {
        "price": 100,
        "label": "M"
      },
      {
        "price": 150,
        "label": "L"
      }
    ],
    "stock": 22,
    "ingredients": "سجق إسكندراني شرقي"
  },
  {
    "visible": true,
    "name": "سجق بلدي",
    "id": 81,
    "startPrice": 100,
    "cat": "بيتزا شرقي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 145,
        "label": "M"
      },
      {
        "price": 195,
        "label": "L"
      }
    ],
    "stock": 22,
    "ingredients": "سجق بلدي شرقي"
  },
  {
    "visible": true,
    "name": "لحمة مفرومة",
    "id": 82,
    "startPrice": 90,
    "cat": "بيتزا شرقي",
    "options": [
      {
        "price": 90,
        "label": "S"
      },
      {
        "price": 150,
        "label": "M"
      },
      {
        "price": 210,
        "label": "L"
      },
      {
        "price": 105,
        "label": "S"
      },
      {
        "price": 150,
        "label": "M"
      },
      {
        "price": 215,
        "label": "L"
      }
    ],
    "stock": 20,
    "ingredients": "لحمة مفرومة شرقي"
  },
  {
    "visible": true,
    "name": "تونة",
    "id": 84,
    "startPrice": 100,
    "cat": "بيتزا شرقي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 160,
        "label": "M"
      },
      {
        "price": 220,
        "label": "L"
      }
    ],
    "stock": 20,
    "ingredients": "تونة شرقي"
  },
  {
    "visible": true,
    "name": "بسطرمة",
    "id": 85,
    "startPrice": 100,
    "cat": "بيتزا شرقي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 155,
        "label": "M"
      },
      {
        "price": 220,
        "label": "L"
      }
    ],
    "stock": 20,
    "ingredients": "بسطرمة شرقي"
  },
  {
    "visible": true,
    "name": "مشروم",
    "id": 86,
    "startPrice": 75,
    "cat": "بيتزا شرقي",
    "options": [
      {
        "price": 75,
        "label": "S"
      },
      {
        "price": 115,
        "label": "M"
      },
      {
        "price": 145,
        "label": "L"
      }
    ],
    "stock": 22,
    "ingredients": "مشروم شرقي"
  },
  {
    "visible": true,
    "name": "سوسيس",
    "id": 87,
    "startPrice": 90,
    "cat": "بيتزا شرقي",
    "options": [
      {
        "price": 90,
        "label": "S"
      },
      {
        "price": 145,
        "label": "M"
      },
      {
        "price": 185,
        "label": "L"
      }
    ],
    "stock": 22,
    "ingredients": "سوسيس شرقي"
  },
  {
    "visible": true,
    "name": "ميكس جبن",
    "id": 88,
    "startPrice": 100,
    "cat": "بيتزا شرقي",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 155,
        "label": "M"
      },
      {
        "price": 210,
        "label": "L"
      }
    ],
    "stock": 25,
    "ingredients": "تشكيلة أجبان شرقي"
  },
  {
    "visible": true,
    "name": "ميكس لحوم",
    "id": 89,
    "startPrice": 120,
    "cat": "بيتزا شرقي",
    "options": [
      {
        "price": 120,
        "label": "S"
      },
      {
        "price": 165,
        "label": "M"
      },
      {
        "price": 230,
        "label": "L"
      }
    ],
    "stock": 18,
    "ingredients": "تشكيلة لحوم شرقي"
  },
  {
    "visible": true,
    "name": "فطيرة موتزاريلا",
    "id": 90,
    "startPrice": 130,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 130,
        "label": "وسط"
      },
      {
        "price": 190,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 22,
    "ingredients": "جبنة موتزاريلا طازجة"
  },
  {
    "visible": true,
    "name": "فطيرة سجق إسكندراني",
    "id": 91,
    "startPrice": 120,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 120,
        "label": "وسط"
      },
      {
        "price": 175,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "سجق إسكندراني"
  },
  {
    "visible": true,
    "name": "فطيرة سجق بلدي",
    "id": 92,
    "startPrice": 150,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 150,
        "label": "وسط"
      },
      {
        "price": 210,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "سجق بلدي"
  },
  {
    "visible": true,
    "name": "فطيرة لحمة",
    "id": 93,
    "startPrice": 150,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 150,
        "label": "وسط"
      },
      {
        "price": 210,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "لحمة مفرومة"
  },
  {
    "visible": true,
    "name": "فطيرة فراخ",
    "id": 94,
    "startPrice": 150,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 150,
        "label": "وسط"
      },
      {
        "price": 220,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "فراخ متبلة"
  },
  {
    "visible": true,
    "name": "فطيرة استربس",
    "id": 95,
    "startPrice": 150,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 150,
        "label": "وسط"
      },
      {
        "price": 220,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "قطع استربس"
  },
  {
    "visible": true,
    "name": "فطيرة سوسيس",
    "id": 96,
    "startPrice": 140,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 140,
        "label": "وسط"
      },
      {
        "price": 200,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "سوسيس"
  },
  {
    "visible": true,
    "name": "فطيرة تونة",
    "id": 97,
    "startPrice": 170,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 170,
        "label": "وسط"
      },
      {
        "price": 235,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 18,
    "ingredients": "تونة"
  },
  {
    "visible": true,
    "name": "فطيرة سلامي",
    "id": 98,
    "startPrice": 150,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 150,
        "label": "وسط"
      },
      {
        "price": 210,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 18,
    "ingredients": "سلامي"
  },
  {
    "visible": true,
    "name": "فطيرة جمبري",
    "id": 99,
    "startPrice": 260,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 260,
        "label": "وسط"
      },
      {
        "price": 370,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 14,
    "ingredients": "جمبري"
  },
  {
    "visible": true,
    "name": "فطيرة بسطرمة",
    "id": 100,
    "startPrice": 165,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 165,
        "label": "وسط"
      },
      {
        "price": 230,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 18,
    "ingredients": "بسطرمة"
  },
  {
    "visible": true,
    "name": "فطيرة ميكس جبن",
    "id": 101,
    "startPrice": 160,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 160,
        "label": "وسط"
      },
      {
        "price": 220,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 22,
    "ingredients": "ميكس أجبان"
  },
  {
    "visible": true,
    "name": "فطيرة ميكس لحوم",
    "id": 102,
    "startPrice": 175,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 175,
        "label": "وسط"
      },
      {
        "price": 250,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 18,
    "ingredients": "ميكس لحوم"
  },
  {
    "visible": true,
    "name": "فطيرة ميكس فراخ",
    "id": 103,
    "startPrice": 165,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 165,
        "label": "وسط"
      },
      {
        "price": 240,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      },
      {
        "price": 170,
        "label": "وسط"
      },
      {
        "price": 250,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 18,
    "ingredients": "ميكس فراخ"
  },
  {
    "visible": true,
    "name": "فطيرة كيري بسطرمة",
    "id": 105,
    "startPrice": 165,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 165,
        "label": "وسط"
      },
      {
        "price": 265,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 18,
    "ingredients": "كيري + بسطرمة"
  },
  {
    "visible": true,
    "name": "فطيرة كيري سجق بسطرمة",
    "id": 106,
    "startPrice": 200,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 200,
        "label": "وسط"
      },
      {
        "price": 290,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 16,
    "ingredients": "كيري + سجق + بسطرمة"
  },
  {
    "visible": true,
    "name": "فطيرة باظظ",
    "id": 107,
    "startPrice": 215,
    "cat": "فطير حادق",
    "options": [
      {
        "price": 215,
        "label": "وسط"
      },
      {
        "price": 300,
        "label": "كبير"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 16,
    "ingredients": "بسطرمة + تركي + ميكس جبن"
  },
  {
    "visible": true,
    "name": "بغاشة",
    "id": 108,
    "startPrice": 35,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 35,
        "label": "S"
      },
      {
        "price": 65,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 25,
    "ingredients": "فطير حلو بغاشة"
  },
  {
    "visible": true,
    "name": "كاستر",
    "id": 109,
    "startPrice": 50,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 50,
        "label": "S"
      },
      {
        "price": 90,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 25,
    "ingredients": "فطير كاستر"
  },
  {
    "visible": true,
    "name": "كنافة وبسبوسة",
    "id": 110,
    "startPrice": 80,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 80,
        "label": "S"
      },
      {
        "price": 110,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 22,
    "ingredients": "كنافة وبسبوسة"
  },
  {
    "visible": true,
    "name": "جوزية",
    "id": 111,
    "startPrice": 60,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 60,
        "label": "S"
      },
      {
        "price": 110,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 22,
    "ingredients": "جوزية حلوة"
  },
  {
    "visible": true,
    "name": "إسكندراني حلو",
    "id": 112,
    "startPrice": 90,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 90,
        "label": "S"
      },
      {
        "price": 170,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "فطير إسكندراني حلو"
  },
  {
    "visible": true,
    "name": "شيكولاتة",
    "id": 113,
    "startPrice": 100,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 175,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 22,
    "ingredients": "شيكولاتة حلوة"
  },
  {
    "visible": true,
    "name": "نوتيلا",
    "id": 114,
    "startPrice": 125,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 125,
        "label": "S"
      },
      {
        "price": 190,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 22,
    "ingredients": "نوتيلا حلوة"
  },
  {
    "visible": true,
    "name": "لوتس",
    "id": 115,
    "startPrice": 115,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 115,
        "label": "S"
      },
      {
        "price": 190,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "لوتس حلوة"
  },
  {
    "visible": true,
    "name": "دبي",
    "id": 116,
    "startPrice": 175,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 175,
        "label": "S"
      },
      {
        "price": 250,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 16,
    "ingredients": "فطير دبي"
  },
  {
    "visible": true,
    "name": "مشلتت",
    "id": 117,
    "startPrice": 130,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 130,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "فطير مشلتت"
  },
  {
    "visible": true,
    "name": "باظظ حلو",
    "id": 118,
    "startPrice": 250,
    "cat": "الفطير الحلو",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 250,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 15,
    "ingredients": "أربع أنواع شيكولاتة + فواكة"
  },
  {
    "visible": true,
    "name": "بطاطس طاسة",
    "id": 119,
    "startPrice": 55,
    "cat": "الطاسات",
    "options": [
      {
        "price": 55,
        "label": "ميكس جبن"
      }
    ],
    "stock": 25,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "بانية طاسة",
    "id": 120,
    "startPrice": 65,
    "cat": "الطاسات",
    "options": [
      {
        "price": 65,
        "label": "ميكس جبن"
      }
    ],
    "stock": 25,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "استربس طاسة",
    "id": 121,
    "startPrice": 85,
    "cat": "الطاسات",
    "options": [
      {
        "price": 85,
        "label": "ميكس جبن"
      }
    ],
    "stock": 22,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "سلامي طاسة",
    "id": 122,
    "startPrice": 65,
    "cat": "الطاسات",
    "options": [
      {
        "price": 65,
        "label": "ميكس جبن"
      }
    ],
    "stock": 20,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "رومي مدخن طاسة",
    "id": 123,
    "startPrice": 70,
    "cat": "الطاسات",
    "options": [
      {
        "price": 70,
        "label": "ميكس جبن"
      }
    ],
    "stock": 20,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "كفتة طاسة",
    "id": 124,
    "startPrice": 85,
    "cat": "الطاسات",
    "options": [
      {
        "price": 85,
        "label": "ميكس جبن"
      },
      {
        "price": 85,
        "label": "ميكس جبن"
      }
    ],
    "stock": 20,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "شاورما فراخ طاسة",
    "id": 126,
    "startPrice": 90,
    "cat": "الطاسات",
    "options": [
      {
        "price": 90,
        "label": "ميكس جبن"
      }
    ],
    "stock": 20,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "شاورما لحمة طاسة",
    "id": 127,
    "startPrice": 100,
    "cat": "الطاسات",
    "options": [
      {
        "price": 100,
        "label": "ميكس جبن"
      }
    ],
    "stock": 18,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "سجق بلدي طاسة",
    "id": 128,
    "startPrice": 80,
    "cat": "الطاسات",
    "options": [
      {
        "price": 80,
        "label": "ميكس جبن"
      }
    ],
    "stock": 20,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "ميكس فراخ طاسة",
    "id": 129,
    "startPrice": 115,
    "cat": "الطاسات",
    "options": [
      {
        "price": 115,
        "label": "ميكس جبن"
      }
    ],
    "stock": 18,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "ميكس لحوم طاسة",
    "id": 130,
    "startPrice": 120,
    "cat": "الطاسات",
    "options": [
      {
        "price": 120,
        "label": "ميكس جبن"
      }
    ],
    "stock": 18,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "بسطرمة طاسة",
    "id": 131,
    "startPrice": 110,
    "cat": "الطاسات",
    "options": [
      {
        "price": 110,
        "label": "ميكس جبن"
      }
    ],
    "stock": 18,
    "ingredients": "ميكس جبن"
  },
  {
    "visible": true,
    "name": "مكرونة خضروات",
    "id": 132,
    "startPrice": 70,
    "cat": "مكرونات",
    "options": [
      {
        "price": 70,
        "label": "S"
      },
      {
        "price": 100,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 25,
    "ingredients": "مكرونة خضروات طازجة"
  },
  {
    "visible": true,
    "name": "مشروم",
    "id": 133,
    "startPrice": 85,
    "cat": "مكرونات",
    "options": [
      {
        "price": 85,
        "label": "S"
      },
      {
        "price": 110,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 22,
    "ingredients": "مكرونة مشروم"
  },
  {
    "visible": true,
    "name": "نجرسكو",
    "id": 134,
    "startPrice": 100,
    "cat": "مكرونات",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 130,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 22,
    "ingredients": "مكرونة نجرسكو"
  },
  {
    "visible": true,
    "name": "سجق بلدي",
    "id": 135,
    "startPrice": 90,
    "cat": "مكرونات",
    "options": [
      {
        "price": 90,
        "label": "S"
      },
      {
        "price": 120,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "مكرونة سجق بلدي"
  },
  {
    "visible": true,
    "name": "سوسيس",
    "id": 136,
    "startPrice": 90,
    "cat": "مكرونات",
    "options": [
      {
        "price": 90,
        "label": "S"
      },
      {
        "price": 115,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "مكرونة سوسيس"
  },
  {
    "visible": true,
    "name": "جمبري",
    "id": 137,
    "startPrice": 230,
    "cat": "مكرونات",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 230,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 14,
    "ingredients": "مكرونة جمبري"
  },
  {
    "visible": true,
    "name": "استربس",
    "id": 138,
    "startPrice": 105,
    "cat": "مكرونات",
    "options": [
      {
        "price": 105,
        "label": "S"
      },
      {
        "price": 135,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "مكرونة استربس"
  },
  {
    "visible": true,
    "name": "كريسبي",
    "id": 139,
    "startPrice": 90,
    "cat": "مكرونات",
    "options": [
      {
        "price": 90,
        "label": "S"
      },
      {
        "price": 115,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "مكرونة كريسبي"
  },
  {
    "visible": true,
    "name": "تركي",
    "id": 140,
    "startPrice": 100,
    "cat": "مكرونات",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 130,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 20,
    "ingredients": "مكرونة تركي"
  },
  {
    "visible": true,
    "name": "صاروخ استربس",
    "id": 141,
    "startPrice": 120,
    "cat": "الصاروخ",
    "options": [
      {
        "price": 120,
        "label": "صاروخ"
      }
    ],
    "stock": 20,
    "ingredients": "صاروخ محشو استربس"
  },
  {
    "visible": true,
    "name": "صاروخ شاورما فراخ",
    "id": 142,
    "startPrice": 120,
    "cat": "الصاروخ",
    "options": [
      {
        "price": 120,
        "label": "صاروخ"
      }
    ],
    "stock": 20,
    "ingredients": "صاروخ محشو شاورما فراخ"
  },
  {
    "visible": true,
    "name": "صاروخ شاورما لحمة",
    "id": 143,
    "startPrice": 130,
    "cat": "الصاروخ",
    "options": [
      {
        "price": 130,
        "label": "صاروخ"
      }
    ],
    "stock": 18,
    "ingredients": "صاروخ محشو شاورما لحمة"
  },
  {
    "visible": true,
    "name": "صاروخ ميكس جبن",
    "id": 144,
    "startPrice": 110,
    "cat": "الصاروخ",
    "options": [
      {
        "price": 110,
        "label": "صاروخ"
      }
    ],
    "stock": 22,
    "ingredients": "صاروخ ميكس جبن"
  },
  {
    "visible": true,
    "name": "صاروخ كيري سجق",
    "id": 145,
    "startPrice": 130,
    "cat": "الصاروخ",
    "options": [
      {
        "price": 130,
        "label": "صاروخ"
      }
    ],
    "stock": 18,
    "ingredients": "صاروخ كيري سجق"
  },
  {
    "visible": true,
    "name": "صاروخ كيري بسطرمة",
    "id": 146,
    "startPrice": 130,
    "cat": "الصاروخ",
    "options": [
      {
        "price": 130,
        "label": "صاروخ"
      }
    ],
    "stock": 18,
    "ingredients": "صاروخ كيري بسطرمة"
  },
  {
    "visible": true,
    "name": "صاروخ باظظ",
    "id": 147,
    "startPrice": 160,
    "cat": "الصاروخ",
    "options": [
      {
        "price": 160,
        "label": "صاروخ"
      }
    ],
    "stock": 16,
    "ingredients": "صاروخ باظظ الخاص"
  },
  {
    "visible": true,
    "name": "جبنة موتزاريلا",
    "id": 148,
    "startPrice": 25,
    "cat": "الإضافات",
    "options": [
      {
        "price": 25,
        "label": "S"
      },
      {
        "price": 135,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 40,
    "ingredients": "إضافة جبنة موتزاريلا"
  },
  {
    "visible": true,
    "name": "شيدر",
    "id": 149,
    "startPrice": 10,
    "cat": "الإضافات",
    "options": [
      {
        "price": 10,
        "label": "S"
      },
      {
        "price": 20,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 40,
    "ingredients": "إضافة شيدر"
  },
  {
    "visible": true,
    "name": "كيري",
    "id": 150,
    "startPrice": 10,
    "cat": "الإضافات",
    "options": [
      {
        "price": 10,
        "label": "S"
      },
      {
        "price": 20,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 40,
    "ingredients": "إضافة كيري"
  },
  {
    "visible": true,
    "name": "رومي",
    "id": 151,
    "startPrice": 15,
    "cat": "الإضافات",
    "options": [
      {
        "price": 15,
        "label": "S"
      },
      {
        "price": 30,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 40,
    "ingredients": "إضافة رومي"
  },
  {
    "visible": true,
    "name": "ميكس جبن",
    "id": 152,
    "startPrice": 35,
    "cat": "الإضافات",
    "options": [
      {
        "price": 35,
        "label": "S"
      },
      {
        "price": 45,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 35,
    "ingredients": "إضافة ميكس جبن"
  },
  {
    "visible": true,
    "name": "لحوم",
    "id": 153,
    "startPrice": 40,
    "cat": "الإضافات",
    "options": [
      {
        "price": 40,
        "label": "S"
      },
      {
        "price": 50,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 30,
    "ingredients": "إضافة لحوم"
  },
  {
    "visible": true,
    "name": "فراخ",
    "id": 154,
    "startPrice": 40,
    "cat": "الإضافات",
    "options": [
      {
        "price": 40,
        "label": "S"
      },
      {
        "price": 50,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 30,
    "ingredients": "إضافة فراخ"
  },
  {
    "visible": true,
    "name": "بانية",
    "id": 155,
    "startPrice": 15,
    "cat": "الإضافات",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 15,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 30,
    "ingredients": "إضافة بانية"
  },
  {
    "visible": true,
    "name": "بطاطس",
    "id": 156,
    "startPrice": 10,
    "cat": "الإضافات",
    "options": [
      {
        "price": 10,
        "label": "S"
      },
      {
        "price": 15,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 45,
    "ingredients": "إضافة بطاطس"
  },
  {
    "visible": true,
    "name": "تركي",
    "id": 157,
    "startPrice": 20,
    "cat": "الإضافات",
    "options": [
      {
        "price": 100,
        "label": "S"
      },
      {
        "price": 20,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 30,
    "ingredients": "إضافة تركي"
  },
  {
    "visible": true,
    "name": "حشو أطراف",
    "id": 158,
    "startPrice": 40,
    "cat": "الإضافات",
    "options": [
      {
        "price": 40,
        "label": "S"
      },
      {
        "price": 60,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 30,
    "ingredients": "حشو أطراف بيتزا/فطير"
  },
  {
    "visible": true,
    "name": "باكت بطاطس",
    "id": 159,
    "startPrice": 30,
    "cat": "الإضافات",
    "options": [
      {
        "price": 30,
        "label": "S"
      },
      {
        "price": 40,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 35,
    "ingredients": "باكت بطاطس مقرمشة"
  },
  {
    "visible": true,
    "name": "بطاطس شيدر",
    "id": 160,
    "startPrice": 40,
    "cat": "الإضافات",
    "options": [
      {
        "price": 40,
        "label": "S"
      },
      {
        "price": 50,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 35,
    "ingredients": "بطاطس بصوص الشيدر"
  },
  {
    "visible": true,
    "name": "بطاطس شيدر استربس",
    "id": 161,
    "startPrice": 70,
    "cat": "الإضافات",
    "options": [
      {
        "price": 70,
        "label": "S"
      },
      {
        "price": 80,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 25,
    "ingredients": "بطاطس شيدر + استربس"
  },
  {
    "visible": true,
    "name": "بطاطس هالبينو",
    "id": 162,
    "startPrice": 60,
    "cat": "الإضافات",
    "options": [
      {
        "price": 60,
        "label": "S"
      },
      {
        "price": 70,
        "label": "L"
      },
      {
        "price": 100,
        "label": "عائلي"
      }
    ],
    "stock": 25,
    "ingredients": "بطاطس مع هالبينو"
  }
]

;
const SUPABASE_URL='https://ukelbgurxmxooawzmxyc.supabase.co';
const SUPABASE_KEY='sb_publishable_WysMmxhUPT1YkBecFtRBIw_Edha-4Ik';
const db=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
let selectedAdminItemId=null;let items=[],cart=[],orders=[],cfg={wa:'201105712868',low:10,b1:'الفرنواني',p1:'01105712868',b2:'كوبري بيجام',p2:'01042011051'},category='الكل',logged=false,orderChannel=null;
const $=id=>document.getElementById(id);function normalizeWhatsapp(v){let n=String(v||'').replace(/\D/g,'');if(n.startsWith('00'))n=n.slice(2);if(n.startsWith('0'))n='20'+n.slice(1);else if(n.length===10&&n.startsWith('1'))n='20'+n;return n}function toast(s){$('toast').textContent=s;$('toast').classList.add('show');setTimeout(()=>$('toast').classList.remove('show'),1800)}function esc(s){let d=document.createElement('div');d.textContent=String(s??'');return d.innerHTML}
function fromRow(r){return enrichMenuItem({id:r.id,cat:r.category,name:r.name,startPrice:r.start_price,ingredients:r.ingredients,imageUrl:r.image_url||"",imageVisible:r.image_visible!==false,stock:r.stock,visible:r.visible,options:r.options||[]})}function toRow(x){return{id:x.id,category:x.cat,name:x.name,start_price:x.startPrice,ingredients:x.ingredients||'',stock:x.stock,visible:x.visible!==false,options:x.options||[]}}
async function loadItems(){let{data,error}=await db.from('menu_items').select('*').order('id');if(error){toast('تعذر تحميل المنيو: شغّل ملف إعداد قاعدة البيانات');console.error(error);items=completeMenu(initialItems.map(enrichMenuItem))}else items=completeMenu((data||[]).map(fromRow));categories();renderMenu()}
async function loadSettings(){let{data}=await db.from('shop_settings').select('data').eq('id',1).maybeSingle();if(data?.data)cfg={...cfg,...data.data};if(['الفرزواني','الفرنوائي'].includes(String(cfg.b1||'').trim()))cfg.b1='الفرنواني';$('branch').innerHTML=`<option>${esc(cfg.b1)}</option><option>${esc(cfg.b2)}</option>`}
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{document.querySelectorAll('main section').forEach(s=>s.classList.add('hidden'));$(b.dataset.tab).classList.remove('hidden');document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x===b));if(b.dataset.tab==='orders')renderOrders();if(b.dataset.tab==='admin')renderAdmin()});
function categories(){let cs=['الكل',...new Set(items.map(x=>x.cat))];$('categories').innerHTML=cs.map(c=>`<button class="pill ${c===category?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');document.querySelectorAll('[data-cat]').forEach(b=>b.onclick=()=>{category=b.dataset.cat;categories();renderMenu()})}
function menuDescription(x){return x.ingredients||''}
function escAttr(v){return esc(v).replace(/"/g,"&quot;").replace(/'/g,"&#39;")}
function menuImageHtml(x){if(x.imageVisible===false)return "";if(x.imageUrl)return `<div class="product-photo"><img src="${escAttr(x.imageUrl)}" alt="${escAttr(x.name)}" loading="lazy"></div>`;return '<div class="product-photo empty" aria-label="صورة الصنف غير مضافة">🍽️</div>'}
async function resizeMenuPhoto(file){if(typeof createImageBitmap!=="function")throw new Error("صيغة الصورة غير مدعومة");const bitmap=await createImageBitmap(file),canvas=document.createElement("canvas"),size=1000;canvas.width=size;canvas.height=size;const ctx=canvas.getContext("2d");ctx.fillStyle="#fff";ctx.fillRect(0,0,size,size);const scale=Math.min(size/bitmap.width,size/bitmap.height),w=Math.round(bitmap.width*scale),h=Math.round(bitmap.height*scale);ctx.drawImage(bitmap,Math.round((size-w)/2),Math.round((size-h)/2),w,h);bitmap.close?.();const toBlob=q=>new Promise(resolve=>canvas.toBlob(resolve,"image/webp",q));let blob=await toBlob(.86);if(blob&&blob.size>3900000)blob=await toBlob(.7);if(!blob||blob.size>4194304)throw new Error("حجم الصورة بعد التجهيز أكبر من الحد المسموح");return blob}
window.uploadMenuImage=async function(id,input){const file=input.files?.[0];if(!file)return;if(!file.type.startsWith("image/")){toast("اختار ملف صورة");input.value="";return}if(file.size>15*1024*1024){toast("الصورة كبيرة؛ اختار صورة أصغر من 15 ميجا");input.value="";return}try{const blob=await resizeMenuPhoto(file),path=`${id}/${crypto.randomUUID()}.webp`,{error:uploadError}=await db.storage.from("bazez-menu-images").upload(path,blob,{contentType:"image/webp",cacheControl:"31536000",upsert:false});if(uploadError){console.error(uploadError);toast("تعذر رفع الصورة. تأكد من إعداد مساحة الصور في Supabase.");return}const{data}=db.storage.from("bazez-menu-images").getPublicUrl(path),{error:updateError}=await db.from("menu_items").update({image_url:data.publicUrl,image_visible:true}).eq("id",id);if(updateError){console.error(updateError);toast("الصورة اترفعت لكن لم تتربط بالصنف؛ طبّق إعداد الصور في Supabase.");return}const item=items.find(x=>x.id===id);if(item){item.imageUrl=data.publicUrl;item.imageVisible=true}renderMenu();await renderAdmin();toast("تم تحديث صورة الصنف")}catch(error){console.error(error);toast(error.message||"تعذر تجهيز الصورة؛ جرّب JPG أو PNG أو WebP")}finally{input.value=""}}
window.toggleMenuImage=async function(id){const item=items.find(x=>x.id===id);if(!item)return;const next=item.imageVisible===false,{error}=await db.from("menu_items").update({image_visible:next}).eq("id",id);if(error){console.error(error);toast("تعذر حفظ حالة الصورة. طبّق إعداد الصور في Supabase أولاً.");return}item.imageVisible=next;renderMenu();await renderAdmin()}
function renderMenu(){let q=$('search').value.trim().toLowerCase(),list=items.filter(x=>(category==='الكل'||x.cat===category)&&(!q||`${x.name} ${x.cat}`.toLowerCase().includes(q)));$('catTitle').textContent=category;$('catCount').textContent=`${list.length} صنف`;$('menuList').innerHTML=list.map(x=>`<article class="card product-card${x.imageVisible===false?' no-photo':''}">${menuImageHtml(x)}<div class="product-copy"><h3>${esc(x.name)}</h3>${menuDescription(x)?`<div class="muted">${esc(menuDescription(x))}</div>`:""}<div class="options">${(x.options||[]).slice(0,3).map(o=>`<button class="option" ${x.stock<=0||o.price==null?'disabled':''} onclick="addCart(${x.id},'${esc(o.label)}')">${esc(o.label)}${o.priceVisible===false?'':` · ${o.price==null?'السعر يحدد':o.price+' ج.م'}`}</button>`).join('')}</div></div></article>`).join('')||'<p>لا توجد أصناف مطابقة.</p>';const banners={'الكل':'images/promo-09.jpg','ميكس كريب':'images/category-mix-crepe.jpg','وافل':'images/category-waffle.jpg','الوجبات':'images/category-meals.jpg','السندوتشات':'images/category-sandwiches.jpg','الطاسات':'images/category-pans.jpg','بيتزا إيطالي':'images/category-italian-pizza.jpg','كريبات':'images/category-regular-crepes.jpg','بيتزا شرقي':'images/category-eastern-pizza.jpg','مكرونات':'images/category-pasta.jpg','برجر':'images/category-burgers.jpg','الصاروخ':'images/category-rocket.jpg','الفطير الحلو':'images/category-sweet-feteer.jpg','فطير حادق':'images/category-savory-feteer.jpg'},banner=banners[category],img=$('categoryBanner');if(banner){img.src=banner;img.alt=`عرض قسم ${category}`}else{img.removeAttribute('src');img.alt=''}img.classList.toggle('hidden',!banner);$('categoryHeading').classList.toggle('has-banner',!!banner)}
function addCart(id,label){let x=items.find(i=>i.id===id),o=x?.options.find(a=>a.label===label);if(!x||!o||x.stock<1)return toast('الصنف غير متاح');let c=cart.find(a=>a.id===id&&a.label===label);c?c.qty++:cart.push({id,label,qty:1,price:Number(o.price)});renderCart();toast('أضيف للسلة')}
function renderCart(){$('cartCount').textContent=cart.reduce((s,a)=>s+a.qty,0);$('cartLines').innerHTML=cart.map((a,n)=>`<div class="cart-line row"><span>${esc(items.find(i=>i.id===a.id)?.name)} (${esc(a.label)}) × ${a.qty}</span><span>${a.price*a.qty} ج.م <button class="soft" onclick="cart.splice(${n},1);renderCart()">حذف</button></span></div>`).join('')||'<p class="muted">السلة فارغة.</p>';$('cartTotal').textContent='الإجمالي: '+cart.reduce((s,a)=>s+a.price*a.qty,0)+' ج.م'}
async function renderOrders(){let local=JSON.parse(sessionStorage.getItem('bz-orders')||'[]');$('ordersList').innerHTML=local.map(o=>`<div class="order"><b>${esc(o.code)} — ${esc(o.status)}</b><div class="muted">${esc(o.customer)} • ${esc(o.phone)} • ${esc(o.branch)}</div><div>${esc(o.summary)} — ${o.total} ج.م</div></div>`).join('')||'<p class="muted">لا توجد طلبات مسجلة في هذه الجلسة.</p>'}
function showOrderNotification(order){const code=order.code||'طلب جديد',customer=order.customer||'عميل',total=order.total??'',details=typeof window.orderDetailsText==='function'?window.orderDetailsText(order):(order.summary||'');const body=customer+' • '+total+' ج.م • '+code+(details?'\\n'+details:'');toast('طلب جديد: '+code+' — '+customer+(details?' • '+details:''));if('Notification'in window&&Notification.permission==='granted'){try{const n=new Notification('طلب جديد من BAZEZ',{body,tag:'order-'+(order.id||code)});n.onclick=()=>{window.focus();document.querySelector('[data-tab=admin]').click();n.close()}}catch(e){console.warn('Browser notification unavailable',e)}}renderAdmin()}
function subscribeOrderNotifications(){if(!logged||orderChannel)return;orderChannel=db.channel('bazez-admin-orders').on('postgres_changes',{event:'INSERT',schema:'public',table:'orders'},payload=>showOrderNotification(payload.new||{})).subscribe(status=>{const el=$('notificationStatus');if(!el)return;if(status==='SUBSCRIBED')el.textContent='متصل: سيظهر تنبيه عند وصول طلب جديد ما دامت صفحة الإدارة مفتوحة.';else if(status==='CHANNEL_ERROR'||status==='TIMED_OUT')el.textContent='تعذر الاتصال بتنبيهات الطلبات. تأكد من تفعيل Realtime لجدول orders في Supabase.'})}

async function renderAdmin(){if(!logged)return;$('loginBox').classList.add('hidden');$('adminPanel').classList.remove('hidden');let{data:all}=await db.from('menu_items').select('*').order('id');if(all)items=completeMenu(all.map(fromRow));let{data:os}=await db.from('orders').select('*').order('created_at',{ascending:false}).limit(100);orders=os||[];$('statItems').textContent=items.length;$('statOrders').textContent=orders.length;let q=$('adminSearch').value.toLowerCase();$('clearAdminItemFilter').classList.toggle('hidden',selectedAdminItemId===null);$('inventoryList').innerHTML=items.filter(i=>(selectedAdminItemId===null||i.id===selectedAdminItemId)&&i.name.toLowerCase().includes(q)).map(i=>`<div class="stock-line row"><div><button class="admin-item-title" type="button" onclick="showOnlyAdminItem(${i.id})">${esc(i.name)}</button><div class="muted">${esc(i.cat)} • ${i.visible?'ظاهر':'مخفي'}</div>${(!i.options||!i.options.length||i.options.every(o=>o.price==null))?`<div class="admin-base-price"><label for="basePrice${i.id}">سعر الصنف (ج.م)</label><input id="basePrice${i.id}" type="number" min="0" step="0.01" inputmode="decimal" value="${i.startPrice??''}" placeholder="أدخل السعر"><button class="soft" type="button" onclick="saveBasePrice(${i.id})">حفظ السعر</button></div>`:``}<div class="admin-image-tools">${i.imageUrl?`<img class="admin-thumb" src="${escAttr(i.imageUrl)}" alt="${escAttr(i.name)}">`:`<div class="admin-thumb" aria-hidden="true"></div>`}<button class="soft" type="button" onclick="document.getElementById('menuPhoto${i.id}').click()">اختيار/تغيير صورة</button><input id="menuPhoto${i.id}" type="file" accept="image/*" onchange="uploadMenuImage(${i.id},this)"/><button class="soft" type="button" onclick="toggleMenuImage(${i.id})">${i.imageVisible?'إخفاء الصورة':'إظهار الصورة'}</button></div><div class="admin-option-prices"><div class="muted" style="grid-column:1/-1;font-weight:bold">${i.options&&i.options.some(o=>o.price!=null)?'تعديل أسعار الصنف':'أضف سعر الصنف (ج.م)'}</div>${(i.options&&i.options.length?i.options:[{label:'عادي',price:null,priceVisible:true}]).map((o,n)=>`<div class="admin-option-price"><div class="admin-option-price-head"><span>${esc(o.label||`اختيار ${n+1}`)}</span><button class="soft admin-price-eye" type="button" onclick="toggleOptionPrice(${i.id},${n})" aria-label="${o.priceVisible===false?'إظهار السعر للعميل':'إخفاء السعر عن العميل'}">${o.priceVisible===false?'🙈 مخفي':'👁 ظاهر'}</button></div><input class="admin-price-input" type="number" min="0" step="0.01" inputmode="decimal" data-price-id="${i.id}" data-price-index="${n}" value="${o.price??''}" placeholder="أدخل السعر" aria-label="سعر ${escAttr(o.label||`اختيار ${n+1}`)}"></div>`).join('')}<button class="primary admin-save-prices" type="button" onclick="saveOptionPrices(${i.id})">حفظ الأسعار</button></div></div><div class="controls"><button class="soft" onclick="visibility(${i.id})">${i.visible?'إخفاء':'إظهار'}</button><button class="soft" onclick="editItem(${i.id})">تعديل</button><button class="soft" onclick="deleteItem(${i.id})">حذف</button></div></div>`).join('');$('waSetting').value=cfg.wa;$('lowLimit').value=cfg.low;$('branch1').value=cfg.b1;$('phone1').value=cfg.p1;$('branch2').value=cfg.b2;$('phone2').value=cfg.p2;renderOrders()}
async function saveBasePrice(id){const i=items.find(x=>x.id===id);if(!i)return;const raw=$("basePrice"+id).value.trim(),price=raw===""?null:Number(raw);if(price!==null&&(!Number.isFinite(price)||price<0))return toast("اكتب سعراً صحيحاً");i.startPrice=price;if(!i.options?.length)i.options=[{label:"عادي",price,priceVisible:true}];else if(i.options.length===1&&i.options[0].price==null)i.options[0]={...i.options[0],label:i.options[0].label==="السعر يحدد"?"عادي":i.options[0].label,price};await saveProduct(i);toast("تم حفظ السعر")}function readAdminOptionPrices(id){const i=items.find(x=>x.id===id);if(!i)return null;const options=i.options?.length?i.options:[{label:'عادي',price:null,priceVisible:true}];document.querySelectorAll('[data-price-id="'+id+'"]').forEach(input=>{const n=Number(input.dataset.priceIndex),raw=input.value.trim();options[n]={...options[n],price:raw===''?null:Number(raw)};});i.options=options;return i}
async function saveOptionPrices(id){const i=readAdminOptionPrices(id);if(!i)return;if(i.options.some(o=>o.price!==null&&(!Number.isFinite(o.price)||o.price<0)))return toast('اكتب سعراً صحيحاً لكل اختيار');if(i.options.length===1)i.startPrice=i.options[0].price;await saveProduct(i);toast('تم حفظ الأسعار')}
async function toggleOptionPrice(id,index){const i=readAdminOptionPrices(id);if(!i)return;i.options[index].priceVisible=i.options[index].priceVisible===false;await saveProduct(i)}window.showOnlyAdminItem=id=>{selectedAdminItemId=id;$('adminSearch').value='';renderAdmin()};window.showAllAdminItems=()=>{selectedAdminItemId=null;renderAdmin()};async function saveProduct(i){let{error}=await db.from('menu_items').upsert(toRow(i));if(error)toast('تعذر الحفظ: '+error.message);else{await loadItems();await renderAdmin()}}async function visibility(id){let i=items.find(x=>x.id===id);i.visible=!i.visible;await saveProduct(i)}async function editItem(id){let i=items.find(x=>x.id===id),n=prompt('اسم الصنف',i.name);if(n===null)return;i.name=n;await saveProduct(i)}async function deleteItem(id){let i=items.find(x=>x.id===id);if(!i||!confirm('حذف الصنف «'+i.name+'» نهائياً؟'))return;let{error}=await db.from('menu_items').delete().eq('id',id);if(error)toast('تعذر الحذف: '+error.message);else{cart=cart.filter(x=>x.id!==id);await loadItems();renderCart();await renderAdmin();toast('تم حذف الصنف')}}
document.querySelectorAll('[data-admin]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-admin]').forEach(x=>x.classList.toggle('active',x===b));$('inventory').classList.toggle('hidden',b.dataset.admin!=='inventory');$('settings').classList.toggle('hidden',b.dataset.admin!=='settings')});
$('loginForm').onsubmit=async e=>{e.preventDefault();let{error}=await db.auth.signInWithPassword({email:$('adminUser').value,password:$('adminPass').value});if(error){toast('تعذر الدخول: تحقق من الحساب وكلمة المرور');return}logged=true;subscribeOrderNotifications();renderAdmin()};
$('adminSearch').oninput=()=>renderAdmin();$('addItem').onclick=async()=>{let name=prompt('اسم الصنف الجديد');if(!name)return;let price=Number(prompt('السعر بالجنيه'));if(!price)return;let cat=prompt('القسم',category==='الكل'?'أصناف جديدة':category)||'أصناف جديدة';let item={id:Math.max(0,...items.map(i=>i.id))+1,cat,name,startPrice:price,ingredients:'',stock:10,visible:true,options:[{label:'عادي',price}]};let{error}=await db.from('menu_items').insert(toRow(item));if(error)toast('تعذرت الإضافة: '+error.message);else{await loadItems();await renderAdmin()}};
$('settingsForm').onsubmit=async e=>{e.preventDefault();cfg={wa:$('waSetting').value,low:Number($('lowLimit').value)||10,b1:$('branch1').value,p1:$('phone1').value,b2:$('branch2').value,p2:$('phone2').value};let{error}=await db.from('shop_settings').upsert({id:1,data:cfg});if(error)toast('تعذر حفظ الإعدادات');else{await loadSettings();toast('تم حفظ الإعدادات')}};
$('orderType').onchange=()=>{const delivery=$('orderType').value==='توصيل';$('address').required=delivery;$('address').placeholder=delivery?'عنوان التوصيل (مطلوب)':'العنوان وملاحظات الطلب (اختياري)'};$('orderType').dispatchEvent(new Event('change'));$('orderForm').onsubmit=async e=>{e.preventDefault();if($('orderType').value==='توصيل'&&!$('address').value.trim()){$('address').focus();toast('اكتب عنوان التوصيل لإرسال الطلب');return}if(!cart.length)return toast('السلة فارغة');const selectedBranch=$('branch').value,branchPhone=selectedBranch===cfg.b1?cfg.p1:cfg.p2,whatsapp=normalizeWhatsapp(branchPhone);if(!whatsapp)return toast('أضف رقم كاشير الفرع من إعدادات الإدارة أولاً');let total=cart.reduce((s,a)=>s+a.price*a.qty,0),summary=cart.map(a=>`${items.find(i=>i.id===a.id).name} (${a.label}) × ${a.qty}`).join('، '),code='BZ'+Date.now().toString().slice(-6),o={code,customer:$('custName').value,phone:$('custPhone').value,branch:$('branch').value,order_type:$('orderType').value,payment:$('payment').value,address:$('address').value,summary,total,status:'جديد'};let{error}=await db.from('orders').insert(o);if(error){toast('تعذر تسجيل الطلب: '+error.message);return}let locals=JSON.parse(sessionStorage.getItem('bz-orders')||'[]');locals.unshift({...o,orderType:o.order_type});sessionStorage.setItem('bz-orders',JSON.stringify(locals));for(let a of cart){let it=items.find(x=>x.id===a.id);if(it)await db.from('menu_items').update({stock:Math.max(0,it.stock-a.qty)}).eq('id',it.id)}let msg=`طلب ${code}\nالاسم: ${o.customer}\nالهاتف: ${o.phone}\n${o.order_type} — ${o.branch}\nالدفع: ${o.payment}\nالعنوان: ${o.address}\n${summary}\nالإجمالي: ${total} ج.م`;window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`,'_blank');cart=[];await loadItems();renderCart();toast('تم تسجيل الطلب')};$('search').oninput=renderMenu;
db.auth.onAuthStateChange((_event,session)=>{logged=!!session;if(logged){subscribeOrderNotifications();setTimeout(()=>renderAdmin(),0)}else{if(orderChannel){db.removeChannel(orderChannel);orderChannel=null}$('adminPanel').classList.add('hidden');$('loginBox').classList.remove('hidden')}});(async()=>{await loadItems();await loadSettings();renderCart()})();