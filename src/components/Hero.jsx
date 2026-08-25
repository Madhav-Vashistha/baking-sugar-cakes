import { motion } from 'framer-motion';
import { siteData } from '../data/content';

export default function Hero() {
  return (
    <div className="relative bg-brand-pink h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=2000" 
          alt="Custom Celebration Cakes" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 drop-shadow-lg">
          Custom Celebration Cakes
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-8 font-light drop-shadow-md">
          {siteData.tagline}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#categories" 
            className="bg-white text-brand-dark px-8 py-3 font-medium uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-white transition-colors w-full sm:w-auto text-center"
          >
            Explore Menu
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={siteData.whatsappLink} 
            target="_blank" 
            rel="noreferrer"
            className="border-2 border-white text-white px-8 py-3 font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-brand-dark transition-colors w-full sm:w-auto text-center"
          >
            Order Now
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
