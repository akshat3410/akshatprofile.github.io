import { motion } from 'framer-motion';
import { VARIANTS } from '../core/AnimationConfig';

interface DelayFadeProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function DelayFade({ children, delay = 0.5, className = "" }: DelayFadeProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={VARIANTS.fadeIn}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
