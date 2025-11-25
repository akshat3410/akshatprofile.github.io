import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:border-lime-primary transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
