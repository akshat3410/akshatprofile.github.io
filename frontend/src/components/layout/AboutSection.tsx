import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import FadeIn from '../animations/micro/FadeIn';
import ParallaxWrapper from '../animations/micro/ParallaxWrapper';
import SlideUp from '../animations/micro/SlideUp';

export default function AboutSection() {
  const containerRef = useRef(null);
  useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} id="about" className="py-20 md:py-40 bg-cream text-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Left Column - Sticky Content */}
          <div className="w-full md:w-1/3">
            <div className="sticky top-20">
              <SectionTitle subtitle="Who I Am">About Me</SectionTitle>
              <div className="font-sans text-lg md:text-xl leading-relaxed text-gray-600 space-y-6">
                <FadeIn delay={0.2}>
                  <p>
                    I'm a Full Stack Developer with a passion for building digital products that are not just functional, but memorable.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p>
                    My approach is rooted in the belief that code is a creative medium. I combine technical precision with a strong eye for design to create experiences that stand out.
                  </p>
                </FadeIn>
                <div className="pt-8">
                  <div className="h-[1px] w-full bg-gray-200 mb-8" />
                  <div className="grid grid-cols-2 gap-8">
                    <SlideUp delay={0.6}>
                      <h4 className="font-heading font-bold text-2xl mb-1">3+</h4>
                      <p className="text-sm text-gray-500 uppercase tracking-wider">Years Exp.</p>
                    </SlideUp>
                    <SlideUp delay={0.7}>
                      <h4 className="font-heading font-bold text-2xl mb-1">10+</h4>
                      <p className="text-sm text-gray-500 uppercase tracking-wider">Projects</p>
                    </SlideUp>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Collage */}
          <div className="w-full md:w-2/3 relative min-h-[80vh]">
            <ParallaxWrapper offset={100} className="absolute top-0 right-0 w-2/3 aspect-[3/4] z-10">
              <img 
                src={`${import.meta.env.BASE_URL}hero-image.jpg`} 
                alt="Working" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-lime-primary z-20 flex items-center justify-center shadow-lg">
                <span className="font-heading font-bold text-xl text-black">2024</span>
              </div>
            </ParallaxWrapper>
            
            <ParallaxWrapper offset={-50} className="absolute top-40 left-0 w-1/2 aspect-square z-0">
              <div className="w-full h-full bg-gray-100 shadow-inner" /> 
              {/* Placeholder for second image */}
              <img 
                src={`${import.meta.env.BASE_URL}hero-image.jpg`} 
                alt="Detail" 
                className="w-full h-full object-cover opacity-50 mix-blend-multiply"
              />
            </ParallaxWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
