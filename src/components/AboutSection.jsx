import { motion } from 'framer-motion';
import { siteData } from '../data/content';

export default function AboutSection() {
  return (
    <div id="about" className="py-20 bg-brand-pink/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative max-w-md mx-auto">
              <img 
                src={siteData.owner.image} 
                alt={siteData.owner.name} 
                className="rounded-t-full shadow-xl w-full object-cover aspect-[3/4]"
              />
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 md:-right-10 w-40 h-40 bg-white rounded-full border-4 border-brand-pink flex flex-col items-center justify-center p-4 shadow-lg text-center"
              >
                <span className="font-display font-bold text-xl text-brand-dark leading-tight">{siteData.owner.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-gold mt-1">Founder</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 md:pl-10 mt-12 md:mt-0"
          >
            <h2 className="font-display text-4xl text-brand-dark mb-6">Meet the Chef</h2>
            <div className="w-16 h-1 bg-brand-gold mb-8"></div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>{siteData.owner.name}</strong>, {siteData.owner.role} of {siteData.brandName}.
            </p>
            
            <p className="text-gray-600 mb-6 leading-relaxed italic border-l-4 border-brand-pink pl-4">
              "{siteData.owner.bio}"
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Every creation is a labor of love, crafted with the finest ingredients to ensure that your special moments are celebrated with something truly extraordinary. Whether it's an elegant wedding cake or a playfully themed design, {siteData.owner.name} brings your vision to life.
            </p>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={siteData.instagram} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-brand-dark text-white px-8 py-3 font-medium uppercase tracking-wider text-sm hover:bg-brand-gold transition-colors"
            >
              Follow Our Journey
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

