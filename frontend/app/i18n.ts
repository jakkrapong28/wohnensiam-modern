export type Locale = "en" | "en-SG" | "th" | "ms" | "zh-CN" | "de" | "ar" | "my" | "lo" | "ko" | "ja" | "fr";

export const locales: Array<{ code: Locale; label: string; flag: string }> = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "en-SG", label: "English (Singapore)", flag: "🇸🇬" },
  { code: "th", label: "ไทย", flag: "🇹🇭" },
  { code: "ms", label: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "zh-CN", label: "简体中文", flag: "🇨🇳" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "ar", label: "العربية", flag: "🇦🇪" },
  { code: "my", label: "မြန်မာ", flag: "🇲🇲" },
  { code: "lo", label: "ລາວ", flag: "🇱🇦" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

declare global {
  interface Window {
    __wohnenTranslationTimers?: number[];
  }
}

export function applyPageTranslation(locale: Locale) {
  if (typeof window === "undefined") return;
  const language = locale === "en-SG" ? "en" : locale;
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.locale = locale;
  window.localStorage.setItem("wohnen-locale", locale);

  const apply = () => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (!select) return false;
    select.value = language;
    select.dispatchEvent(new Event("change", { bubbles: true }));
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.dataset.locale = locale;
    return true;
  };

  window.__wohnenTranslationTimers?.forEach(window.clearTimeout);
  if (language === "en") {
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=" + window.location.hostname;
  } else {
    document.cookie = `googtrans=/en/${language}; path=/; SameSite=Lax`;
  }
  apply();
  window.__wohnenTranslationTimers = [180, 520, 1100, 2200, 4200].map((delay) =>
    window.setTimeout(apply, delay),
  );
}

export function selectLocale(locale: Locale) {
  window.localStorage.setItem("wohnen-locale", locale);
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.locale = locale;

  // Let the picker close and paint before Google Translate mutates the page.
  window.requestAnimationFrame(() => {
    window.dispatchEvent(new CustomEvent<Locale>("wohnen:locale", { detail: locale }));
  });
}

type Copy = {
  selectLanguage: string;
  company: string;
  services: string;
  compliance: string;
  insights: string;
  contact: string;
  inquiry: string;
  heroEyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroLead: string;
  explore: string;
  meet: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesAccent: string;
  servicesIntro: string;
  complianceEyebrow: string;
  complianceTitle: string;
  complianceAccent: string;
  complianceBody: string;
  complianceCta: string;
  contactEyebrow: string;
  contactTitle: string;
  contactAccent: string;
  contactBody: string;
  name: string;
  workEmail: string;
  companyName: string;
  interest: string;
  message: string;
  send: string;
  sending: string;
  footer: string;
};

const en: Copy = {
  selectLanguage: "Select language",
  company: "Company", services: "Services", compliance: "Compliance", insights: "Insights", contact: "Contact", inquiry: "Start an inquiry",
  heroEyebrow: "Global antimony supply · Established 1993",
  heroTitle: "Critical minerals.", heroAccent: "Clear commitments.",
  heroLead: "An integrated trading house connecting responsible sources of high-purity antimony with industries worldwide.",
  explore: "Explore our capabilities", meet: "Meet Wohnen",
  servicesEyebrow: "Integrated services", servicesTitle: "Nine capabilities.", servicesAccent: "One clear pathway.",
  servicesIntro: "Each service can stand alone. Together, they create a coordinated route from resource to customer.",
  complianceEyebrow: "Compliance & documentation", complianceTitle: "Trade across borders.", complianceAccent: "Without the blind spots.",
  complianceBody: "Wohnen coordinates commercial records, regulatory documentation and specialist partners that support every shipment.",
  complianceCta: "Request compliance documents",
  contactEyebrow: "Start a conversation", contactTitle: "What can we", contactAccent: "move forward?",
  contactBody: "Tell us what material, specification or supply challenge you are working through. Our team will respond directly.",
  name: "Your name", workEmail: "Work email", companyName: "Company", interest: "Area of interest", message: "How can we help?", send: "Send inquiry", sending: "Sending…",
  footer: "Global antimony supply, coordinated with clarity.",
};

export const translations: Record<Locale, Copy> = {
  en,
  "en-SG": { ...en, heroEyebrow: "Global antimony supply · Serving Singapore and worldwide" },
  th: {
    selectLanguage: "เลือกภาษา", company: "บริษัท", services: "บริการ", compliance: "การปฏิบัติตามกฎ", insights: "ข้อมูลตลาด", contact: "ติดต่อ", inquiry: "เริ่มพูดคุย",
    heroEyebrow: "เครือข่ายจัดหาแอนทิโมนีระดับโลก · ก่อตั้งปี 1993", heroTitle: "แร่สำคัญ", heroAccent: "คำมั่นที่ชัดเจน",
    heroLead: "บริษัทการค้าแบบครบวงจร เชื่อมโยงแหล่งแอนทิโมนีความบริสุทธิ์สูงที่รับผิดชอบกับอุตสาหกรรมทั่วโลก", explore: "ดูความสามารถของเรา", meet: "รู้จัก Wohnen",
    servicesEyebrow: "บริการครบวงจร", servicesTitle: "เก้าความสามารถ", servicesAccent: "เส้นทางเดียวที่ชัดเจน", servicesIntro: "แต่ละบริการทำงานแยกกันได้ และเมื่อรวมกันจะเชื่อมทุกขั้นตอนจากแหล่งผลิตถึงลูกค้า",
    complianceEyebrow: "กฎระเบียบและเอกสาร", complianceTitle: "ค้าข้ามพรมแดน", complianceAccent: "โดยไม่มีจุดบอด", complianceBody: "Wohnen ประสานงานเอกสารการค้า ข้อกำกับ และผู้เชี่ยวชาญที่รองรับการจัดส่งทุกครั้ง", complianceCta: "ขอเอกสารการปฏิบัติตามกฎ",
    contactEyebrow: "เริ่มต้นการสนทนา", contactTitle: "มีอะไรที่เรา", contactAccent: "ช่วยเดินหน้าต่อได้?", contactBody: "บอกเราเรื่องวัสดุ สเปก หรือความท้าทายด้านซัพพลาย ทีมงานจะติดต่อกลับโดยตรง",
    name: "ชื่อของคุณ", workEmail: "อีเมลงาน", companyName: "บริษัท", interest: "หัวข้อที่สนใจ", message: "เราช่วยอะไรได้บ้าง?", send: "ส่งคำถาม", sending: "กำลังส่ง…", footer: "การจัดหาแอนทิโมนีทั่วโลก ที่ประสานงานอย่างชัดเจน",
  },
  ms: {
    selectLanguage: "Pilih bahasa", company: "Syarikat", services: "Perkhidmatan", compliance: "Pematuhan", insights: "Wawasan", contact: "Hubungi", inquiry: "Mulakan pertanyaan",
    heroEyebrow: "Bekalan antimoni global · Ditubuhkan 1993", heroTitle: "Mineral kritikal.", heroAccent: "Komitmen yang jelas.", heroLead: "Syarikat perdagangan bersepadu yang menghubungkan sumber antimoni ketulenan tinggi dengan industri di seluruh dunia.", explore: "Terokai keupayaan kami", meet: "Kenali Wohnen",
    servicesEyebrow: "Perkhidmatan bersepadu", servicesTitle: "Sembilan keupayaan.", servicesAccent: "Satu laluan yang jelas.", servicesIntro: "Setiap perkhidmatan boleh berdiri sendiri. Bersama-sama, ia menghubungkan sumber kepada pelanggan.",
    complianceEyebrow: "Pematuhan & dokumentasi", complianceTitle: "Perdagangan merentas sempadan.", complianceAccent: "Tanpa titik buta.", complianceBody: "Wohnen menyelaras rekod komersial, dokumentasi kawal selia dan rakan pakar bagi setiap penghantaran.", complianceCta: "Minta dokumen pematuhan",
    contactEyebrow: "Mulakan perbualan", contactTitle: "Apa yang boleh kami", contactAccent: "gerakkan bersama?", contactBody: "Beritahu kami tentang bahan, spesifikasi atau cabaran bekalan anda. Pasukan kami akan membalas secara langsung.",
    name: "Nama anda", workEmail: "E-mel kerja", companyName: "Syarikat", interest: "Bidang minat", message: "Bagaimana kami boleh membantu?", send: "Hantar pertanyaan", sending: "Menghantar…", footer: "Bekalan antimoni global, diselaras dengan jelas.",
  },
  "zh-CN": {
    selectLanguage: "选择语言", company: "公司", services: "服务", compliance: "合规", insights: "市场洞察", contact: "联系", inquiry: "开始咨询",
    heroEyebrow: "全球锑供应 · 始于1993年", heroTitle: "关键矿产。", heroAccent: "明确承诺。", heroLead: "一体化贸易公司，将负责任的高纯度锑来源与全球工业客户连接起来。", explore: "了解我们的能力", meet: "认识 Wohnen",
    servicesEyebrow: "一体化服务", servicesTitle: "九项能力。", servicesAccent: "一条清晰路径。", servicesIntro: "每项服务均可独立提供，组合后形成从资源端到客户的协调路径。",
    complianceEyebrow: "合规与文件", complianceTitle: "跨境贸易。", complianceAccent: "全程清晰可见。", complianceBody: "Wohnen 为每批货物协调商业记录、监管文件和专业合作伙伴。", complianceCta: "索取合规文件",
    contactEyebrow: "开始交流", contactTitle: "我们能如何", contactAccent: "推动您的项目？", contactBody: "请告诉我们您的材料、规格或供应挑战，我们的团队将直接回复。",
    name: "您的姓名", workEmail: "工作邮箱", companyName: "公司", interest: "感兴趣的领域", message: "我们能如何帮助？", send: "提交咨询", sending: "正在发送…", footer: "全球锑供应，清晰协调。",
  },
  de: {
    selectLanguage: "Sprache wählen", company: "Unternehmen", services: "Leistungen", compliance: "Compliance", insights: "Einblicke", contact: "Kontakt", inquiry: "Anfrage starten",
    heroEyebrow: "Globale Antimonversorgung · Seit 1993", heroTitle: "Kritische Mineralien.", heroAccent: "Klare Zusagen.", heroLead: "Ein integriertes Handelshaus, das verantwortungsvolle Quellen für hochreines Antimon mit Industrien weltweit verbindet.", explore: "Unsere Leistungen", meet: "Wohnen kennenlernen",
    servicesEyebrow: "Integrierte Leistungen", servicesTitle: "Neun Kompetenzen.", servicesAccent: "Ein klarer Weg.", servicesIntro: "Jede Leistung funktioniert einzeln. Gemeinsam bilden sie einen koordinierten Weg von der Quelle zum Kunden.",
    complianceEyebrow: "Compliance & Dokumentation", complianceTitle: "Handel über Grenzen.", complianceAccent: "Ohne blinde Flecken.", complianceBody: "Wohnen koordiniert Handelsunterlagen, regulatorische Dokumente und Fachpartner für jede Lieferung.", complianceCta: "Compliance-Dokumente anfordern",
    contactEyebrow: "Gespräch beginnen", contactTitle: "Was können wir", contactAccent: "gemeinsam voranbringen?", contactBody: "Nennen Sie uns Material, Spezifikation oder Lieferaufgabe. Unser Team antwortet direkt.",
    name: "Ihr Name", workEmail: "Geschäftliche E-Mail", companyName: "Unternehmen", interest: "Interessengebiet", message: "Wie können wir helfen?", send: "Anfrage senden", sending: "Wird gesendet…", footer: "Globale Antimonversorgung, klar koordiniert.",
  },
  ar: {
    selectLanguage: "اختر اللغة", company: "الشركة", services: "الخدمات", compliance: "الامتثال", insights: "رؤى السوق", contact: "اتصل بنا", inquiry: "ابدأ استفساراً",
    heroEyebrow: "إمداد عالمي بالأنتيمون · منذ 1993", heroTitle: "معادن حيوية.", heroAccent: "التزامات واضحة.", heroLead: "شركة تجارية متكاملة تربط المصادر المسؤولة للأنتيمون عالي النقاء بالصناعات حول العالم.", explore: "استكشف قدراتنا", meet: "تعرّف على Wohnen",
    servicesEyebrow: "خدمات متكاملة", servicesTitle: "تسع قدرات.", servicesAccent: "مسار واحد واضح.", servicesIntro: "يمكن تقديم كل خدمة منفردة، وتتكامل معاً في مسار من المصدر إلى العميل.",
    complianceEyebrow: "الامتثال والوثائق", complianceTitle: "تجارة عبر الحدود.", complianceAccent: "من دون نقاط عمياء.", complianceBody: "تنسق Wohnen السجلات التجارية والوثائق التنظيمية والشركاء المتخصصين لكل شحنة.", complianceCta: "اطلب وثائق الامتثال",
    contactEyebrow: "ابدأ محادثة", contactTitle: "ما الذي يمكننا", contactAccent: "دفعه إلى الأمام؟", contactBody: "أخبرنا عن المادة أو المواصفات أو تحدي الإمداد، وسيتواصل فريقنا معك مباشرة.",
    name: "اسمك", workEmail: "البريد المهني", companyName: "الشركة", interest: "مجال الاهتمام", message: "كيف يمكننا مساعدتك؟", send: "إرسال الاستفسار", sending: "جارٍ الإرسال…", footer: "إمداد عالمي بالأنتيمون، بتنسيق واضح.",
  },
  my: {
    selectLanguage: "ဘာသာစကားရွေးပါ", company: "ကုမ္ပဏီ", services: "ဝန်ဆောင်မှုများ", compliance: "စည်းမျဉ်းလိုက်နာမှု", insights: "ဈေးကွက်အမြင်", contact: "ဆက်သွယ်ရန်", inquiry: "စုံစမ်းမေးမြန်းရန်",
    heroEyebrow: "ကမ္ဘာလုံးဆိုင်ရာ အန်တီမိုနီ ထောက်ပံ့မှု · ၁၉၉၃ မှစ၍", heroTitle: "အရေးပါသော သတ္တုများ။", heroAccent: "ရှင်းလင်းသော ကတိကဝတ်များ။", heroLead: "တာဝန်ယူမှုရှိသော သန့်စင်အန်တီမိုနီ အရင်းအမြစ်များကို ကမ္ဘာတစ်ဝန်း စက်မှုလုပ်ငန်းများနှင့် ချိတ်ဆက်ပေးပါသည်။", explore: "ကျွန်ုပ်တို့၏ စွမ်းရည်များ", meet: "Wohnen ကို သိရှိရန်",
    servicesEyebrow: "ပေါင်းစပ်ဝန်ဆောင်မှုများ", servicesTitle: "စွမ်းရည် ကိုးမျိုး။", servicesAccent: "ရှင်းလင်းသော လမ်းကြောင်းတစ်ခု။", servicesIntro: "ဝန်ဆောင်မှုတစ်ခုချင်းစီကို သီးခြားအသုံးပြုနိုင်ပြီး အတူတကွ အရင်းအမြစ်မှ ဖောက်သည်အထိ ချိတ်ဆက်ပေးသည်။",
    complianceEyebrow: "စည်းမျဉ်းနှင့် စာရွက်စာတမ်း", complianceTitle: "နယ်စပ်ဖြတ်ကျော် ကုန်သွယ်မှု။", complianceAccent: "မရှင်းလင်းမှု မရှိစေဘဲ။", complianceBody: "Wohnen သည် ပို့ဆောင်မှုတိုင်းအတွက် ကုန်သွယ်ရေးမှတ်တမ်းများ၊ စည်းမျဉ်းစာရွက်စာတမ်းများနှင့် ကျွမ်းကျင်မိတ်ဖက်များကို ညှိနှိုင်းပေးသည်။", complianceCta: "စည်းမျဉ်းစာရွက်စာတမ်း တောင်းရန်",
    contactEyebrow: "စကားစတင်ပြောကြားရန်", contactTitle: "ကျွန်ုပ်တို့ ဘာကို", contactAccent: "ရှေ့ဆက်ကူညီနိုင်မလဲ?", contactBody: "ပစ္စည်း၊ သတ်မှတ်ချက် သို့မဟုတ် ထောက်ပံ့ရေးအခက်အခဲကို ပြောပြပါ။ ကျွန်ုပ်တို့အဖွဲ့ တိုက်ရိုက်ပြန်လည်ဆက်သွယ်ပါမည်။",
    name: "သင့်အမည်", workEmail: "လုပ်ငန်းအီးမေးလ်", companyName: "ကုမ္ပဏီ", interest: "စိတ်ဝင်စားသည့်ကဏ္ဍ", message: "ဘယ်လိုကူညီရမလဲ?", send: "မေးမြန်းချက်ပို့ရန်", sending: "ပို့နေသည်…", footer: "ကမ္ဘာလုံးဆိုင်ရာ အန်တီမိုနီ ထောက်ပံ့မှုကို ရှင်းလင်းစွာ ညှိနှိုင်းပေးသည်။",
  },
  lo: {
    selectLanguage: "ເລືອກພາສາ", company: "ບໍລິສັດ", services: "ບໍລິການ", compliance: "ການປະຕິບັດຕາມ", insights: "ຂໍ້ມູນຕະຫຼາດ", contact: "ຕິດຕໍ່", inquiry: "ເລີ່ມສອບຖາມ",
    heroEyebrow: "ການສະໜອງແອນຕິໂມນີທົ່ວໂລກ · ຕັ້ງແຕ່ 1993", heroTitle: "ແຮ່ທາດສຳຄັນ.", heroAccent: "ຄຳໝັ້ນສັນຍາທີ່ຊັດເຈນ.", heroLead: "ບໍລິສັດການຄ້າຄົບວົງຈອນ ເຊື່ອມຕໍ່ແຫຼ່ງແອນຕິໂມນີຄວາມບໍລິສຸດສູງກັບອຸດສາຫະກຳທົ່ວໂລກ.", explore: "ເບິ່ງຄວາມສາມາດ", meet: "ຮູ້ຈັກ Wohnen",
    servicesEyebrow: "ບໍລິການຄົບວົງຈອນ", servicesTitle: "ເກົ້າຄວາມສາມາດ.", servicesAccent: "ໜຶ່ງເສັ້ນທາງທີ່ຊັດເຈນ.", servicesIntro: "ແຕ່ລະບໍລິການໃຊ້ແຍກໄດ້ ແລະເມື່ອລວມກັນຈະເຊື່ອມຈາກແຫຼ່ງຜະລິດເຖິງລູກຄ້າ.",
    complianceEyebrow: "ກົດລະບຽບແລະເອກະສານ", complianceTitle: "ການຄ້າຂ້າມແດນ.", complianceAccent: "ໂປ່ງໃສທຸກຂັ້ນຕອນ.", complianceBody: "Wohnen ປະສານງານເອກະສານການຄ້າ ກົດລະບຽບ ແລະຜູ້ຊ່ຽວຊານສຳລັບທຸກການຂົນສົ່ງ.", complianceCta: "ຂໍເອກະສານກົດລະບຽບ",
    contactEyebrow: "ເລີ່ມການສົນທະນາ", contactTitle: "ພວກເຮົາຊ່ວຍ", contactAccent: "ຂັບເຄື່ອນຫຍັງໄດ້?", contactBody: "ບອກພວກເຮົາເຖິງວັດສະດຸ ສະເປັກ ຫຼືຄວາມທ້າທາຍດ້ານການສະໜອງ. ທີມງານຈະຕອບກັບໂດຍກົງ.",
    name: "ຊື່ຂອງທ່ານ", workEmail: "ອີເມວວຽກ", companyName: "ບໍລິສັດ", interest: "ຫົວຂໍ້ທີ່ສົນໃຈ", message: "ພວກເຮົາຊ່ວຍຫຍັງໄດ້?", send: "ສົ່ງຄຳຖາມ", sending: "ກຳລັງສົ່ງ…", footer: "ການສະໜອງແອນຕິໂມນີທົ່ວໂລກ ປະສານງານຢ່າງຊັດເຈນ.",
  },
  ko: {
    selectLanguage: "언어 선택", company: "회사", services: "서비스", compliance: "컴플라이언스", insights: "시장 인사이트", contact: "문의", inquiry: "상담 시작",
    heroEyebrow: "글로벌 안티모니 공급 · 1993년 설립", heroTitle: "핵심 광물.", heroAccent: "명확한 약속.", heroLead: "책임 있는 고순도 안티모니 공급원과 전 세계 산업을 연결하는 통합 무역 회사입니다.", explore: "역량 살펴보기", meet: "Wohnen 소개",
    servicesEyebrow: "통합 서비스", servicesTitle: "아홉 가지 역량.", servicesAccent: "하나의 명확한 경로.", servicesIntro: "각 서비스는 독립적으로 제공되며, 함께 자원에서 고객까지 연결된 경로를 만듭니다.",
    complianceEyebrow: "컴플라이언스 및 문서", complianceTitle: "국경을 넘는 거래.", complianceAccent: "사각지대 없이.", complianceBody: "Wohnen은 모든 선적에 필요한 상업 기록, 규제 문서 및 전문 파트너를 조율합니다.", complianceCta: "컴플라이언스 문서 요청",
    contactEyebrow: "대화 시작", contactTitle: "무엇을 함께", contactAccent: "진전시킬까요?", contactBody: "자재, 사양 또는 공급 과제를 알려주시면 담당 팀이 직접 답변드립니다.",
    name: "이름", workEmail: "업무용 이메일", companyName: "회사", interest: "관심 분야", message: "어떻게 도와드릴까요?", send: "문의 보내기", sending: "전송 중…", footer: "명확하게 조율되는 글로벌 안티모니 공급.",
  },
  ja: {
    selectLanguage: "言語を選択", company: "会社情報", services: "サービス", compliance: "コンプライアンス", insights: "市場情報", contact: "お問い合わせ", inquiry: "相談を始める",
    heroEyebrow: "グローバルなアンチモン供給 · 1993年創業", heroTitle: "重要鉱物。", heroAccent: "明確な約束。", heroLead: "責任ある高純度アンチモンの供給源と世界の産業を結ぶ、総合商社です。", explore: "私たちの機能", meet: "Wohnenについて",
    servicesEyebrow: "統合サービス", servicesTitle: "9つの機能。", servicesAccent: "一つの明確な道筋。", servicesIntro: "各サービスは単独でも利用でき、組み合わせることで資源から顧客までを一貫してつなぎます。",
    complianceEyebrow: "コンプライアンスと文書", complianceTitle: "国境を越える取引。", complianceAccent: "見えない部分を残さない。", complianceBody: "Wohnenは各出荷に必要な商業記録、規制文書、専門パートナーを調整します。", complianceCta: "コンプライアンス文書を依頼",
    contactEyebrow: "対話を始める", contactTitle: "何を一緒に", contactAccent: "前進させますか？", contactBody: "材料、仕様、供給上の課題をお知らせください。担当チームが直接ご回答します。",
    name: "お名前", workEmail: "勤務先メール", companyName: "会社名", interest: "関心分野", message: "どのようにお手伝いできますか？", send: "問い合わせを送信", sending: "送信中…", footer: "明確な連携による、グローバルなアンチモン供給。",
  },
  fr: {
    selectLanguage: "Choisir la langue", company: "Entreprise", services: "Services", compliance: "Conformité", insights: "Analyses", contact: "Contact", inquiry: "Démarrer une demande",
    heroEyebrow: "Approvisionnement mondial en antimoine · Depuis 1993", heroTitle: "Minéraux critiques.", heroAccent: "Engagements clairs.", heroLead: "Une maison de négoce intégrée reliant des sources responsables d’antimoine de haute pureté aux industries du monde entier.", explore: "Découvrir nos capacités", meet: "Découvrir Wohnen",
    servicesEyebrow: "Services intégrés", servicesTitle: "Neuf capacités.", servicesAccent: "Une voie claire.", servicesIntro: "Chaque service fonctionne seul. Ensemble, ils créent un parcours coordonné de la ressource au client.",
    complianceEyebrow: "Conformité et documentation", complianceTitle: "Le commerce transfrontalier.", complianceAccent: "Sans zone d’ombre.", complianceBody: "Wohnen coordonne les documents commerciaux, réglementaires et les partenaires spécialisés pour chaque expédition.", complianceCta: "Demander les documents de conformité",
    contactEyebrow: "Démarrer un échange", contactTitle: "Que pouvons-nous", contactAccent: "faire avancer ?", contactBody: "Parlez-nous du matériau, des spécifications ou de votre défi d’approvisionnement. Notre équipe vous répondra directement.",
    name: "Votre nom", workEmail: "E-mail professionnel", companyName: "Entreprise", interest: "Domaine d’intérêt", message: "Comment pouvons-nous vous aider ?", send: "Envoyer la demande", sending: "Envoi…", footer: "Approvisionnement mondial en antimoine, coordonné avec clarté.",
  },
};
