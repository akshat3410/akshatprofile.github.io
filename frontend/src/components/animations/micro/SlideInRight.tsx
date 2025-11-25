import { motion } from 'framer-motion';
import { VARIANTS } from '../core/AnimationConfig';

interface SlideInRightProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function SlideInRight({ children, delay = 0, className = "" }: SlideInRightProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={VARIANTS.slideInRight}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
