import { motion } from 'framer-motion';
import { SystemId } from '../data';

interface Props {
  systemId: SystemId;
  color: string;
}

export default function SystemDiagram({ systemId, color }: Props) {
  const renderDiagram = () => {
    switch (systemId) {
      case 'circulatori':
        return (
          <motion.svg
            viewBox="0 0 200 200"
            className="w-48 h-48 mx-auto"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ 
              duration: 0.8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <path
              d="M100 160 C100 160 30 110 30 70 C30 40 55 25 75 25 C90 25 100 40 100 40 C100 40 110 25 125 25 C145 25 170 40 170 70 C170 110 100 160 100 160 Z"
              fill={color}
              stroke="white"
              strokeWidth="4"
            />
            <motion.circle
              cx="100" cy="80" r="10"
              fill="white"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.svg>
        );
      
      case 'respiratori':
        return (
          <div className="flex justify-center items-center gap-4 py-4">
            <motion.svg
              viewBox="0 0 100 150"
              className="w-24 h-36"
              animate={{ scaleY: [1, 1.1, 1], scaleX: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Left Lung */}
              <path
                d="M50 20 C20 20 5 60 5 100 C5 130 30 140 50 120 L50 20"
                fill={color}
                stroke="white"
                strokeWidth="3"
              />
            </motion.svg>
            <motion.svg
              viewBox="0 0 100 150"
              className="w-24 h-36"
              animate={{ scaleY: [1, 1.1, 1], scaleX: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Right Lung */}
              <path
                d="M0 20 C30 20 45 60 45 100 C45 130 20 140 0 120 L0 20"
                fill={color}
                stroke="white"
                strokeWidth="3"
              />
            </motion.svg>
          </div>
        );

      case 'nervios':
        return (
          <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-dashed"
              style={{ borderColor: color }}
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.svg
              viewBox="0 0 200 200"
              className="w-32 h-32"
            >
              <path
                d="M100 40 C60 40 40 70 40 100 C40 130 60 160 100 160 C140 160 160 130 160 100 C160 70 140 40 100 40 Z"
                fill={color}
                stroke="white"
                strokeWidth="4"
              />
              <motion.circle
                cx="100" cy="100" r="5" fill="white"
                animate={{ scale: [1, 4, 1], opacity: [1, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.circle
                cx="80" cy="80" r="3" fill="white"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
              <motion.circle
                cx="120" cy="90" r="3" fill="white"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
              />
            </motion.svg>
          </div>
        );

      case 'digestiu':
        return (
          <motion.svg
            viewBox="0 0 200 200"
            className="w-48 h-48 mx-auto"
          >
            <motion.path
              d="M100 40 C70 40 60 70 60 100 C60 140 90 160 120 160 C150 160 160 130 160 100 C160 70 130 40 100 40 Z"
              fill={color}
              stroke="white"
              strokeWidth="4"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="80" cy="60" r="6" fill="white" opacity="0.4"
              animate={{ cy: [60, 140], opacity: [0, 0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.svg>
        );

      case 'locomotor':
        return (
          <div className="flex flex-col items-center py-4">
            <motion.div
              className="w-8 h-32 rounded-full border-4"
              style={{ borderColor: color, backgroundColor: 'white' }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-full h-1/4 bg-slate-200 rounded-t-full" />
              <div className="w-full h-1/2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-400" />
              </div>
            </motion.div>
            <div className="mt-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Moviment Spring</div>
          </div>
        );

      case 'excretor':
        return (
          <div className="flex justify-center gap-8 py-4">
            <motion.div
              className="w-12 h-16 rounded-2xl border-4 flex items-center justify-center"
              style={{ borderColor: color, backgroundColor: 'white' }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.div
              className="w-12 h-16 rounded-2xl border-4 flex items-center justify-center"
              style={{ borderColor: color, backgroundColor: 'white' }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
               <motion.div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </div>
        );

      case 'reproductor':
        return (
          <div className="flex justify-center items-center h-48">
            <motion.div
              className="w-24 h-24 rounded-full border-8"
              style={{ borderColor: color }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.div
                className="w-full h-full rounded-full bg-white flex items-center justify-center"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                 <span className="text-4xl">🌱</span>
              </motion.div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 mb-6 flex items-center justify-center min-h-[200px] border-2 border-dashed border-slate-200 dark:border-slate-700">
      {renderDiagram()}
    </div>
  );
}
