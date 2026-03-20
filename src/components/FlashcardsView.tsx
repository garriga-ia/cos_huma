import { useState } from 'react';
import { SystemData } from '../data';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  system: SystemData;
  language: 'ca' | 'es' | 'en';
}

export default function FlashcardsView({ system, language }: Props) {
  const t = {
    ca: {
      analyzing: '🔍 Analitzant...',
      tapToFlip: '[ Toca per girar ]',
      result: '🚨 Resultat'
    },
    es: {
      analyzing: '🔍 Analizando...',
      tapToFlip: '[ Toca para girar ]',
      result: '🚨 Resultado'
    },
    en: {
      analyzing: '🔍 Analyzing...',
      tapToFlip: '[ Tap to flip ]',
      result: '🚨 Result'
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<any[]>([]);

  useEffect(() => {
    const pool = [...system.flashcards];
    setShuffledCards(pool.sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [system.id, language]);

  if (shuffledCards.length === 0) return null;

  const currentCard = shuffledCards[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % shuffledCards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + shuffledCards.length) % shuffledCards.length);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-8 bg-white dark:bg-slate-900 px-6 py-2 rounded-full shadow-sm border-2 border-slate-100 dark:border-slate-800"
      >
        <div className="flex gap-1.5">
          {shuffledCards.map((_, idx) => (
            <div 
              key={idx} 
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${idx === currentIndex ? system.bgClass.replace('bg-', 'bg-').replace('100', '500') : 'bg-slate-200 dark:bg-slate-700'}`}
              style={{ backgroundColor: idx === currentIndex ? system.color : undefined }}
            />
          ))}
        </div>
        <span className="ml-4 font-black text-slate-400 dark:text-slate-500 text-sm tracking-widest uppercase">
          {currentIndex + 1} / {shuffledCards.length}
        </span>
      </motion.div>

      <div 
        className="w-full max-w-sm h-[420px] cursor-pointer" 
        style={{ perspective: 1000 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full relative"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        >
          {/* Front */}
          <div 
            className="absolute w-full h-full rounded-3xl p-8 flex flex-col items-center justify-between text-center border-8 border-white dark:border-slate-800 shadow-clay dark:shadow-clay-dark"
            style={{ backfaceVisibility: 'hidden', backgroundColor: system.color }}
          >
            <div className="font-black text-white/70 tracking-widest uppercase text-sm">
              {t[language].analyzing}
            </div>
            <div className="text-2xl font-display font-black text-white leading-snug flex-1 flex items-center justify-center">
              {currentCard.q}
            </div>
            <div className="text-white/50 text-sm font-bold italic">
              {t[language].tapToFlip}
            </div>
          </div>

          {/* Back */}
          <div 
            className="absolute w-full h-full rounded-3xl p-8 flex flex-col items-center justify-between text-center border-8 border-white dark:border-slate-800 shadow-clay dark:shadow-clay-dark bg-slate-800 dark:bg-slate-950"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className={`font-black tracking-widest uppercase text-sm ${system.textClass.replace('700', '400')} dark:text-slate-400`}>
              {t[language].result}
            </div>
            <div className="text-2xl font-display font-black text-white leading-snug flex-1 flex items-center justify-center">
              {currentCard.a}
            </div>
            <div className="text-slate-500 dark:text-slate-600 text-sm font-bold italic">
              {t[language].tapToFlip}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-6 mt-12"
      >
        <button 
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          className="flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md transition-all hover:scale-110 active:scale-95"
        >
          <ArrowLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          className="flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg transition-all hover:scale-110 active:scale-95"
          style={{ backgroundColor: system.color }}
        >
          <ArrowRight className="w-8 h-8" />
        </button>
      </motion.div>

    </div>
  );
}
