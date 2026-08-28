import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MessageCircle, X, Send, RotateCcw, ChevronRight, Bot, User, Minimize2 } from 'lucide-react';

/* ─────────────────────────────────────────────
   BROLINK KNOWLEDGE BASE  (30+ Q&A entries)
───────────────────────────────────────────── */
interface FAQEntry {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
  followUps?: string[];
}

const FAQ_KB: FAQEntry[] = [
  {
    id: 'what-is-brolink',
    keywords: ['what is brolink', 'about brolink', 'who are you', 'who is brolink', 'tell me about', 'what do you do'],
    question: 'What is Brolink?',
    answer: `Brolink is South Africa's leading independent non-mandated intermediary specialising in short-term insurance administration. We connect insurers, brokers, and policyholders through our proprietary **Websure™** platform — providing binder services, portfolio administration, and technology-driven compliance solutions.\n\nWe're licensed under **FSP 10834** by the FSCA and have been serving the South African market for over two decades.`,
    followUps: ['What is Websure?', 'What is a binder?', 'How do I become a partner?']
  },
  {
    id: 'websure',
    keywords: ['websure', 'platform', 'software', 'system', 'technology', 'portal'],
    question: 'What is the Websure™ platform?',
    answer: `**Websure™** is Brolink's cloud-native, FSCA-compliant insurance administration platform built specifically for the South African short-term market. It provides:\n\n• ⚡ Sub-second quote generation across multiple insurers\n• 📋 End-to-end claims lifecycle management\n• 🔒 Real-time POPIA & regulatory compliance\n• 🔗 50+ insurer API integrations\n• 📊 Automated binder audit reporting\n\nBrokers get a single portal to quote, bind, endorse, and manage claims across all major SA insurers simultaneously.`,
    followUps: ['How do brokers access Websure?', 'What insurers are on Websure?', 'Is Websure FSCA compliant?']
  },
  {
    id: 'binder',
    keywords: ['binder', 'binder services', 'binder agreement', 'what is a binder', 'binder holder'],
    question: 'What is a binder agreement?',
    answer: `A **binder agreement** is a legal arrangement where an insurer (the principal) delegates certain underwriting or administrative functions to a third party (the binder holder — in this case, Brolink).\n\nThis means Brolink can:\n• Issue policies on behalf of insurers\n• Collect premiums\n• Settle certain classes of claims\n• Set underwriting criteria within agreed parameters\n\nAll binder operations are strictly governed by **FSCA regulations** and the terms of each individual binder agreement.`,
    followUps: ['Is Brolink FSCA licensed?', 'Which insurers does Brolink hold binders with?', 'What is Brolink\'s FSP number?']
  },
  {
    id: 'fsca',
    keywords: ['fsca', 'fsp', 'licensed', 'regulated', 'compliant', 'regulatory', 'fsp number', '10834', 'authorised'],
    question: 'Is Brolink FSCA licensed?',
    answer: `Yes. Brolink is a fully licensed and regulated **Authorised Financial Services Provider (FSP)**.\n\n• **FSP Licence No:** 10834\n• **Regulator:** Financial Sector Conduct Authority (FSCA)\n• **Compliance:** 100% binder audit pass rate\n• **POPIA:** Fully compliant data protection protocols\n\nAll operations, staff, and systems are subject to ongoing FSCA oversight and annual compliance audits.`,
    followUps: ['What is a binder?', 'How does Brolink protect my data?', 'Contact Brolink']
  },
  {
    id: 'brokers',
    keywords: ['broker', 'brokers', 'become a broker', 'broker partner', 'join as broker', 'brokerage', 'broker access', 'broker portal'],
    question: 'How can brokers partner with Brolink?',
    answer: `Brolink works with **1,200+ active South African brokers** and is always open to new partnerships. As a Brolink broker partner you get:\n\n• Access to the **Websure™** multi-insurer portal\n• Automated commission tracking & statement generation\n• Dedicated Broker Connect account manager\n• Quote across Santam, Hollard, Old Mutual Insure, ABSA and more — on one screen\n• Back-office admin support so you focus on client advice\n\n👉 To get started, fill in our contact form or call **012 673 0000**.`,
    followUps: ['What insurers are available?', 'What does it cost?', 'Contact Brolink']
  },
  {
    id: 'insurers-partners',
    keywords: ['insurers', 'partners', 'which insurers', 'santam', 'hollard', 'absa', 'old mutual', 'nedbank', 'bryte', 'insurer list'],
    question: 'Which insurers does Brolink work with?',
    answer: `Brolink holds binder agreements and integration partnerships with South Africa's most respected insurers:\n\n**Primary Insurer Partners:**\n• Santam Insurance\n• ABSA Insurance\n• Hollard\n• Old Mutual Insure\n• Nedbank Insurance\n• Bryte Insurance\n\n**Broker & Tech Partners:**\n• Indwe Risk Services\n• AON South Africa\n• CTRL Digital Insurance\n• PPS Short-Term\n\nAll partners are integrated into the **Websure™** platform for seamless policy issuance and claims processing.`,
    followUps: ['How does Websure work?', 'Can my brokerage join?', 'Contact Brolink']
  },
  {
    id: 'policyholders',
    keywords: ['policyholder', 'claim', 'claims', 'submit claim', 'my policy', 'make a claim', 'insurance claim'],
    question: 'How do policyholders submit a claim?',
    answer: `If you're a policyholder under a Brolink-administered policy, here's how to get help:\n\n**For claims:**\n📞 Call: **+27 (0)12 673 0000** (Mon–Fri, 08:00–16:30 SAST)\n📧 Email: **brolink@brolink.co.za**\n🌐 Or use the contact form on this page\n\n**What to have ready:**\n• Your policy number\n• Date and description of the incident\n• Any supporting documentation (photos, police report, etc.)\n\nBrolink is committed to the **Treating Customers Fairly (TCF)** framework — you'll always be kept informed throughout the process.`,
    followUps: ['What is TCF?', 'What is Brolink\'s office address?', 'Operating hours']
  },
  {
    id: 'claims-speed',
    keywords: ['how fast', 'claim speed', 'how long', 'turnaround', 'settlement', 'fast claims', 'quick claims'],
    question: 'How fast does Brolink settle claims?',
    answer: `Brolink targets an **average 48-hour claim settlement** for straightforward cases through the Websure™ automated claims lifecycle:\n\n1. Digital triage & document capture\n2. Automated assessor routing\n3. Insurer binder guideline check\n4. Payout verification & settlement\n\nFor complex claims, a dedicated handler keeps you informed at every step. Our platform has demonstrated a **+45% faster turnaround** compared to industry average.`,
    followUps: ['How do I submit a claim?', 'Contact Brolink']
  },
  {
    id: 'contact',
    keywords: ['contact', 'reach', 'phone', 'email', 'address', 'office', 'get in touch', 'call'],
    question: 'How do I contact Brolink?',
    answer: `You can reach Brolink through multiple channels:\n\n📞 **Phone & Switchboard:** +27 (0)12 673 0000\n📧 **General & Claims Email:** brolink@brolink.co.za\n📍 **Physical Address:** Westend Office Park, 254 Hall Street, Centurion, Gauteng, 0157, South Africa\n\n⏰ **Office Hours:** Monday – Friday, 08:00 – 16:30 SAST\n\nYou can also use the **Contact form** at the bottom of this page for written enquiries — we respond within 1 business day.`,
    followUps: ['Submit a claim', 'Become a broker partner', 'What is Brolink\'s FSP number?']
  },
  {
    id: 'address',
    keywords: ['address', 'location', 'where are you', 'centurion', 'office', 'where is brolink'],
    question: 'Where is Brolink located?',
    answer: `Brolink's head office is located at:\n\n📍 **Westend Office Park**\n254 Hall Street\nCenturion, Gauteng\n0157, South Africa\n\n⏰ Open Monday to Friday, 08:00 – 16:30 SAST.`,
    followUps: ['Phone number?', 'Email address?']
  },
  {
    id: 'operating-hours',
    keywords: ['hours', 'operating hours', 'open', 'when', 'business hours', 'time', 'available'],
    question: 'What are Brolink\'s operating hours?',
    answer: `Brolink operates during standard South African business hours:\n\n🗓 **Monday – Friday**\n⏰ **08:00 – 16:30 SAST**\n\nFor urgent after-hours claims or emergencies, your insurer's 24/7 emergency line should be your first point of contact. Contact us and we'll provide the relevant emergency numbers for your specific policy.`,
    followUps: ['How do I submit a claim?', 'Contact Brolink']
  },
  {
    id: 'cost-pricing',
    keywords: ['cost', 'price', 'fees', 'how much', 'pricing', 'charges', 'free', 'subscription'],
    question: 'What does it cost to partner with Brolink?',
    answer: `Brolink's partnership and broker onboarding costs depend on the services and volume involved. There is **no generic off-the-shelf pricing** — packages are structured around your portfolio size and specific requirements.\n\nFactors that influence your arrangement:\n• Portfolio size (number of active policies)\n• Product lines required (motor, commercial, property, etc.)\n• Level of back-office support needed\n• Insurer binder requirements\n\n👉 The best first step is to **schedule a consultation** — call **012 673 0000** or submit a contact form and our team will prepare a tailored proposal.`,
    followUps: ['How do I become a broker partner?', 'Contact Brolink', 'What is the ROI of using Brolink?']
  },
  {
    id: 'roi',
    keywords: ['roi', 'return', 'savings', 'save', 'efficiency', 'benefit', 'value', 'worth it'],
    question: 'What is the ROI of using Brolink / Websure™?',
    answer: `Based on data from our broker portfolio, Websure™ typically delivers:\n\n📊 **~62% reduction** in administrative workload\n⏱ **1,290+ hours saved** per year (for mid-size brokerages)\n💰 **~R450,000** in annual back-office cost savings\n🚀 **+45% faster** claims & endorsement turnaround\n\nYou can calculate your own brokerage's potential savings using our **interactive ROI Calculator** — scroll up to the "Calculate Your Efficiency" section on this page!`,
    followUps: ['How does Websure work?', 'Contact Brolink', 'Become a broker partner']
  },
  {
    id: 'data-privacy',
    keywords: ['data', 'privacy', 'popia', 'gdpr', 'security', 'safe', 'protect', 'information'],
    question: 'How does Brolink protect my data?',
    answer: `Data protection is a core pillar at Brolink:\n\n🔒 **256-bit encryption** on all Websure™ data transmissions\n📋 **POPIA compliant** — full alignment with the Protection of Personal Information Act\n🛡 **FSCA regulated** data handling protocols\n🔍 **Regular audits** of all data access and processing\n\nPersonal information is only used to administer your insurance policy and is never sold to third parties. You can request access to your data at any time by contacting our compliance team.`,
    followUps: ['Is Brolink FSCA licensed?', 'Contact Brolink']
  },
  {
    id: 'short-term-insurance',
    keywords: ['short term', 'short-term', 'what is short-term', 'types of insurance', 'products', 'cover', 'coverage'],
    question: 'What types of short-term insurance does Brolink administer?',
    answer: `Brolink administers a comprehensive range of short-term insurance products through its binder agreements:\n\n🚗 **Motor** — Personal and fleet vehicle comprehensive cover\n🏠 **Property** — Home contents, buildings & structures\n🏢 **Commercial Lines** — Business property, liability, interruption\n⚓ **Marine** — Cargo and logistics risk\n👔 **Professional Indemnity** — For professionals and service businesses\n🌾 **Agricultural** — Crop and farm asset protection\n\nAll products are administered under the binder agreements with Brolink's insurer partners.`,
    followUps: ['Which insurers does Brolink work with?', 'How do I get a quote?', 'Contact Brolink']
  },
  {
    id: 'get-quote',
    keywords: ['quote', 'get a quote', 'how to quote', 'insurance quote', 'price quote'],
    question: 'How do I get an insurance quote?',
    answer: `To get a short-term insurance quote through Brolink, you need to go through one of our **broker partners**.\n\nHere's the process:\n1. Contact Brolink via phone or the form below\n2. We'll connect you with an appropriate broker in your area\n3. The broker will use **Websure™** to generate quotes from multiple insurers simultaneously\n4. You choose the best fit and the policy is issued digitally\n\n📞 Call **+27 (0)12 673 0000** to get started.`,
    followUps: ['How does Websure work?', 'Contact Brolink']
  },
  {
    id: 'tcf',
    keywords: ['tcf', 'treating customers fairly', 'customer rights', 'fair treatment', 'consumer'],
    question: 'What is TCF (Treating Customers Fairly)?',
    answer: `**Treating Customers Fairly (TCF)** is a regulatory outcomes-based approach mandated by the FSCA that ensures financial services firms put customer interests first.\n\nBrolink's TCF commitments mean:\n✅ You'll always receive clear, accurate product information\n✅ Products are appropriate for your needs\n✅ You'll never face unfair post-sale barriers\n✅ Claims are handled fairly and transparently\n✅ You can easily switch or cancel your policy\n\nOur dedicated TCF programme is reviewed annually by our compliance team.`,
    followUps: ['Is Brolink FSCA licensed?', 'How do I submit a claim?']
  },
  {
    id: 'roadside',
    keywords: ['roadside', 'assist', 'emergency', 'breakdown', 'accident', '24/7', 'help'],
    question: 'Does Brolink offer roadside assistance?',
    answer: `Yes — policies administered by Brolink typically include **24/7 Roadside & Home Assist** as a core benefit:\n\n🚗 Emergency roadside response anywhere in SA\n🔧 Tow-truck dispatch\n🏠 Home emergency (burst geyser, lockout, etc.)\n🏥 Medical referral assistance\n\nThe exact benefits depend on your specific policy and insurer. Check your policy schedule or call **+27 (0)12 673 0000** for your specific assistance number.`,
    followUps: ['How do I submit a claim?', 'Contact Brolink']
  },
  {
    id: 'helloPeter',
    keywords: ['hellopeter', 'reviews', 'rating', 'reputation', 'rated', 'review'],
    question: 'What is Brolink\'s HelloPeter rating?',
    answer: `Brolink holds a **Top Rated** status on HelloPeter — South Africa's most trusted consumer review platform — for short-term insurance administration.\n\nOur 5-star policyholder rating reflects:\n⭐ Swift claims turnaround\n⭐ Compassionate service desk response\n⭐ Proactive policy update assistance\n\nWe actively monitor and respond to all customer feedback on HelloPeter as part of our TCF commitment.`,
    followUps: ['How do I submit a claim?', 'Contact Brolink']
  },
  {
    id: 'portfolio-admin',
    keywords: ['portfolio', 'administration', 'admin', 'portfolio admin', 'manage policies'],
    question: 'What does portfolio administration mean?',
    answer: `**Portfolio administration** refers to the comprehensive day-to-day management of an insurance policy book on behalf of brokers or insurers. Brolink provides:\n\n📋 Policy issuance, renewals & cancellations\n📝 Endorsements & mid-term adjustments\n💰 Premium collection & reconciliation\n📊 Bordereau reporting to insurers\n⚖️ Compliance & regulatory filing\n\nBy outsourcing portfolio administration to Brolink, brokers can focus on client relationships and growth rather than paperwork.`,
    followUps: ['What is the ROI?', 'How does Websure work?', 'Become a broker partner']
  },
  {
    id: 'how-to-onboard',
    keywords: ['onboard', 'get started', 'sign up', 'register', 'start', 'join', 'how to join'],
    question: 'How does the onboarding process work?',
    answer: `Getting started with Brolink is straightforward:\n\n**Step 1 — Initial Consultation**\nContact us via phone or the form below. We'll discuss your portfolio, product lines, and requirements.\n\n**Step 2 — Proposal & Agreement**\nWe prepare a tailored service proposal. Once agreed, formal binder and service agreements are signed.\n\n**Step 3 — System Setup**\nYour brokerage is set up on **Websure™** with dedicated training for your team.\n\n**Step 4 — Go Live**\nStart quoting, binding, and managing policies — typically within 2–4 weeks of agreement.\n\n📞 Call **012 673 0000** to kick off your consultation.`,
    followUps: ['What does it cost?', 'Contact Brolink', 'What is Websure?']
  },
  {
    id: 'websure-uptime',
    keywords: ['uptime', 'downtime', 'reliable', 'reliability', 'availability', '99.9', '99.98'],
    question: 'How reliable is the Websure™ platform?',
    answer: `Websure™ is engineered for enterprise reliability:\n\n✅ **99.98% uptime SLA** — Verified live monitoring\n✅ Cloud-native infrastructure with automatic failover\n✅ Real-time health monitoring dashboards\n✅ Scheduled maintenance windows outside business hours\n\nAny planned downtime is communicated at least 48 hours in advance to all active broker partners.`,
    followUps: ['How does Websure work?', 'Is my data secure?']
  },
  {
    id: 'endorsements',
    keywords: ['endorsement', 'change policy', 'update policy', 'amend', 'policy change', 'mid-term'],
    question: 'How do policyholders update or amend their policies?',
    answer: `Policy amendments (endorsements) are handled quickly through the Websure™ platform:\n\n**Through your broker:**\nContact your broker and they can process most changes in real time via Websure™\n\n**Directly with Brolink:**\nFor simple changes, call **+27 (0)12 673 0000** or email **brolink@brolink.co.za**\n\n**Common endorsements:**\n• Adding/removing vehicles or drivers\n• Updating home contents value\n• Address changes\n• Adding additional insured parties`,
    followUps: ['Contact Brolink', 'How do I submit a claim?']
  },
  {
    id: 'cancellation',
    keywords: ['cancel', 'cancellation', 'stop policy', 'terminate', 'end my policy'],
    question: 'How do I cancel my policy?',
    answer: `To cancel a Brolink-administered policy:\n\n1. **Contact your broker** — they handle policy cancellations on your behalf\n2. **Or contact Brolink directly** at brolink@brolink.co.za or 012 673 0000\n\n⚠️ **Please note:** Most policies require **31 days written notice** of cancellation. Check your policy schedule for the exact terms.\n\nYou may be entitled to a pro-rata refund for unused premium depending on your policy terms and the reason for cancellation.`,
    followUps: ['Contact Brolink', 'What are my customer rights?']
  },
  {
    id: 'api',
    keywords: ['api', 'integration', 'crm', 'system integration', 'connect', 'integrate', 'endpoint'],
    question: 'Does Websure™ offer API integrations?',
    answer: `Yes — Websure™ includes a comprehensive **API ecosystem** designed for enterprise connectivity:\n\n🔗 **50+ active enterprise endpoints**\n• JSON/REST API connectivity\n• Insurer core system integration\n• Broker CRM synchronisation\n• Third-party valuation service APIs\n• Real-time premium calculation webhooks\n\nDevelopment and integration support is provided by the Brolink technical team. Contact us to discuss your specific integration requirements.`,
    followUps: ['Contact Brolink', 'Is Websure reliable?']
  },
  {
    id: 'careers',
    keywords: ['careers', 'jobs', 'work', 'hiring', 'vacancies', 'employment', 'apply'],
    question: 'Does Brolink have career opportunities?',
    answer: `Brolink is always looking for talented professionals passionate about insurance technology and client service. Typical roles include:\n\n• Claims administrators\n• Broker support consultants\n• Websure platform support specialists\n• Compliance officers\n• Software developers (Websure platform team)\n\nFor current vacancies and to submit your CV, contact us at **brolink@brolink.co.za** with the subject line "Career Enquiry".`,
    followUps: ['Contact Brolink', 'What does Brolink do?']
  },
];

/* ─────────────────────────────────────────────
   SUGGESTED STARTER QUESTIONS
───────────────────────────────────────────── */
const STARTER_QUESTIONS = [
  'What is Brolink?',
  'How does Websure™ work?',
  'How can brokers partner with Brolink?',
  'How do I submit a claim?',
  'Is Brolink FSCA licensed?',
];

/* ─────────────────────────────────────────────
   MATCHER  (keyword scoring)
───────────────────────────────────────────── */
function findBestMatch(input: string): FAQEntry | null {
  const normalised = input.toLowerCase().replace(/[^a-z0-9\s]/g, '');
  const words = normalised.split(/\s+/).filter(Boolean);

  let best: FAQEntry | null = null;
  let bestScore = 0;

  for (const entry of FAQ_KB) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (normalised.includes(kw)) score += 3;
    }
    for (const word of words) {
      if (word.length > 3) {
        for (const kw of entry.keywords) {
          if (kw.includes(word)) score += 1;
        }
      }
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }

  return bestScore >= 2 ? best : null;
}

const FALLBACK_RESPONSES = [
  "I'm not sure I have a specific answer for that, but our team would love to help! Call **+27 (0)12 673 0000** or use the contact form below.",
  "That's a great question — let me connect you with the right person. Reach us at **brolink@brolink.co.za** or **012 673 0000**.",
  "I don't have enough information on that topic. For detailed assistance, please contact Brolink directly at **+27 (0)12 673 0000** (Mon–Fri, 08:00–16:30).",
];

/* ─────────────────────────────────────────────
   MARKDOWN RENDERER  (bold, bullets, newlines)
───────────────────────────────────────────── */
function renderMarkdown(text: string): React.ReactNode {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    const parts = line.split(/\*\*(.+?)\*\*/g);
    const rendered = parts.map((p, j) =>
      j % 2 === 1
        ? <strong key={j} style={{ color: 'var(--accent)', fontWeight: 700 }}>{p}</strong>
        : <span key={j}>{p}</span>
    );
    return <span key={i}>{rendered}{i < lines.length - 1 && <br />}</span>;
  });
}

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */
interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
  followUps?: string[];
  timestamp: Date;
}

/* ─────────────────────────────────────────────
   CHATBOT COMPONENT
───────────────────────────────────────────── */
export const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [minimised, setMinimised] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fallbackIdx = useRef(0);

  /* Initial greeting */
  useEffect(() => {
    const greeting: Message = {
      id: 'greeting',
      role: 'bot',
      text: "Hi there! 👋 I'm **Websure Assistant** — Brolink's virtual support agent.\n\nI can answer questions about our services, Websure™ platform, binder agreements, claims, and more. What can I help you with today?",
      followUps: STARTER_QUESTIONS,
      timestamp: new Date(),
    };
    setMessages([greeting]);
  }, []);

  /* Auto-scroll */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  /* Focus input when opened */
  useEffect(() => {
    if (open && !minimised) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, minimised]);

  /* Unread badge */
  useEffect(() => {
    if (!open) setUnread(prev => prev + 1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      const match = findBestMatch(text);
      let botText: string;
      let followUps: string[] | undefined;

      if (match) {
        botText = match.answer;
        followUps = match.followUps;
      } else {
        botText = FALLBACK_RESPONSES[fallbackIdx.current % FALLBACK_RESPONSES.length];
        fallbackIdx.current++;
        followUps = ['What is Brolink?', 'Contact Brolink', 'How do I submit a claim?'];
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: 'bot',
        text: botText,
        followUps,
        timestamp: new Date(),
      };
      setTyping(false);
      setMessages(prev => [...prev, botMsg]);
    }, delay);
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setMinimised(false);
    setUnread(0);
  };

  const handleReset = () => {
    setMessages([{
      id: 'greeting-reset',
      role: 'bot',
      text: "Chat reset! 👋 What can I help you with?",
      followUps: STARTER_QUESTIONS,
      timestamp: new Date(),
    }]);
    setInput('');
  };

  return (
    <>
      {/* ── Floating Launch Button ── */}
      {!open && (
        <button
          onClick={handleOpen}
          aria-label="Open chat assistant"
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00e5ff 0%, #20a3b6 100%)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0, 229, 255, 0.45)',
            zIndex: 9999,
            transition: 'transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 40px rgba(0, 229, 255, 0.65)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(0, 229, 255, 0.45)';
          }}
        >
          <MessageCircle style={{ width: 26, height: 26, color: '#070d18' }} />
          {unread > 1 && (
            <span style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              width: '20px',
              height: '20px',
              background: '#ef4444',
              borderRadius: '50%',
              fontSize: '11px',
              fontWeight: 800,
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid var(--bg-primary)',
            }}>
              {Math.min(unread - 1, 9)}
            </span>
          )}
        </button>
      )}

      {/* ── Chat Window ── */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            width: '380px',
            maxWidth: 'calc(100vw - 32px)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            border: '1px solid var(--border-glow)',
            background: 'var(--bg-secondary)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            maxHeight: minimised ? '72px' : '560px',
          }}
        >
          {/* Header */}
          <div style={{
            padding: '16px 20px',
            background: 'linear-gradient(135deg, #0a192f 0%, #0b2545 100%)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0,
            cursor: minimised ? 'pointer' : 'default',
            borderBottom: minimised ? 'none' : '1px solid rgba(0, 229, 255, 0.2)',
          }}
            onClick={() => minimised && setMinimised(false)}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00e5ff 0%, #20a3b6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <Bot style={{ width: 20, height: 20, color: '#070d18' }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#f8fafc', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                Websure Assistant
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
                <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>Online · Brolink Support</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <button
                onClick={handleReset}
                aria-label="Reset chat"
                title="Restart conversation"
                style={{ padding: '6px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#64748b', borderRadius: '8px', display: 'flex', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#94a3b8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                <RotateCcw style={{ width: 15, height: 15 }} />
              </button>
              <button
                onClick={() => setMinimised(m => !m)}
                aria-label="Minimise chat"
                style={{ padding: '6px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#64748b', borderRadius: '8px', display: 'flex', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#94a3b8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                <Minimize2 style={{ width: 15, height: 15 }} />
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                style={{ padding: '6px', border: 'none', background: 'transparent', cursor: 'pointer', color: '#64748b', borderRadius: '8px', display: 'flex', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#ef4444')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                <X style={{ width: 15, height: 15 }} />
              </button>
            </div>
          </div>

          {/* Messages */}
          {!minimised && (
            <>
              <div style={{
                flex: 1,
                overflowY: 'auto',
                padding: '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                scrollbarWidth: 'thin',
                scrollbarColor: 'var(--border-color) transparent',
              }}>
                {messages.map(msg => (
                  <div key={msg.id} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', maxWidth: '92%', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                      {/* Avatar */}
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        flexShrink: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: msg.role === 'bot'
                          ? 'linear-gradient(135deg, #00e5ff, #20a3b6)'
                          : 'var(--bg-surface)',
                        border: msg.role === 'user' ? '1px solid var(--border-color)' : 'none',
                        marginTop: '2px',
                      }}>
                        {msg.role === 'bot'
                          ? <Bot style={{ width: 14, height: 14, color: '#070d18' }} />
                          : <User style={{ width: 14, height: 14, color: 'var(--text-secondary)' }} />
                        }
                      </div>

                      {/* Bubble */}
                      <div style={{
                        padding: '12px 16px',
                        borderRadius: msg.role === 'user' ? '18px 4px 18px 18px' : '4px 18px 18px 18px',
                        background: msg.role === 'user'
                          ? 'linear-gradient(135deg, #00e5ff 0%, #20a3b6 100%)'
                          : 'var(--bg-surface)',
                        color: msg.role === 'user' ? '#070d18' : 'var(--text-primary)',
                        fontSize: '0.85rem',
                        lineHeight: 1.65,
                        fontWeight: msg.role === 'user' ? 700 : 400,
                        border: msg.role === 'bot' ? '1px solid var(--border-color)' : 'none',
                        boxShadow: msg.role === 'user' ? '0 4px 16px rgba(0, 229, 255, 0.25)' : 'none',
                      }}>
                        {renderMarkdown(msg.text)}
                      </div>
                    </div>

                    {/* Follow-up suggestion chips */}
                    {msg.role === 'bot' && msg.followUps && msg.followUps.length > 0 && (
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        paddingLeft: '36px',
                      }}>
                        {msg.followUps.map(q => (
                          <button
                            key={q}
                            onClick={() => sendMessage(q)}
                            style={{
                              padding: '5px 12px',
                              borderRadius: '9999px',
                              fontSize: '11px',
                              fontWeight: 700,
                              border: '1px solid var(--accent-border)',
                              background: 'var(--badge-bg)',
                              color: 'var(--accent)',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              transition: 'all 0.2s ease',
                              whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={e => {
                              (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent)';
                              (e.currentTarget as HTMLButtonElement).style.color = '#070d18';
                            }}
                            onMouseLeave={e => {
                              (e.currentTarget as HTMLButtonElement).style.background = 'var(--badge-bg)';
                              (e.currentTarget as HTMLButtonElement).style.color = 'var(--accent)';
                            }}
                          >
                            <ChevronRight style={{ width: 10, height: 10 }} />
                            {q}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing indicator */}
                {typing && (
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
                      background: 'linear-gradient(135deg, #00e5ff, #20a3b6)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Bot style={{ width: 14, height: 14, color: '#070d18' }} />
                    </div>
                    <div style={{
                      padding: '14px 18px',
                      borderRadius: '4px 18px 18px 18px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      gap: '5px',
                      alignItems: 'center',
                    }}>
                      {[0, 1, 2].map(i => (
                        <span key={i} style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          display: 'inline-block',
                          animation: `chatbotBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                        }} />
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input row */}
              <div style={{
                padding: '14px 16px',
                borderTop: '1px solid var(--border-color)',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                background: 'var(--bg-secondary)',
                flexShrink: 0,
              }}>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input); } }}
                  placeholder="Ask me anything about Brolink…"
                  disabled={typing}
                  style={{
                    flex: 1,
                    padding: '11px 16px',
                    borderRadius: '12px',
                    fontSize: '0.85rem',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--input-border)',
                    color: 'var(--input-text)',
                    fontFamily: "'Inter', sans-serif",
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--input-border)')}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || typing}
                  aria-label="Send message"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: input.trim() && !typing
                      ? 'linear-gradient(135deg, #00e5ff, #20a3b6)'
                      : 'var(--bg-surface)',
                    border: 'none',
                    cursor: input.trim() && !typing ? 'pointer' : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Send style={{ width: 16, height: 16, color: input.trim() && !typing ? '#070d18' : 'var(--text-muted)' }} />
                </button>
              </div>

              {/* Footer branding */}
              <div style={{
                padding: '8px 16px',
                textAlign: 'center',
                fontSize: '10px',
                color: 'var(--text-muted)',
                background: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border-color)',
                fontWeight: 600,
              }}>
                Brolink · FSP 10834 · Powered by Websure™
              </div>
            </>
          )}
        </div>
      )}

      {/* Bounce keyframes */}
      <style>{`
        @keyframes chatbotBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </>
  );
};
