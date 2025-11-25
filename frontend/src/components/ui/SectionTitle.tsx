import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  children: string;
  className?: string;
  subtitle?: string;
}

export default function SectionTitle({ children, className = "", subtitle }: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`mb-12 ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block text-lime-primary font-heading font-bold text-xl mb-2 uppercase tracking-widest"
        >
          {subtitle}
        </motion.span>
      )}
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          animate={isInView ? { y: 0 } : { y: "100%" }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="text-6xl md:text-8xl font-heading font-bold text-black uppercase leading-[0.9]"
        >
          {children}
        </motion.h2>
      </div>
    </div>
  );
}
