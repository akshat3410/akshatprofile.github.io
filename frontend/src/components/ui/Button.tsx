import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-6 py-2 font-bold rounded transition-all transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-primary";
  const variants = {
    primary: "bg-lime-primary text-black hover:bg-lime-secondary",
    outline: "border-2 border-lime-primary text-lime-primary hover:bg-lime-primary hover:text-black"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
