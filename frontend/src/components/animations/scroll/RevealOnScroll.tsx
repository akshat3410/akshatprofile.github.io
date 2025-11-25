import { motion } from 'framer-motion';
import { VARIANTS } from '../core/AnimationConfig';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({ children, delay = 0, className = "" }: RevealOnScrollProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-10%" }}
      variants={VARIANTS.fadeIn}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
