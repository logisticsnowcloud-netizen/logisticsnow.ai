import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateAnswer } from "@/lib/chatbot";
import { Send, X, Bot, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "bot" | "user";
  text: string;
  time: string;
}

const ChatWidget = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "👋 Hello! I'm the LogisticsNow Assistant. I can answer questions about LogisticsNow and LoRRI — our products, services, vision, and how to get in touch.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      role: "user",
      text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await generateAnswer(text);
      const botMsg: Message = {
        role: "bot",
        text: result.answer,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);

      const lowerInput = text.toLowerCase();
      const lowerAnswer = result.answer.toLowerCase();
      if (
        lowerInput.includes("demo") ||
        lowerInput.includes("contact") ||
        lowerInput.includes("schedule") ||
        lowerAnswer.includes("redirecting you")
      ) {
        setTimeout(() => {
          setIsOpen(false);
          navigate("/contact");
        }, 2500);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, I encountered an error. Please try again.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    { label: "What is LoRRI?", query: "What is LoRRI?" },
    { label: "Why choose us?", query: "How is LogisticsNow better than others?" },
    { label: "Book a Demo", query: "I want to request a demo." },
  ];

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className={`group fixed bottom-4 right-4 z-[500] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 sm:bottom-7 sm:right-7 sm:h-[62px] sm:w-[62px] ${
          isOpen ? "bg-ln-purple" : "gradient-primary"
        }`}
        style={{ boxShadow: isOpen ? "0 8px 28px rgba(0,0,0,0.2)" : "0 8px 32px hsl(var(--ln-purple) / 0.35)" }}
        type="button"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            >
              <X className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
              className="relative text-[28px] sm:text-3xl"
            >
              🤖
              {showNotification && <span className="absolute -right-1 -top-1 h-3.5 w-3.5 animate-bounce rounded-full border-2 border-primary-foreground bg-destructive" />}
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-[80px] right-2 z-[500] flex h-[min(580px,calc(100vh-6rem))] w-[min(390px,calc(100vw-1rem))] flex-col overflow-hidden rounded-[24px] border border-border/50 bg-card/95 shadow-2xl backdrop-blur-xl sm:bottom-[104px] sm:right-7 sm:rounded-[28px]"
            style={{ boxShadow: "0 25px 60px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="gradient-primary flex shrink-0 items-center justify-between p-4 text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20 shadow-inner sm:h-11 sm:w-11">
                  <Bot className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold">NowAssist AI</div>
                  <div className="flex items-center gap-1.5 text-[11px] text-primary-foreground/80">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    Online & Ready
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-2 transition-colors hover:bg-primary-foreground/10" type="button">
                <X className="h-5 w-5 text-primary-foreground/70" />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`flex max-w-[88%] flex-col ${m.role === "bot" ? "self-start" : "self-end"}`}
                >
                  <div
                    className={`relative rounded-2xl px-4 py-3 text-[13px] leading-relaxed sm:text-[13.5px] ${
                      m.role === "bot"
                        ? "rounded-tl-none border border-border bg-secondary text-foreground shadow-sm"
                        : "gradient-primary rounded-tr-none text-primary-foreground shadow-md"
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className={`mt-1.5 px-1 text-[10px] font-medium text-muted-foreground ${m.role === "bot" ? "text-left" : "text-right"}`}>
                    {m.time}
                  </span>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex max-w-[80%] items-center gap-1 self-start rounded-2xl rounded-tl-none bg-secondary px-4 py-3"
                >
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex flex-col gap-3 border-t border-border bg-secondary/40 p-3 sm:p-4">
              {messages.length < 3 && !isLoading && (
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(s.query)}
                      className="flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-sm transition-all hover:border-primary hover:text-primary sm:text-[12px]"
                      type="button"
                    >
                      {s.label}
                      <ChevronRight className="h-3 w-3 opacity-50" />
                    </button>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage(input)}
                  placeholder="Ask about LogisticsNow..."
                  className="flex-1 rounded-2xl border border-border bg-card px-4 py-3 text-[14px] outline-none transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/5"
                  disabled={isLoading}
                />
                <button
                  onClick={() => handleSendMessage(input)}
                  disabled={isLoading || !input.trim()}
                  className="gradient-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-primary-foreground shadow-md transition-all hover:scale-105 active:scale-95 disabled:opacity-50 sm:h-12 sm:w-12"
                  type="button"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="text-center text-[10px] font-medium text-muted-foreground">AI can make mistakes. Check important info.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
