import { motion } from 'framer-motion';

interface PulseRippleProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export default function PulseRipple({ children, className = "", color = "bg-lime-primary" }: PulseRippleProps) {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ overflow: 'visible' }}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className={`absolute inset-0 rounded-full ${color}`}
        style={{ zIndex: 0 }}
        variants={{
          initial: { scale: 0.8, opacity: 0 },
          hover: { 
            scale: 2.0, 
            opacity: [0.6, 0],
            transition: { 
              duration: 1.2, 
              repeat: Infinity, 
              ease: "easeOut" 
            } 
          }
        }}
      />
      <motion.div
        className="relative z-10"
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.1 }
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
