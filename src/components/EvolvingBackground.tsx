import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder SVGs for each stage
const Jungle = () => (
  <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
    <ellipse cx="720" cy="600" rx="800" ry="200" fill="#14532d" />
    <ellipse cx="300" cy="500" rx="120" ry="80" fill="#166534" />
    <ellipse cx="1100" cy="520" rx="150" ry="90" fill="#166534" />
    <ellipse cx="600" cy="550" rx="80" ry="60" fill="#22c55e" />
    <ellipse cx="900" cy="570" rx="100" ry="70" fill="#22c55e" />
  </svg>
);

const City = () => (
  <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
    <rect x="200" y="400" width="80" height="200" fill="#334155" />
    <rect x="320" y="350" width="100" height="250" fill="#475569" />
    <rect x="450" y="420" width="60" height="180" fill="#64748b" />
    <rect x="600" y="370" width="120" height="230" fill="#334155" />
    <rect x="800" y="410" width="90" height="190" fill="#475569" />
    <rect x="950" y="390" width="110" height="210" fill="#64748b" />
    <rect x="1100" y="430" width="70" height="170" fill="#334155" />
  </svg>
);

const FuturisticCity = () => (
  <svg width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
    <rect x="250" y="350" width="60" height="250" fill="#a21caf" />
    <rect x="350" y="400" width="100" height="200" fill="#7c3aed" />
    <rect x="500" y="370" width="80" height="230" fill="#f472b6" />
    <rect x="650" y="320" width="140" height="280" fill="#38bdf8" />
    <rect x="850" y="390" width="110" height="210" fill="#a21caf" />
    <rect x="1050" y="360" width="90" height="240" fill="#7c3aed" />
    <rect x="1200" y="410" width="70" height="190" fill="#f472b6" />
    {/* Futuristic domes */}
    <ellipse cx="700" cy="500" rx="60" ry="30" fill="#fbbf24" />
    <ellipse cx="900" cy="520" rx="40" ry="20" fill="#fbbf24" />
  </svg>
);

const Rocket = ({ takingOff }: { takingOff: boolean }) => (
  <motion.svg
    width="120" height="240" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="absolute left-1/2" style={{ transform: 'translateX(-50%)' }}
    initial={{ y: 300 }}
    animate={{ y: takingOff ? -300 : 200 }}
    transition={{ duration: 2, ease: 'easeInOut' }}
  >
    <rect x="25" y="40" width="10" height="50" rx="5" fill="#e0e7ef" />
    <polygon points="30,10 40,40 20,40" fill="#a21caf" />
    <rect x="27" y="90" width="6" height="20" rx="3" fill="#fbbf24" />
    {/* Flames */}
    {takingOff && <motion.ellipse cx="30" cy="115" rx="10" ry="15" fill="#f59e42" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.5 }} />}
  </motion.svg>
);

const stages = [
  { key: 'jungle', duration: 2, component: <Jungle /> },
  { key: 'city', duration: 2, component: <City /> },
  { key: 'future', duration: 2, component: <FuturisticCity /> },
];

export default function EvolvingBackground() {
  const [stage, setStage] = useState(0);
  const [showRocket, setShowRocket] = useState(false);
  const [rocketTakeoff, setRocketTakeoff] = useState(false);

  useEffect(() => {
    if (stage < stages.length) {
      const timeout = setTimeout(() => setStage(stage + 1), stages[stage].duration * 1000);
      return () => clearTimeout(timeout);
    } else if (!showRocket) {
      setShowRocket(true);
      setTimeout(() => setRocketTakeoff(true), 1200);
    }
  }, [stage, showRocket]);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={stages[stage]?.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          {stages[stage]?.component}
        </motion.div>
      </AnimatePresence>
      {showRocket && <Rocket takingOff={rocketTakeoff} />}
    </div>
  );
} 