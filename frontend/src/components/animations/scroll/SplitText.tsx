import { motion } from 'framer-motion';
import { TRANSITION } from '../core/AnimationConfig';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ children, className = "", delay = 0 }: SplitTextProps) {
  const words = children.split(" ");

  return (
    <div className={`overflow-hidden flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, i) => (
        <div key={i} className="overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{
              duration: TRANSITION.DURATION,
              ease: TRANSITION.EASE,
              delay: delay + i * 0.05,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
