import { motion } from 'framer-motion';
import { siteData } from '../data/content';

export default function ProductGrid() {
  // Group products by category for rendering sections
  const categoriesWithProducts = siteData.categories.map(cat => {
    return {
      ...cat,
      products: siteData.products.filter(p => p.categoryId === cat.id)
    };
  }).filter(cat => cat.products.length > 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#FAFAFA] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {categoriesWithProducts.map((category, index) => (
          <div key={category.id} id={category.id} className={index > 0 ? "mt-20" : ""}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="font-display text-3xl text-brand-dark">{category.name}</h2>
              <a href={siteData.whatsappLink} className="hidden sm:block text-sm font-medium text-brand-gold hover:text-brand-dark transition-colors uppercase tracking-wider">
                Order Custom &rarr;
              </a>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {category.products.map(product => (
                <motion.div variants={itemVariants} key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.isEggless && (
                      <div className="absolute top-4 left-4 bg-white px-2 py-1 text-xs font-bold text-green-700 rounded shadow flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span> Eggless
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-brand-dark">{product.price}</span>
                      <a 
                        href={siteData.whatsappLink}
                        target="_blank"
                        rel="noreferrer" 
                        className="text-brand-gold hover:text-white border border-brand-gold hover:bg-brand-gold px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors rounded"
                      >
                        Inquire
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

      </div>
    </div>
  );
}

