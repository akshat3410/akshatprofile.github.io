import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      initial={{ backgroundColor: "#B6F500" }}
      animate={{
        backgroundColor: ["#B6F500", "#A4DD00", "#98CD00", "#FFFADC"],
      }}
      transition={{
        duration: 1.2,
        times: [0, 0.2, 0.4, 1],
        ease: "easeInOut",
      }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      onAnimationComplete={() => {
        // Trigger exit after a slight delay to let text sit
        setTimeout(onLoadingComplete, 2000);
      }}
    >
      {/* Organic Shape Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <svg viewBox="0 0 200 200" className="w-[150vmax] h-[150vmax] opacity-10">
          <motion.path
            fill="#B6F500"
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,61.2C28.5,69.3,15.8,76.1,1.9,72.8C-12,69.5,-27.1,56.1,-39.9,44.9C-52.7,33.7,-63.2,24.7,-69.3,12.9C-75.4,1.1,-77.1,-13.5,-71.9,-26.6C-66.7,-39.7,-54.6,-51.3,-41.8,-59.1C-29,-66.9,-15.5,-70.9,-0.8,-69.5C13.9,-68.1,27.8,-61.3,44.7,-76.4Z"
            animate={{
              d: [
                "M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,71.6,32.6C61,43.7,51.1,53.1,39.8,61.2C28.5,69.3,15.8,76.1,1.9,72.8C-12,69.5,-27.1,56.1,-39.9,44.9C-52.7,33.7,-63.2,24.7,-69.3,12.9C-75.4,1.1,-77.1,-13.5,-71.9,-26.6C-66.7,-39.7,-54.6,-51.3,-41.8,-59.1C-29,-66.9,-15.5,-70.9,-0.8,-69.5C13.9,-68.1,27.8,-61.3,44.7,-76.4Z",
                "M41.7,-71.3C54.8,-62.9,66.9,-53.4,75.3,-41.5C83.7,-29.6,88.4,-15.3,86.1,-1.9C83.8,11.5,74.5,24,64.8,34.8C55.1,45.6,45,54.7,33.7,62.1C22.4,69.5,9.9,75.2,-1.9,78.5C-13.7,81.8,-24.8,82.7,-35.1,77.2C-45.4,71.7,-54.9,59.8,-62.8,47.4C-70.7,35,-77,22.1,-78.1,8.6C-79.2,-4.9,-75.1,-19,-67.1,-31.1C-59.1,-43.2,-47.2,-53.3,-34.7,-61.9C-22.2,-70.5,-9.1,-77.6,3.2,-83.1C15.5,-88.6,28.6,-80.7,41.7,-71.3Z"
              ],
              rotate: [0, 90],
              scale: [0.8, 1.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>

      {/* Text Reveal */}
      <div className="relative z-10 overflow-hidden">
        <AnimatePresence>
          {textVisible && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="text-6xl md:text-9xl font-heading font-bold text-black uppercase tracking-tighter">
                AKSHAT
              </h1>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                className="h-2 md:h-4 bg-lime-primary mt-2 md:mt-4"
              />
              <motion.h1 
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-6xl md:text-9xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-600 uppercase tracking-tighter"
              >
                SONI
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
