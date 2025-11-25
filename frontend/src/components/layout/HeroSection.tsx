import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import SplitText from '../animations/scroll/SplitText';
import ScaleOnScroll from '../animations/scroll/ScaleOnScroll';

import FadeIn from '../animations/micro/FadeIn';
import RotatingText from '../animations/micro/RotatingText';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-cream pt-20 md:pt-0">
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center">
        
        {/* Left Content - Typography */}
        <div className="w-full md:w-1/2 z-10 flex flex-col justify-center h-full pt-10 md:pt-0">
          <FadeIn delay={0.2}>
            <h2 className="text-xl md:text-2xl font-sans font-medium text-black mb-4 tracking-wide flex items-center gap-2">
              HELLO, I'M <span className="font-bold">AKSHAT SONI</span>
            </h2>
          </FadeIn>
          
          <h1 className="text-[5rem] md:text-[10rem] leading-[0.85] font-heading font-bold text-black uppercase mb-8">
            <SplitText delay={0.4}>FULL</SplitText>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-primary to-lime-secondary block">
              <SplitText delay={0.6}>STACK</SplitText>
            </span>
            <SplitText delay={0.8}>DEV</SplitText>
          </h1>

          <FadeIn delay={1.0}>
            <div className="text-lg md:text-xl text-gray-600 max-w-md mb-10 font-sans leading-relaxed flex items-center gap-2">
              <span>I am a</span>
              <RotatingText className="text-xl md:text-2xl" />
            </div>
          </FadeIn>
        </div>

        {/* Right Content - Image */}
        <motion.div 
          style={{ opacity }}
          className="absolute top-0 right-0 w-full md:w-1/2 h-full z-0"
        >
          <ScaleOnScroll scaleRange={[1, 1.1]} className="relative w-full h-full flex items-end justify-center">
            {/* Yellow Background Shape */}
            <div className="absolute bottom-0 right-0 w-[80%] h-[90%] bg-lime-primary/20 rounded-tl-[100px] -z-10" />
            
            {/* Image */}
            <motion.img
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
              src="/hero-image.jpg"
              alt="Akshat Soni"
              className="w-auto h-[85%] object-contain relative z-10 drop-shadow-2xl"
            />
          </ScaleOnScroll>
        </motion.div>


      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-10 md:left-20 flex flex-col items-center gap-4 z-20"
      >
        <span className="text-xs font-bold uppercase tracking-widest -rotate-90 origin-center translate-y-8 text-black">Scroll</span>
        <div className="w-[1px] h-20 bg-black/30" />
      </motion.div>
    </section>
  );
}
