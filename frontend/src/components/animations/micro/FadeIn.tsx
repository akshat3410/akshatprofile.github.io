import { motion } from 'framer-motion';
import { VARIANTS } from '../core/AnimationConfig';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={VARIANTS.fadeIn}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
