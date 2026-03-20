import { useState, useEffect } from 'react';
import { BookOpen, CheckSquare, Layers, ArrowLeft, Headphones, Presentation, ShieldCheck, LogOut, Trash2, Moon, Sun, User as UserIcon, Globe, Trophy, CheckCircle2 } from 'lucide-react';
import { getSystems, SystemId } from './data';
import ApuntsView from './components/ApuntsView';
import TestView from './components/TestView';
import FlashcardsView from './components/FlashcardsView';
import ProfileView from './components/ProfileView';
import Chatbot from './components/Chatbot';
import { auth, db } from './firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, User } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc, where, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

type Tab = 'apunts' | 'test' | 'flashcards' | 'admin' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('apunts');
  const [selectedSystemId, setSelectedSystemId] = useState<SystemId | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [results, setResults] = useState<any[]>([]);
  const [userResults, setUserResults] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'ca' | 'es' | 'en'>('ca');

  const toggleLanguage = () => {
    if (language === 'ca') setLanguage('es');
    else if (language === 'es') setLanguage('en');
    else setLanguage('ca');
  };

  const t = {
    ca: {
      title: 'EL COS HUMÀ',
      projects: 'Projectes',
      apunts: 'Apunts',
      test: 'Test',
      flashcards: 'Flashcards',
      audio: 'Àudio',
      presentation: 'Presentació',
      darkMode: 'Mode Fosc',
      lightMode: 'Mode Clar',
      profile: 'El meu perfil',
      results: 'Resultats',
      logout: 'Sortir',
      login: 'Entrar / Professor',
      adminTitle: 'Resultats dels Alumnes 📊',
      adminSubtitle: 'Llista de tots els tests finalitzats.',
      teacherMode: 'Mode Professor',
      student: 'Alumne',
      system: 'Sistema',
      score: 'Nota',
      date: 'Data i Hora',
      actions: 'Accions',
      noResults: 'Encara no hi ha cap resultat registrat.',
      readNotes: 'Llegeix els Apunts 📖',
      takeTest: 'Posa\'t a Prova 🎯',
      reviewFlashcards: 'Repassa amb Flashcards 🃏',
      chooseSystem: 'Tria un sistema per començar la missió.',
      backToList: 'Tornar a la llista',
      footer: 'Creat per Albert Garriga, pot contenir errors. Març 2026'
    },
    es: {
      title: 'EL CUERPO HUMANO',
      projects: 'Proyectos',
      apunts: 'Apuntes',
      test: 'Test',
      flashcards: 'Tarjetas',
      audio: 'Audio',
      presentation: 'Presentación',
      darkMode: 'Modo Oscuro',
      lightMode: 'Modo Claro',
      profile: 'Mi perfil',
      results: 'Resultados',
      logout: 'Salir',
      login: 'Entrar / Profesor',
      adminTitle: 'Resultados de los Alumnos 📊',
      adminSubtitle: 'Lista de todos los tests finalizados.',
      teacherMode: 'Modo Profesor',
      student: 'Alumno',
      system: 'Sistema',
      score: 'Nota',
      date: 'Fecha y Hora',
      actions: 'Acciones',
      noResults: 'Aún no hay ningún resultado registrado.',
      readNotes: 'Lee los Apuntes 📖',
      takeTest: 'Ponte a Prueba 🎯',
      reviewFlashcards: 'Repasa con Tarjetas 🃏',
      chooseSystem: 'Elige un sistema para empezar la misión.',
      backToList: 'Volver a la lista',
      footer: 'Creado por Albert Garriga, puede contener errores. Marzo 2026'
    },
    en: {
      title: 'THE HUMAN BODY',
      projects: 'Projects',
      apunts: 'Notes',
      test: 'Quiz',
      flashcards: 'Flashcards',
      audio: 'Audio',
      presentation: 'Presentation',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
      profile: 'My Profile',
      results: 'Results',
      logout: 'Logout',
      login: 'Login / Teacher',
      adminTitle: 'Student Results 📊',
      adminSubtitle: 'List of all completed quizzes.',
      teacherMode: 'Teacher Mode',
      student: 'Student',
      system: 'System',
      score: 'Score',
      date: 'Date & Time',
      actions: 'Actions',
      noResults: 'No results registered yet.',
      readNotes: 'Read the Notes 📖',
      takeTest: 'Test Yourself 🎯',
      reviewFlashcards: 'Review with Flashcards 🃏',
      chooseSystem: 'Choose a system to start the mission.',
      backToList: 'Back to list',
      footer: 'Created by Albert Garriga, may contain errors. March 2026'
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      // Check if user is the admin (Albert)
      if (u && u.email === 'albert.garriga.ia@gmail.com') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, 'test_results'),
        where('userId', '==', user.uid),
        orderBy('timestamp', 'desc')
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserResults(data);
      });
      return () => unsubscribe();
    } else {
      setUserResults([]);
    }
  }, [user]);

  useEffect(() => {
    if (isAdmin && activeTab === 'admin') {
      const q = query(collection(db, 'test_results'), orderBy('timestamp', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setResults(data);
      });
      return () => unsubscribe();
    }
  }, [isAdmin, activeTab]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = () => signOut(auth);

  const handleDeleteResult = async (id: string) => {
    if (window.confirm('Segur que vols esborrar aquest resultat?')) {
      try {
        await deleteDoc(doc(db, 'test_results', id));
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  const currentSystems = getSystems(language);
  const selectedSystem = currentSystems.find(s => s.id === selectedSystemId);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-indigo-900 dark:bg-slate-900 text-white flex flex-col shadow-xl z-10 transition-colors duration-300">
        <div className="p-6">
          <h1 className="text-2xl font-display font-black tracking-tight text-indigo-100">{t[language].title}</h1>
          <p className="text-indigo-300 text-sm font-medium mt-1">{t[language].projects}</p>
        </div>
        
        <nav className="flex-1 px-4 pb-4 md:pb-0 flex flex-row md:flex-col gap-2 overflow-x-auto">
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            onClick={() => { setActiveTab('apunts'); setSelectedSystemId(null); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'apunts' ? 'bg-indigo-600 dark:bg-indigo-500 shadow-md text-white' : 'text-indigo-200 hover:bg-indigo-800 dark:hover:bg-slate-800 hover:text-white'}`}
          >
            <BookOpen className="w-5 h-5" />
            <span>{t[language].apunts}</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            onClick={() => { setActiveTab('test'); setSelectedSystemId(null); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'test' ? 'bg-indigo-600 dark:bg-indigo-500 shadow-md text-white' : 'text-indigo-200 hover:bg-indigo-800 dark:hover:bg-slate-800 hover:text-white'}`}
          >
            <CheckSquare className="w-5 h-5" />
            <span>{t[language].test}</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            onClick={() => { setActiveTab('flashcards'); setSelectedSystemId(null); }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'flashcards' ? 'bg-indigo-600 dark:bg-indigo-500 shadow-md text-white' : 'text-indigo-200 hover:bg-indigo-800 dark:hover:bg-slate-800 hover:text-white'}`}
          >
            <Layers className="w-5 h-5" />
            <span>{t[language].flashcards}</span>
          </motion.button>

          <div className="hidden md:block w-full h-px bg-indigo-800 dark:bg-slate-800 my-2"></div>

          <a
            href="https://drive.google.com/file/d/1IoYekdBBcCPu_9z8VksN_BthtYGBaS3N/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-indigo-200 hover:bg-indigo-800 dark:hover:bg-slate-800 hover:text-white"
          >
            <Headphones className="w-5 h-5" />
            <span>{t[language].audio}</span>
          </a>
          
          <a
            href="https://docs.google.com/presentation/d/1cbBUFdqARKGlfEQQQSJp_32Wh7ijcymomh2sck8LgtE/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-indigo-200 hover:bg-indigo-800 dark:hover:bg-slate-800 hover:text-white"
          >
            <Presentation className="w-5 h-5" />
            <span>{t[language].presentation}</span>
          </a>

          <div className="hidden md:block w-full h-px bg-indigo-800 dark:bg-slate-800 my-2"></div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all text-indigo-200 hover:bg-indigo-800 dark:hover:bg-slate-800 hover:text-white"
              title={isDarkMode ? t[language].lightMode : t[language].darkMode}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all text-indigo-200 hover:bg-indigo-800 dark:hover:bg-slate-800 hover:text-white uppercase"
            >
              <Globe className="w-5 h-5" />
              {language}
            </button>
          </div>

          <div className="hidden md:block w-full h-px bg-indigo-800 dark:bg-slate-800 my-2"></div>

          {user ? (
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { setActiveTab('profile'); setSelectedSystemId(null); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'profile' ? 'bg-emerald-500 shadow-md text-white' : 'text-emerald-200 hover:bg-emerald-800 hover:text-white'}`}
              >
                <UserIcon className="w-5 h-5" />
                <span>{t[language].profile}</span>
              </button>
              {isAdmin && (
                <button
                  onClick={() => { setActiveTab('admin'); setSelectedSystemId(null); }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === 'admin' ? 'bg-amber-500 shadow-md text-white' : 'text-amber-200 hover:bg-amber-800 hover:text-white'}`}
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>{t[language].results}</span>
                </button>
              )}
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-indigo-300 hover:bg-red-900/30 hover:text-red-200"
              >
                <LogOut className="w-5 h-5" />
                <span>{t[language].logout}</span>
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all text-indigo-300 hover:bg-indigo-800 hover:text-white"
            >
              <UserIcon className="w-5 h-5" />
              <span>{t[language].login}</span>
            </button>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {!selectedSystem ? (
            activeTab === 'admin' ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-8 flex justify-between items-center">
                  <div>
                    <h2 className="text-3xl font-display font-black text-slate-800 dark:text-slate-100">{t[language].adminTitle}</h2>
                    <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">{t[language].adminSubtitle}</p>
                  </div>
                  <div className="bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-xl font-bold flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5" />
                    {t[language].teacherMode}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-clay dark:shadow-clay-dark overflow-hidden border border-slate-200 dark:border-slate-800">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                          <th className="p-6 font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs">{t[language].student}</th>
                          <th className="p-6 font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs">{t[language].system}</th>
                          <th className="p-6 font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs">{t[language].score}</th>
                          <th className="p-6 font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs">{t[language].date}</th>
                          <th className="p-6 font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs">{t[language].actions}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {results.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="p-12 text-center text-slate-400 dark:text-slate-500 font-medium italic">
                              {t[language].noResults}
                            </td>
                          </tr>
                        ) : (
                          results.map((res) => (
                            <tr key={res.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                              <td className="p-6 font-bold text-slate-800 dark:text-slate-200">{res.studentName}</td>
                              <td className="p-6">
                                <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-bold">
                                  {res.systemTitle}
                                </span>
                              </td>
                              <td className="p-6">
                                <span className={`text-lg font-black ${res.score / res.totalQuestions >= 0.5 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                                  {res.score} / {res.totalQuestions}
                                </span>
                              </td>
                              <td className="p-6 text-slate-500 dark:text-slate-400 text-sm">
                                {res.timestamp?.toDate ? res.timestamp.toDate().toLocaleString('ca-ES') : 'Recent...'}
                              </td>
                              <td className="p-6">
                                <button 
                                  onClick={() => handleDeleteResult(res.id)}
                                  className="p-2 text-slate-300 dark:text-slate-600 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                                  title="Esborrar"
                                >
                                  <Trash2 className="w-5 h-5" />
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : activeTab === 'profile' && user ? (
              <ProfileView user={user} language={language} />
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-black text-slate-800 dark:text-slate-100">
                    {activeTab === 'apunts' && t[language].readNotes}
                    {activeTab === 'test' && t[language].takeTest}
                    {activeTab === 'flashcards' && t[language].reviewFlashcards}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mt-2 text-lg">{t[language].chooseSystem}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentSystems.map((system) => {
                    const systemResults = userResults.filter(r => r.systemId === system.id);
                    const hasPerfectScore = systemResults.some(r => r.score === r.totalQuestions);
                    const hasPassed = systemResults.some(r => r.score / r.totalQuestions >= 0.5);

                    return (
                      <motion.button
                        key={system.id}
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        onClick={() => setSelectedSystemId(system.id)}
                        className={`relative flex flex-col items-center justify-center p-8 rounded-3xl border-4 ${system.borderClass} ${system.bgClass} dark:bg-slate-900 shadow-clay dark:shadow-clay-dark hover:shadow-2xl transition-all duration-300 text-center group`}
                      >
                        {hasPerfectScore ? (
                          <div className="absolute top-4 right-4 bg-amber-100 dark:bg-amber-900/50 p-2 rounded-full shadow-sm">
                            <Trophy className="w-5 h-5 text-amber-500" />
                          </div>
                        ) : hasPassed ? (
                          <div className="absolute top-4 right-4 bg-emerald-100 dark:bg-emerald-900/50 p-2 rounded-full shadow-sm">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          </div>
                        ) : null}
                        
                        <span className="text-6xl mb-4 group-hover:scale-110 transition-transform">{system.icon}</span>
                        <h3 className={`text-2xl font-display font-black ${system.textClass} dark:text-white`}>{system.title}</h3>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <button 
                onClick={() => setSelectedSystemId(null)}
                className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                {t[language].backToList}
              </button>
              
              <div className="mb-8 flex items-center gap-4">
                <span className="text-5xl">{selectedSystem.icon}</span>
                <h2 className={`text-4xl font-display font-black ${selectedSystem.textClass} dark:text-white`}>{selectedSystem.title}</h2>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'apunts' && <ApuntsView system={selectedSystem} language={language} />}
                  {activeTab === 'test' && <TestView system={selectedSystem} language={language} />}
                  {activeTab === 'flashcards' && <FlashcardsView system={selectedSystem} language={language} />}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          <footer className="mt-16 text-center text-sm text-slate-400 dark:text-slate-500 pb-8">
            {t[language].footer}
          </footer>
        </div>
      </main>
      
      {/* AI Tutor Chatbot */}
      <Chatbot language={language} />
    </div>
  );
}
