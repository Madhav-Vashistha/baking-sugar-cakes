import { motion } from 'framer-motion';
import { siteData } from '../data/content';

export default function CategoryNav() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div id="categories" className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl text-brand-dark mb-4">Shop by Category</h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto"></div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex md:justify-center overflow-x-auto hide-scrollbar gap-6 md:gap-8 pb-4 snap-x snap-mandatory"
        >
          {siteData.categories.map((cat) => (
            <motion.a 
              variants={itemVariants}
              key={cat.id} 
              href={`#${cat.id}`} 
              className="group block text-center w-[140px] md:w-[180px] snap-center flex-shrink-0"
            >
              <div className="relative rounded-full overflow-hidden aspect-square mb-4 border-2 border-transparent group-hover:border-brand-gold transition-colors duration-300 shadow-sm">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="font-medium text-sm md:text-base text-gray-800 group-hover:text-brand-gold transition-colors">
                {cat.name}
              </h3>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

