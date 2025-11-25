import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RotatingTextProps {
  roles?: string[];
  className?: string;
  interval?: number;
}

const DEFAULT_ROLES = [
  "Software Developer",
  "Video Editor",
  "Backend Developer",
  "Creative Coder",
  "AI Explorer",
  "UI/UX Explorer",
  "Problem Solver"
];

export default function RotatingText({ 
  roles = DEFAULT_ROLES, 
  className = "", 
  interval = 2500 
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, interval);

    return () => clearInterval(timer);
  }, [roles.length, interval]);

  return (
    <div className={`relative inline-block h-[1.2em] overflow-hidden align-bottom ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ 
            y: { type: "spring", stiffness: 100, damping: 20 },
            opacity: { duration: 0.2 }
          }}
          className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-primary to-lime-secondary font-heading font-bold uppercase tracking-wide"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
