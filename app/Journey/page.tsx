'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const AboutScroll = () => {
        // Add scroll logic for About section
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    const MenuScroll = () => {
        // Add scroll logic for Menu section
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    };

    const ReservationScroll = () => {
        // Add scroll logic for Reservation section
        document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
    };

    const ContactScroll = () => {
        // Add scroll logic for Contact section
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 5);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  return (
    <main className="relative">
  <header className={`fixed w-full transition-all duration-300 z-50 ${
    scrolled ? 'bg-white/50 backdrop-blur-md shadow-lg' : 'bg-transparent'
  }`}>
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div className="flex items-center group cursor-pointer">
    <Link href={'/'}>
    <h1 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold transition-all duration-300 ${
      scrolled ? 'text-gray-800' : 'text-white'
    }`}>
       Passona Chicken
      <span className={`block text-xs sm:text-sm font-medium mt-1 transition-all duration-300 ${
    scrolled ? 'text-gray-500' : 'text-white/80'
      }`}>
    EST. 2023 • FINE DINING
      </span>
    </h1>
    </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <button 
    onClick={() => setIsOpen(!isOpen)}
    className={`md:hidden p-2 rounded-md hover:bg-gray-100/10 ${
      scrolled ? 'text-gray-600' : 'text-white'
    }`}
      >
    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
    </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
    {[
      { name: 'About', scroll: AboutScroll },
      { name: 'Menu', scroll: MenuScroll },
      { name: 'Reservations', scroll: ReservationScroll },
      { name: 'Contact', scroll: ContactScroll }
    ].map((item) => (
      <a
    key={item.name}
    onClick={item.scroll}
    className={`font-medium transition-all duration-300 text-base lg:text-lg relative group py-2 px-3 lg:px-4 cursor-pointer ${
      scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-white/80'
    }`}
      >
    {item.name}
    <span className={`absolute bottom-0 left-0 w-full h-0.5 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left ${
      scrolled ? 'bg-gray-900' : 'bg-white'
    }`} />
      </a>
    ))}
    <button onClick={ReservationScroll} className={`px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm lg:text-base ${
      scrolled ? 'bg-gray-900 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'
    }`}>
      Book Now
    </button>
      </div>
    </nav>

    {/* Mobile Menu */}
    <div className={`md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
      <div className={`px-2 pt-2 pb-3 space-y-1 ${
    scrolled ? 'bg-white' : 'bg-black/90 backdrop-blur-md'
      }`}>
    {[
      { name: 'About', scroll: AboutScroll },
      { name: 'Menu', scroll: MenuScroll },
      { name: 'Reservations', scroll: ReservationScroll },
      { name: 'Contact', scroll: ContactScroll }
    ].map((item) => (
      <a
    key={item.name}
    onClick={item.scroll}
    className={`block px-3 py-2 text-base font-medium rounded-md cursor-pointer ${
      scrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-50' : 'text-white hover:text-white/80 hover:bg-white/10'
    }`}
      >
    {item.name}
      </a>
    ))}
    <button onClick={ReservationScroll} className={`w-full mt-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
      scrolled ? 'bg-gray-900 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-100'
    }`}>
      Book Now
    </button>
      </div>
    </div>
  </header>
  {/* OurJourney */}
<>
    {/* Journey Section */}
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-zinc-900 pt-20" id="about">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-24 text-white transform hover:scale-105 transition-all duration-300">
                <span className="block text-sm font-medium text-yellow-400 mb-4 tracking-wider uppercase animate-pulse">
                    Our Story
                    <div className="w-24 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"/>
                </span>
                The Journey of Excellence
            </h2>
            <div className="grid gap-72">
                {[
                    {
                        id: "01",
                        title: "The Beginning",
                        description: "Founded in 2023, Passona Chicken started as a dream to bring authentic chicken dishes to life. What began as a small family kitchen has grown into a celebrated dining destination.",
                        image: "https://images.unsplash.com/photo-1610614819513-58e34989848b"
                    },
                    {
                        id: "02",
                        title: "Our Evolution",
                        description: "Through years of perfecting our craft, we've evolved our menu while staying true to our roots. Each recipe has been refined to create the perfect balance of traditional and modern flavors.",
                        image: "https://www.foodnotify.com/hubfs/Headerbild-1.jpg",
                        reverse: true
                    },
                    {
                        id: "03",
                        title: "Today",
                        description: "Now, we pride ourselves on being a destination for food lovers seeking authentic chicken dishes. Our commitment to quality and tradition continues to shape our journey forward.",
                        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                    }
                ].map((item, index) => (
                    <div key={item.id} className={`grid md:grid-cols-2 gap-20 items-center group ${
                        item.reverse ? 'md:[&>div:first-child]:order-2' : ''
                    }`}>
                        <div className="space-y-10 transform transition-all duration-500 group-hover:-translate-y-2">
                            <span className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-semibold border border-yellow-500/20 hover:bg-yellow-500/20 transition-all duration-300">
                                {item.id}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-bold text-white bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-lg font-light hover:text-white transition-colors duration-300">
                                {item.description}
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="w-20 h-1 bg-yellow-500 rounded-full transform origin-left transition-all duration-300 group-hover:w-32"/>
                                <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">→</span>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-3xl group shadow-2xl shadow-black/30 hover:shadow-yellow-500/20 transition-shadow duration-300">
                            <img 
                                src={item.image}
                                alt={item.title}
                                className="rounded-3xl transition-all duration-700 transform group-hover:scale-110 w-full h-[600px] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:opacity-60"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 mix-blend-overlay pointer-events-none animate-pulse"/>
    </section>
</>
        {/* Footer Section */}
      <footer className="bg-gray-950 text-white py-20 relative overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')] animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,187,0,0.05)_0%,transparent_70%)] animate-[pulse_3s_ease-in-out_infinite]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column with enhanced styling */}
        <div className="space-y-6 transform hover:scale-105 transition-all duration-500">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent"></h2>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300">
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={
                        social === 'facebook' ? 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' :
                        social === 'twitter' ? 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' :
                        social === 'instagram' ? 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5' :
                        'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                      } />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
              {[
                { name: 'About Us', scroll: AboutScroll },
                { name: 'Menu', scroll: MenuScroll },
                { name: 'Reservations', scroll: ReservationScroll },
                { name: 'Contact', scroll: ContactScroll }
              ].map((link) => (
                <li key={link.name}>
                <a 
                  onClick={link.scroll}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </a>
                </li>
              ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 mt-1 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Fine Dining Street<br />New York, NY 10001</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@passona.com</span>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and exclusive offers.</p>
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-300"
                  />
                </div>
                <button className="w-full px-6 py-3 bg-yellow-500 text-gray-900 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Passona Chicken. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  </main>
)
}