import { motion } from 'framer-motion';

interface PulseProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pulse({ children, className = "" }: PulseProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
