import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      navigation: {
        ksGpt: "KS GPT",
        contact: "Contact",
        scheduleCall: "Schedule Call",
      },
      hero: {
        label: "KS LAB",
        title: "Artificial intelligence at your fingertips.",
        subtitle: "at your fingertips.",
        description:
          "Every day, hundreds of companies are getting ahead by tripling their productivity and efficiency through AI. Don't miss the train.",
        scheduleCall: "Schedule Call",
        ksGpt: "KS GPT",
        motto: "Your idea, our expertise, your success.",
      },
      partners: {
        title: "Our partners",
      },
      solutions: {
        label: "SOLUTIONS",
        title: "Solutions & Use Cases",
        description:
          "Discover how our innovative solutions can transform your business operations",
        items: {
          aiAnalytics: {
            title: "AI-Powered Analytics",
            description:
              "Transform your data into actionable insights with our advanced AI analytics platform.",
          },
          automation: {
            title: "Process Automation",
            description:
              "Streamline your operations with intelligent automation solutions.",
          },
          security: {
            title: "Security Solutions",
            description:
              "Protect your business with enterprise-grade security measures.",
          },
          collaboration: {
            title: "Team Collaboration",
            description:
              "Enhance productivity with seamless team collaboration tools.",
          },
          integration: {
            title: "Custom Integration",
            description:
              "Integrate with your existing systems for a unified workflow.",
          },
        },
      },
      workflow: {
        label: "WORKFLOW",
        title: "Our approach.",
        button: "Contact us",
        steps: {
          step1: {
            title: "Your needs",
            description:
              "Let's define together your needs, objectives and strategies to implement.",
          },
          step2: {
            title: "Where the magic happens",
            description:
              "We take control of development based on your technical constraints and deadlines.",
          },
          step3: {
            title: "Not a sprint, but a marathon",
            description:
              "Once your product is in production, we ensure operational and statistical monitoring.",
          },
        },
      },
      features: {
        label: "FEATURES",
        title: "Why choose us?",
        description:
          "Discover the key advantages that make us your ideal AI partner",
        items: {
          expertise: {
            title: "Deep Expertise",
            description:
              "Our team combines years of experience in AI development and business strategy.",
          },
          speed: {
            title: "Fast Delivery",
            description:
              "We deliver high-quality solutions quickly without compromising on excellence.",
          },
          support: {
            title: "24/7 Support",
            description:
              "Our dedicated support team is always available to help you succeed.",
          },
        },
      },
      testimonials: {
        label: "TESTIMONIALS",
        title: "What our clients say",
        description:
          "Don't just take our word for it - hear from our satisfied clients",
        items: {
          testimonial1: {
            text: "KS Lab transformed our business operations with their AI solutions. The results exceeded our expectations.",
            name: "Sarah Johnson",
            role: "CEO, TechCorp",
          },
          testimonial2: {
            text: "Professional team, excellent communication, and outstanding results. Highly recommended!",
            name: "Michael Chen",
            role: "CTO, InnovateLab",
          },
          testimonial3: {
            text: "The AI implementation was seamless and the ongoing support has been exceptional.",
            name: "Emma Wilson",
            role: "Operations Director, FutureFlow",
          },
        },
      },
      faq: {
        label: "FAQ",
        title: "Frequently asked questions",
        description:
          "Discover our frequently asked questions section for short answers that bring clarity to our services.",
        button: "Contact us",
        questions: {
          q1: {
            question:
              "What types of AI projects can you create for my business?",
            answer:
              "Our AI experts design custom solutions to automate and optimize your business processes. We develop intelligent chatbots, recommendation systems, predictive analytics tools, image and document recognition, as well as virtual assistants. Each project is tailored to your specific needs, whether to improve your customer service, optimize your internal operations, or create new revenue sources.",
          },
          q2: {
            question: "How do you integrate AI into our existing systems?",
            answer:
              "We adopt a progressive and non-invasive approach. After an audit of your current infrastructure, we develop APIs and microservices that integrate seamlessly with your existing tools. Our technical expertise allows us to work with most market technologies. We also train your teams to ensure successful adoption and progressive autonomy on deployed solutions.",
          },
          q3: {
            question: "What support do you offer after project delivery?",
            answer:
              "Our commitment doesn't stop at delivery. We offer comprehensive support including technical support, performance monitoring with detailed dashboards, user behavior analysis, and continuous optimization recommendations. We also provide strategic coaching to maximize your growth, with a conversion rate 15x higher than average. It's a true long-term partnership to ensure your success.",
          },
        },
      },
      cta: {
        title: "Let's discuss your project together!",
        button: "Contact us",
      },
      footer: {
        company: {
          description:
            "Your gateway to modern banking solutions and financial excellence.",
        },
        menu: {
          title: "Menu",
          presentation: "Presentation",
          artificialIntelligence: "Artificial Intelligence",
        },
        other: {
          title: "Other",
          contact: "Contact",
        },
        contact: {
          title: "Contact us",
          phone: "(+33) 7 68 56 68 36",
          address: "12 Rue du Paillet 69570 Dardilly",
          email: "contact@ks-entreprise.com",
        },
        copyright: "©2025 ks-agency",
      },
      ksGpt: {
        title: "KS GPT",
        subtitle: "Your AI assistant for KS Lab information",
        placeholder: "Ask me anything about KS Lab...",
        chatPlaceholder: "Type your message...",
        tryAsking: "Try asking:",
        suggestions: [
          "What services do you offer?",
          "How do you help with digital transformation?",
          "What technologies do you use?",
        ],
        copyright: "© 2025 KS Lab. All rights reserved.",
      },
      contact: {
        label: "CONTACT",
        title: "Let's discuss your project",
        description:
          "Ready to transform your business with AI? Get in touch with our experts and let's build something amazing together.",
        form: {
          firstName: "First Name",
          firstNamePlaceholder: "Enter your first name",
          lastName: "Last Name",
          lastNamePlaceholder: "Enter your last name",
          email: "Email",
          emailPlaceholder: "Enter your email address",
          company: "Company",
          companyPlaceholder: "Enter your company name",
          phone: "Phone",
          phonePlaceholder: "Enter your phone number",
          subject: "Subject",
          selectSubject: "Select a subject",
          subjects: {
            aiConsultation: "AI Consultation",
            customDevelopment: "Custom Development",
            partnership: "Partnership",
            other: "Other",
          },
          message: "Message",
          messagePlaceholder:
            "Tell us about your project or how we can help you...",
          submit: "Send Message",
        },
      },
    },
  },
  fr: {
    translation: {
      navigation: {
        ksGpt: "KS GPT",
        contact: "Contact",
        scheduleCall: "Prendre RDV",
      },
      hero: {
        label: "KS LAB",
        title: "L'intelligence artificielle à portée de main.",
        subtitle: "à portée de main.",
        description:
          "Tous les jours, des centaines d'entreprises prennent de l'avance en triplant leur productivité et efficacité grâce à l'IA. Ne ratez pas le train.",
        scheduleCall: "Prendre RDV",
        ksGpt: "KS GPT",
        motto: "Votre idée, notre expertise, votre réussite.",
      },
      partners: {
        title: "Nos partenaires",
      },
      solutions: {
        label: "SOLUTIONS",
        title: "Solutions & Cas d'Usage",
        description:
          "Découvrez comment nos solutions innovantes peuvent transformer vos opérations commerciales",
        items: {
          aiAnalytics: {
            title: "Analyse IA Avancée",
            description:
              "Transformez vos données en insights exploitables avec notre plateforme d'analyse IA avancée.",
          },
          automation: {
            title: "Automatisation des Processus",
            description:
              "Rationalisez vos opérations avec des solutions d'automatisation intelligente.",
          },
          security: {
            title: "Solutions de Sécurité",
            description:
              "Protégez votre entreprise avec des mesures de sécurité de niveau entreprise.",
          },
          collaboration: {
            title: "Collaboration d'Équipe",
            description:
              "Améliorez la productivité avec des outils de collaboration d'équipe transparents.",
          },
          integration: {
            title: "Intégration Personnalisée",
            description:
              "Intégrez-vous à vos systèmes existants pour un flux de travail unifié.",
          },
        },
      },
      workflow: {
        label: "WORKFLOW",
        title: "Notre approche.",
        button: "Contactez nous",
        steps: {
          step1: {
            title: "Votre besoin",
            description:
              "Définissons ensemble vos besoins, objectifs et stratégies à mettre en place.",
          },
          step2: {
            title: "Là où la magie opère",
            description:
              "Nous prenons la main sur le développement sur base de vos contraintes techniques et deadline.",
          },
          step3: {
            title: "Pas un sprint, mais un marathon",
            description:
              "Une fois votre produit en production nous assurons un suivit opérationnel et statistique.",
          },
        },
      },
      features: {
        label: "AVANTAGES",
        title: "Pourquoi nous choisir ?",
        description:
          "Découvrez les avantages clés qui font de nous votre partenaire IA idéal",
        items: {
          expertise: {
            title: "Expertise Approfondie",
            description:
              "Notre équipe combine des années d'expérience en développement IA et stratégie business.",
          },
          speed: {
            title: "Livraison Rapide",
            description:
              "Nous livrons des solutions de haute qualité rapidement sans compromettre l'excellence.",
          },
          support: {
            title: "Support 24/7",
            description:
              "Notre équipe de support dédiée est toujours disponible pour vous aider à réussir.",
          },
        },
      },
      testimonials: {
        label: "TÉMOIGNAGES",
        title: "Ce que disent nos clients",
        description:
          "Ne nous croyez pas sur parole - écoutez nos clients satisfaits",
        items: {
          testimonial1: {
            text: "KS Lab a transformé nos opérations avec leurs solutions IA. Les résultats ont dépassé nos attentes.",
            name: "Sarah Johnson",
            role: "PDG, TechCorp",
          },
          testimonial2: {
            text: "Équipe professionnelle, excellente communication et résultats exceptionnels. Fortement recommandé !",
            name: "Michael Chen",
            role: "CTO, InnovateLab",
          },
          testimonial3: {
            text: "L'implémentation IA a été fluide et le support continu a été exceptionnel.",
            name: "Emma Wilson",
            role: "Directrice Opérations, FutureFlow",
          },
        },
      },
      faq: {
        label: "FAQ",
        title: "Questions fréquentes",
        description:
          "Découvrez notre section des questions fréquemment posées pour des réponses courtes qui apportent de la clarté sur nos services.",
        button: "Contactez-nous",
        questions: {
          q1: {
            question:
              "Quels types de projets IA pouvez-vous réaliser pour mon entreprise ?",
            answer:
              "Nos experts IA conçoivent des solutions personnalisées pour automatiser et optimiser vos processus métiers. Nous développons des chatbots intelligents, des systèmes de recommandation, des outils d'analyse prédictive, de la reconnaissance d'images et de documents, ainsi que des assistants virtuels. Chaque projet est adapté à vos besoins spécifiques, que ce soit pour améliorer votre service client, optimiser vos opérations internes ou créer de nouvelles sources de revenus.",
          },
          q2: {
            question:
              "Comment intégrez-vous l'IA dans nos systèmes existants ?",
            answer:
              "Nous adoptons une approche progressive et non-invasive. Après un audit de votre infrastructure actuelle, nous développons des APIs et microservices qui s'intègrent harmonieusement à vos outils existants. Notre expertise technique nous permet de travailler avec la plupart des technologies du marché. Nous formons également vos équipes pour garantir une adoption réussie et une autonomie progressive sur les solutions déployées.",
          },
          q3: {
            question:
              "Quel accompagnement proposez-vous après la livraison du projet ?",
            answer:
              "Notre engagement ne s'arrête pas à la livraison. Nous offrons un accompagnement complet incluant le support technique, le monitoring des performances avec tableaux de bord détaillés, l'analyse des comportements utilisateurs, et des recommandations d'optimisation continue. Nous proposons également du coaching stratégique pour maximiser votre croissance, avec un taux de conversion 15x supérieur à la moyenne. C'est un véritable partenariat sur le long terme pour assurer votre succès.",
          },
        },
      },
      cta: {
        title: "Discutons ensemble de votre projet !",
        button: "Nous contacter",
      },
      footer: {
        company: {
          description:
            "Votre passerelle vers des solutions bancaires modernes et l'excellence financière.",
        },
        menu: {
          title: "Menu",
          presentation: "Présentation",
          artificialIntelligence: "L'Intelligence artificielle",
        },
        other: {
          title: "Autre",
          contact: "Contactez",
        },
        contact: {
          title: "Contactez-nous",
          phone: "(+33) 7 68 56 68 36",
          address: "12 Rue du Paillet 69570 Dardilly",
          email: "contact@ks-entreprise.com",
        },
        copyright: "©2025 ks-agency",
      },
      ksGpt: {
        title: "KS GPT",
        subtitle: "Votre assistant IA pour les informations KS Lab",
        placeholder: "Demandez-moi tout sur KS Lab...",
        chatPlaceholder: "Tapez votre message...",
        tryAsking: "Essayez de demander:",
        suggestions: [
          "Quels services offrez-vous ?",
          "Comment aidez-vous avec la transformation digitale ?",
          "Quelles technologies utilisez-vous ?",
        ],
        copyright: "© 2025 KS Lab. Tous droits réservés.",
      },
      contact: {
        label: "CONTACT",
        title: "Discutons de votre projet.",
        description:
          "Prêt à transformer votre entreprise avec l'IA ? Contactez nos experts et construisons ensemble quelque chose d'extraordinaire.",
        form: {
          firstName: "Prénom",
          firstNamePlaceholder: "Entrez votre prénom",
          lastName: "Nom",
          lastNamePlaceholder: "Entrez votre nom",
          email: "Email",
          emailPlaceholder: "Entrez votre adresse email",
          company: "Entreprise",
          companyPlaceholder: "Entrez le nom de votre entreprise",
          phone: "Téléphone",
          phonePlaceholder: "Entrez votre numéro de téléphone",
          subject: "Sujet",
          selectSubject: "Sélectionnez un sujet",
          subjects: {
            aiConsultation: "Consultation IA",
            customDevelopment: "Développement sur-mesure",
            partnership: "Partenariat",
            other: "Autre",
          },
          message: "Message",
          messagePlaceholder:
            "Parlez-nous de votre projet ou comment nous pouvons vous aider...",
          submit: "Envoyer le message",
        },
      },
    },
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: "fr", // default language
      fallbackLng: "fr",

      interpolation: {
        escapeValue: false,
      },

      detection: {
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
      },
    });
}

export default i18n;

export const useTranslation = (locale: "en" | "fr" = "en") => {
  return resources[locale].translation;
};
