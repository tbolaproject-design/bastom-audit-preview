/* Bastom Audit - app.js (ASCII-only) */
(function () {
  "use strict";

  var I18N = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_contact: "Contact",
     

      position_line: "Partner-led audit and advisory for growing businesses in Uzbekistan.",

      home_kicker: "Independent Audit Organization",
      home_h1: "Bastom Audit LLC — Audit, Tax & Advisory in Uzbekistan",
      home_p: "We support shareholders, management and lenders with high-quality audit and pragmatic advisory. Clear timelines, transparent fees, and partner-led delivery.",
      home_fast_pill: "Fast enquiry",
      home_fast_h3: "Get a proposal in 1 business day",
      home_fast_p: "Send your scope and we’ll reply with timeline, deliverables, and a fee estimate.",
      home_trust1: "Ministry of Finance audit license",
      home_trust2: "IFRS and management reporting",
      home_trust3: "Confidentiality and independence",

      home_services_kicker: "Our services",
      home_services_h2: "Clear deliverables. Standards-driven work.",
      home_services_p: "A practical service set aligned with international standards and Uzbekistan’s regulatory environment.",

      svc_audit: "Audit and Assurance",
      svc_tax: "Tax and Compliance",
      svc_out: "Accounting and Outsourcing",
      svc_model: "Strategy and Financial Modelling",
      svc_ops: "Operational Efficiency",
      svc_ifrs: "IFRS Support",

      svc_audit_p: "Statutory and initiative audits, agreed-upon procedures, and stakeholder-focused assurance.",
      svc_tax_p: "Tax diagnostics, compliance support, and advisory on transactions and documentation.",
      svc_out_p: "Bookkeeping, monthly close, management packs, payroll support and CFO assistance.",
      svc_model_p: "Budgeting, forecasting, feasibility studies, and scenario modelling for lenders and investors.",
      svc_ops_p: "Process diagnostics, KPI frameworks, internal controls and performance improvements.",
      svc_ifrs_p: "IFRS conversion assistance, accounting memos, and reporting improvements (non-audit advisory).",

      how_kicker: "How we work",
      how_h2: "A structured process — no surprises.",
      how_p: "Four steps from scoping to delivery, with clear communication and documented outputs.",
      step1: "Scoping",
      step1p: "Kickoff call, objectives, timeline, document checklist, and key contacts.",
      step2: "Proposal",
      step2p: "Scope confirmation, deliverables, fees, engagement letter and independence checks.",
      step3: "Fieldwork",
      step3p: "Testing, analytics, interviews, working papers, and interim status updates.",
      step4: "Delivery",
      step4p: "Opinion/outputs, management letter, findings workshop, and next-step plan.",

      about_title: "About Bastom Audit",
      about_intro: "Bastom Audit LLC is an independent audit organization headquartered in Tashkent. We combine international standards with local regulatory knowledge to deliver actionable outcomes.",
      about_mission_h: "Mission",
      about_mission_p: "Strengthen transparency and trust in financial reporting and corporate decision-making across Uzbekistan.",
      about_values_h: "Principles",
      about_values_p: "Independence, confidentiality, professional skepticism, and clear communication in every engagement.",
      about_details_h: "Company details",
      about_legal: "Full legal name:",
      about_addr: "Address:",
      about_license: "Audit license:",
      about_issued: "Issued by:",
      about_date: "Date:",
      about_phone: "Phone:",
      about_email: "Email:",

      services_title: "Services",
      services_intro: "Audit, tax, outsourcing and advisory services for SMEs, regulated entities, foreign-invested companies and large organizations.",
      services_note: "You can refine this page later by adding dedicated subpages for each service.",

      contact_title: "Contact",
      contact_intro: "Tell us your scope. We typically respond within 1 business day.",
      contact_direct: "Direct contacts",
      contact_form: "Enquiry form",
      form_name: "Full name *",
      form_phone: "Phone / WhatsApp *",
      form_email: "Email",
      form_service: "Select service",
      form_msg: "Message (scope, timeline, reporting standard, etc.)",
      form_consent: "I consent to being contacted about my enquiry.",
      form_send: "Send message",
      form_demo: "Thank you. This form is currently a demo. Connect it to Formspree or Netlify later to send emails.",

      footer_tag: "Independent audit, tax and advisory services in Uzbekistan.",
      footer_quick: "Quick links",
      footer_contacts: "Contacts",
      rights: "All rights reserved."
    },

    ru: {
      nav_home: "Главная",
      nav_about: "О компании",
      nav_services: "Услуги",
      nav_contact: "Контакты",
     
     

      position_line: "Партнерский подход к аудиту и консалтингу для развивающегося бизнеса Узбекистана.",

      home_kicker: "Независимая аудиторская организация",
      home_h1: "Bastom Audit LLC — аудит, налоги и консалтинг в Узбекистане",
      home_p: "Мы поддерживаем акционеров, менеджмент и кредиторов качественным аудитом и практичным консалтингом. Четкие сроки, прозрачные условия и партнерское сопровождение.",
      home_fast_pill: "Быстрый запрос",
      home_fast_h3: "Коммерческое предложение за 1 рабочий день",
      home_fast_p: "Пришлите объем работ — ответим сроками, результатами и оценкой стоимости.",
      home_trust1: "Лицензия Минфина",
      home_trust2: "МСФО и управленческая отчетность",
      home_trust3: "Конфиденциальность и независимость",

      home_services_kicker: "Наши услуги",
      home_services_h2: "Понятные результаты. Работа по стандартам.",
      home_services_p: "Практичный набор услуг в соответствии с международными стандартами и требованиями Узбекистана.",

      svc_audit: "Аудит и заверение",
      svc_tax: "Налоги и комплаенс",
      svc_out: "Бухгалтерский аутсорсинг",
      svc_model: "Стратегия и финансовые модели",
      svc_ops: "Операционная эффективность",
      svc_ifrs: "Поддержка МСФО",

      svc_audit_p: "Обязательный и инициативный аудит, согласованные процедуры и заверение для стейкхолдеров.",
      svc_tax_p: "Налоговая диагностика, поддержка по отчетности и консультации по сделкам и документам.",
      svc_out_p: "Учет, закрытие месяца, управленческие отчеты, зарплата и поддержка финансовой функции.",
      svc_model_p: "Бюджетирование, прогнозирование, ТЭО и сценарное моделирование для банков и инвесторов.",
      svc_ops_p: "Диагностика процессов, KPI, внутренний контроль и повышение эффективности.",
      svc_ifrs_p: "Трансформация в МСФО, меморандумы и улучшение отчетности (неаудиторский консалтинг).",

      how_kicker: "Как мы работаем",
      how_h2: "Структурированный процесс — без сюрпризов.",
      how_p: "Четыре шага от определения объема работ до финальной выдачи результатов.",
      step1: "Определение объема",
      step1p: "Встреча, цели, сроки, список документов и ответственные лица.",
      step2: "Предложение",
      step2p: "Подтверждение объема, результаты, стоимость, договор и проверки независимости.",
      step3: "Полевые работы",
      step3p: "Тестирование, аналитика, интервью, рабочие документы и промежуточные статусы.",
      step4: "Выдача",
      step4p: "Заключение/результаты, письмо руководству, обсуждение находок и план действий.",

      about_title: "О Bastom Audit",
      about_intro: "Bastom Audit LLC — независимая аудиторская организация в Ташкенте. Мы сочетаем международные стандарты и локальные требования для практического результата.",
      about_mission_h: "Миссия",
      about_mission_p: "Повышать прозрачность и доверие к финансовой отчетности и управленческим решениям в Узбекистане.",
      about_values_h: "Принципы",
      about_values_p: "Независимость, конфиденциальность, профессиональный скептицизм и понятная коммуникация.",
      about_details_h: "Реквизиты",
      about_legal: "Полное наименование:",
      about_addr: "Адрес:",
      about_license: "Лицензия:",
      about_issued: "Выдано:",
      about_date: "Дата:",
      about_phone: "Телефон:",
      about_email: "Email:",

      services_title: "Услуги",
      services_intro: "Аудит, налоги, аутсорсинг и консалтинг для МСБ, регулируемых компаний, предприятий с иностранным капиталом и крупных организаций.",
      services_note: "Позже можно добавить отдельные страницы по каждой услуге для SEO и детализации.",

      contact_title: "Контакты",
      contact_intro: "Опишите ваш запрос — обычно отвечаем в течение 1 рабочего дня.",
      contact_direct: "Прямые контакты",
      contact_form: "Форма обращения",
      form_name: "ФИО *",
      form_phone: "Телефон / WhatsApp *",
      form_email: "Email",
      form_service: "Выберите услугу",
      form_msg: "Сообщение (объем работ, сроки, стандарт отчетности и т.д.)",
      form_consent: "Я согласен(а) на связь по моему запросу.",
      form_send: "Отправить",
      form_demo: "Спасибо. Сейчас это демо-форма. Позже подключим Formspree или Netlify для отправки писем.",

      footer_tag: "Независимый аудит, налоги и консалтинг в Узбекистане.",
      footer_quick: "Разделы",
      footer_contacts: "Контакты",
      rights: "Все права защищены."
    },

    uz: {
      nav_home: "Bosh sahifa",
      nav_about: "Kompaniya haqida",
      nav_services: "Xizmatlar",
      nav_contact: "Aloqa",
     
   

      position_line: "O'zbekistonda o'sib borayotgan bizneslar uchun hamkor yetakchiligidagi audit va konsalting.",

      home_kicker: "Mustaqil auditorlik tashkiloti",
      home_h1: "Bastom Audit LLC — O'zbekistonda audit, soliq va konsalting",
      home_p: "Aksiyadorlar, menejment va kreditorlarga yuqori sifatli audit hamda amaliy maslahat xizmatlarini taqdim etamiz. Aniq muddatlar, shaffof narxlar va hamkor yetakchiligida bajarilish.",
      home_fast_pill: "Tezkor so'rov",
      home_fast_h3: "1 ish kunida tijorat taklifi",
      home_fast_p: "Ish hajmini yuboring — muddat, natijalar va qiymat bahosini qaytaramiz.",
      home_trust1: "Moliya vazirligi litsenziyasi",
      home_trust2: "IFRS va boshqaruv hisobotlari",
      home_trust3: "Maxfiylik va mustaqillik",

      home_services_kicker: "Xizmatlarimiz",
      home_services_h2: "Aniq natijalar. Standartlar asosida.",
      home_services_p: "Xalqaro standartlar va O'zbekiston talablari asosida amaliy xizmatlar to'plami.",

      svc_audit: "Audit va ishonch",
      svc_tax: "Soliq va komplayens",
      svc_out: "Buxgalteriya autsorsingi",
      svc_model: "Strategiya va moliyaviy modellar",
      svc_ops: "Operatsion samaradorlik",
      svc_ifrs: "IFRS yordami",

      svc_audit_p: "Majburiy va tashabbus auditi, kelishilgan amallar, manfaatdor tomonlar uchun ishonch xulosalari.",
      svc_tax_p: "Soliq diagnostikasi, hisobotlar bo'yicha yordam va bitimlar hujjatlari bo'yicha maslahatlar.",
      svc_out_p: "Hisob yuritish, oy yopilishi, boshqaruv hisobotlari, ish haqi va moliyaviy funksiyani qo'llab-quvvatlash.",
      svc_model_p: "Byudjet, prognoz, TEO, bank va investorlar uchun ssenariy tahlili.",
      svc_ops_p: "Jarayonlar diagnostikasi, KPI, ichki nazorat va samaradorlikni oshirish.",
      svc_ifrs_p: "IFRSga o'tish yordami, memo va hisobotlarni yaxshilash (auditdan tashqari maslahat).",

      how_kicker: "Qanday ishlaymiz",
      how_h2: "Tizimli jarayon — kutilmagan holatlarsiz.",
      how_p: "Ish hajmini belgilashdan yakuniy natijagacha 4 bosqich, aniq aloqa va hujjatlashtirilgan ishlar.",
      step1: "Ish hajmi",
      step1p: "Uchrashuv, maqsadlar, muddatlar, hujjatlar ro'yxati va mas'ullar.",
      step2: "Taklif",
      step2p: "Hajmni tasdiqlash, natijalar, narx, shartnoma va mustaqillik tekshiruvlari.",
      step3: "Tekshiruv",
      step3p: "Testlar, tahlil, intervyu, ish hujjatlari va oraliq statuslar.",
      step4: "Topshirish",
      step4p: "Xulosa/natijalar, boshqaruv xati, topilmalarni muhokama qilish va keyingi qadamlar.",

      about_title: "Bastom Audit haqida",
      about_intro: "Bastom Audit LLC — Toshkentdagi mustaqil auditorlik tashkiloti. Xalqaro standartlar va mahalliy talablarga tayangan holda amaliy natijalar beramiz.",
      about_mission_h: "Missiya",
      about_mission_p: "O'zbekistonda moliyaviy hisobot va boshqaruv qarorlarida shaffoflik hamda ishonchni kuchaytirish.",
      about_values_h: "Tamoyillar",
      about_values_p: "Mustaqillik, maxfiylik, professional skeptitsizm va aniq kommunikatsiya.",
      about_details_h: "Rekvizitlar",
      about_legal: "To'liq nomi:",
      about_addr: "Manzil:",
      about_license: "Litsenziya:",
      about_issued: "Beruvchi:",
      about_date: "Sana:",
      about_phone: "Telefon:",
      about_email: "Email:",

      services_title: "Xizmatlar",
      services_intro: "KOB, tartibga solinadigan sektor, xorijiy sarmoyali kompaniyalar va yirik tashkilotlar uchun audit, soliq, autsorsing va maslahatlar.",
      services_note: "Keyinroq har bir xizmat uchun alohida sahifalar qo'shib, SEO va batafsil ma'lumot uchun kuchaytirasiz.",

      contact_title: "Aloqa",
      contact_intro: "So'rovingizni yozing — odatda 1 ish kunida javob beramiz.",
      contact_direct: "To'g'ridan-to'g'ri aloqa",
      contact_form: "So'rov formasi",
      form_name: "F.I.Sh. *",
      form_phone: "Telefon / WhatsApp *",
      form_email: "Email",
      form_service: "Xizmatni tanlang",
      form_msg: "Xabar (ish hajmi, muddat, hisobot standarti va h.k.)",
      form_consent: "So'rov bo'yicha men bilan bog'lanishga roziman.",
      form_send: "Yuborish",
      form_demo: "Rahmat. Hozircha bu demo-forma. Keyin Formspree yoki Netlify orqali email jo'natishni ulaymiz.",

      footer_tag: "O'zbekistonda mustaqil audit, soliq va konsalting xizmatlari.",
      footer_quick: "Havolalar",
      footer_contacts: "Aloqa",
      rights: "Barcha huquqlar himoyalangan."
    }
  };

  function getLang() {
    var saved = localStorage.getItem("lang");
    if (saved && I18N[saved]) return saved;
    var browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (I18N[browser]) return browser;
    return "en";
  }

  function setActiveNav() {
    var path = (window.location.pathname || "").toLowerCase();
    var key = "home";
    if (path.indexOf("about") >= 0) key = "about";
    else if (path.indexOf("services") >= 0) key = "services";
    else if (path.indexOf("contact") >= 0) key = "contact";

    var navs = document.querySelectorAll("[data-nav]");
    for (var i = 0; i < navs.length; i++) navs[i].classList.remove("active");

    var el = document.querySelector('[data-nav="' + key + '"]');
    if (el) el.classList.add("active");
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    var dict = I18N[lang];

    document.documentElement.setAttribute("lang", lang);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute("data-i18n");
      if (dict[k]) nodes[i].textContent = dict[k];
    }

    var ph = document.querySelectorAll("[data-i18n-placeholder]");
    for (var j = 0; j < ph.length; j++) {
      var pk = ph[j].getAttribute("data-i18n-placeholder");
      if (dict[pk]) ph[j].setAttribute("placeholder", dict[pk]);
    }

    var btns = document.querySelectorAll("[data-lang]");
    for (var b = 0; b < btns.length; b++) {
      var isActive = btns[b].getAttribute("data-lang") === lang;
      btns[b].classList.toggle("active", isActive);
    }

    localStorage.setItem("lang", lang);
  }

  function setupLangButtons() {
    var btns = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang"));
      });
    }
  }

  function setupMobileMenu() {
    var burger = document.getElementById("burger");
    var menu = document.getElementById("mobileMenu");
    if (!burger || !menu) return;

    burger.addEventListener("click", function () {
      var isOpen = menu.style.display === "block";
      menu.style.display = isOpen ? "none" : "block";
    });

    var links = menu.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        menu.style.display = "none";
      });
    }
  }

  function setupFormDemo() {
    var form = document.getElementById("contactForm");
    var note = document.getElementById("formNote");
    if (!form || !note) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var lang = getLang();
      note.style.display = "block";
      note.style.marginTop = "10px";
      note.textContent = I18N[lang].form_demo || I18N.en.form_demo;
      form.reset();
    });
  }

  function setupFooterYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  window.addEventListener("load", function () {
    setActiveNav();
    setupLangButtons();
    setupMobileMenu();
    setupFormDemo();
    setupFooterYear();
    applyLang(getLang());
  });
})();
