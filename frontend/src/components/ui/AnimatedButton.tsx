import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function AnimatedButton({ children, onClick, className = "", type = "button" }: AnimatedButtonProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`relative px-8 py-4 bg-black text-white font-heading font-bold text-lg uppercase tracking-wider overflow-hidden group ${className}`}
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="absolute inset-0 bg-lime-primary z-0"
        variants={{
          initial: { x: "-100%" },
          hover: { x: 0 }
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
        {children}
        <ArrowRight size={20} />
      </span>
    </motion.button>
  );
}
