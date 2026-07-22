export type Service = {
  slug: string;
  number: string;
  shortTitle: string;
  title: string;
  kicker: string;
  summary: string;
  body: string[];
  image: string;
  commitments: string[];
};

export const services: Service[] = [
  {
    slug: "mining",
    number: "01",
    shortTitle: "Mining",
    title: "Resource Development",
    kicker: "Responsible sourcing partnerships",
    summary: "A dependable antimony supply chain begins with carefully selected, long-term mining relationships.",
    body: [
      "Wohnen’s mining network forms the foundation of a dependable and responsible antimony supply chain. Rather than relying on a single source, we work closely with carefully selected mining partners in Southeast Asia who share our commitment to responsible resource development, operational integrity, and consistent production.",
      "Every relationship is built on long-term collaboration, allowing us to maintain visibility over production schedules, material availability, and quality expectations from the beginning of the supply chain. This strong foundation helps reduce sourcing uncertainty while creating greater confidence for every customer we serve.",
    ],
    image: "/media/services/mining.jpg",
    commitments: ["Selected regional partners", "Production visibility", "Long-term source continuity", "Responsible resource development"],
  },
  {
    slug: "transportation",
    number: "02",
    shortTitle: "Transport",
    title: "Movement from Source",
    kicker: "Coordinated inland logistics",
    summary: "Safe, carefully planned movement from mining locations to processing, storage, and export points.",
    body: [
      "Efficient transportation is essential to maintaining the integrity of every shipment. Through Wohnen’s network of experienced logistics partners, we coordinate the safe movement of antimony materials from mining locations to processing facilities, storage terminals, and export ports.",
      "Every transportation stage is carefully planned to reduce unnecessary delays while maintaining proper handling procedures. Continuous communication with our logistics partners allows us to anticipate potential challenges before they affect delivery schedules.",
    ],
    image: "/media/services/transportation.jpg",
    commitments: ["Route planning", "Proper material handling", "Partner coordination", "Schedule visibility"],
  },
  {
    slug: "customs-clearance",
    number: "03",
    shortTitle: "Customs",
    title: "Compliance and Documentation",
    kicker: "Precision across borders",
    summary: "Specialist coordination of documentation and regulatory requirements throughout the export process.",
    body: [
      "International trade requires more than moving products across borders—it requires precision, compliance, and experience. Wohnen’s customs clearance partners work closely with us to prepare the necessary documentation and coordinate regulatory requirements throughout the export process.",
      "Every shipment is managed with careful attention to customs procedures, helping minimize unnecessary delays and ensuring smoother border clearance. Our knowledge of international documentation requirements contributes to a more efficient transaction from origin to destination.",
    ],
    image: "/media/services/customs-clearance.jpg",
    commitments: ["Export documentation", "Regulatory coordination", "Customs procedure oversight", "Delay prevention"],
  },
  {
    slug: "processing",
    number: "04",
    shortTitle: "Processing",
    title: "Material Transformation",
    kicker: "Commercially suitable feedstock",
    summary: "Coordinated transformation of raw material under disciplined quality and production expectations.",
    body: [
      "The processing stage plays an important role in preparing antimony materials for commercial applications. Working alongside experienced processing partners, Wohnen oversees the transformation of raw materials into commercially suitable feedstock while maintaining strict quality expectations throughout the process.",
      "Every stage is managed with careful coordination to promote consistency and production efficiency. Our collaborative relationships help maintain stable production schedules while supporting long-term supply continuity.",
    ],
    image: "/media/services/processing.jpg",
    commitments: ["Feedstock preparation", "Quality expectations", "Production efficiency", "Continuity planning"],
  },
  {
    slug: "smelting",
    number: "05",
    shortTitle: "Smelting",
    title: "Refining of Antimony",
    kicker: "Commercial-grade output",
    summary: "Experienced metallurgical partnerships focused on purity, consistency, and dependable production.",
    body: [
      "Smelting transforms processed antimony concentrates into high-quality commercial-grade metal suitable for industrial applications. Through trusted smelting partners, Wohnen supports production processes designed to achieve consistent purity levels while maintaining strict operational standards.",
      "Each production batch is carefully monitored to promote uniform quality and dependable output. Close collaboration throughout the smelting process enables visibility from production through final shipment.",
      "Our smelting partnerships emphasize consistency, efficiency, and long-term production reliability. Coordinated schedules and regular communication help ensure material availability while supporting stable supply commitments and changing customer requirements.",
    ],
    image: "/media/services/smelting.jpg",
    commitments: ["Commercial-grade refining", "Consistent purity", "Trusted smelting partners", "End-to-end production coordination"],
  },
  {
    slug: "certification",
    number: "06",
    shortTitle: "Certification",
    title: "Quality Assurance Services",
    kicker: "Independent quality evidence",
    summary: "Testing and certification that confirms specifications and supports confidence between supplier and customer.",
    body: [
      "Certification provides the independent verification that today’s global customers expect when purchasing strategic minerals. Wohnen works closely with qualified laboratories and recognized inspection partners to confirm product specifications and support quality assurance throughout the supply chain.",
      "Testing procedures help verify chemical composition, product consistency, and commercial specifications before shipment. Every certification contributes to greater transparency and confidence between supplier and customer.",
    ],
    image: "/media/services/certification.jpg",
    commitments: ["Qualified laboratories", "Composition verification", "Specification confirmation", "Pre-shipment evidence"],
  },
  {
    slug: "storage",
    number: "07",
    shortTitle: "Storage",
    title: "Strategic Stock Inventory",
    kicker: "Planned material availability",
    summary: "Secure inventory positioned to improve availability, response time, and distribution efficiency.",
    body: [
      "Strategic inventory management allows us to respond quickly to customer requirements while supporting dependable supply continuity. Through our storage partners, commercial-grade antimony inventory is maintained in secure facilities positioned to support efficient domestic and international distribution.",
      "Inventory planning is coordinated with production schedules to improve product availability while reducing delivery lead times.",
    ],
    image: "/media/services/storage.jpg",
    commitments: ["Secure partner facilities", "Inventory planning", "Faster response", "Distribution readiness"],
  },
  {
    slug: "inspection",
    number: "08",
    shortTitle: "Inspection",
    title: "Independent Verification",
    kicker: "Oversight before departure",
    summary: "Third-party checks of product quality, condition, packaging, and loading at critical transaction points.",
    body: [
      "Independent inspection strengthens confidence throughout every stage of the transaction. Wohnen’s inspection partners conduct thorough verification of product quality, shipment condition, packaging, and loading procedures before cargo leaves its point of origin.",
      "These inspections help confirm that shipments meet agreed commercial specifications while maintaining transparency throughout the delivery process.",
    ],
    image: "/media/services/inspection.jpg",
    commitments: ["Product verification", "Packaging checks", "Loading oversight", "Commercial specification review"],
  },
  {
    slug: "shipment",
    number: "09",
    shortTitle: "Shipment",
    title: "Worldwide Delivery Services",
    kicker: "From source to destination",
    summary: "Continuous logistics coordination and shipment monitoring through successful international delivery.",
    body: [
      "The final shipment represents the successful coordination of every stage within our integrated supply chain. From production planning and inventory management to documentation, logistics, and export coordination, every shipment is carefully organized to support reliable international delivery.",
      "Our commitment does not end once cargo leaves the port. We continue monitoring progress, providing updates, coordinating documentation, and working closely with logistics partners until delivery is successfully completed.",
      "This end-to-end approach reflects our philosophy of building long-term customer relationships based on trust, accountability, and service excellence.",
    ],
    image: "/media/services/shipment.jpg",
    commitments: ["Worldwide delivery", "Global logistics management", "Order fulfillment", "Source-to-destination monitoring"],
  },
];

export const timeline = [
  {
    year: "1993",
    title: "Wohnen Company Founded",
    label: "International Trading House",
    copy: "Wohnen begins as an international trading house, managing sourcing, logistics, financing, and delivery across complex cross-border transactions.",
    image: "/media/company/timeline-1993.jpg",
  },
  {
    year: "2000",
    title: "Entered Defense Technology",
    label: "Electronic Warfare Solutions",
    copy: "The company expands into integrated communication systems, including intercept, direction-finding, and jamming solutions—deepening its ability to manage highly technical international supply chains.",
    image: "/media/company/timeline-2000.jpg",
  },
  {
    year: "2018",
    title: "Expanded the Supply Chain",
    label: "Strategic Supply Chain Solutions",
    copy: "Wohnen strengthens its coordinated model across sourcing, logistics, compliance, financing, and customer delivery.",
    image: "/media/company/timeline-2018.jpg",
  },
  {
    year: "2023",
    title: "Diversified into Critical Minerals",
    label: "Antimony & Strategic Materials",
    copy: "The company develops a trusted end-to-end antimony pathway for governments and industries, bringing long-standing international trade experience into the critical-minerals sector.",
    image: "/media/company/timeline-2023.jpg",
  },
];

export const team = [
  { name: "Mr. Boonsom Nimaramwong", role: "CEO and Founder", image: "/media/team/boonsom-nimaramwong.jpg" },
  { name: "Peter K. Yap", role: "Chief Advisor", image: "/media/team/peter-k-yap.jpg" },
  { name: "Mr. Alexander Jeuck", role: "Commercial Consultant", image: "/media/team/alexander-jeuck.jpeg" },
  { name: "Mrs. W. Chaichawanpong", role: "EVP and Finance", image: "/media/team/w-chaichawanpong.jpg" },
  { name: "Mr. Phadungsit Kaewkan", role: "Chief Legal Officer", image: "/media/team/phadungsit-kaewkan.jpg" },
  { name: "Mr. Chayut Nimaramwong", role: "Chief Sales Officer", image: "/media/team/chayut-nimaramwong.jpg" },
  { name: "Miss B. Ngirnborisuth", role: "Chief People Officer", image: "/media/team/b-ngirnborisuth.jpg" },
  { name: "Mr. P. Panyuag", role: "Chief Technology Officer", image: "/media/team/p-panyuag.jpg" },
];

export const company = {
  founded: "1993",
  projects: "43+",
  partners: "37+",
  address: "74 Soi Watpracharabauthum, Rama 5 Rd., Dusit, Bangkok 10300, Thailand",
  phone: "+(66) 61 8893924",
  email: "sales@wohnensiam.com",
  coordinates: { latitude: 13.7901433, longitude: 100.5205467 },
  mapUrl: "https://www.google.com/maps/@13.7901433,100.5205467,18z",
  streetViewUrl: "https://www.google.com/maps/@13.7901433,100.5205467,3a,90y,263.47h,77.73t/data=!3m10!1e1!3m8!1s0RoXyAIwQapAcUlhJHiXdw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.269999999999996%26panoid%3D0RoXyAIwQapAcUlhJHiXdw%26yaw%3D263.47!7i16384!8i8192!9m2!1b1!2i45",
  about: [
    "For over 30 years, Wohnen has been a trusted end-to-end antimony supply chain partner, connecting responsible sourcing with global industrial demand.",
    "Established in 1993, Wohnen is an international trading house delivering high-purity, commercial-grade antimony products worldwide. Every transaction is supported by comprehensive KYC and a commitment to transparency from source to market.",
  ],
  mission: "To connect responsible antimony resources with global industries through a trusted end-to-end supply chain—working with experienced mining, processing, logistics, inspection, and delivery partners while maintaining transparency, reliability, and long-term success.",
  vision: "To empower industries worldwide through trust, responsible sourcing, operational excellence, and a transparent, reliable end-to-end antimony supply chain.",
};

export const faqs = [
  {
    question: "What makes Wohnen different?",
    answer: "Wohnen coordinates an integrated partner network across sourcing, transport, processing, refining, inspection, documentation, inventory, and delivery—giving customers one accountable commercial relationship across the supply chain.",
  },
  {
    question: "How does Wohnen support supply-chain transparency?",
    answer: "Requirements, documents, inspection points, production schedules, and shipment milestones are coordinated from source to market. Every commercial relationship is supported by comprehensive KYC and compliance controls.",
  },
  {
    question: "Can Wohnen support a custom supply program?",
    answer: "Yes. We work with buyers to define material specifications, inspection points, inventory requirements, delivery cadence, and the supporting documentation package.",
  },
  {
    question: "How is refined antimony quality confirmed?",
    answer: "Wohnen works with experienced smelting partners, qualified laboratories, and independent inspection specialists to verify chemical composition, product consistency, and agreed commercial specifications.",
  },
  {
    question: "Why do customers choose Wohnen as a long-term partner?",
    answer: "Customers gain experienced international coordination, clear communication, and a partner focused on predictable quality and delivery rather than one-off transactions.",
  },
];

export function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}
