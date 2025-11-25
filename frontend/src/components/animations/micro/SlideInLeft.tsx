import { motion } from 'framer-motion';
import { VARIANTS } from '../core/AnimationConfig';

interface SlideInLeftProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function SlideInLeft({ children, delay = 0, className = "" }: SlideInLeftProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={VARIANTS.slideInLeft}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
