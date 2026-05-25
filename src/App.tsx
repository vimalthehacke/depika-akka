import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Menu,
  X,
  Star,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Aari Work', href: '#aari' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-widest text-gradient-gold"
        >
          DP CREATIONS
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="https://wa.me/919952626660"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gold text-midnight rounded-none text-xs font-bold tracking-widest uppercase shadow-lg hover:shadow-gold/20 transition-all border border-gold"
          >
            Enquire Now
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-midnight border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/919952626660"
                className="w-full py-3 bg-gold text-midnight text-center font-bold tracking-widest uppercase"
              >
                Enquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 5, ease: "linear" }}
          className="w-full h-full"
        >
           <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" 
            alt="Boutique Atmosphere" 
            className="w-full h-full object-cover brightness-[0.4]" 
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/40 to-midnight"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.4em] uppercase text-gold bg-gold/10 border border-gold/20">
            Royal Boutique Experience
          </span>
          <h1 className="text-7xl md:text-9xl font-serif font-black text-white mb-6 tracking-tight leading-tight">
            DP <span className="text-gold italic font-light">CREATIONS</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 tracking-wide max-w-2xl mx-auto leading-relaxed">
            Crafting Timeless Elegance through Masterful Aari Work & Bespoke Handcrafted Accessories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-4 bg-gold text-midnight font-black tracking-widest uppercase shadow-2xl hover:bg-white transition-all flex items-center justify-center group"
            >
              Explore Collection
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://wa.me/919952626660"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-4 border border-white/20 text-white font-bold tracking-widest uppercase backdrop-blur-sm hover:bg-white/10 transition-all text-sm"
            >
              Enquire Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title, light = true }) => (
  <div className="text-center mb-20 px-4">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-xs font-bold tracking-[0.5em] uppercase text-gold mb-3 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`text-4xl md:text-6xl font-serif font-bold ${light ? 'text-white' : 'text-slate-900'} tracking-tight`}
    >
      {title}
    </motion.h2>
    <motion.div 
       initial={{ width: 0 }}
       whileInView={{ width: 60 }}
       className="h-0.5 bg-gold mx-auto mt-8"
    ></motion.div>
  </div>
);

const Services = () => {
  const services = [
    { title: 'Aari Work', icon: <Star />, image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000', desc: 'Symphony of threads and beads, handcrafted for royalty.' },
    { title: 'Bangles', icon: <Star />, image: 'https://images.unsplash.com/photo-1542319630-50fb7cad4211?q=80&w=1000', desc: 'Exquisite traditional and modern bangles for every wrist.' },
    { title: 'Thread Bangles', icon: <Star />, image: 'https://images.unsplash.com/photo-1630045610817-486127e99742?q=80&w=1000', desc: 'Silk thread artistry meticulously wrapped for vibrant elegance.' },
    { title: 'Mehendi', icon: <Star />, image: 'https://images.unsplash.com/photo-1590670460287-39958742490b?q=80&w=1000', desc: 'Dark, intricate henna patterns to celebrate your most special days.' },
    { title: 'Hair Accessories', icon: <Star />, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70968?q=80&w=1000', desc: 'Crowning glory pieces designed with crystals and fine craftsmanship.' },
    { title: 'Bouquets', icon: <Star />, image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1000', desc: 'Bespoke floral arrangements that breathe life into any space.' },
    { title: 'Accessories', icon: <Star />, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000', desc: 'Curated collection of unique, handcrafted statement pieces.' },
    { title: 'Return Gifts', icon: <Star />, image: 'https://images.unsplash.com/photo-1512418490979-92798ccc13b0?q=80&w=1000', desc: 'Personalized luxury hampers for baby showers and weddings.' },
  ];

  return (
    <section id="services" className="py-24 bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Craftsmanship" title="Signature Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-midnight border border-white/5 hover:border-gold/30 transition-all duration-500"
            >
              <div className="h-80 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedAari = () => {
  return (
    <section id="aari" className="relative py-32 bg-midnight text-white overflow-hidden">
      <div className="absolute top-0 left-0 text-[18rem] font-serif font-black text-white/[0.02] leading-none pointer-events-none select-none">
        SIGNATURE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden border border-white/10 p-4 bg-charcoal/20">
              <img 
                src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80" 
                alt="Aari Work Mastery" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 glass p-8 shadow-2xl border-gold/20 hidden xl:block">
              <h4 className="text-gold font-serif text-xl mb-2">Artisanal Pride</h4>
              <p className="text-xs text-slate-300 tracking-wider leading-relaxed">Each stitch is a testament to our dedication to preserving traditional Aari techniques.</p>
            </div>
          </motion.div>

          <div>
            <SectionHeading subtitle="The Masterpiece" title="Bespoke Aari Embroidery" />
            <div className="text-slate-300 space-y-8 text-lg font-light leading-relaxed mb-12">
              <p>
                Our Aari Work is the cornerstone of DP CREATIONS. We blend century-old needlework traditions with contemporary luxury aesthetics.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="text-gold font-serif text-lg mb-2">Exquisite Detail</h5>
                  <p className="text-sm text-slate-400">Micro-precision in every bead and zardosi thread.</p>
                </div>
                <div>
                  <h5 className="text-gold font-serif text-lg mb-2">Custom Cut</h5>
                  <p className="text-sm text-slate-400">Tailored designs uniquely sketched for your vision.</p>
                </div>
              </div>
            </div>
            <motion.a 
              href="https://wa.me/919952626660"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-gold text-midnight font-black tracking-widest uppercase hover:bg-white transition-all shadow-xl"
            >
              Consult with Artisan
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1601050690597-df0568f70968', title: 'Regal Bangles' },
    { src: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35', title: 'Bridal Mehendi' },
    { src: 'https://images.unsplash.com/photo-1621607512214-68297480165e', title: 'Hair Jewels' },
    { src: 'https://images.unsplash.com/photo-1519340244303-2415170d744b', title: 'Floral Elegance' },
    { src: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633', title: 'Embroidery Detail' },
    { src: 'https://images.unsplash.com/photo-1512418490979-92798ccc13b0', title: 'Luxury Favors' },
  ];

  return (
    <section id="gallery" className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Portfolio" title="Our Visual Narrative" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group border border-white/5"
            >
              <img 
                src={`${img.src}?auto=format&fit=crop&q=80`} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-50 group-hover:brightness-90"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-midnight/40 backdrop-blur-sm">
                 <span className="text-gold tracking-[0.3em] uppercase text-[10px] mb-2">Exhibition</span>
                 <h4 className="text-2xl font-serif text-white">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-charcoal/50 border border-white/5 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-16 lg:p-24 bg-midnight">
              <h2 className="text-5xl font-serif font-bold text-white mb-8">Start Your <span className="text-gold">Creation</span></h2>
              <p className="text-slate-400 font-light text-lg mb-16 leading-relaxed">
                Connect with our boutique in Chennai for custom Aari work commissions or to browse our latest accessories collection.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 border border-gold/30 rounded-none flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gold/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Direct Line</p>
                    <a href="tel:+919952626660" className="text-xl text-white font-medium">+91 99526 26660</a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 border border-gold/30 rounded-none flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gold/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Correspondence</p>
                    <a href="mailto:deepikasekar003@gmail.com" className="text-xl text-white font-medium">deepikasekar003@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-16 lg:p-24 bg-charcoal/20 backdrop-blur-xl">
              <form className="space-y-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Identity</label>
                  <input type="text" placeholder="FULL NAME" className="w-full px-0 py-4 border-b border-white/10 focus:border-gold outline-none transition-colors bg-transparent text-white font-medium placeholder:text-white/20" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Electronic Mail</label>
                  <input type="email" placeholder="EMAIL ADDRESS" className="w-full px-0 py-4 border-b border-white/10 focus:border-gold outline-none transition-colors bg-transparent text-white font-medium placeholder:text-white/20" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold" >Subject of Interest</label>
                  <select className="w-full px-0 py-4 border-b border-white/10 focus:border-gold outline-none transition-colors bg-transparent text-white font-medium appearance-none">
                    <option className="bg-midnight text-white">Aari Work Commission</option>
                    <option className="bg-midnight text-white">Bangle Collection</option>
                    <option className="bg-midnight text-white">Mehendi Booking</option>
                    <option className="bg-midnight text-white">Wholesale Inquiries</option>
                  </select>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-gold text-midnight font-black tracking-[0.2em] uppercase shadow-2xl hover:bg-white transition-all text-sm"
                >
                  Confirm Inquiery
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-midnight">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-serif font-bold tracking-[0.3em] text-gradient-gold mb-10">DP CREATIONS</h2>
      <div className="flex justify-center space-x-12 mb-12 text-slate-500">
        <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors">Instagram</a>
        <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors">Facebook</a>
        <a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors">Pinterest</a>
      </div>
      <p className="text-slate-600 text-[9px] uppercase tracking-[0.5em] leading-loose">
        © {new Date().getFullYear()} DP CREATIONS CHENNAI. <br/> PRESERVATION OF ARTISTRY. MASTERFUL EXECUTION.
      </p>
    </div>
  </footer>
);

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919952626660"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-12 right-12 z-[100] flex items-center group"
  >
    <div className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 mr-[-20px] rounded-l-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 hidden md:block">
       <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Enquire Now</span>
    </div>
    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-midnight shadow-2xl shadow-gold/20 relative z-10">
      <MessageCircle className="w-8 h-8" />
      <motion.div 
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-gold rounded-full -z-10 opacity-30"
      ></motion.div>
    </div>
  </motion.a>
);

export default function App() {
  return (
    <div className="relative min-h-screen bg-midnight font-sans selection:bg-gold selection:text-midnight">
      <Navbar />
      <Hero />
      <section id="about" className="py-32 max-w-4xl mx-auto px-6 text-center">
        <SectionHeading subtitle="The Philosophy" title="Heritage in Every Stitch" />
        <p className="text-2xl md:text-4xl font-serif font-light text-slate-400 leading-tight italic">
          "Where craftsmanship meets couture. DP CREATIONS is dedicated to the refined art of handmade elegance."
        </p>
      </section>
      <Services />
      <FeaturedAari />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

