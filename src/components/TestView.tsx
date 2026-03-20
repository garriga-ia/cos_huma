import { useState, useEffect } from 'react';
import { SystemData, TestQuestion } from '../data';
import { CheckCircle2, XCircle, RotateCcw, User, Send, Loader2 } from 'lucide-react';
import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  system: SystemData;
  language: 'ca' | 'es' | 'en';
}

export default function TestView({ system, language }: Props) {
  const [studentName, setStudentName] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [shuffledQuestions, setShuffledQuestions] = useState<TestQuestion[]>([]);

  useEffect(() => {
    // Shuffle and pick 5 questions (or more if available, but let's stick to 5 random ones)
    const pool = [...system.test];
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 5).map(q => {
      // Shuffle options for each question
      const optionsWithIndex = q.options.map((opt, i) => ({ opt, originalIndex: i }));
      const shuffledOptions = [...optionsWithIndex].sort(() => Math.random() - 0.5);
      const newCorrectIndex = shuffledOptions.findIndex(o => o.originalIndex === q.correctIndex);
      
      return {
        ...q,
        options: shuffledOptions.map(o => o.opt),
        correctIndex: newCorrectIndex
      };
    });
    setShuffledQuestions(shuffled);
    
    if (auth.currentUser) {
      setStudentName(auth.currentUser.displayName || auth.currentUser.email?.split('@')[0] || '');
    }
  }, [system.id, language]);

  useEffect(() => {
    if (isFinished) {
      saveResult();
    }
  }, [isFinished]);

  const question = shuffledQuestions[currentQuestion];

  const saveResult = async () => {
    setIsSaving(true);
    setSaveError(null);
    try {
      await addDoc(collection(db, 'test_results'), {
        studentName: studentName || 'Anònim',
        systemId: system.id,
        systemTitle: system.title,
        score: score,
        totalQuestions: shuffledQuestions.length,
        timestamp: serverTimestamp(),
        userId: auth.currentUser ? auth.currentUser.uid : null
      });
    } catch (error) {
      console.error("Error saving test result:", error);
      setSaveError("No s'ha pogut guardar el resultat automàticament.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleOptionClick = (index: number) => {
    if (showFeedback || !question) return;
    
    setSelectedOption(index);
    setShowFeedback(true);
    
    if (index === question.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(c => c + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    // Re-shuffle for next play
    const pool = [...system.test];
    const shuffled = pool.sort(() => Math.random() - 0.5).slice(0, 5).map(q => {
      const optionsWithIndex = q.options.map((opt, i) => ({ opt, originalIndex: i }));
      const shuffledOptions = [...optionsWithIndex].sort(() => Math.random() - 0.5);
      const newCorrectIndex = shuffledOptions.findIndex(o => o.originalIndex === q.correctIndex);
      
      return {
        ...q,
        options: shuffledOptions.map(o => o.opt),
        correctIndex: newCorrectIndex
      };
    });
    setShuffledQuestions(shuffled);
    
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setIsFinished(false);
    setIsStarted(false);
    setSaveError(null);
  };

  const t = {
    ca: {
      beforeStart: 'Abans de començar...',
      enterName: 'Escriu el teu nom per guardar el resultat.',
      yourName: 'El teu nom',
      startTest: 'Començar Test 🚀',
      finished: 'Has acabat,',
      youGot: 'Has encertat',
      of: 'de',
      questions: 'preguntes.',
      saving: 'Guardant resultats...',
      saveSuccess: 'Resultat enviat correctament! ✅',
      playAgain: 'Tornar a jugar',
      question: 'Pregunta',
      points: 'Punts:',
      almost: 'Ui, gairebé! La resposta correcta era la marcada en verd.',
      nextQuestion: 'Següent Pregunta 🚀',
      seeResults: 'Veure Resultats 🏆'
    },
    es: {
      beforeStart: 'Antes de empezar...',
      enterName: 'Escribe tu nombre para guardar el resultado.',
      yourName: 'Tu nombre',
      startTest: 'Empezar Test 🚀',
      finished: '¡Has terminado,',
      youGot: 'Has acertado',
      of: 'de',
      questions: 'preguntas.',
      saving: 'Guardando resultados...',
      saveSuccess: '¡Resultado enviado correctamente! ✅',
      playAgain: 'Volver a jugar',
      question: 'Pregunta',
      points: 'Puntos:',
      almost: '¡Uy, casi! La respuesta correcta era la marcada en verde.',
      nextQuestion: 'Siguiente Pregunta 🚀',
      seeResults: 'Ver Resultados 🏆'
    },
    en: {
      beforeStart: 'Before we start...',
      enterName: 'Enter your name to save the result.',
      yourName: 'Your name',
      startTest: 'Start Quiz 🚀',
      finished: 'You finished,',
      youGot: 'You got',
      of: 'out of',
      questions: 'questions right.',
      saving: 'Saving results...',
      saveSuccess: 'Result sent successfully! ✅',
      playAgain: 'Play again',
      question: 'Question',
      points: 'Points:',
      almost: 'Oops, almost! The correct answer was the one marked in green.',
      nextQuestion: 'Next Question 🚀',
      seeResults: 'See Results 🏆'
    }
  };

  if (!isStarted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto">
        <div className={`p-8 rounded-3xl border-4 ${system.borderClass} bg-white dark:bg-slate-900 dark:border-opacity-30 shadow-clay dark:shadow-clay-dark text-center`}>
          <div className="text-5xl mb-6">👋</div>
          <h2 className="text-2xl font-display font-black text-slate-800 dark:text-slate-100 mb-2">{t[language].beforeStart}</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">{t[language].enterName}</p>
          
          <div className="relative mb-8">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-5 h-5" />
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder={t[language].yourName}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all font-bold text-lg"
              onKeyDown={(e) => e.key === 'Enter' && studentName.trim() && setIsStarted(true)}
            />
          </div>

          <motion.button
            whileHover={studentName.trim() ? { scale: 1.05 } : {}}
            whileTap={studentName.trim() ? { scale: 0.95 } : {}}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            onClick={() => setIsStarted(true)}
            disabled={!studentName.trim()}
            className={`w-full py-4 rounded-2xl font-black text-white text-xl transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed`}
            style={{ backgroundColor: system.color }}
          >
            {t[language].startTest}
          </motion.button>
        </div>
      </motion.div>
    );
  }

  if (isFinished) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`p-10 rounded-3xl border-4 ${system.borderClass} bg-white dark:bg-slate-900 dark:border-opacity-30 shadow-clay dark:shadow-clay-dark text-center max-w-2xl mx-auto`}>
        <div className="text-6xl mb-6">🎉</div>
        <h2 className={`text-4xl font-display font-black mb-4 ${system.textClass} dark:text-white`}>{t[language].finished} {studentName}!</h2>
        <p className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-4">
          {t[language].youGot} <span className={`text-3xl ${system.textClass}`}>{score}</span> {t[language].of} <span className="text-3xl">{shuffledQuestions.length}</span> {t[language].questions}
        </p>

        <div className="mb-8 flex flex-col items-center gap-2">
          {isSaving ? (
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold animate-pulse">
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{t[language].saving}</span>
            </div>
          ) : saveError ? (
            <div className="text-red-500 dark:text-red-400 font-bold flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              <span>{saveError}</span>
            </div>
          ) : (
            <div className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2">
              <Send className="w-5 h-5" />
              <span>{t[language].saveSuccess}</span>
            </div>
          )}
        </div>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          onClick={handleRestart}
          className={`px-8 py-4 rounded-2xl font-black text-white text-xl flex items-center justify-center gap-3 mx-auto shadow-lg`}
          style={{ backgroundColor: system.color }}
        >
          <RotateCcw className="w-6 h-6" />
          {t[language].playAgain}
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className={`p-8 md:p-12 rounded-3xl border-4 ${system.borderClass} bg-white dark:bg-slate-900 dark:border-opacity-30 shadow-clay dark:shadow-clay-dark overflow-hidden`}>
        <div className="flex justify-between items-center mb-8">
          <span className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-sm">
            {t[language].question} {currentQuestion + 1} {t[language].of} {shuffledQuestions.length}
          </span>
          <span className={`font-black ${system.textClass} bg-slate-100 dark:bg-slate-800 px-4 py-1 rounded-full`}>
            {t[language].points} {score}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-black text-slate-800 dark:text-slate-100 mb-10 leading-tight">
              {question.question}
            </h3>

            <div className="space-y-4">
              {question.options.map((option, idx) => {
                let btnClass = "bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600";
                let icon = null;

                if (showFeedback) {
                  if (idx === question.correctIndex) {
                    btnClass = "bg-emerald-50 dark:bg-emerald-900/30 border-2 border-emerald-500 dark:border-emerald-500/50 text-emerald-800 dark:text-emerald-300 font-bold shadow-md";
                    icon = <CheckCircle2 className="w-6 h-6 text-emerald-500 dark:text-emerald-400 shrink-0" />;
                  } else if (idx === selectedOption) {
                    btnClass = "bg-red-50 dark:bg-red-900/30 border-2 border-red-500 dark:border-red-500/50 text-red-800 dark:text-red-300 opacity-80";
                    icon = <XCircle className="w-6 h-6 text-red-500 dark:text-red-400 shrink-0" />;
                  } else {
                    btnClass = "bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-600 opacity-50";
                  }
                }

                return (
                  <motion.button
                    whileHover={!showFeedback ? { scale: 1.02, x: 5 } : {}}
                    whileTap={!showFeedback ? { scale: 0.98 } : {}}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    key={idx}
                    onClick={() => handleOptionClick(idx)}
                    disabled={showFeedback}
                    className={`w-full text-left p-5 rounded-2xl text-lg font-medium transition-colors flex items-center justify-between gap-4 ${btnClass}`}
                  >
                    <span>{option}</span>
                    {icon}
                  </motion.button>
                );
              })}
            </div>

            {showFeedback && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10"
              >
                <div className={`p-6 rounded-2xl ${selectedOption === question.correctIndex ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200' : 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-200'} font-bold text-lg mb-6 flex items-start gap-4`}>
                  <span className="text-3xl shrink-0">{selectedOption === question.correctIndex ? '✅' : '❌'}</span>
                  <p>
                    {selectedOption === question.correctIndex 
                      ? question.explanation 
                      : t[language].almost}
                  </p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  onClick={handleNext}
                  className="w-full py-5 rounded-2xl font-black text-white text-xl shadow-lg"
                  style={{ backgroundColor: system.color }}
                >
                  {currentQuestion < shuffledQuestions.length - 1 ? t[language].nextQuestion : t[language].seeResults}
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
