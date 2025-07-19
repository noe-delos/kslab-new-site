/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import SplashCursor from "@/components/SplashCursor";
import { StreamingMarkdown } from "@/components/StreamingMarkdown";

import "@/lib/i18n";

const Orb = dynamic(() => import("@/components/Orb"), { ssr: false });

// KS Team data
const KS_TEAM = [
  {
    name: "Noé Campo",
    role: "Co-founder & AI Engineer",
    department: "Technical Lead & Engineering",
    description:
      "In charge of the tech and leads the AI team behind KS at the engineering department. Specialized in AI development and tailor-made AI solutions.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHRR8QOTXhTlg/profile-displayphoto-crop_800_800/B56Zd.4PboGQAI-/0/1750180389596?e=1755734400&v=beta&t=HpH4JQYZT1ygb9Scq-f4nDDA7soydfy_rSsl3s-HqGQ",
    linkedin: "www.linkedin.com/in/noe-campo",
    email: "noe@ks-entreprise.com",
    portfolio: "www.noecampo.com",
    skills: ["Large Language Models (LLM)", "Generative AI", "FastAPI"],
    experience:
      "AI Engineer & Co-Founder at KS lab, previously AI Developer at Delos Intelligence",
  },
  {
    name: "Paul GEE",
    role: "Co-founder & Business Development",
    department: "Business Operations & Strategy",
    description:
      "Handles the business part of KS with expertise in sales, strategic partnerships, and business development.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGKYwb27G-DdQ/profile-displayphoto-crop_800_800/B4EZd.SN1bHYAI-/0/1750170396937?e=1755734400&v=beta&t=yb1hE3EClaWTJqoGk5ezXZrDyLr0QZwR8TR3C2sd7yw",
    linkedin: "www.linkedin.com/in/paul-gee",
    email: "paul@ks-entreprise.com",
    skills: [
      "Intelligence artificielle (IA)",
      "Microsoft Azure",
      "Visual merchandising",
    ],
    experience:
      "Co-founder at KS consulting, previously Strategic Sales at Procter & Gamble, Sales at BeReal",
  },
  {
    name: "Louis Bordeau",
    role: "AI Consultant & Finance Expert",
    department: "Business Operations & Consulting",
    description:
      "Handles the business part of KS with strong background in finance and real estate. Specializes in AI consulting and strategic sourcing.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQFgcghRQ7pHKw/profile-displayphoto-crop_800_800/B4EZfhWjZVHYAI-/0/1751832478736?e=1755734400&v=beta&t=NB2k-msgyp-zpTHqGpx9TGWGLf2Ab1ZHyUd1gL3RSsw",
    linkedin: "www.linkedin.com/in/louis-bordeau-edhec2026",
    email: "louis@ks-entreprise.com",
    skills: [
      "Stratégie de sourcing",
      "Environnement de start-up",
      "levée de fond",
    ],
    experience:
      "AI Consultant at KS consulting, previously Intern at J.P. Morgan Real Estate Private Equity",
  },
];

export default function HomePage() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    status,
    setInput,
    append,
  } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "system",
        role: "system",
        content: `You are KS-GPT, an AI assistant for KS Lab/KS Consulting. You help users learn about KS services and team.

## Company Information - KS Lab/KS Consulting

**Mission**: L'intelligence artificielle à portée de main. 
Nous aidons les entreprises à tripler leur productivité et efficacité grâce à l'IA.

**Services & Expertise**:

### Cas métiers inspirants:
- **Simulateurs conversationnels**: Entretiens d'embauche, Cold calling, Analyse d'éloquence, exercices oraux avec coaching vocal sur-mesure
- **Alumni et agents scolaires**: Révolutionner l'éducation avec mentorat IA, analyse de problèmes complexes, solutions personnalisées

### Fonctionnalités principales:
- **Accès mobile**: Automatisation des tâches et processus d'entreprise par des agents IA
- **Agent de recherche et de veille Internet**
- **Agent d'analyse de bases de données documentaires** 
- **Génération automatique de documents**
- **Chatbots**: Interface sécurisée basée sur vos documents d'entreprise, connectée aux bases de données
- **Audio & vidéo**: Simulation de conversations, automatisation d'appels, analyse et génération de vidéos
- **Images et documents**: Extraction de données, catégorisation, identification de motifs

**Contact**: 
- Téléphone: (+33) 7 68 56 68 36
- Adresse: 12 Rue du Paillet 69570 Dardilly  
- Email: contact@ks-entreprise.com

## KS Team Members:

### Louis Bordeau - AI Consultant & Finance Expert
- Role: Business Operations & Consulting  
- Story: Louis brings a unique blend of finance expertise and AI consulting to KS. With his prestigious background at J.P. Morgan's Real Estate Private Equity division, he bridges the gap between traditional finance and cutting-edge AI solutions. At KS, Louis specializes in helping clients navigate AI implementation from a strategic business perspective, ensuring ROI and sustainable growth.
- Skills: Stratégie de sourcing, Environnement de start-up, levée de fond
- Experience: AI Consultant at KS consulting, previously Intern at J.P. Morgan Real Estate Private Equity
- Previous Company Logo: ![J.P. Morgan](https://i.postimg.cc/7ZgtxTyK/lqamlqmaqa.png)
- Contact: louisbordeau85@gmail.com
- LinkedIn: 🔗 [Connect with Louis on LinkedIn](https://www.linkedin.com/in/louis-bordeau-edhec2026)
- Photo: ![Louis Bordeau](https://media.licdn.com/dms/image/v2/D4E03AQFgcghRQ7pHKw/profile-displayphoto-crop_800_800/B4EZfhWjZVHYAI-/0/1751832478736?e=1755734400&v=beta&t=NB2k-msgyp-zpTHqGpx9TGWGLf2Ab1ZHyUd1gL3RSsw)

### Noé Campo - Co-founder & AI Engineer
- Role: Technical Lead & Engineering Department
- Story: Noé is the technical mastermind behind KS Lab's AI innovations. As the co-founder leading the engineering department, he transforms complex AI concepts into practical, tailor-made solutions for businesses. His expertise in Large Language Models and generative AI, combined with his previous experience at Delos Intelligence, makes him the driving force behind KS's cutting-edge AI development capabilities.
- Skills: Large Language Models (LLM), Generative AI, FastAPI
- Experience: AI Engineer & Co-Founder at KS lab, previously AI Developer at Delos Intelligence
- Previous Company Logo: ![Delos Intelligence](https://cdn.prod.website-files.com/679d0a5b0329e1c6f9b87f2e/67ec022ea26fe8de32465154_logo-wide-dark.png)
- Contact: noecampo@delosintelligence.fr
- LinkedIn: 🔗 [Connect with Noé on LinkedIn](https://www.linkedin.com/in/noe-campo)
- Photo: ![Noé Campo](https://media.licdn.com/dms/image/v2/D5603AQHRR8QOTXhTlg/profile-displayphoto-crop_800_800/B56Zd.4PboGQAI-/0/1750180389596?e=1755734400&v=beta&t=HpH4JQYZT1ygb9Scq-f4nDDA7soydfy_rSsl3s-HqGQ)

### Paul GEE - Co-founder & Business Development  
- Role: Business Operations & Strategy
- Story: Paul is the business architect of KS, masterfully orchestrating partnerships and strategic growth. His dynamic background spans from strategic sales at global giants like Procter & Gamble to the innovative startup world at BeReal. As co-founder, Paul ensures KS stays ahead of market trends while building meaningful relationships that drive business success and AI adoption across industries.
- Skills: Intelligence artificielle (IA), Microsoft Azure, Visual merchandising
- Experience: Co-founder at KS consulting, previously Strategic Sales at Procter & Gamble, Sales at BeReal
- Previous Company Logo: ![BeReal](https://upload.wikimedia.org/wikipedia/commons/8/89/Logo-BeReal.png)
- Contact: paulgeecontact@gmail.com
- LinkedIn: 🔗 [Connect with Paul on LinkedIn](https://www.linkedin.com/in/paul-gee)
- Photo: ![Paul GEE](https://media.licdn.com/dms/image/v2/D4E03AQGKYwb27G-DdQ/profile-displayphoto-crop_800_800/B4EZd.SN1bHYAI-/0/1750170396937?e=1755734400&v=beta&t=yb1hE3EClaWTJqoGk5ezXZrDyLr0QZwR8TR3C2sd7yw)

When presenting team members, ALWAYS include:
1. Their profile photo using the Photo field above
2. Their previous company logo using the Previous Company Logo field above
3. Their detailed story and role information
4. Their LinkedIn connection link with the 🔗 emoji formatting

Use the exact markdown image syntax provided above to show both photos and company logos. Be helpful, professional, and comprehensive in your responses about KS services and team expertise.`,
      },
    ],
  });
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true);
  const { t, i18n } = useTranslation();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Get suggestions based on current language
  const suggestions =
    i18n.language === "fr"
      ? [
          "Quels services offrez-vous ?",
          "Présentez-moi l'équipe KS",
          "Quelles technologies utilisez-vous ?",
        ]
      : [
          "What services do you offer?",
          "Introduce me to the KS team",
          "What technologies do you use?",
        ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Check if user is at bottom of scroll
  const isAtBottom = () => {
    if (!messagesContainerRef.current) return true;
    const container = messagesContainerRef.current;
    const threshold = 50; // More precise threshold
    return (
      Math.abs(
        container.scrollHeight - container.scrollTop - container.clientHeight
      ) <= threshold
    );
  };

  // Handle scroll events to track user behavior
  const handleScroll = () => {
    if (isAtBottom()) {
      setShouldAutoScroll(true);
    } else {
      setShouldAutoScroll(false);
    }
  };

  // Optimized scroll to bottom for streaming
  const scrollToBottom = (smooth = true) => {
    if (!messagesEndRef.current || !shouldAutoScroll) return;
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    // Debounce scrolling during streaming to reduce jank
    scrollTimeoutRef.current = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "end",
      });
    }, status === "streaming" ? 100 : 0);
  };

  // Scroll when messages change
  useEffect(() => {
    scrollToBottom(status !== "streaming");
    
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [messages, status]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setHasStartedChat(true);
      handleSubmit(e);
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setHasStartedChat(true);
    append({
      role: "user",
      content: question,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit(e as any);
    }
  };

  // Filter out system message from display
  const displayMessages = messages.filter((msg) => msg.role !== "system");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col relative overflow-hidden">
      {displayMessages.length === 0 && <SplashCursor />}

      {/* Return Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-6 left-6 z-50"
      >
        <Link
          href="https://ks-lab.co"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700/80 backdrop-blur-sm border border-zinc-700/50 transition-all duration-200 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 text-zinc-300" />
        </Link>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        <AnimatePresence mode="wait">
          {!hasStartedChat ? (
            /* Initial State - Centered */
            <motion.div
              key="initial"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex-1 flex flex-col items-center justify-center px-6 max-w-4xl mx-auto w-full relative"
            >
              {/* Orb Background for Desktop */}
              {!isMobile && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                  <div style={{ width: "600px", height: "600px" }}>
                    <Orb
                      hue={240}
                      hoverIntensity={0.3}
                      rotateOnHover={true}
                      forceHoverState={false}
                    />
                  </div>
                </div>
              )}

              {/* Title */}
              <motion.div
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center mb-12 relative z-10"
              >
                <img
                  src="/logo-white.png"
                  className="w-auto h-[4.5rem] mx-auto py-5"
                />
                <p className="text-zinc-400 text-lg">{t("ksGpt.subtitle")}</p>
              </motion.div>

              {/* Textarea */}
              <motion.form
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={onSubmit}
                className="w-full max-w-xl mb-8 relative z-10"
              >
                <div className="relative">
                  <textarea
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={t("ksGpt.placeholder")}
                    className="w-full p-6 pr-16 h-32 bg-zinc-900/60 backdrop-blur-xl border-2 border-zinc-700/60 rounded-3xl resize-none text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-0 focus:border-blue-500/60 transition-all duration-300 shadow-2xl"
                    disabled={status === "streaming"}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={!input.trim() || status === "streaming"}
                    className="absolute bottom-4 right-4 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-zinc-600 disabled:to-zinc-600 disabled:cursor-not-allowed rounded-full transition-all duration-200 shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.form>

              {/* Suggested Questions */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full max-w-2xl relative z-10"
              >
                <p className="text-zinc-500 text-sm mb-4 text-center">
                  {t("ksGpt.tryAsking")}
                </p>
                <div className="flex flex-row mx-auto w-fit gap-2 mb-2">
                  {suggestions
                    .slice(0, 2)
                    .map((question: string, index: number) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="px-4 py-2 bg-zinc-800/30 backdrop-blur-md hover:bg-zinc-700/40 border border-zinc-700/40 rounded-full text-left transition-all duration-200 text-zinc-300 hover:text-zinc-100 text-xs w-fit shadow-lg"
                      >
                        {question}
                      </motion.button>
                    ))}
                </div>
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSuggestedQuestion(suggestions[2])}
                    className="px-4 py-2 bg-zinc-800/30 backdrop-blur-md hover:bg-zinc-700/40 border border-zinc-700/40 rounded-full text-left transition-all duration-200 text-zinc-300 hover:text-zinc-100 text-xs w-fit shadow-lg"
                  >
                    {suggestions[2]}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* Chat State */
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex flex-col relative"
            >
              {/* Messages */}
              <div
                ref={messagesContainerRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto px-6 py-8 pb-32"
              >
                <div className="max-w-4xl mx-auto space-y-8 pb-32">
                  <AnimatePresence>
                    {displayMessages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.05 }}
                        className={`flex ${
                          message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        {message.role === "assistant" && (
                          <div className="flex-shrink-0 mr-4">
                            <img
                              src="/assistant.png"
                              alt="AI Assistant"
                              className="w-10 h-10 rounded-full border-2 border-zinc-700/30 brightness-75 contrast-125"
                            />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] ${
                            message.role === "user"
                              ? "bg-white text-foreground rounded-full shadow-lg px-6 py-4"
                              : ""
                          }`}
                        >
                          {message.role === "user" ? (
                            <p className="text-zinc-900">{message.content}</p>
                          ) : (
                            <StreamingMarkdown 
                              content={message.content} 
                              isStreaming={status === "streaming" && index === displayMessages.length - 1}
                            />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Floating Input at bottom */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-0 left-0 right-0 p-6 backdrop-blur-xl bg-zinc-950/90 border-zinc-800/50"
              >
                <div className="max-w-2xl mx-auto">
                  <form onSubmit={onSubmit}>
                    <div className="relative">
                      <textarea
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        placeholder={t("ksGpt.chatPlaceholder")}
                        className="w-full p-5 pr-16 h-32 bg-zinc-800/60 backdrop-blur-sm border-2 border-zinc-700/60 rounded-3xl resize-none text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-0 focus:border-blue-500/60 transition-all duration-200 shadow-2xl"
                        disabled={status === "streaming"}
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        disabled={!input.trim() || status === "streaming"}
                        className="absolute bottom-4 right-4 p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-zinc-600 disabled:to-zinc-600 disabled:cursor-not-allowed rounded-full transition-all duration-200 shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Trademark */}
      {!hasStartedChat && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="p-4 text-center text-zinc-600 text-sm backdrop-blur-sm"
        >
          {t("ksGpt.copyright")}
        </motion.div>
      )}
    </div>
  );
}
