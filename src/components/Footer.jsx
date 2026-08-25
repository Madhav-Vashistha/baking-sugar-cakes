import { MapPin, Phone, Mail } from 'lucide-react';
import { siteData } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl mb-4 tracking-wider">BAKING SUGAR CAKES</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {siteData.tagline}. {siteData.bio}
            </p>
            <div className="flex space-x-4">
              <a href={siteData.instagram} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#categories" className="hover:text-brand-gold transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">Our Story</a></li>
              <li><a href={siteData.whatsappLink} className="hover:text-brand-gold transition-colors">Order Custom Cake</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {siteData.categories.slice(0, 4).map(cat => (
                <li key={cat.id}>
                  <a href={`#${cat.id}`} className="hover:text-brand-gold transition-colors">{cat.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-brand-gold" />
                <span>{siteData.address}</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-brand-gold" />
                <a href={`tel:${siteData.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white">{siteData.phone}</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-gold" />
                <a href={`mailto:${siteData.email}`} className="hover:text-white">{siteData.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {siteData.brandName}. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
