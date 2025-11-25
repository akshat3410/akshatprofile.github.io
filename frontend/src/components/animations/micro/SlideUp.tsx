import { motion } from 'framer-motion';
import { VARIANTS } from '../core/AnimationConfig';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function SlideUp({ children, delay = 0, className = "" }: SlideUpProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={VARIANTS.slideUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
