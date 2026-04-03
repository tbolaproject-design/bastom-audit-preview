/* Bastom Audit - app.js (ASCII-only) */
(function () {
  "use strict";

  var I18N = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_contact: "Contact",

      position_line: "Partner-led · ACCA-qualified · Big Four background",

      home_kicker: "Independent Audit Organization",
      home_h1: "Bastom Audit LLC — Audit, Tax & Advisory in Uzbekistan",
      home_p: "We support shareholders, management and lenders with high-quality audit and pragmatic advisory. Clear timelines, transparent fees, and partner-led delivery.",
      home_trust1: "State Register of Audit Organisations",
      home_trust2: "IFRS and management reporting",
      home_trust3: "Confidentiality and independence",

      home_services_kicker: "Our services",
      home_services_h2: "Clear deliverables. Standards-driven work.",
      home_services_p: "A practical service set aligned with international standards and Uzbekistan's regulatory environment.",

      svc_audit: "Audit and Assurance",
      svc_tax: "Tax and Compliance",
      svc_out: "Accounting and Outsourcing",
      svc_model: "Strategy and Financial Modelling",
      svc_ops: "Operational Efficiency",
      svc_ifrs: "IFRS Support",

      svc_audit_p: "Statutory and initiative audits, agreed-upon procedures, and stakeholder-focused assurance.",
      svc_tax_p: "Tax diagnostics, compliance support, and advisory on transactions and documentation.",
      svc_out_p: "Bookkeeping, monthly close, management reporting, payroll and CFO support.",
      svc_model_p: "Budgeting, forecasting, feasibility studies and scenario modelling for lenders and investors.",
      svc_ops_p: "Process diagnostics, KPI frameworks, internal controls and performance improvement.",
      svc_ifrs_p: "IFRS conversion support, accounting memos and reporting improvements (non-audit advisory).",

      svc_audit_full: "Statutory and initiative audits conducted in accordance with ISA and Uzbekistan audit legislation. We deliver clear, timely audit opinions supported by risk-based procedures, substantive testing, and transparent communication with management and shareholders. We also provide agreed-upon procedures (AUP) engagements and assurance reports for lenders, investors, and regulatory bodies.",
      svc_tax_full: "Tax diagnostics to identify risks and optimisation opportunities under Uzbekistan tax law. We advise on transaction structuring, transfer pricing documentation, VAT, corporate profit tax, and payroll taxes. We also support clients with tax authority communications, appeals, and compliance reviews ahead of inspections.",
      svc_out_full: "Full-cycle bookkeeping, monthly close, and management reporting under NSBU or IFRS. Our outsourcing team handles payroll, statutory filings, and accounts preparation — freeing management to focus on operations. We also provide interim CFO and chief accountant support for companies in transition or restructuring.",
      svc_model_full: "Budgeting, forecasting, and multi-scenario financial models built for lenders, investors, and boards. We develop feasibility studies, business plans, and investment appraisals aligned with international best practice. Our models are transparent, auditable, and designed to support decision-making — not just compliance.",
      svc_ops_full: "Process diagnostics, internal control reviews, and KPI framework development for companies seeking stronger governance. We identify bottlenecks, control weaknesses, and reporting gaps — and deliver practical recommendations that management can act on. Engagements are scoped to the business size and sector, with outputs suitable for board or shareholder reporting.",
      svc_ifrs_full: "IFRS conversion, first-time adoption support, and ongoing accounting memos for complex transactions. We have deep experience with IFRS 9 (financial instruments), IFRS 16 (leases), IFRS 17 (insurance contracts), and IFRS 15 (revenue). This service is provided as non-audit advisory and is fully independent of any statutory audit engagement.",

      how_kicker: "How we work",
      how_h2: "A structured process — no surprises.",
      how_p: "Four steps from scoping to delivery, with clear communication and documented outputs.",
      step1: "Scoping",
      step1p: "Kickoff call, objectives, timeline and document checklist.",
      step2: "Proposal",
      step2p: "Defined scope, deliverables, fees and engagement letter.",
      step3: "Fieldwork",
      step3p: "Testing, analytics, interviews and interim updates.",
      step4: "Delivery",
      step4p: "Final outputs, management letter and closing discussion.",

      about_title: "About Bastom Audit",
      about_intro: "Bastom Audit LLC is an independent audit and advisory firm based in Tashkent, Uzbekistan. We are included in the State Register of Audit Organisations and led by ACCA-qualified professionals with Big Four experience. Our team brings international standards to the Uzbek market — delivering audit, tax, IFRS, and advisory services with the rigour and transparency that shareholders, lenders, and regulators expect.",
      about_intro2: "We work across the insurance, banking, and energy sectors, as well as with privately held companies undergoing restructuring, financing, or regulatory change. Engagements are always partner-led — clients deal directly with the people doing the work.",
      about_mission_h: "Mission",
      about_mission_p: "To deliver independent, high-quality audit and advisory services that help organisations in Uzbekistan meet international standards — with clarity, integrity, and practical value at every stage of the engagement.",
      about_values_h: "Principles",
      about_values_p: "Independence and objectivity in every engagement. Transparent fees and clearly defined scope before work begins. Direct partner involvement from kickoff to delivery. Strict confidentiality and separation of audit and advisory mandates.",
      about_details_h: "Company details",
      about_legal: "Full legal name:",
      about_addr: "Address:",
      about_license: "Registration:",
      about_issued: "Confirmed by:",
      about_date: "Date:",
      about_phone: "Phone:",
      about_email: "Email:",
      about_register: "Exists in the State Register of Audit Organisations by Ministry of Finance of the Republic of Uzbekistan",

      services_title: "Our Services",
      services_intro: "A practical service set aligned with international standards and Uzbekistan's regulatory environment. All engagements are partner-led with clear scope, transparent fees, and documented outputs.",

      contact_title: "Contact",
      contact_intro: "Tell us your scope. We typically respond within 1 business day.",
      contact_direct: "Direct contacts",

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

      position_line: "Партнерское руководство · Квалификация ACCA · Опыт Большой четвёрки",

      home_kicker: "Независимая аудиторская организация",
      home_h1: "Bastom Audit LLC — аудит, налоги и консалтинг в Узбекистане",
      home_p: "Мы поддерживаем акционеров, менеджмент и кредиторов качественным аудитом и практичным консалтингом. Чёткие сроки, прозрачные условия и партнёрское сопровождение.",
      home_trust1: "Государственный реестр аудиторских организаций",
      home_trust2: "МСФО и управленческая отчётность",
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
      svc_tax_p: "Налоговая диагностика, поддержка по отчётности и консультации по сделкам и документам.",
      svc_out_p: "Учёт, закрытие месяца, управленческие отчёты, зарплата и поддержка финансовой функции.",
      svc_model_p: "Бюджетирование, прогнозирование, ТЭО и сценарное моделирование для банков и инвесторов.",
      svc_ops_p: "Диагностика процессов, KPI, внутренний контроль и повышение эффективности.",
      svc_ifrs_p: "Трансформация в МСФО, меморандумы и улучшение отчётности (неаудиторский консалтинг).",

      svc_audit_full: "Обязательный и инициативный аудит в соответствии с МСА и законодательством Узбекистана. Мы формируем чёткие и своевременные аудиторские заключения на основе риск-ориентированных процедур, детального тестирования и открытого взаимодействия с менеджментом и акционерами. Также оказываем услуги по согласованным процедурам (AUP) и заверению для кредиторов, инвесторов и регуляторов.",
      svc_tax_full: "Налоговая диагностика для выявления рисков и возможностей оптимизации в рамках налогового законодательства Узбекистана. Консультируем по структурированию сделок, документации по трансфертному ценообразованию, НДС, налогу на прибыль и налогам с фонда оплаты труда. Сопровождаем клиентов в коммуникациях с налоговыми органами, апелляциях и проверках перед инспекциями.",
      svc_out_full: "Полный цикл бухгалтерского учёта, закрытие периода и управленческая отчётность по НСБУ или МСФО. Наша команда аутсорсинга ведёт расчёт заработной платы, подготовку обязательной отчётности и бухгалтерских документов — высвобождая время менеджмента для операционных задач. Также оказываем услуги временного финансового директора и главного бухгалтера для компаний в переходном периоде.",
      svc_model_full: "Бюджетирование, прогнозирование и многосценарные финансовые модели для кредиторов, инвесторов и советов директоров. Разрабатываем ТЭО, бизнес-планы и инвестиционные оценки в соответствии с международной практикой. Наши модели прозрачны, поддаются проверке и нацелены на поддержку принятия решений, а не только на соответствие требованиям.",
      svc_ops_full: "Диагностика процессов, оценка системы внутреннего контроля и разработка KPI-систем для компаний, стремящихся к более эффективному корпоративному управлению. Выявляем узкие места, слабые места контроля и пробелы в отчётности — и предоставляем практические рекомендации, которые менеджмент может реализовать. Объём работ адаптируется под размер и отрасль компании.",
      svc_ifrs_full: "Трансформация отчётности в МСФО, поддержка при первом применении и постоянные учётные меморандумы по сложным операциям. Имеем глубокую экспертизу по МСФО 9 (финансовые инструменты), МСФО 16 (аренда), МСФО 17 (страховые контракты) и МСФО 15 (выручка). Услуга оказывается как неаудиторский консалтинг и полностью независима от любого аудиторского задания.",

      how_kicker: "Как мы работаем",
      how_h2: "Структурированный процесс — без сюрпризов.",
      how_p: "Четыре шага от определения объёма работ до финальной выдачи результатов.",
      step1: "Определение объёма",
      step1p: "Встреча, цели, сроки и список документов.",
      step2: "Предложение",
      step2p: "Подтверждение объёма, результаты, стоимость и договор.",
      step3: "Полевые работы",
      step3p: "Тестирование, аналитика, интервью и промежуточные статусы.",
      step4: "Выдача результатов",
      step4p: "Заключение, письмо руководству и обсуждение итогов.",

      about_title: "О Bastom Audit",
      about_intro: "Bastom Audit LLC — независимая аудиторско-консалтинговая фирма, базирующаяся в Ташкенте, Узбекистан. Мы включены в Государственный реестр аудиторских организаций и возглавляемся специалистами с квалификацией ACCA и опытом работы в компаниях Большой четвёрки. Наша команда привносит международные стандарты на узбекский рынок — оказывая услуги аудита, налогового консалтинга, МСФО и финансового Advisory с тем качеством и прозрачностью, которых ожидают акционеры, кредиторы и регуляторы.",
      about_intro2: "Мы работаем в страховом, банковском и энергетическом секторах, а также с частными компаниями, проходящими реструктуризацию, привлечение финансирования или регуляторные изменения. Все проекты ведутся под непосредственным руководством партнёра — клиенты работают напрямую с теми, кто выполняет задание.",
      about_mission_h: "Миссия",
      about_mission_p: "Оказывать независимые, высококачественные аудиторские и консалтинговые услуги, помогая организациям Узбекистана соответствовать международным стандартам — с ясностью, честностью и практической ценностью на каждом этапе.",
      about_values_h: "Принципы",
      about_values_p: "Независимость и объективность в каждом задании. Прозрачные условия и чётко определённый объём до начала работ. Непосредственное участие партнёра от старта до финала. Строгая конфиденциальность и разделение аудиторских и консалтинговых мандатов.",
      about_details_h: "Реквизиты",
      about_legal: "Полное наименование:",
      about_addr: "Адрес:",
      about_license: "Регистрация:",
      about_issued: "Подтверждено:",
      about_date: "Дата:",
      about_phone: "Телефон:",
      about_email: "Email:",
      about_register: "Включён в Государственный реестр аудиторских организаций Министерства финансов Республики Узбекистан",

      services_title: "Наши услуги",
      services_intro: "Практичный набор услуг в соответствии с международными стандартами и требованиями Узбекистана. Все проекты ведутся под руководством партнёра с чётким объёмом, прозрачными условиями и задокументированными результатами.",

      contact_title: "Контакты",
      contact_intro: "Опишите ваш запрос — обычно отвечаем в течение 1 рабочего дня.",
      contact_direct: "Прямые контакты",

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

      position_line: "Hamkor yetakchiligida · ACCA malakali · To'rt katta tajribasi",

      home_kicker: "Mustaqil auditorlik tashkiloti",
      home_h1: "Bastom Audit LLC — O'zbekistonda audit, soliq va konsalting",
      home_p: "Aksiyadorlar, menejment va kreditorlarga yuqori sifatli audit hamda amaliy maslahat xizmatlarini taqdim etamiz. Aniq muddatlar, shaffof narxlar va hamkor yetakchiligida bajarilish.",
      home_trust1: "Auditorlik tashkilotlarining davlat reestri",
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

      svc_audit_p: "Majburiy va tashabbus auditi, kelishilgan amallar va manfaatdor tomonlar uchun ishonch xulosalari.",
      svc_tax_p: "Soliq diagnostikasi, hisobotlar bo'yicha yordam va bitimlar hujjatlari bo'yicha maslahatlar.",
      svc_out_p: "Hisob yuritish, oy yopilishi, boshqaruv hisobotlari, ish haqi va moliyaviy funksiyani qo'llab-quvvatlash.",
      svc_model_p: "Byudjet, prognoz, TEO va bank hamda investorlar uchun ssenariy tahlili.",
      svc_ops_p: "Jarayonlar diagnostikasi, KPI tizimi, ichki nazorat va samaradorlikni oshirish.",
      svc_ifrs_p: "IFRSga o'tish yordami, buxgalteriya memorandumlari va hisobotlarni yaxshilash (audit bo'lmagan maslahat).",

      svc_audit_full: "ISA va O'zbekiston audit qonunchiligi asosida majburiy va tashabbus auditi. Xavf asosidagi protseduralar, moddiy tekshirish va menejment hamda aksiyadorlar bilan ochiq muloqotga tayangan holda aniq va o'z vaqtidagi audit xulosalarini taqdim etamiz. Shuningdek, kreditorlar, investorlar va regulyatorlar uchun kelishilgan amallar (AUP) va ishonch hisobotlarini tayyorlaymiz.",
      svc_tax_full: "O'zbekiston soliq qonunchiligi doirasida xatarlar va optimallashtirish imkoniyatlarini aniqlash uchun soliq diagnostikasi. Bitimlarni tuzilmalashtirish, transfer narxlash hujjatlari, QQS, korporativ foyda solig'i va ish haqi soliqlari bo'yicha maslahat beramiz. Soliq organlari bilan muloqotda, apellyatsiyalarda va tekshiruvlarga tayyorgarlikda mijozlarga yordam ko'rsatamiz.",
      svc_out_full: "NSBU yoki IFRS bo'yicha to'liq buxgalteriya hisobi, oylik yopilish va boshqaruv hisoboti. Autsorsing jamoamiz ish haqi hisob-kitobini, majburiy hisobotlarni va buxgalteriya hujjatlarini yuritadi — menejmentni operatsion masalalarga e'tibor qaratish uchun bo'shatib beradi. Shuningdek, o'tish davrida yoki qayta tuzilish jarayonidagi kompaniyalar uchun vaqtinchalik moliya direktori va bosh buxgalter xizmatlarini ko'rsatamiz.",
      svc_model_full: "Kreditorlar, investorlar va direktorlar kengashi uchun byudjetlashtirish, prognozlash va ko'p ssenariyali moliyaviy modellar. Xalqaro amaliyotga mos ravishda texnik-iqtisodiy asoslar, biznes-rejalar va investitsion baholashlarni ishlab chiqamiz. Modellarimiz shaffof, tekshirilishi mumkin va faqat muvofiqlik uchun emas, balki qarorlar qabul qilishni qo'llab-quvvatlash uchun mo'ljallangan.",
      svc_ops_full: "Korporativ boshqaruvni mustahkamlashga intilayotgan kompaniyalar uchun jarayonlar diagnostikasi, ichki nazoratni baholash va KPI tizimini ishlab chiqish. Tor joylar, nazorat zaifliklarini va hisobotlardagi bo'shliqlarni aniqlaymiz — hamda menejment amalga oshira oladigan amaliy tavsiyalar beramiz. Ish hajmi kompaniyaning kattaligi va sohasiga moslashtiriladi.",
      svc_ifrs_full: "IFRSga o'tish, birinchi qo'llash yordami va murakkab operatsiyalar bo'yicha doimiy buxgalteriya memorandumlari. IFRS 9 (moliyaviy instrumentlar), IFRS 16 (ijara), IFRS 17 (sug'urta shartnomalari) va IFRS 15 (daromad) bo'yicha chuqur tajribamiz mavjud. Bu xizmat audit bo'lmagan maslahat sifatida ko'rsatiladi va har qanday majburiy audit topshirig'idan to'liq mustaqildir.",

      how_kicker: "Qanday ishlaymiz",
      how_h2: "Tizimli jarayon — kutilmagan holatlarsiz.",
      how_p: "Ish hajmini belgilashdan yakuniy natijagacha 4 bosqich, aniq aloqa va hujjatlashtirilgan ishlar.",
      step1: "Ish hajmi",
      step1p: "Uchrashuv, maqsadlar, muddatlar va hujjatlar ro'yxati.",
      step2: "Taklif",
      step2p: "Hajmni tasdiqlash, natijalar, narx va shartnoma.",
      step3: "Tekshiruv",
      step3p: "Testlar, tahlil, intervyu va oraliq statuslar.",
      step4: "Topshirish",
      step4p: "Xulosa, boshqaruv xati va yakuniy muhokama.",

      about_title: "Bastom Audit haqida",
      about_intro: "Bastom Audit LLC — Toshkent, O'zbekistonda joylashgan mustaqil audit va maslahat firmasi. Biz Auditorlik tashkilotlarining davlat reestriga kiritilganmiz va ACCA malakasiga ega, To'rt katta kompaniyalarda tajribali mutaxassislar tomonidan boshqariladi. Jamoamiz xalqaro standartlarni o'zbek bozoriga olib keladi — aksiyadorlar, kreditorlar va regulyatorlar kutgan qat'iylik va shaffoflik bilan audit, soliq, IFRS va maslahat xizmatlarini taqdim etadi.",
      about_intro2: "Biz sug'urta, bank va energetika sektorlarida, shuningdek qayta tuzilish, moliyalashtirish yoki tartibga solish o'zgarishlaridan o'tayotgan xususiy kompaniyalar bilan ishlaymiz. Barcha loyihalar hamkor yetakchiligida olib boriladi — mijozlar ish bajaruvchilar bilan bevosita muloqot qiladi.",
      about_mission_h: "Missiya",
      about_mission_p: "O'zbekistondagi tashkilotlarga xalqaro standartlarga javob berishda yordam beradigan mustaqil, yuqori sifatli audit va maslahat xizmatlarini ko'rsatish — har bir bosqichda aniqlik, halollik va amaliy qiymat bilan.",
      about_values_h: "Tamoyillar",
      about_values_p: "Har bir topshiriqda mustaqillik va obyektivlik. Ish boshlanishidan oldin shaffof narxlar va aniq belgilangan hajm. Boshlanishdan yakunigacha hamkorning bevosita ishtiroki. Qat'iy maxfiylik va audit hamda maslahat mandatlarini ajratish.",
      about_details_h: "Rekvizitlar",
      about_legal: "To'liq nomi:",
      about_addr: "Manzil:",
      about_license: "Ro'yxatga olish:",
      about_issued: "Tasdiqlagan:",
      about_date: "Sana:",
      about_phone: "Telefon:",
      about_email: "Email:",
      about_register: "O'zbekiston Respublikasi Moliya vazirligi tomonidan Auditorlik tashkilotlarining davlat reestriga kiritilgan",

      services_title: "Xizmatlarimiz",
      services_intro: "Xalqaro standartlar va O'zbekiston talablari asosida amaliy xizmatlar to'plami. Barcha loyihalar hamkor yetakchiligida aniq hajm, shaffof narxlar va hujjatlashtirilgan natijalar bilan olib boriladi.",

      contact_title: "Aloqa",
      contact_intro: "So'rovingizni yozing — odatda 1 ish kunida javob beramiz.",
      contact_direct: "To'g'ridan-to'g'ri aloqa",

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

  function setupFooterYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  window.addEventListener("load", function () {
    setActiveNav();
    setupLangButtons();
    setupMobileMenu();
    setupFooterYear();
    applyLang(getLang());
  });
})();
