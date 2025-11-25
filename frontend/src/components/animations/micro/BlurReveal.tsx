import { motion } from 'framer-motion';

interface BlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function BlurReveal({ children, delay = 0, className = "" }: BlurRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
