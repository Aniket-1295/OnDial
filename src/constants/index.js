const industryList = [
  {
    name: "Healthcare & Medical",
    icon: "🏥",
    body: "Automate appointment reminders, prescription refills, follow-ups, lab results, and chronic care management.",
    tag: "Health",
    color: "#06B6D4",
    rotation: "md:rotate-[-4deg] rotate-0",
  },
  {
    name: "Finance & Banking",
    icon: "🏦",
    body: "Enable fraud alerts, loan status updates, payment reminders, credit score alerts, and account notifications.",
    tag: "Finance",
    color: "#2563EB",
    rotation: "md:rotate-[4deg] rotate-0",
  },
  {
    name: "Real Estate",
    icon: "🏠",
    body: "Handle property inquiries, schedule viewings, send market updates, lease renewals, and closing process updates.",
    tag: "Property",
    color: "#4F46E5",
    rotation: "md:rotate-[-4deg] rotate-0",
  },
  {
    name: "Retail & E-commerce",
    icon: "🛒",
    body: "Recover abandoned carts, send order updates, collect feedback, manage returns, and promote seasonal offers.",
    tag: "Retail",
    color: "#06B6D4",
    rotation: "md:rotate-[4deg] rotate-0",
  },
  {
    name: "Insurance",
    icon: "🛡️",
    body: "Automate policy renewals, claim updates, premium alerts, and risk assessments.",
    tag: "Insurance",
    color: "#2563EB",
    rotation: "md:rotate-[-4deg] rotate-0",
  },
  {
    name: "Sales & Lead Generation",
    icon: "📈",
    body: "Qualify leads, schedule appointments, follow up with prospects, and run win-back campaigns.",
    tag: "Sales",
    color: "#4F46E5",
    rotation: "md:rotate-[4deg] rotate-0",
  },
  {
    name: "Call Centers & BPO",
    icon: "🎧",
    body: "Automate surveys, feedback collection, compliance notifications, and data verification.",
    tag: "BPO",
    color: "#06B6D4",
    rotation: "md:rotate-[-4deg] rotate-0",
  },
  {
    name: "Telecom",
    icon: "📡",
    body: "Handle service activations, billing inquiries, technical support, and contract renewals.",
    tag: "Telecom",
    color: "#2563EB",
    rotation: "md:rotate-[4deg] rotate-0",
  },
  {
    name: "Automotive",
    icon: "🚗",
    body: "Manage service reminders, warranty extensions, recalls, insurance updates, and financing options.",
    tag: "Automotive",
    color: "#4F46E5",
    rotation: "md:rotate-[-4deg] rotate-0",
  },
  {
    name: "Education",
    icon: "🎓",
    body: "Automate enrollment confirmations, tuition reminders, academic progress updates, and alumni outreach.",
    tag: "Education",
    color: "#06B6D4",
    rotation: "md:rotate-[4deg] rotate-0",
  },
  {
    name: "Travel & Tourism",
    icon: "✈️",
    body: "Automate booking confirmations, flight updates, check-in reminders, weather alerts, and loyalty program updates.",
    tag: "Travel",
    color: "#2563EB",
    rotation: "md:rotate-[-4deg] rotate-0",
  },
  {
    name: "Hospitality",
    icon: "🏨",
    body: "Streamline reservation confirmations, concierge services, check-in procedures, feedback collection, and loyalty benefits.",
    tag: "Hospitality",
    color: "#4F46E5",
    rotation: "md:rotate-[4deg] rotate-0",
  },
];

const statsList = [
  { label: "Languages", amount: "100+" },
  { label: "Voice Variations", amount: "200+" },
  { label: "Indian Voices", amount: "80+" },
  { label: "Response Time", amount: "<500ms" },
  { label: "Industries", amount: "20+" },
];

const faqList = [
  {
    q: "What are AI Voice Agents?",
    a: "AI Voice Agents are intelligent software agents that use speech recognition and AI to handle calls, answer queries, and automate conversations in real time.",
    rotation: "rotate-z-[-10deg]",
    translation: "translate-y-[-5%]",
  },
  {
    q: "How do AI Voice Agents work for businesses?",
    a: "They integrate with your communication systems to process voice input, understand intent, and respond naturally — helping automate customer support, sales calls, and lead qualification.",
    rotation: "rotate-z-[4deg]",
    translation: "",
  },
  {
    q: "Can AI Voice Agents handle multilingual conversations?",
    a: "Yes. OnDial supports 100+ languages, enabling global communication without needing separate teams for each market.",
    rotation: "rotate-z-[-4deg]",
    translation: "translate-y-[-5%]",
  },
  {
    q: "What industries benefit most from AI Voice Agents?",
    a: "Industries like e-commerce, banking, healthcare, real estate, and logistics use them for customer support, appointment booking, order tracking, and sales automation.",
    rotation: "rotate-z-[4deg]",
    translation: "translate-y-[5%]",
  },
  {
    q: "Are AI Voice Agents suitable for small businesses?",
    a: "Absolutely. They are scalable and cost-effective, allowing small businesses to offer 24/7 customer service and expand globally without large teams.",
    rotation: "rotate-z-[-10deg]",
    translation: "",
  },
  {
    q: "How fast can AI Voice Agents respond?",
    a: "With ultra-low latency technology, responses are delivered in under 300 milliseconds — as natural as speaking to a human.",
    rotation: "rotate-z-[4deg]",
    translation: "translate-y-[5%]",
  },
  {
    q: "Can AI Voice Agents handle multiple calls at once?",
    a: "Yes, they scale instantly to manage unlimited simultaneous conversations.",
    rotation: "rotate-z-[-3deg]",
    translation: "translate-y-[10%]",
  },
];

const featureCards = [
  {
    icon: "🤖",
    title: "AI Voice Agents",
    body: "Deploy autonomous AI voice agents that handle inbound and outbound calls 24/7 with human-like tone, contextual understanding, and instant responses.",
    tag: "Handle calls 24/7 instantly",
  },
  {
    icon: "📊",
    title: "Smart Analytics",
    body: "Access insights into call performance, sentiment, and behavior. Optimize sales, support, and marketing in real time with AI-powered analytics.",
    tag: "Boost insights & ROI",
  },
  {
    icon: "🎯",
    title: "Lead Qualification",
    body: "Use intelligent AI Voice Agents to automatically score and qualify leads based on conversation quality, behavior, and intent.",
    tag: "Prioritize hot leads",
  },
  {
    icon: "🕐",
    title: "24/7 AI Support",
    body: "Offer round-the-clock customer support using AI call automation that never sleeps, ensuring your customers always have a reliable contact point.",
    tag: "Support customers anytime",
  },
  {
    icon: "🌐",
    title: "Multilingual AI Communication",
    body: "Serve global audiences with multilingual AI Voice Agents, capable of switching between 100+ languages for seamless customer experiences.",
    tag: "Serve 100+ languages",
  },
  {
    icon: "📅",
    title: "Appointment Scheduling",
    body: "AI Voice Agents automate appointment scheduling, letting customers book, reschedule, or cancel in real time with seamless calendar integration.",
    tag: "Automate bookings fully",
  },
];

const trustPills = [
  {
    icon: "⚡",
    title: "Ultra-Low Latency Calls",
    body: "Human-like conversations with <500ms response time for seamless UX.",
  },
  {
    icon: "🌍",
    title: "Global Communication",
    body: "Support for 100+ languages and cultural nuances worldwide.",
  },
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    body: "GDPR and CCPA compliance with encrypted data handling.",
  },
  {
    icon: "🔧",
    title: "Flexible Deployment",
    body: "API integration for developers or no-code platform for business teams.",
  },
  {
    icon: "📈",
    title: "Proven ROI",
    body: "Reduce operational costs while increasing satisfaction and conversions.",
  },
];

// Keep cards as an alias for faqList for backward compat
const cards = faqList;
// Keep flavorlists and nutrientLists as aliases
const flavorlists = industryList;
const nutrientLists = statsList;

export {
  flavorlists,
  nutrientLists,
  cards,
  industryList,
  statsList,
  faqList,
  featureCards,
  trustPills,
};
