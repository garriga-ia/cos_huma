import { SystemData } from '../data';
import { motion } from 'framer-motion';
import SystemDiagram from './SystemDiagram';

interface Props {
  system: SystemData;
  language: 'ca' | 'es' | 'en';
}

export default function ApuntsView({ system, language }: Props) {
  const t = {
    ca: {
      mission: '🎯 Quina és la seva missió?',
      parts: 'L\'enginyeria del cos 🛠️',
      care: 'Cura i Manteniment 🔧',
      did_you_know: 'Sabies que...?'
    },
    es: {
      mission: '🎯 ¿Cuál es su misión?',
      parts: 'La ingeniería del cuerpo 🛠️',
      care: 'Cuidado y Mantenimiento 🔧',
      did_you_know: '¿Sabías que...?'
    },
    en: {
      mission: '🎯 What is its mission?',
      parts: 'Body Engineering 🛠️',
      care: 'Care and Maintenance 🔧',
      did_you_know: 'Did you know...?'
    }
  };

  return (
    <div className="space-y-8">
      {/* Misión y Diagrama */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className={`p-8 rounded-3xl border-4 ${system.borderClass} bg-white dark:bg-slate-900 dark:border-opacity-30 shadow-clay dark:shadow-clay-dark`}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className={`text-2xl font-display font-black mb-4 ${system.textClass} dark:text-white`}>{t[language].mission}</h3>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium italic">
              "{system.apunts.missio}"
            </p>
          </div>
          <div className="w-full md:w-64 shrink-0">
            <SystemDiagram systemId={system.id} color={system.color} />
          </div>
        </div>
      </motion.div>

      {/* Sabías que... (Capa de curiosidad) */}
      {system.apunts.sabies_que && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          className={`p-6 rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-clay-dark relative overflow-hidden`}
        >
          <div className="absolute -right-4 -top-4 text-8xl opacity-20 rotate-12">💡</div>
          <h4 className="text-xl font-display font-black mb-2 flex items-center gap-2">
            <span>✨</span> {t[language].did_you_know}
          </h4>
          <p className="text-lg font-bold leading-tight relative z-10">
            {system.apunts.sabies_que}
          </p>
        </motion.div>
      )}

      {/* Secciones de partes */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
        <h3 className="text-2xl font-display font-black text-slate-800 dark:text-slate-100 border-b-4 border-slate-200 dark:border-slate-800 pb-2 inline-block">
          {t[language].parts}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {system.apunts.sections.map((section, idx) => (
            <motion.div 
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              key={idx} 
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border-l-8 ${system.borderClass} dark:border-opacity-50 shadow-clay dark:shadow-clay-dark flex gap-4`}
            >
              <div className="text-4xl shrink-0">{section.icon}</div>
              <div>
                <h4 className={`text-xl font-display font-black mb-2 ${system.textClass} dark:text-white`}>{section.title}</h4>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-1 font-medium">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{section.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {system.apunts.tips && system.apunts.tips.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-6 mt-12">
          <h3 className="text-2xl font-display font-black text-slate-800 dark:text-slate-100 border-b-4 border-slate-200 dark:border-slate-800 pb-2 inline-block">
            {t[language].care}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {system.apunts.tips.map((tip, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-xl shadow-clay dark:shadow-clay-dark border border-slate-100 dark:border-slate-800 flex items-start gap-3">
                <span className="text-xl shrink-0">💡</span>
                <p className="text-slate-700 dark:text-slate-300 font-bold">{tip}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
