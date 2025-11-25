import { motion } from 'framer-motion';

export default function HighlightBadge() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-full h-full"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            id="curve"
            d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
            fill="transparent"
          />
          <text className="text-[11px] font-heading font-bold uppercase tracking-widest fill-black">
            <textPath href="#curve">
              Available for freelance work • Available for freelance work •
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="w-16 h-16 md:w-20 md:h-20 bg-lime-primary rounded-full flex items-center justify-center shadow-lg z-10">
        
      </div>
    </div>
  );
}
