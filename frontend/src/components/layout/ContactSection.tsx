import SectionTitle from '../ui/SectionTitle';
import AnimatedButton from '../ui/AnimatedButton';
import MaskedTextReveal from '../animations/scroll/MaskedTextReveal';
import FadeIn from '../animations/micro/FadeIn';
import Pulse from '../animations/micro/Pulse';
import SlideUp from '../animations/micro/SlideUp';
import HoverLift from '../animations/micro/HoverLift';
import PulseRipple from '../animations/micro/PulseRipple';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-40 bg-cream text-black">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Get in Touch">Contact</SectionTitle>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/2">
            <MaskedTextReveal>
              <h3 className="text-4xl md:text-6xl font-heading font-bold uppercase leading-tight mb-8">
                Have a project<br />in mind?
              </h3>
            </MaskedTextReveal>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-600 font-sans max-w-md mb-12">
                I'm currently available for freelance work and open to full-time opportunities. Let's create something amazing together.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <a href="mailto:akshatsoni.jbp@gmail.com" className="inline-block">
                <Pulse>
                  <AnimatedButton className="text-xl py-6 px-12">
                    Let's Talk
                  </AnimatedButton>
                </Pulse>
              </a>
            </FadeIn>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-end">
            <div className="grid grid-cols-2 gap-8">
              <SlideUp delay={0.2}>
                <h4 className="font-heading font-bold text-xl mb-4 uppercase">Socials</h4>
                <ul className="space-y-4 font-sans text-lg text-gray-600">
                  <li>
                    <a href="https://www.linkedin.com/in/akshat-soni-007ak75212/" target="_blank" rel="noopener noreferrer" className="inline-block group">
                      <PulseRipple>
                        <span className="group-hover:text-black transition-colors">LinkedIn</span>
                      </PulseRipple>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/akshat3410" target="_blank" rel="noopener noreferrer" className="inline-block group">
                      <PulseRipple>
                        <span className="group-hover:text-black transition-colors">GitHub</span>
                      </PulseRipple>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/akshat_code" target="_blank" rel="noopener noreferrer" className="inline-block group">
                      <PulseRipple>
                        <span className="group-hover:text-black transition-colors">Twitter</span>
                      </PulseRipple>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/akshat9630/" target="_blank" rel="noopener noreferrer" className="inline-block group">
                      <PulseRipple>
                        <span className="group-hover:text-black transition-colors">Instagram</span>
                      </PulseRipple>
                    </a>
                  </li>
                </ul>
              </SlideUp>
              <SlideUp delay={0.3}>
                <h4 className="font-heading font-bold text-xl mb-4 uppercase">Location</h4>
                <p className="font-sans text-lg text-gray-600">
                  Jabalpur, India<br />
                  Remote Available
                </p>
              </SlideUp>
            </div>
          </div>
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-sans uppercase tracking-wider">
            <p>© 2024 Akshat Soni. All rights reserved.</p>
            <HoverLift>
              <p>Designed & Developed with ❤️</p>
            </HoverLift>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
