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
            src="https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2022/09/051b459d-f4ea-4fa1-9ca8-23284dedd858.jpg.jpg" 
            alt="Boutique Atmosphere" 
            className="w-full h-full object-cover brightness-[0.4]" 
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/40 to-midnight"></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="flex flex-col items-center justify-center"
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.5em] uppercase text-gold bg-gold/5 border border-gold/20">
            Exclusive Handcrafts
          </span>
          <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-serif font-black text-white mb-8 tracking-tighter leading-[0.9]">
            DP <span className="text-gold italic">CREATIONS</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-light mb-12 tracking-widest max-w-xl leading-relaxed uppercase">
            Bespoke Hand Embroidery & Accessories
          </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-4 bg-gold text-midnight font-black tracking-widest uppercase shadow-2xl hover:bg-white transition-all flex items-center justify-center group"
            >
              See Our Work
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="https://wa.me/919952626660"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-4 border border-white/20 text-white font-bold tracking-widest uppercase backdrop-blur-sm hover:bg-white/10 transition-all text-sm"
            >
              Contact Us Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Hero Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/30 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] mb-2 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full bg-gold h-1/2"></div>
        </div>
      </motion.div>
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

const TrustSection = () => {
  const points = [
    { title: 'Best Quality', desc: 'We use the finest beads and threads for your dresses.', icon: <Star className="w-8 h-8" /> },
    { title: 'Lower Price', desc: 'Beautiful designs that also save your money.', icon: <ShoppingBag className="w-8 h-8" /> },
    { title: 'Fast Work', desc: 'We finish your work on time, every time.', icon: <Star className="w-8 h-8" /> },
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-midnight/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mx-auto mb-6 text-gold bg-gold/5">
                {point.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">{point.title}</h3>
              <p className="text-sm text-slate-400 font-light">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'Aari Work', icon: <Star />, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUoqOZG_EqTOe1wlAmKMbOJieI0BUtoX_dA&s', desc: 'Beautiful hand embroidery work done with beads and threads.' },
    { title: 'Bangles', icon: <Star />, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYF4oi2li4RY0KjdAOIW2gdaldFSuGWdUJFoj51n9DePBS5WKmZRPpy_ZQm1nEE-rfujq-1SASi0POfHUhAn9M8jQxjEXL7P2afBgCvxo', desc: 'Beautiful bangles for every hand and every occasion.' },
    { title: 'Thread Bangles', icon: <Star />, image: 'https://img.nihaojewelry.com/fit-in/800x800/product/2026/3/19/2034463749175382016/Retro-Multicolor-Enamel-Flowers-Bangle-In-Metal-Featuring-Electroplated-Craft.jpg', desc: 'Silk thread bangles made carefully with bright colors.' },
    { title: 'Mehendi', icon: <Star />, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHqPzQCkyDrUgr26mi0eVsjy3SSzLDyG9YgUgNf-kM4KVo2Qqplf4NrgpTDkmC5uIqL6Mn1o69ao-gRqkXz_ffbUHhgZW4-EGeNB8NwbAVB1xRM_RCnaPYDQ&usqp=CAc', desc: 'Deep color mehendi designs for your special day.' },
    { title: 'Hair Accessories', icon: <Star />, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSp8Lt814IFTLDn_h2fZhX2zlTLSYFPJElqBkcPopEIgzwT7OXaeMbepLTQyUOshBvEmJPa9kHnU7r_GhiyeKAUUf_Rej15z8n62NxVB6wLUaL-yByuRUOj1Q&usqp=CAc', desc: 'Beautiful hair clips and flowers for a great look.' },
    { title: 'Bouquets', icon: <Star />, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUoqOZG_EqTOe1wlAmKMbOJieI0BUtoX_dA&s', desc: 'Beautiful flower bunches for gifting to your loved ones.' },
    { title: 'Accessories', icon: <Star />, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSp8Lt814IFTLDn_h2fZhX2zlTLSYFPJElqBkcPopEIgzwT7OXaeMbepLTQyUOshBvEmJPa9kHnU7r_GhiyeKAUUf_Rej15z8n62NxVB6wLUaL-yByuRUOj1Q&usqp=CAc', desc: 'Special handmade items to match your dress perfectly.' },
    { title: 'Return Gifts', icon: <Star />, image: 'https://img.nihaojewelry.com/fit-in/800x800/product/2026/3/19/2034463749175382016/Retro-Multicolor-Enamel-Flowers-Bangle-In-Metal-Featuring-Electroplated-Craft.jpg', desc: 'Personalized gifts for baby showers and weddings.' },
  ];

  return (
    <section id="services" className="py-24 bg-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="What We Do" title="Our Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ 
                delay: index * 0.1,
                y: { duration: 0.3, ease: "easeOut" }
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-midnight border border-white/5 hover:border-gold/40 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.3)] transition-all duration-500"
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
        DESIGN
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUoqOZG_EqTOe1wlAmKMbOJieI0BUtoX_dA&s" 
                alt="Aari Work Mastery" 
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 glass p-8 shadow-2xl border-gold/20 hidden xl:block">
              <h4 className="text-gold font-serif text-xl mb-2">Our Quality</h4>
              <p className="text-xs text-slate-300 tracking-wider leading-relaxed">Every small stitch is made with care and love by our team.</p>
            </div>
          </motion.div>

          <div>
            <SectionHeading subtitle="Best Work" title="Special Aari Designs" />
            <div className="text-slate-300 space-y-8 text-lg font-light leading-relaxed mb-12">
              <p>
                Our Aari Work is very famous at DP CREATIONS. We use old methods to make new and modern designs for you.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="text-gold font-serif text-lg mb-2">Clean Work</h5>
                  <p className="text-sm text-slate-400">Very clear and nice needle work on your dress.</p>
                </div>
                <div>
                  <h5 className="text-gold font-serif text-lg mb-2">Your Choice</h5>
                  <p className="text-sm text-slate-400">We make designs exactly like you want them.</p>
                </div>
              </div>
            </div>
            <motion.a 
              href="https://wa.me/919952626660"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-5 bg-gold text-midnight font-black tracking-widest uppercase hover:bg-white transition-all shadow-xl"
            >
              Talk to Us
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUoqOZG_EqTOe1wlAmKMbOJieI0BUtoX_dA&s', title: 'Work Detail' },
    { src: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHqPzQCkyDrUgr26mi0eVsjy3SSzLDyG9YgUgNf-kM4KVo2Qqplf4NrgpTDkmC5uIqL6Mn1o69ao-gRqkXz_ffbUHhgZW4-EGeNB8NwbAVB1xRM_RCnaPYDQ&usqp=CAc', title: 'Mehendi Design' },
    { src: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYF4oi2li4RY0KjdAOIW2gdaldFSuGWdUJFoj51n9DePBS5WKmZRPpy_ZQm1nEE-rfujq-1SASi0POfHUhAn9M8jQxjEXL7P2afBgCvxo', title: 'Bangle Collection' },
    { src: 'https://img.nihaojewelry.com/fit-in/800x800/product/2026/3/19/2034463749175382016/Retro-Multicolor-Enamel-Flowers-Bangle-In-Metal-Featuring-Electroplated-Craft.jpg', title: 'New Style' },
    { src: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSp8Lt814IFTLDn_h2fZhX2zlTLSYFPJElqBkcPopEIgzwT7OXaeMbepLTQyUOshBvEmJPa9kHnU7r_GhiyeKAUUf_Rej15z8n62NxVB6wLUaL-yByuRUOj1Q&usqp=CAc', title: 'Accessory Pair' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUoqOZG_EqTOe1wlAmKMbOJieI0BUtoX_dA&s', title: 'Aari Pattern' },
  ];

  return (
    <section id="gallery" className="py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading subtitle="Photos" title="Our Gallery" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ 
                opacity: { delay: i * 0.1 },
                scale: { duration: 0.4, ease: "easeOut" }
              }}
              className="relative aspect-square overflow-hidden group border border-white/5 z-0 hover:z-10 cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-125 brightness-[0.3] group-hover:brightness-90 ease-out"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-midnight/30 backdrop-blur-[2px] group-hover:backdrop-blur-md">
                 <motion.span 
                   initial={{ y: 10, opacity: 0 }}
                   whileHover={{ y: 0, opacity: 1 }}
                   className="text-gold tracking-[0.4em] uppercase text-[10px] mb-3 font-bold"
                 >
                   Our Work
                 </motion.span>
                 <motion.h4 
                   initial={{ y: 10, opacity: 0 }}
                   whileHover={{ y: 0, opacity: 1 }}
                   className="text-2xl font-serif text-white tracking-widest px-6 text-center"
                 >
                   {img.title}
                 </motion.h4>
                 <div className="w-0 h-[1px] bg-gold mt-4 group-hover:w-16 transition-all duration-1000"></div>
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
              <h2 className="text-5xl font-serif font-bold text-white mb-8">Talk With <span className="text-gold">Us</span></h2>
              <p className="text-slate-400 font-light text-lg mb-16 leading-relaxed">
                Send us a message for your special dress or to ask about our prices.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 border border-gold/30 rounded-none flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gold/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Call Us</p>
                    <a href="tel:+919952626660" className="text-xl text-white font-medium">+91 99526 26660</a>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 border border-gold/30 rounded-none flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gold/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Visit Shop</p>
                    <span className="text-xl text-white font-medium">Mettur, Salem</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 border border-gold/30 rounded-none flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-gold/60 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Email Us</p>
                    <a href="mailto:deepikasekar003@gmail.com" className="text-xl text-white font-medium">deepikasekar003@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-16 lg:p-24 bg-charcoal/20 backdrop-blur-xl">
              <form className="space-y-10">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Name</label>
                  <input type="text" placeholder="YOUR NAME" className="w-full px-0 py-4 border-b border-white/10 focus:border-gold outline-none transition-colors bg-transparent text-white font-medium placeholder:text-white/20" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">Email</label>
                  <input type="email" placeholder="YOUR EMAIL" className="w-full px-0 py-4 border-b border-white/10 focus:border-gold outline-none transition-colors bg-transparent text-white font-medium placeholder:text-white/20" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold" >What you need?</label>
                  <select className="w-full px-0 py-4 border-b border-white/10 focus:border-gold outline-none transition-colors bg-transparent text-white font-medium appearance-none">
                    <option className="bg-midnight text-white">Full Aari Work</option>
                    <option className="bg-midnight text-white">Bangle Matching</option>
                    <option className="bg-midnight text-white">Mehendi Designs</option>
                    <option className="bg-midnight text-white">Other Accessories</option>
                  </select>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-gold text-midnight font-black tracking-[0.2em] uppercase shadow-2xl hover:bg-white transition-all text-sm"
                >
                  Send Message
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
        © {new Date().getFullYear()} DP CREATIONS METTUR. <br/> PRESERVATION OF ARTISTRY. MASTERFUL EXECUTION.
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
      <TrustSection />
      <FeaturedAari />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

