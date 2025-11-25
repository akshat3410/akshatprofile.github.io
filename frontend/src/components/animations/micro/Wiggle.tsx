import { motion } from 'framer-motion';

interface WiggleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wiggle({ children, className = "" }: WiggleProps) {
  return (
    <motion.div
      whileHover={{ rotate: [0, -5, 5, -5, 5, 0] }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
