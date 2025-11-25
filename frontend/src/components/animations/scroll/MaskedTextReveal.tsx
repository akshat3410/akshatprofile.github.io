import { motion } from 'framer-motion';
import { TRANSITION } from '../core/AnimationConfig';

interface MaskedTextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function MaskedTextReveal({ children, delay = 0, className = "" }: MaskedTextRevealProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: TRANSITION.DURATION, ease: TRANSITION.EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
