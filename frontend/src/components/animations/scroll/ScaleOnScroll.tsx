import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScaleOnScrollProps {
  children: React.ReactNode;
  className?: string;
  scaleRange?: [number, number];
}

export default function ScaleOnScroll({ children, className = "", scaleRange = [0.8, 1] }: ScaleOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[0]]);

  return (
    <motion.div ref={ref} style={{ scale }} className={className}>
      {children}
    </motion.div>
  );
}
