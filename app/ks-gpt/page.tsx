/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import SplashCursor from "@/components/SplashCursor";

import "@/lib/i18n";

// Dynamically import Orb to avoid SSR issues
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
      "https://media.licdn.com/dms/image/v2/D4E03AQEqsdhaLemEtA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706825783209?e=1755129600&v=beta&t=fXXUlyZ46KV0aaTX_iCNqoVMSxIyN7A9lrtXKoWGkNE",
    linkedin: "www.linkedin.com/in/noe-campo",
    email: "noecampo@delosintelligence.fr",
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
      "https://media.licdn.com/dms/image/v2/D4E03AQGCegIcDgFjaQ/profile-displayphoto-shrink_800_800/B4EZXkL.1aG0Ag-/0/1743290101540?e=1755129600&v=beta&t=QE2HSxdvlwVlVBD-udQv4BKgjt8JB9-rFD_JHlOVyDE",
    linkedin: "www.linkedin.com/in/paul-gee",
    email: "paulgeecontact@gmail.com",
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
      "https://media.licdn.com/dms/image/v2/D5603AQFvksmWNosq_g/profile-displayphoto-shrink_800_800/B56ZSRxqCXHEAc-/0/1737612502023?e=1755129600&v=beta&t=uC-LAAiplpsnpJmfsKLhmCKtAUgAIpZo5pJfxoqWrDM",
    linkedin: "www.linkedin.com/in/louis-bordeau-edhec2026",
    email: "louisbordeau85@gmail.com",
    skills: [
      "Stratégie de sourcing",
      "Environnement de start-up",
      "levée de fond",
    ],
    experience:
      "AI Consultant at KS consulting, previously Intern at J.P. Morgan Real Estate Private Equity",
  },
];

export default function KsGptPage() {
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
- Photo: ![Louis Bordeau](https://media.licdn.com/dms/image/v2/D4E03AQEqsdhaLemEtA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706825783209?e=1755129600&v=beta&t=fXXUlyZ46KV0aaTX_iCNqoVMSxIyN7A9lrtXKoWGkNE)

### Noé Campo - Co-founder & AI Engineer
- Role: Technical Lead & Engineering Department
- Story: Noé is the technical mastermind behind KS Lab's AI innovations. As the co-founder leading the engineering department, he transforms complex AI concepts into practical, tailor-made solutions for businesses. His expertise in Large Language Models and generative AI, combined with his previous experience at Delos Intelligence, makes him the driving force behind KS's cutting-edge AI development capabilities.
- Skills: Large Language Models (LLM), Generative AI, FastAPI
- Experience: AI Engineer & Co-Founder at KS lab, previously AI Developer at Delos Intelligence
- Previous Company Logo: ![Delos Intelligence](https://cdn.prod.website-files.com/679d0a5b0329e1c6f9b87f2e/67ec022ea26fe8de32465154_logo-wide-dark.png)
- Contact: noecampo@delosintelligence.fr
- LinkedIn: 🔗 [Connect with Noé on LinkedIn](https://www.linkedin.com/in/noe-campo)
- Photo: ![Noé Campo](https://media.licdn.com/dms/image/v2/D5603AQFvksmWNosq_g/profile-displayphoto-shrink_800_800/B56ZSRxqCXHEAc-/0/1737612502023?e=1755129600&v=beta&t=uC-LAAiplpsnpJmfsKLhmCKtAUgAIpZo5pJfxoqWrDM)

### Paul GEE - Co-founder & Business Development  
- Role: Business Operations & Strategy
- Story: Paul is the business architect of KS, masterfully orchestrating partnerships and strategic growth. His dynamic background spans from strategic sales at global giants like Procter & Gamble to the innovative startup world at BeReal. As co-founder, Paul ensures KS stays ahead of market trends while building meaningful relationships that drive business success and AI adoption across industries.
- Skills: Intelligence artificielle (IA), Microsoft Azure, Visual merchandising
- Experience: Co-founder at KS consulting, previously Strategic Sales at Procter & Gamble, Sales at BeReal
- Previous Company Logo: ![BeReal](https://upload.wikimedia.org/wikipedia/commons/8/89/Logo-BeReal.png)
- Contact: paulgeecontact@gmail.com
- LinkedIn: 🔗 [Connect with Paul on LinkedIn](https://www.linkedin.com/in/paul-gee)
- Photo: ![Paul GEE](https://media.licdn.com/dms/image/v2/D4E03AQGCegIcDgFjaQ/profile-displayphoto-shrink_800_800/B4EZXkL.1aG0Ag-/0/1743290101540?e=1755129600&v=beta&t=QE2HSxdvlwVlVBD-udQv4BKgjt8JB9-rFD_JHlOVyDE)

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

  // Auto-scroll to bottom when new messages arrive, but only if user hasn't manually scrolled up
  useEffect(() => {
    if (messagesEndRef.current && shouldAutoScroll) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, status, shouldAutoScroll]);

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

      {/* Back Arrow */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-6 left-6 z-50"
      >
        <Link
          href="/"
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
                            <div className="prose prose-invert max-w-none">
                              <ReactMarkdown
                                components={{
                                  p: ({ children }) => (
                                    <p className="mb-4 last:mb-0 text-zinc-200 leading-relaxed text-base">
                                      {children}
                                    </p>
                                  ),
                                  ul: ({ children }) => (
                                    <ul className="list-disc list-outside mb-6 space-y-2 text-zinc-200 pl-6 ml-4">
                                      {children}
                                    </ul>
                                  ),
                                  ol: ({ children }) => (
                                    <ol className="list-decimal list-outside mb-6 space-y-2 text-zinc-200 pl-6 ml-4">
                                      {children}
                                    </ol>
                                  ),
                                  li: ({ children }) => (
                                    <li className="text-zinc-300 leading-relaxed mb-2 pl-2">
                                      {children}
                                    </li>
                                  ),
                                  h1: ({ children }) => (
                                    <h1 className="text-2xl font-black mb-4 text-zinc-50 border-b border-zinc-700 pb-2">
                                      {children}
                                    </h1>
                                  ),
                                  h2: ({ children }) => (
                                    <h2 className="text-xl font-bold mb-4 text-zinc-100 mt-6">
                                      {children}
                                    </h2>
                                  ),
                                  h3: ({ children }) => (
                                    <h3 className="text-lg font-semibold mb-3 text-zinc-200 mt-5">
                                      {children}
                                    </h3>
                                  ),
                                  h4: ({ children }) => (
                                    <h4 className="text-base font-medium mb-2 text-zinc-300 mt-4">
                                      {children}
                                    </h4>
                                  ),
                                  strong: ({ children }) => (
                                    <strong className="font-bold text-zinc-100">
                                      {children}
                                    </strong>
                                  ),
                                  em: ({ children }) => (
                                    <em className="italic text-zinc-300 font-medium">
                                      {children}
                                    </em>
                                  ),
                                  code: ({ children }) => (
                                    <code className="bg-zinc-800/70 border border-zinc-700/50 px-2 py-1 rounded-md text-sm text-zinc-100 font-mono font-semibold">
                                      {children}
                                    </code>
                                  ),
                                  pre: ({ children }) => (
                                    <pre className="bg-zinc-900/70 border border-zinc-700/50 p-4 rounded-xl overflow-x-auto mb-4 shadow-lg">
                                      <code className="text-zinc-200 font-mono text-sm leading-relaxed font-normal">
                                        {children}
                                      </code>
                                    </pre>
                                  ),
                                  blockquote: ({ children }) => (
                                    <blockquote className="border-l-4 border-zinc-600 pl-4 py-2 mb-4 bg-zinc-800/30 rounded-r-lg italic text-zinc-300 font-medium">
                                      {children}
                                    </blockquote>
                                  ),
                                  a: ({ href, children }) => (
                                    <a
                                      href={href}
                                      className="text-blue-400 font-semibold hover:text-blue-300 no-underline bg-zinc-800/40 hover:bg-zinc-700/40 px-3 py-1.5 rounded-full border border-zinc-600/30 transition-all duration-200 hover:scale-105 inline-flex items-center gap-1"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      {children}
                                    </a>
                                  ),
                                  img: ({ src, alt }) => (
                                    <img
                                      src={src}
                                      alt={alt}
                                      className="rounded-lg max-w-24 h-auto border-2 border-zinc-700/30 my-4 inline-block mr-2"
                                    />
                                  ),
                                }}
                              >
                                {message.content}
                              </ReactMarkdown>
                            </div>
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
