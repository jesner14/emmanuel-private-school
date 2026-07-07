import { useState, useEffect } from "react";
import {
  Menu, X, Phone, Mail, MapPin, ChevronRight,
  BookOpen, Heart, Star, Users, Award, Globe,
  Baby, GraduationCap, Quote, Send, Clock,
  FileText, Music, Calculator, Monitor, BookMarked,
  PenLine, Sparkles
} from "lucide-react";

type Lang = "fr" | "en";

const WHATSAPP_URL = "https://wa.me/221778790303";

const T = {
  fr: {
    nav: {
      home: "Accueil", about: "À propos", programs: "Programmes",
      enrollment: "Inscriptions", activities: "Activités",
      gallery: "Galerie", contact: "Contact", enroll: "S'inscrire",
    },
    hero: {
      pre: "L'excellence éducative au cœur de Dakar",
      title: "Emmanuel Private School",
      sub: "Offrez à votre enfant un avenir sans frontières ! Nous formons les citoyens du monde de demain grâce à un enseignement bilingue Français – Anglais de haute qualité.",
      cta1: "Fiche de renseignement",
      cta2: "Nos programmes",
      ctaWhatsapp: "WhatsApp",
      badges: ["Crèche", "Maternelle", "Primaire"],
      quotes: [
        "Je veux apprendre l'anglais pour communiquer avec le monde et m'ouvrir aux autres.",
        "Je veux apprendre à lire pour construire mon avenir.",
        "Je veux apprendre à écrire pour laisser un jour ma trace sur la Terre.",
      ],
    },
    stats: [
      { v: "4", l: "Niveaux scolaires" },
      { v: "6+", l: "Matières & activités" },
      { v: "Bilingue", l: "Français & Anglais" },
      { v: "100%", l: "Ouverture internationale" },
    ],
    about: {
      tag: "Présentation",
      title: "Emmanuel Private School (EPS)",
      p1: "Située à Dakar, Emmanuel Private School est un établissement éducatif moderne qui offre un enseignement de qualité, axé sur l'excellence académique et l'ouverture internationale. L'école propose un programme riche et diversifié incluant notamment le français, l'anglais, les mathématiques, l'informatique, la lecture et des activités artistiques comme le piano.",
      p2: "EPS se distingue par son approche bilingue (français–anglais), permettant aux élèves de développer très tôt des compétences linguistiques solides. L'établissement accueille des élèves de différentes nationalités dans un cadre propice à l'épanouissement académique et social.",
      worldTitle: "Une école tournée vers le monde",
      worldP: "À Emmanuel Private School, les élèves sont formés pour devenir les citoyens du monde de demain, sans frontières. Que vous soyez au Sénégal ou à l'étranger, EPS offre un cadre rassurant et adapté — un choix idéal pour les familles de la diaspora ou les expatriés souhaitant une éducation bilingue de qualité.",
      visionTitle: "Vision & Mission",
      visionItems: [
        "Développer le potentiel de chaque enfant",
        "Renforcer les acquis scolaires",
        "Encourager la confiance en soi",
        "Préparer efficacement les élèves à la réussite académique et professionnelle",
      ],
      cta: "Nous contacter",
    },
    programs: {
      tag: "Nos Programmes",
      title: "Un parcours adapté à chaque âge",
      curriculumTitle: "Matières & activités",
      curriculum: [
        "Renforcement scolaire", "Français & Anglais", "Mathématiques",
        "Informatique", "Lecture", "Piano",
      ],
      levelsTitle: "Niveaux / Levels",
      items: [
        { level: "Crèche", sub: "Mini Section", age: "6 mois – 3 ans", desc: "Un espace chaleureux et sécurisé où les tout-petits évoluent à leur rythme, avec un encadrement bienveillant et des activités d'éveil.", feats: ["Activités sensorielles", "Éveil musical", "Soins personnalisés", "7h30 – 17h30"] },
        { level: "Préscolaire", sub: "Maternelle", age: "3 – 6 ans", desc: "Une pédagogie ludique et créative qui prépare l'enfant aux apprentissages fondamentaux tout en développant sa curiosité et sa sociabilité.", feats: ["Éveil à la lecture", "Arts plastiques", "Jeux éducatifs", "8h00 – 13h00"] },
        { level: "Primaire", sub: "CI – CP – CE", age: "6 – 10 ans", desc: "Un enseignement rigoureux et bilingue qui développe les compétences académiques fondamentales en français et en anglais.", feats: ["Programme bilingue", "Sciences & Maths", "Informatique", "Lun–Mar–Jeu–Ven : 8h–16h"] },
        { level: "Primaire", sub: "CM", age: "10 – 12 ans", desc: "Préparation avancée au collège avec renforcement scolaire, leadership et polyvalence pour réussir dans les classes supérieures.", feats: ["Renforcement scolaire", "Lecture avancée", "Piano & arts", "Mercredi : 8h–13h"] },
      ],
    },
    activities: {
      tag: "Activités",
      title: "Une éducation complète et polyvalente",
      sub: "EPS combine savoir, savoir-faire et savoir-être pour former une génération prête à relever les défis du monde moderne.",
      items: [
        { icon: "book", t: "Français & Anglais", d: "Enseignement bilingue dès le plus jeune âge pour une maîtrise linguistique solide." },
        { icon: "calc", t: "Mathématiques", d: "Renforcement des compétences logiques et analytiques à tous les niveaux." },
        { icon: "monitor", t: "Informatique", d: "Initiation aux outils numériques et à la culture technologique moderne." },
        { icon: "bookmark", t: "Lecture", d: "Développement de l'amour de la lecture et des compétences en compréhension." },
        { icon: "music", t: "Piano", d: "Activités artistiques pour éveiller la créativité et la sensibilité musicale." },
        { icon: "sparkles", t: "Renforcement scolaire", d: "Accompagnement personnalisé pour consolider les acquis et la confiance en soi." },
      ],
    },
    enrollment: {
      tag: "Inscriptions",
      title: "Rejoignez Emmanuel Private School",
      sub: "Avec EPS, votre enfant construit aujourd'hui le monde de demain ! Parents, où que vous soyez dans le monde, le Sénégal vous accueille.",
      documentsTitle: "Documents à fournir",
      documents: [
        "Relevé de notes ou bulletin",
        "Extrait de naissance",
        "2 photos d'identité",
        "Certificat de scolarité",
        "1 rame de papier",
      ],
      highlights: [
        "École bilingue (Français / Anglais)",
        "Encadrement de qualité",
        "Développement de la confiance en soi",
        "Ouverte aux élèves du monde entier",
      ],
      cta: "Demander la fiche de renseignement",
    },
    schedule: {
      tag: "Horaires",
      title: "Des horaires adaptés au bien-être",
      sub: "Des horaires adaptés pour favoriser l'apprentissage et le bien-être des élèves.",
      rows: [
        { level: "👶 Crèche", days: "Lundi au Vendredi", hours: "7h30 – 17h30" },
        { level: "🧸 Maternelle", days: "Lundi au Vendredi", hours: "8h00 – 13h00" },
        { level: "📘 Primaire", days: "Lun, Mar, Jeu, Ven", hours: "8h00 – 16h00" },
        { level: "📘 Primaire", days: "Mercredi", hours: "8h00 – 13h00" },
      ],
    },
    values: {
      tag: "Pourquoi nous choisir",
      title: "L'excellence à chaque étape",
      items: [
        { icon: "heart", t: "Environnement bienveillant", d: "Un cadre aimant où chaque enfant se sent en sécurité et valorisé au quotidien." },
        { icon: "book", t: "Enseignement bilingue", d: "Programmes en français et en anglais pour préparer les enfants au monde de demain." },
        { icon: "users", t: "Ouverture internationale", d: "Accueil des élèves de différentes nationalités dans un cadre multiculturel." },
        { icon: "star", t: "Encadrement de qualité", d: "Des enseignants expérimentés dévoués à la réussite de chaque élève." },
        { icon: "award", t: "Polyvalence", d: "Compétences linguistiques, scientifiques, artistiques et de leadership dès le plus jeune âge." },
        { icon: "globe", t: "Citoyens du monde", d: "Formation pour réussir dans les plus grandes carrières à l'échelle mondiale." },
      ],
    },
    gallery: { tag: "Notre École", title: "La vie à Emmanuel" },
    testimonials: {
      tag: "Témoignages",
      title: "Ce que disent les parents",
      items: [
        { name: "Aminata Diallo", role: "Maman de Léa — Maternelle", text: "Depuis que ma fille est à Emmanuel Private School, j'observe une évolution remarquable. Les enseignants sont attentionnés et professionnels. Je recommande vivement cet établissement." },
        { name: "Ibrahim Sow", role: "Papa de Karim — Primaire", text: "Une école où les enfants sont heureux d'aller chaque matin ! Le programme bilingue est excellent et la direction est très à l'écoute des parents." },
        { name: "Fatou Ndiaye", role: "Maman d'Amina — Crèche", text: "J'ai confié ma fille à l'équipe de la crèche en toute confiance. L'environnement est propre, sécurisé et les éducatrices sont vraiment bienveillantes." },
      ],
    },
    contact: {
      tag: "Contactez-nous",
      title: "Nous sommes à votre écoute",
      sub: "Pour toute information sur les inscriptions ou nos programmes, n'hésitez pas à nous contacter.",
      address: "Hann Mariste N° Y/130, Dakar, Sénégal",
      phone: "77 879 03 03",
      email: "epschooldakar@gmail.com",
      hours: "Voir les horaires par niveau ci-dessus",
      form: { name: "Votre nom", email: "Votre email", msg: "Votre message", send: "Envoyer le message", ok: "Message envoyé ! Merci." },
    },
    footer: {
      desc: "Avec EPS, votre enfant construit aujourd'hui le monde de demain !",
      domain: "www.emmanuelprivateschool.com",
      social: { facebook: "Facebook", tiktok: "TikTok", instagram: "Instagram" },
      emails: {
        contacts: "contacts@emmanuelprivateschool.com",
        comptabilite: "comptabilite@emmanuelprivateschool.com",
        direction: "direction@emmanuelprivateschool.com",
        ceo: "ceo@emmanuelprivateschool.com",
      },
      rights: "© 2025 Emmanuel Private School. Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home", about: "About", programs: "Programs",
      enrollment: "Enrollment", activities: "Activities",
      gallery: "Gallery", contact: "Contact", enroll: "Enroll Now",
    },
    hero: {
      pre: "Educational excellence in the heart of Dakar",
      title: "Emmanuel Private School",
      sub: "Give your child a borderless future! We shape tomorrow's global citizens through high-quality bilingual French–English education.",
      cta1: "Information Form",
      cta2: "Our Programs",
      ctaWhatsapp: "WhatsApp",
      badges: ["Daycare", "Kindergarten", "Primary"],
      quotes: [
        "I want to learn English to communicate with the world and open myself to others.",
        "I want to learn to read to build my future.",
        "I want to learn to write to one day leave my mark on the world.",
      ],
    },
    stats: [
      { v: "4", l: "School levels" },
      { v: "6+", l: "Subjects & activities" },
      { v: "Bilingual", l: "French & English" },
      { v: "100%", l: "International outlook" },
    ],
    about: {
      tag: "About Us",
      title: "Emmanuel Private School (EPS)",
      p1: "Located in Dakar, Emmanuel Private School is a modern educational institution offering quality teaching focused on academic excellence and international openness. The school offers a rich and diverse program including French, English, mathematics, computer science, reading, and artistic activities such as piano.",
      p2: "EPS stands out for its bilingual approach (French–English), enabling students to develop strong language skills early on. The school welcomes students of different nationalities in an environment conducive to academic and social development.",
      worldTitle: "A school open to the world",
      worldP: "At Emmanuel Private School, students are trained to become tomorrow's global citizens, without borders. Whether you are in Senegal or abroad, EPS offers a reassuring and adapted setting — an ideal choice for diaspora families or expatriates seeking quality bilingual education.",
      visionTitle: "Vision & Mission",
      visionItems: [
        "Develop each child's potential",
        "Strengthen academic foundations",
        "Encourage self-confidence",
        "Effectively prepare students for academic and professional success",
      ],
      cta: "Contact Us",
    },
    programs: {
      tag: "Our Programs",
      title: "A pathway for every age",
      curriculumTitle: "Subjects & Activities",
      curriculum: [
        "Academic reinforcement", "French & English", "Mathematics",
        "Computer Science", "Reading", "Piano",
      ],
      levelsTitle: "Levels",
      items: [
        { level: "Daycare", sub: "Mini Section", age: "6 months – 3 years", desc: "A warm and secure space where toddlers develop at their own pace, with caring supervision and awakening activities.", feats: ["Sensory activities", "Musical awakening", "Personalized care", "7:30 AM – 5:30 PM"] },
        { level: "Preschool", sub: "Kindergarten", age: "3 – 6 years", desc: "A playful and creative pedagogy that prepares children for fundamental learning while developing curiosity and social skills.", feats: ["Early literacy", "Visual arts", "Educational play", "8:00 AM – 1:00 PM"] },
        { level: "Primary", sub: "CI – CP – CE", age: "6 – 10 years", desc: "A rigorous bilingual curriculum that develops fundamental academic skills in French and English.", feats: ["Bilingual program", "Science & Maths", "Computer Science", "Mon–Tue–Thu–Fri: 8 AM–4 PM"] },
        { level: "Primary", sub: "CM", age: "10 – 12 years", desc: "Advanced preparation for middle school with academic reinforcement, leadership and versatility for higher-level success.", feats: ["Academic reinforcement", "Advanced reading", "Piano & arts", "Wednesday: 8 AM–1 PM"] },
      ],
    },
    activities: {
      tag: "Activities",
      title: "A complete and versatile education",
      sub: "EPS combines knowledge, skills, and character to form a generation ready to meet the challenges of the modern world.",
      items: [
        { icon: "book", t: "French & English", d: "Bilingual teaching from an early age for solid language mastery." },
        { icon: "calc", t: "Mathematics", d: "Strengthening logical and analytical skills at all levels." },
        { icon: "monitor", t: "Computer Science", d: "Introduction to digital tools and modern technological culture." },
        { icon: "bookmark", t: "Reading", d: "Developing a love of reading and comprehension skills." },
        { icon: "music", t: "Piano", d: "Artistic activities to awaken creativity and musical sensitivity." },
        { icon: "sparkles", t: "Academic Reinforcement", d: "Personalized support to consolidate learning and self-confidence." },
      ],
    },
    enrollment: {
      tag: "Enrollment",
      title: "Join Emmanuel Private School",
      sub: "With EPS, your child is building tomorrow's world today! Parents, wherever you are in the world, Senegal welcomes you.",
      documentsTitle: "Required Documents",
      documents: [
        "Report card or academic transcript",
        "Birth certificate",
        "2 passport photos",
        "School certificate",
        "1 ream of paper",
      ],
      highlights: [
        "Bilingual school (French / English)",
        "Quality supervision",
        "Self-confidence development",
        "Open to students worldwide",
      ],
      cta: "Request Information Form",
    },
    schedule: {
      tag: "School Hours",
      title: "Schedules adapted for wellbeing",
      sub: "Schedules designed to promote learning and student wellbeing.",
      rows: [
        { level: "👶 Daycare", days: "Monday to Friday", hours: "7:30 AM – 5:30 PM" },
        { level: "🧸 Kindergarten", days: "Monday to Friday", hours: "8:00 AM – 1:00 PM" },
        { level: "📘 Primary", days: "Mon, Tue, Thu, Fri", hours: "8:00 AM – 4:00 PM" },
        { level: "📘 Primary", days: "Wednesday", hours: "8:00 AM – 1:00 PM" },
      ],
    },
    values: {
      tag: "Why choose us",
      title: "Excellence at every step",
      items: [
        { icon: "heart", t: "Caring environment", d: "A loving framework where every child feels safe and valued every single day." },
        { icon: "book", t: "Bilingual education", d: "Programs in French and English to prepare children for the world of tomorrow." },
        { icon: "users", t: "International openness", d: "Welcoming students of different nationalities in a multicultural setting." },
        { icon: "star", t: "Quality supervision", d: "Experienced teachers dedicated to every student's success and wellbeing." },
        { icon: "award", t: "Versatility", d: "Linguistic, scientific, artistic, and leadership skills from an early age." },
        { icon: "globe", t: "Global citizens", d: "Training to succeed in the greatest careers on a global scale." },
      ],
    },
    gallery: { tag: "Our School", title: "Life at Emmanuel" },
    testimonials: {
      tag: "Testimonials",
      title: "What parents say",
      items: [
        { name: "Aminata Diallo", role: "Mother of Léa — Kindergarten", text: "Since my daughter joined Emmanuel Private School, I have seen remarkable growth. The teachers are attentive and professional. I highly recommend this school." },
        { name: "Ibrahim Sow", role: "Father of Karim — Primary", text: "A school where children are happy to go every morning! The bilingual program is excellent and the management is very responsive to parents." },
        { name: "Fatou Ndiaye", role: "Mother of Amina — Daycare", text: "I entrusted my daughter to the daycare team with complete confidence. The environment is clean, secure and the educators are truly caring." },
      ],
    },
    contact: {
      tag: "Contact Us",
      title: "We are here for you",
      sub: "For any information about enrollment or our programs, do not hesitate to reach out.",
      address: "Hann Mariste N° Y/130, Dakar, Senegal",
      phone: "77 879 03 03",
      email: "epschooldakar@gmail.com",
      hours: "See level-specific hours above",
      form: { name: "Your name", email: "Your email", msg: "Your message", send: "Send Message", ok: "Message sent! Thank you." },
    },
    footer: {
      desc: "With EPS, your child is building tomorrow's world today!",
      domain: "www.emmanuelprivateschool.com",
      social: { facebook: "Facebook", tiktok: "TikTok", instagram: "Instagram" },
      emails: {
        contacts: "contacts@emmanuelprivateschool.com",
        comptabilite: "comptabilite@emmanuelprivateschool.com",
        direction: "direction@emmanuelprivateschool.com",
        ceo: "ceo@emmanuelprivateschool.com",
      },
      rights: "© 2025 Emmanuel Private School. All rights reserved.",
    },
  },
};

const HERO_IMAGES = [
  "/photos/eps-28.jpg",
  "/photos/eps-30.jpg",
  "/photos/eps-32.jpg",
  "/photos/eps-55.jpg",
];

const PROGRAM_IMAGES = [
  "/photos/eps-01.jpg",
  "/photos/eps-40.jpg",
  "/photos/eps-29.jpg",
  "/photos/eps-60.jpg",
];

const GALLERY_IMAGES = [
  { url: "/photos/eps-20.jpg", alt: "Élèves d'Emmanuel Private School" },
  { url: "/photos/eps-05.jpg", alt: "Enfants en pleine célébration" },
  { url: "/photos/eps-10.jpg", alt: "Élèves avec les drapeaux du Sénégal" },
  { url: "/photos/eps-33.jpg", alt: "Enfants aux couleurs du Sénégal" },
  { url: "/photos/eps-48.jpg", alt: "Journée culturelle à l'école" },
  { url: "/photos/eps-35.jpg", alt: "L'équipe pédagogique d'EPS" },
];

const LOGO_SRC = "/logo.jpeg";

function EpsLogo({ size = 44 }: { size?: number }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Emmanuel Private School"
      width={size}
      height={size}
      className="rounded-full object-cover flex-shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function NavLink({ label, href, onClick }: { label: string; href: string; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <a href={href} onClick={onClick} className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 relative group" style={{ fontFamily: "var(--font-body)" }}>
      {label}
      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 rounded-full" />
    </a>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent mb-3" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.12em" }}>
      <span className="w-4 h-px bg-accent" />
      {children}
      <span className="w-4 h-px bg-accent" />
    </span>
  );
}

function SectionTitle({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-black leading-tight ${light ? "text-white" : "text-foreground"}`} style={{ fontFamily: "var(--font-heading)" }}>
      {children}
    </h2>
  );
}

const valueIconMap: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  heart: ({ className, style }) => <Heart className={className} style={style} />,
  book: ({ className, style }) => <BookOpen className={className} style={style} />,
  users: ({ className, style }) => <Users className={className} style={style} />,
  star: ({ className, style }) => <Star className={className} style={style} />,
  award: ({ className, style }) => <Award className={className} style={style} />,
  globe: ({ className, style }) => <Globe className={className} style={style} />,
};

const activityIconMap: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  book: ({ className, style }) => <BookOpen className={className} style={style} />,
  calc: ({ className, style }) => <Calculator className={className} style={style} />,
  monitor: ({ className, style }) => <Monitor className={className} style={style} />,
  bookmark: ({ className, style }) => <BookMarked className={className} style={style} />,
  music: ({ className, style }) => <Music className={className} style={style} />,
  sparkles: ({ className, style }) => <Sparkles className={className} style={style} />,
};

const programIconMap = [Baby, School, BookOpen, GraduationCap];
const programColors = ["#e20a6f", "#116fb3", "#116fb3", "#e20a6f"];

function School({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 22v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
      <path d="M18 10h4" /><path d="M20 8v4" />
      <path d="M4 10h4" /><path d="M6 8v4" />
      <path d="M22 20h-8" /><path d="M18 18v2" />
      <path d="M2 20h8" /><path d="M6 18v2" />
      <path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="M12 22V12" />
    </svg>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [heroIdx, setHeroIdx] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const t = T[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setQuoteIdx(0);
    const id = setInterval(() => setQuoteIdx((i) => (i + 1) % t.hero.quotes.length), 4000);
    return () => clearInterval(id);
  }, [lang, t.hero.quotes.length]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setFormState({ name: "", email: "", msg: "" });
    setTimeout(() => setSent(false), 5000);
  }

  const navLinks = [
    { label: t.nav.home, id: "hero" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.programs, id: "programs" },
    { label: t.nav.enrollment, id: "enrollment" },
    { label: t.nav.activities, id: "activities" },
    { label: t.nav.gallery, id: "gallery" },
    { label: t.nav.contact, id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" style={{ fontFamily: "var(--font-body)" }}>
      {/* NAVBAR */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border" : "bg-white/80 backdrop-blur-sm"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 group">
              <EpsLogo size={48} />
              <div className="text-left hidden sm:block">
                <div className="text-sm font-black leading-none text-primary" style={{ fontFamily: "var(--font-heading)" }}>EMMANUEL</div>
                <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest leading-none mt-0.5">Private School</div>
              </div>
            </button>

            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((l) => (
                <NavLink key={l.id} label={l.label} href={`#${l.id}`} onClick={(e) => { e.preventDefault(); scrollTo(l.id); }} />
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center border border-border rounded-full overflow-hidden text-xs font-bold">
                <button onClick={() => setLang("fr")} className={`px-3 py-1.5 transition-colors ${lang === "fr" ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"}`}>FR</button>
                <button onClick={() => setLang("en")} className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"}`}>EN</button>
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold text-white transition-all hover:scale-105" style={{ background: "#25D366" }}>
                <WhatsAppIcon size={16} />
                <span className="hidden md:inline">{t.hero.ctaWhatsapp}</span>
              </a>

              <button onClick={() => scrollTo("enrollment")} className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 shadow-md" style={{ background: "#e20a6f", fontFamily: "var(--font-heading)" }}>
                {t.nav.enroll}
                <ChevronRight size={14} />
              </button>

              <button className="xl:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-border px-4 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="text-left text-base font-semibold text-foreground hover:text-primary transition-colors py-1">{l.label}</button>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white" style={{ background: "#25D366" }}>
              <WhatsAppIcon size={16} /> {t.hero.ctaWhatsapp}
            </a>
            <button onClick={() => scrollTo("enrollment")} className="px-5 py-3 rounded-full text-sm font-bold text-white text-center" style={{ background: "#e20a6f" }}>{t.nav.enroll}</button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="pt-16 lg:pt-18 min-h-screen flex items-center relative overflow-hidden">
        {/* Carousel background */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((img, i) => (
            <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === heroIdx ? "opacity-100" : "opacity-0"}`}>
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.05]" style={{ background: "#116fb3" }} />
          <div className="absolute bottom-0 -left-24 w-96 h-96 rounded-full opacity-[0.04]" style={{ background: "#e20a6f" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-4.5rem)]">
            <div className="flex flex-col justify-center lg:py-24">
              <p className="text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#e20a6f", fontFamily: "var(--font-body)" }}>{t.hero.pre}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-foreground mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                {t.hero.title}
              </h1>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-6 max-w-lg">{t.hero.sub}</p>

              {/* Rotating motivational quote */}
              <div className="mb-8 px-5 py-4 rounded-2xl border-l-4 bg-white/80 backdrop-blur-sm shadow-sm" style={{ borderColor: "#116fb3" }}>
                <div className="flex items-start gap-3">
                  <PenLine size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <p key={quoteIdx} className="text-sm italic text-foreground/80 leading-relaxed animate-in fade-in duration-500">
                    « {t.hero.quotes[quoteIdx]} »
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {t.hero.badges.map((b, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold border-2" style={{ borderColor: i % 2 === 0 ? "#e20a6f" : "#116fb3", color: i % 2 === 0 ? "#e20a6f" : "#116fb3", background: i % 2 === 0 ? "#fff0f6" : "#eef5fb", fontFamily: "var(--font-heading)" }}>
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button onClick={() => scrollTo("enrollment")} className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all" style={{ background: "#e20a6f", fontFamily: "var(--font-heading)" }}>
                  <FileText size={16} />
                  {t.hero.cta1}
                </button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all" style={{ background: "#25D366", fontFamily: "var(--font-heading)" }}>
                  <WhatsAppIcon size={16} />
                  {t.hero.ctaWhatsapp}
                </a>
                <button onClick={() => scrollTo("programs")} className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold border-2 border-primary text-primary hover:bg-secondary transition-all" style={{ fontFamily: "var(--font-heading)" }}>
                  {t.hero.cta2}
                </button>
              </div>
            </div>

            {/* Hero image with carousel dots */}
            <div className="relative hidden lg:flex items-center justify-center py-24">
              <div className="relative w-full max-w-md">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
                  <img src={HERO_IMAGES[heroIdx]} alt="Emmanuel Private School" className="w-full h-full object-cover transition-opacity duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                <div className="absolute -left-12 top-24 bg-white rounded-2xl shadow-xl px-5 py-4 z-20 border border-border">
                  <div className="text-2xl font-black text-primary" style={{ fontFamily: "var(--font-heading)" }}>EPS</div>
                  <div className="text-xs text-muted-foreground font-medium mt-0.5">Dakar, Sénégal</div>
                </div>
                <div className="absolute -right-8 bottom-28 rounded-2xl shadow-xl px-5 py-4 z-20 text-white" style={{ background: "#e20a6f" }}>
                  <div className="text-2xl font-black" style={{ fontFamily: "var(--font-heading)" }}>Bilingue</div>
                  <div className="text-xs font-medium opacity-90 mt-0.5">FR / EN</div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {HERO_IMAGES.map((_, i) => (
                    <button key={i} onClick={() => setHeroIdx(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === heroIdx ? "bg-primary w-6" : "bg-primary/30"}`} aria-label={`Slide ${i + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f4f6fa" />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-muted py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {t.stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl lg:text-3xl font-black" style={{ color: i % 2 === 0 ? "#116fb3" : "#e20a6f", fontFamily: "var(--font-heading)" }}>{s.v}</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
                <img src="/photos/eps-31.jpg" alt="Élèves en salle informatique à Emmanuel Private School" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-3xl -z-10" style={{ background: "#eef5fb" }} />
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg px-5 py-4 border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center"><Award size={18} className="text-primary" /></div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">Dakar, Sénégal</div>
                    <div className="text-sm font-bold text-foreground">Hann Mariste N° Y/130</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col gap-5">
              <Tag>{t.about.tag}</Tag>
              <SectionTitle>{t.about.title}</SectionTitle>
              <div className="w-16 h-1 rounded-full" style={{ background: "#e20a6f" }} />
              <p className="text-muted-foreground leading-relaxed">{t.about.p1}</p>
              <p className="text-muted-foreground leading-relaxed">{t.about.p2}</p>

              <h3 className="text-lg font-black text-primary mt-2" style={{ fontFamily: "var(--font-heading)" }}>{t.about.worldTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.about.worldP}</p>

              <h3 className="text-lg font-black text-primary" style={{ fontFamily: "var(--font-heading)" }}>{t.about.visionTitle}</h3>
              <ul className="space-y-2">
                {t.about.visionItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <ChevronRight size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <button onClick={() => scrollTo("contact")} className="self-start flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white mt-2 hover:scale-105 transition-all shadow-md" style={{ background: "#116fb3", fontFamily: "var(--font-heading)" }}>
                {t.about.cta}
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Tag>{t.programs.tag}</Tag>
            <SectionTitle>{t.programs.title}</SectionTitle>
          </div>

          {/* Curriculum chips */}
          <div className="mb-16 text-center">
            <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>{t.programs.curriculumTitle}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {t.programs.curriculum.map((c, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold text-white shadow-sm" style={{ background: i % 2 === 0 ? "#116fb3" : "#e20a6f" }}>
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>

          <h3 className="text-center text-lg font-bold text-foreground mb-8" style={{ fontFamily: "var(--font-heading)" }}>{t.programs.levelsTitle}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.programs.items.map((prog, i) => {
              const Icon = programIconMap[i];
              return (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <div className="relative h-44 overflow-hidden">
                    <img src={PROGRAM_IMAGES[i]} alt={prog.level} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${programColors[i]}44, transparent)` }} />
                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow" style={{ background: programColors[i] }}>
                      <Icon size={13} />
                      {prog.level}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: programColors[i] }}>{prog.sub}</div>
                    <div className="text-xs text-muted-foreground mb-2">{prog.age}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{prog.desc}</p>
                    <ul className="space-y-1.5">
                      {prog.feats.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: programColors[i] }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Tag>{t.schedule.tag}</Tag>
            <SectionTitle>{t.schedule.title}</SectionTitle>
            <p className="text-muted-foreground mt-3">{t.schedule.sub}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-5 py-3 text-left font-bold" style={{ fontFamily: "var(--font-heading)" }}>{lang === "fr" ? "Niveau" : "Level"}</th>
                  <th className="px-5 py-3 text-left font-bold" style={{ fontFamily: "var(--font-heading)" }}>{lang === "fr" ? "Jours" : "Days"}</th>
                  <th className="px-5 py-3 text-left font-bold" style={{ fontFamily: "var(--font-heading)" }}>{lang === "fr" ? "Horaires" : "Hours"}</th>
                </tr>
              </thead>
              <tbody>
                {t.schedule.rows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/50"}>
                    <td className="px-5 py-4 font-semibold">{row.level}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.days}</td>
                    <td className="px-5 py-4 font-medium text-primary">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Tag>{t.activities.tag}</Tag>
            <SectionTitle>{t.activities.title}</SectionTitle>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{t.activities.sub}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.activities.items.map((a, i) => {
              const Icon = activityIconMap[a.icon];
              const isBlue = i % 2 === 0;
              return (
                <div key={i} className="group p-7 rounded-2xl bg-white border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: isBlue ? "#eef5fb" : "#fff0f6" }}>
                    {Icon && <Icon className="w-5 h-5" style={{ color: isBlue ? "#116fb3" : "#e20a6f" }} />}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>{a.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Tag>{t.values.tag}</Tag>
            <SectionTitle>{t.values.title}</SectionTitle>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.values.items.map((v, i) => {
              const Icon = valueIconMap[v.icon];
              const isBlue = i % 3 !== 1;
              return (
                <div key={i} className="group p-7 rounded-2xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: isBlue ? "#eef5fb" : "#fff0f6" }}>
                    {Icon && <Icon className="w-5 h-5" style={{ color: isBlue ? "#116fb3" : "#e20a6f" }} />}
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>{v.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENROLLMENT */}
      <section id="enrollment" className="py-24 lg:py-32" style={{ background: "#116fb3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#f9a8d4", letterSpacing: "0.12em" }}>
                <span className="w-4 h-px bg-pink-300" />{t.enrollment.tag}<span className="w-4 h-px bg-pink-300" />
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>{t.enrollment.title}</h2>
              <p className="text-white/80 leading-relaxed mb-8">{t.enrollment.sub}</p>
              <ul className="space-y-3 mb-8">
                {t.enrollment.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollTo("contact")} className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-primary bg-white hover:scale-105 transition-all shadow-lg" style={{ fontFamily: "var(--font-heading)" }}>
                <FileText size={16} />
                {t.enrollment.cta}
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-black text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>{t.enrollment.documentsTitle}</h3>
              <ul className="space-y-4">
                {t.enrollment.documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 text-sm">
                    <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 lg:py-32" style={{ background: "#f4f6fa" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Tag>{t.gallery.tag}</Tag>
            <SectionTitle>{t.gallery.title}</SectionTitle>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`} style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}>
                <img src={img.url} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Tag>{t.testimonials.tag}</Tag>
            <SectionTitle>{t.testimonials.title}</SectionTitle>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((item, i) => (
              <div key={i} className="p-7 rounded-3xl border border-border flex flex-col gap-4 hover:shadow-lg transition-shadow">
                <Quote size={28} className="text-primary/20 flex-shrink-0" />
                <p className="text-foreground/80 text-sm leading-relaxed flex-1 italic">"{item.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white" style={{ background: "#e20a6f" }}>{item.name[0]}</div>
                  <div>
                    <div className="text-sm font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Tag>{t.contact.tag}</Tag>
              <SectionTitle>{t.contact.title}</SectionTitle>
              <p className="text-muted-foreground leading-relaxed mt-4 mb-10">{t.contact.sub}</p>

              <div className="space-y-5">
                {[
                  { icon: MapPin, label: t.contact.address, color: "#e20a6f" },
                  { icon: Phone, label: `+221 ${t.contact.phone}`, color: "#116fb3", href: `tel:+221${t.contact.phone.replace(/\s/g, "")}` },
                  { icon: Mail, label: t.contact.email, color: "#e20a6f", href: `mailto:${t.contact.email}` },
                  { icon: Clock, label: t.contact.hours, color: "#116fb3" },
                ].map(({ icon: Icon, label, color, href }, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: color === "#e20a6f" ? "#fff0f6" : "#eef5fb" }}>
                      <Icon size={18} style={{ color }} />
                    </div>
                    {href ? (
                      <a href={href} className="text-foreground/80 text-sm leading-relaxed pt-2.5 hover:text-primary transition-colors">{label}</a>
                    ) : (
                      <span className="text-foreground/80 text-sm leading-relaxed pt-2.5">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white hover:scale-105 transition-all" style={{ background: "#25D366" }}>
                <WhatsAppIcon size={18} />
                {t.hero.ctaWhatsapp} — +221 {t.contact.phone}
              </a>

              <div className="mt-10 rounded-2xl overflow-hidden border border-border h-52 bg-white flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted" />
                <div className="relative text-center">
                  <MapPin size={28} className="text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">Hann Mariste N° Y/130</div>
                  <div className="text-xs text-muted-foreground">Dakar, Sénégal</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "#eef5fb" }}>
                    <Send size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-2" style={{ fontFamily: "var(--font-heading)" }}>{t.contact.form.ok}</h3>
                </div>
              ) : (
                <form onSubmit={handleSend} className="flex flex-col gap-5">
                  {[
                    { key: "name" as const, label: t.contact.form.name, type: "text" },
                    { key: "email" as const, label: t.contact.form.email, type: "email" },
                  ].map(({ key, label, type }) => (
                    <div key={key} className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
                      <input type={type} required value={formState[key]} onChange={(e) => setFormState((prev) => ({ ...prev, [key]: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors" placeholder={label} />
                    </div>
                  ))}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.contact.form.msg}</label>
                    <textarea required rows={5} value={formState.msg} onChange={(e) => setFormState((prev) => ({ ...prev, msg: e.target.value }))} className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none" placeholder={t.contact.form.msg} />
                  </div>
                  <button type="submit" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md mt-2" style={{ background: "#e20a6f", fontFamily: "var(--font-heading)" }}>
                    <Send size={16} />
                    {t.contact.form.send}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0d1f3a" }} className="text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <EpsLogo size={36} />
                <div>
                  <div className="text-sm font-black" style={{ fontFamily: "var(--font-heading)" }}>EMMANUEL</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest">Private School</div>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-4">{t.footer.desc}</p>
              <a href={`https://${t.footer.domain}`} className="text-xs text-white/40 hover:text-white transition-colors">{t.footer.domain}</a>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Navigation</div>
              <ul className="space-y-3">
                {navLinks.map((l, i) => (
                  <li key={i}>
                    <button onClick={() => scrollTo(l.id)} className="text-sm text-white/70 hover:text-white transition-colors">{l.label}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">{lang === "fr" ? "Réseaux sociaux" : "Social Media"}</div>
              <ul className="space-y-3">
                {[
                  { label: t.footer.social.facebook, href: "#" },
                  { label: t.footer.social.tiktok, href: "#" },
                  { label: t.footer.social.instagram, href: "#" },
                ].map((s, i) => (
                  <li key={i}>
                    <a href={s.href} className="text-sm text-white/70 hover:text-white transition-colors">{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">Contact</div>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <MapPin size={14} style={{ color: "#e20a6f" }} className="flex-shrink-0" />
                  <span>{t.contact.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} style={{ color: "#e20a6f" }} />
                  <span>+221 {t.contact.phone}</span>
                </div>
                <div className="mt-4 space-y-1.5 text-xs">
                  <div><span className="text-white/40">Contacts:</span> {t.footer.emails.contacts}</div>
                  <div><span className="text-white/40">{lang === "fr" ? "Comptabilité" : "Accounting"}:</span> {t.footer.emails.comptabilite}</div>
                  <div><span className="text-white/40">{lang === "fr" ? "Direction" : "Management"}:</span> {t.footer.emails.direction}</div>
                  <div><span className="text-white/40">CEO:</span> {t.footer.emails.ceo}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">{t.footer.rights}</p>
            <span className="text-xs text-white/30">Hann Mariste, Dakar — Sénégal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
