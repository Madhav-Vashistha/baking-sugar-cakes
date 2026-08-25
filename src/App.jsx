import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';

import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-brand-dark antialiased bg-[#FAFAFA]">
      <Header />
      
      <main>
        <Hero />
        <AboutSection />

        <CategoryNav />
        <ProductGrid />
      </main>

      <Footer />
    </div>
  );
}

export default App;
