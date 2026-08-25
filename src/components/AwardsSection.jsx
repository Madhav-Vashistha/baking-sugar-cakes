import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import { Award } from 'lucide-react';

export default function AwardsSection() {
  if (!siteData.awards || siteData.awards.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl text-brand-dark uppercase tracking-widest text-sm font-bold">Awards & Recognition</h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {siteData.awards.map((award, idx) => (
            <motion.div variants={itemVariants} key={idx} className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-16 h-16 rounded-full bg-brand-pink/50 flex items-center justify-center mb-4 text-brand-gold">
                <Award size={32} />
              </div>
              <h3 className="font-display text-lg text-brand-dark mb-1">{award.title}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{award.org}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

