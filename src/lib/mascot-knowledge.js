/**
 * Predefined Q&A content for the Qwik Assistant mascot panel.
 *
 * This is intentionally static (no keyword matching, no external calls) —
 * the mascot panel only ever shows this fixed set of questions and answers,
 * plus a persistent "Get Free Consultation" call to action that opens the
 * site's existing lead popup via the `qwik:open-consultation` window event.
 */
export const mascotQuestions = [
    {
        id: "services",
        question: "What services does Qwik Digital Solutions provide?",
        answer: "Qwik Digital Solutions provides Website Development, Software Development, Digital Marketing, SEO, Branding, Graphic Design, Cloud Solutions, AI Solutions, Video Editing, and other digital services.",
    },
    {
        id: "websites",
        question: "Do you develop websites?",
        answer: "Yes. We create modern, responsive, SEO-friendly websites for businesses, startups, and organizations.",
    },
    {
        id: "software",
        question: "Do you develop software applications?",
        answer: "Yes. We develop customized software solutions and full-stack applications based on business requirements.",
    },
    {
        id: "crm",
        question: "What is your CRM Project?",
        answer: "Our CRM Project is a business management solution designed to manage leads, customers, employees, sales activities, reports, analytics, and business workflows. The project is currently Coming Soon.",
    },
    {
        id: "marketing",
        question: "Do you provide Digital Marketing?",
        answer: "Yes. We provide Digital Marketing services including social media marketing, performance marketing, online campaigns, and business growth strategies.",
    },
    {
        id: "seo",
        question: "Do you provide SEO services?",
        answer: "Yes. We provide SEO solutions to improve website visibility, search rankings, organic traffic, and online presence.",
    },
    {
        id: "consultation",
        question: "Can I get a free consultation?",
        answer: "Yes. You can request a free consultation from our website. Our team will contact you to understand your requirements.",
        showConsultCta: true,
    },
    {
        id: "contact",
        question: "How can I contact Qwik Digital Solutions?",
        answer: "You can contact Qwik Digital Solutions through the Contact section or the consultation form available on the website.",
    },
    {
        id: "faq-timeline",
        question: "How long does a typical website or app project take?",
        answer: "Most marketing websites ship in 3–5 weeks. Mobile apps and complex platforms typically run 8–14 weeks depending on scope. You'll get a fixed timeline with milestones before we start.",
    },
    {
        id: "faq-startups",
        question: "Do you work with startups as well as established companies?",
        answer: "Yes. We run lean, fixed-scope sprints for startups and longer engagement models for enterprise teams that need deeper integration, compliance or scale work.",
    },
    {
        id: "faq-pricing",
        question: "What does the pricing structure look like?",
        answer: "Projects are quoted per scope after a discovery call — most engagements are fixed-fee with milestone payments. Ongoing marketing, SEO and support work runs on monthly retainers.",
    },
    {
        id: "faq-existing-site",
        question: "Can you take over or improve an existing website or app?",
        answer: "Regularly. We start with a technical and UX audit, then propose a phased plan so you're never left with a half-migrated product.",
    },
    {
        id: "faq-industries",
        question: "Which industries have you worked with?",
        answer: "E-commerce, real estate, education, HR tech, hospitality and B2B SaaS, among others — the process adapts, the discipline stays the same.",
    },
];
export const mascotGreeting = "How can I help you?";
export const mascotHoverBubble = "Need help? Ask me! 👋";
