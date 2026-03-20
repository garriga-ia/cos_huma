import { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Calendar, Award, BookOpen } from 'lucide-react';
import { getSystems } from '../data';

interface Props {
  user: User;
  language: 'ca' | 'es' | 'en';
}

export default function ProfileView({ user, language }: Props) {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserResults = async () => {
      try {
        // Assuming results are saved with studentName matching user.displayName or user.email
        // For a more robust app, we should save user.uid in the test_results.
        // Since we only have studentName right now, we'll query by that or just show a message if we can't link it.
        // Let's assume we update TestView to save userUid if logged in.
        // For now, let's fetch all where studentName == user.displayName
        const q = query(
          collection(db, 'test_results'),
          where('studentName', '==', user.displayName || user.email?.split('@')[0]),
          orderBy('timestamp', 'desc')
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setResults(data);
      } catch (error) {
        console.error("Error fetching user results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchUserResults();
    }
  }, [user]);

  const currentSystems = getSystems(language);
  
  // Calculate stats
  const totalTests = results.length;
  const averageScore = totalTests > 0 
    ? Math.round((results.reduce((acc, curr) => acc + (curr.score / curr.totalQuestions), 0) / totalTests) * 100) 
    : 0;
  
  const perfectScores = results.filter(r => r.score === r.totalQuestions).length;

  // Calculate unique systems tested
  const systemsTested = new Set(results.map(r => r.systemId)).size;
  const totalSystems = currentSystems.length;

  const t = {
    ca: {
      student: 'Estudiant',
      testsTaken: 'Tests Fets',
      average: 'Mitjana',
      badgesTitle: 'Medalles i Assoliments',
      locked: 'Bloquejat',
      historyTitle: 'Historial de Tests',
      noTests: "Encara no has completat cap test. Anima't!",
      system: 'Sistema',
      score: 'Nota',
      date: 'Data',
      recent: 'Recent',
      badges: {
        beginner: { title: 'Principiant', desc: 'Has completat el teu primer test.' },
        excellent: { title: 'Excel·lent', desc: "Has aconseguit un 100% d'encerts." },
        explorer: { title: 'Explorador', desc: 'Has fet tests de 3 sistemes diferents.' },
        master: { title: 'Mestre del Cos', desc: 'Has completat tests de tots els sistemes!' }
      }
    },
    es: {
      student: 'Estudiante',
      testsTaken: 'Tests Hechos',
      average: 'Media',
      badgesTitle: 'Medallas y Logros',
      locked: 'Bloqueado',
      historyTitle: 'Historial de Tests',
      noTests: 'Aún no has completado ningún test. ¡Anímate!',
      system: 'Sistema',
      score: 'Nota',
      date: 'Fecha',
      recent: 'Reciente',
      badges: {
        beginner: { title: 'Principiante', desc: 'Has completado tu primer test.' },
        excellent: { title: 'Excelente', desc: 'Has conseguido un 100% de aciertos.' },
        explorer: { title: 'Explorador', desc: 'Has hecho tests de 3 sistemas diferentes.' },
        master: { title: 'Maestro del Cuerpo', desc: '¡Has completado tests de todos los sistemas!' }
      }
    },
    en: {
      student: 'Student',
      testsTaken: 'Tests Taken',
      average: 'Average',
      badgesTitle: 'Badges & Achievements',
      locked: 'Locked',
      historyTitle: 'Test History',
      noTests: 'You haven\'t completed any tests yet. Go for it!',
      system: 'System',
      score: 'Score',
      date: 'Date',
      recent: 'Recent',
      badges: {
        beginner: { title: 'Beginner', desc: 'You completed your first test.' },
        excellent: { title: 'Excellent', desc: 'You achieved a 100% score.' },
        explorer: { title: 'Explorer', desc: 'You took tests for 3 different systems.' },
        master: { title: 'Body Master', desc: 'You completed tests for all systems!' }
      }
    }
  };

  const badges = [
    {
      id: 'first_test',
      title: t[language].badges.beginner.title,
      desc: t[language].badges.beginner.desc,
      icon: <Target className="w-8 h-8 text-blue-500" />,
      earned: totalTests >= 1,
      color: 'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800'
    },
    {
      id: 'perfect',
      title: t[language].badges.excellent.title,
      desc: t[language].badges.excellent.desc,
      icon: <Star className="w-8 h-8 text-amber-500" />,
      earned: perfectScores >= 1,
      color: 'bg-amber-100 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800'
    },
    {
      id: 'explorer',
      title: t[language].badges.explorer.title,
      desc: t[language].badges.explorer.desc,
      icon: <BookOpen className="w-8 h-8 text-emerald-500" />,
      earned: systemsTested >= 3,
      color: 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800'
    },
    {
      id: 'master',
      title: t[language].badges.master.title,
      desc: t[language].badges.master.desc,
      icon: <Trophy className="w-8 h-8 text-purple-500" />,
      earned: systemsTested === totalSystems,
      color: 'bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800'
    }
  ];

  if (loading) {
    return <div className="flex justify-center p-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div></div>;
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Profile Header */}
      <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-clay dark:shadow-clay-dark border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-6">
        <div className="w-24 h-24 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-4xl overflow-hidden shrink-0">
          {user.photoURL ? <img src={user.photoURL} alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" /> : '👤'}
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-display font-black text-slate-800 dark:text-slate-100">{user.displayName || t[language].student}</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">{user.email}</p>
        </div>
        <div className="md:ml-auto flex gap-4">
          <div className="text-center bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
            <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{totalTests}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{t[language].testsTaken}</div>
          </div>
          <div className="text-center bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700">
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">{averageScore}%</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">{t[language].average}</div>
          </div>
        </div>
      </div>

      {/* Badges Section */}
      <div>
        <h3 className="text-2xl font-display font-black text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
          <Award className="w-6 h-6 text-amber-500" />
          {t[language].badgesTitle}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <motion.div
              key={badge.id}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className={`p-6 rounded-2xl border-2 flex flex-col items-center text-center transition-all ${
                badge.earned 
                  ? badge.color 
                  : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-60 grayscale'
              }`}
            >
              <div className="mb-4 bg-white dark:bg-slate-800 p-4 rounded-full shadow-clay dark:shadow-clay-dark">
                {badge.icon}
              </div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1">{badge.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{badge.desc}</p>
              {!badge.earned && (
                <div className="mt-3 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-200 dark:bg-slate-700 px-3 py-1 rounded-full">
                  {t[language].locked}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* History Section */}
      <div>
        <h3 className="text-2xl font-display font-black text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
          <Calendar className="w-6 h-6 text-indigo-500" />
          {t[language].historyTitle}
        </h3>
        
        {results.length === 0 ? (
          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl text-center border-2 border-dashed border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 dark:text-slate-400 font-medium">{t[language].noTests}</p>
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-clay dark:shadow-clay-dark border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                    <th className="p-4 font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs">{t[language].system}</th>
                    <th className="p-4 font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs">{t[language].score}</th>
                    <th className="p-4 font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest text-xs">{t[language].date}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {results.map((res) => (
                    <tr key={res.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-4 font-bold text-slate-800 dark:text-slate-200">{res.systemTitle}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          res.score / res.totalQuestions >= 0.5 
                            ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                            : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        }`}>
                          {res.score} / {res.totalQuestions}
                        </span>
                      </td>
                      <td className="p-4 text-slate-500 dark:text-slate-400 text-sm font-medium">
                        {res.timestamp?.toDate ? res.timestamp.toDate().toLocaleDateString(language === 'en' ? 'en-US' : language === 'es' ? 'es-ES' : 'ca-ES') : t[language].recent}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
