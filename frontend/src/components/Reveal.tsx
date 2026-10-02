import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT } from '../utils/motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.3, ease: EASE_OUT, delay }}>
      
      {children}
    </motion.div>);

}