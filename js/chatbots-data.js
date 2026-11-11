/**
 * Centralized AI Chatbots Directory Configuration for DiginixIT (/chatbots/)
 *
 * Maintain this file to add, remove, reorder, or update chatbot cards without
 * modifying the page layout in /chatbots/index.html.
 *
 * Fields per entry:
 * - id: Unique identifier slug
 * - name: Display name shown on the card heading
 * - category: Short badge label (e.g. "Law Research", "AI Chatbot")
 * - filterGroup: Filter tab grouping ("general" | "research" | "specialized")
 * - accessBadge: Access requirement label shown in the card footer
 * - description: Concise explanation of what the chatbot does
 * - url: Unique destination URL opened when clicking anywhere on the card or CTA
 * - ctaText: Action button label (e.g. "Open Chatbot" or "Try Now")
 * - icon: Icon key rendered by the directory SVG registry
 */
(function (global) {
    'use strict';

    const DIGINIXIT_CHATBOTS = [
        {
            id: 'diginixit-knowledge-assistant',
            name: 'DiginixIT Knowledge Assistant',
            category: 'Site Assistant',
            filterGroup: 'specialized',
            accessBadge: 'Instant Access',
            description: 'Semantic search chatbot built for DiginixIT to answer questions about our services, workflows, and engineering capabilities.',
            url: 'https://diginixit-chatbot.vercel.app/',
            ctaText: 'Open Chatbot',
            icon: 'bot'
        },
        {
            id: 'chat-assistant',
            name: 'Chat Assistant',
            category: 'AI Chatbot',
            filterGroup: 'general',
            accessBadge: 'No login required',
            description: 'Ask questions and get helpful answers in a fast, conversational general AI chat interface.',
            url: 'https://toolkit-topaz-three.vercel.app/chatbot',
            ctaText: 'Open Chatbot',
            icon: 'message'
        },
        {
            id: 'product-market-research',
            name: 'Product & Market Research',
            category: 'Product Research',
            filterGroup: 'research',
            accessBadge: 'No login required',
            description: 'Research products, compare features and prices, and explore market alternatives with live web sources.',
            url: 'https://toolkit-topaz-three.vercel.app/product-research',
            ctaText: 'Open Chatbot',
            icon: 'shopping'
        },
        {
            id: 'laws-regulations',
            name: 'Laws & Regulations',
            category: 'Law Research',
            filterGroup: 'research',
            accessBadge: 'No login required',
            description: 'Research current laws and regulations with jurisdiction-aware answers and official source links.',
            url: 'https://toolkit-topaz-three.vercel.app/law-research',
            ctaText: 'Open Chatbot',
            icon: 'scale'
        },
        {
            id: 'science-research',
            name: 'Science Research',
            category: 'Science Research',
            filterGroup: 'research',
            accessBadge: 'Groq API key',
            description: 'Explore scientific questions using current web sources, research papers, and evidence-aware explanations.',
            url: 'https://toolkit-topaz-three.vercel.app/science-research',
            ctaText: 'Open Chatbot',
            icon: 'flask'
        },
        {
            id: 'medical-research',
            name: 'Medical Research',
            category: 'Medical Research',
            filterGroup: 'research',
            accessBadge: 'Groq API key',
            description: 'Find evidence-based medical information and clinical research summaries with clear sources and limitations.',
            url: 'https://toolkit-topaz-three.vercel.app/medical-research',
            ctaText: 'Open Chatbot',
            icon: 'medical'
        },
        {
            id: 'business-research',
            name: 'Business Research',
            category: 'Business Research',
            filterGroup: 'research',
            accessBadge: 'Groq API key',
            description: 'Research industries, competitors, customers, and business opportunities using current web sources.',
            url: 'https://toolkit-topaz-three.vercel.app/business-research',
            ctaText: 'Open Chatbot',
            icon: 'briefcase'
        },
        {
            id: 'language-tutor',
            name: 'Language Tutor',
            category: 'Language Tutor',
            filterGroup: 'specialized',
            accessBadge: 'Groq API key',
            description: 'Practice a language through tailored grammar explanations, writing corrections, vocabulary, and conversation.',
            url: 'https://toolkit-topaz-three.vercel.app/language-tutor',
            ctaText: 'Open Chatbot',
            icon: 'languages'
        },
        {
            id: 'toolkit-hub',
            name: 'Toolkit Hub',
            category: 'All-in-One Workspace',
            filterGroup: 'general',
            accessBadge: 'Unified Hub',
            description: 'Open the full research and productivity suite featuring AI chat, domain assistants, and website checks.',
            url: 'https://toolkit-topaz-three.vercel.app/',
            ctaText: 'Try Now',
            icon: 'grid'
        }
    ];

    const CHATBOT_ICON_SVGS = {
        bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>',
        message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
        shopping: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
        scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>',
        flask: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>',
        medical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>',
        briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
        languages: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>',
        grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>'
    };

    global.diginixitChatbots = DIGINIXIT_CHATBOTS;
    global.diginixitChatbotIcons = CHATBOT_ICON_SVGS;
})(typeof window !== 'undefined' ? window : this);

