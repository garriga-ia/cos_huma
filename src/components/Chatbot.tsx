import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import ReactMarkdown from 'react-markdown';

// Initialize Gemini API safely
let ai: GoogleGenAI | null = null;
try {
  const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : undefined);
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (e) {
  console.error("Failed to initialize Gemini API", e);
}

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

interface Props {
  language: 'ca' | 'es' | 'en';
}

export default function Chatbot({ language }: Props) {
  const t = {
    ca: {
      welcome: "Hola! Sóc el teu tutor virtual d'anatomia. Tens algun dubte sobre el cos humà?",
      title: "Tutor d'Anatomia",
      online: "Sempre en línia",
      thinking: "Pensant...",
      placeholder: "Escriu la teva pregunta...",
      error: "Hi ha hagut un error de connexió. Si us plau, torna-ho a provar més tard.",
      systemPrompt: `Ets un tutor virtual amigable i educatiu per a nens i estudiants, expert en el cos humà i anatomia.
Respon sempre en l'idioma en què et parlin (principalment català).
Fes respostes curtes, clares, didàctiques i utilitza emojis.
Si et pregunten coses que NO són sobre el cos humà, la salut, la biologia o l'anatomia, digues educadament que només pots respondre preguntes sobre el cos humà.`
    },
    es: {
      welcome: "¡Hola! Soy tu tutor virtual de anatomía. ¿Tienes alguna duda sobre el cuerpo humano?",
      title: "Tutor de Anatomía",
      online: "Siempre en línea",
      thinking: "Pensando...",
      placeholder: "Escribe tu pregunta...",
      error: "Ha habido un error de conexión. Por favor, inténtalo de nuevo más tarde.",
      systemPrompt: `Eres un tutor virtual amigable y educativo para niños y estudiantes, experto en el cuerpo humano y anatomía.
Responde siempre en el idioma en el que te hablen (principalmente español).
Haz respuestas cortas, claras, didácticas y utiliza emojis.
Si te preguntan cosas que NO son sobre el cuerpo humano, la salud, la biología o la anatomía, di educadamente que solo puedes responder preguntas sobre el cuerpo humano.`
    },
    en: {
      welcome: "Hello! I'm your virtual anatomy tutor. Do you have any questions about the human body?",
      title: "Anatomy Tutor",
      online: "Always online",
      thinking: "Thinking...",
      placeholder: "Type your question...",
      error: "There was a connection error. Please try again later.",
      systemPrompt: `You are a friendly and educational virtual tutor for kids and students, an expert in the human body and anatomy.
Always respond in the language you are spoken to (mainly English).
Keep your answers short, clear, educational, and use emojis.
If asked about things that are NOT about the human body, health, biology, or anatomy, politely say that you can only answer questions about the human body.`
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      text: t[language].welcome
    }
  ]);

  useEffect(() => {
    setMessages(prev => {
      const newMessages = [...prev];
      if (newMessages.length > 0 && newMessages[0].id === 'welcome') {
        newMessages[0].text = t[language].welcome;
      }
      return newMessages;
    });
  }, [language]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { id: Date.now().toString(), role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (!ai) {
        throw new Error("L'API key de Gemini no està configurada. Afegeix VITE_GEMINI_API_KEY a Vercel.");
      }

      // Build conversation history for context
      const history = messages.map(m => `${m.role === 'user' ? 'Alumne' : 'Tutor'}: ${m.text}`).join('\n');
      const prompt = `
${t[language].systemPrompt}

Historial de la conversa:
${history}

Alumne: ${userMsg}
Tutor:`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });

      const replyText = response.text || 'Ho sento, no he pogut processar la resposta. Torna-ho a provar!';
      
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: replyText }]);
    } catch (error) {
      console.error('Error with Gemini API:', error);
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: t[language].error 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-indigo-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-3xl shadow-clay dark:shadow-clay-dark flex flex-col overflow-hidden z-50 border border-slate-200 dark:border-slate-800"
          >
            {/* Header */}
            <div className="bg-indigo-600 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">{t[language].title}</h3>
                  <p className="text-indigo-200 text-xs">{t[language].online}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div 
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-tr-none' 
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none shadow-clay dark:shadow-clay-dark'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="text-sm">{msg.text}</p>
                    ) : (
                      <div className="text-sm prose prose-sm dark:prose-invert max-w-none">
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3 flex-row">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-clay dark:shadow-clay-dark flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">{t[language].thinking}</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t[language].placeholder}
                  className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/50 text-sm"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
