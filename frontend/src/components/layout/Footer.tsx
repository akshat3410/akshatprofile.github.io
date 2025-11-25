import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import PulseRipple from '../animations/micro/PulseRipple';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-cream py-8 border-t border-gray-200 z-0 h-[300px] flex flex-col justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-8 mb-6">
          <a href="https://github.com/akshat3410" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <PulseRipple>
              <Github size={24} />
            </PulseRipple>
          </a>
          <a href="https://www.linkedin.com/in/akshat-soni-007ak75212/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <PulseRipple>
              <Linkedin size={24} />
            </PulseRipple>
          </a>
          <a href="https://x.com/akshat_code" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <PulseRipple>
              <Twitter size={24} />
            </PulseRipple>
          </a>
          <a href="https://www.instagram.com/akshat9630/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors">
            <PulseRipple>
              <Instagram size={24} />
            </PulseRipple>
          </a>
        </div>
        <p className="text-gray-500">
          Designed by <span className="text-lime-primary font-bold">Akshat Soni</span>
        </p>
      </div>
    </footer>
  );
}
