import { motion } from 'framer-motion';

interface HoverLiftProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  y?: number;
}

export default function HoverLift({ children, className = "", scale = 1.02, y = -5 }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y, scale }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
