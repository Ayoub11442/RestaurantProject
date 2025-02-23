'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  function AboutScroll (){
    window.scrollTo({
      top: 800,
      behavior: 'smooth'
    });
  }
  function Gallery(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  function MenuScroll (){
    window.scrollTo({
      top: 1600,
      behavior: 'smooth'
    });
  }
  function ReservationScroll (){
    window.scrollTo({
      top: 2400,
      behavior: 'smooth'
    });
  }
  function ContactScroll (){
    window.scrollTo({
      top: 3290,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative">
      {/* Responsive Header with Mobile Menu */}
      {/* Header with Scroll Effect */}
      <header className={`fixed w-full transition-all duration-300 z-50 ${
        scrolled ? 'bg-white/50 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
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

      {/* Enhanced Responsive Hero Section */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <picture>
        <source
          media="(min-width: 768px)"
          srcSet="https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/16:9/w_1280,c_limit/Untitled%20design%20(14).png"
        />
        <img
          src="https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/16:9/w_1280,c_limit/Untitled%20design%20(14).png"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover brightness-[0.65] scale-105 transform transition-all duration-[3s] ease-in-out hover:scale-100"
        />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/95" />
        </div>
        
        <div className="relative h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full">
        <div className="space-y-10 animate-[fadeIn_1.5s_ease-in]">
          <span className="text-yellow-50/90 uppercase relative top-[20px] tracking-[0.25em] block font-medium text-sm sm:text-base border-l-4 border-yellow-50 pl-4 transform hover:translate-x-2 transition-transform duration-300">
            Welcome to excellence
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            Experience
            <span className="block text-yellow-50 mt-2 animate-pulse">Fine Dining</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed font-light backdrop-blur-sm bg-black/10 p-4 rounded-lg">
            Savor exceptional cuisine in an elegant atmosphere with our 
            <span className="text-yellow-50 font-medium animate-pulse"> award-winning </span> dishes
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={ReservationScroll} className="group bg-yellow-50 text-gray-900 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-sm sm:text-base flex items-center justify-center">
          Reserve a Table
          <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
            </button>
            <button onClick={MenuScroll} className="group border-2 border-yellow-50 text-yellow-50 px-8 sm:px-12 py-4 sm:py-5 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-50 hover:text-gray-900 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] text-sm sm:text-base flex items-center justify-center backdrop-blur-sm">
          View Menu
          <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
            </button>
          </div>
        </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-[fadeIn_1.5s_ease-in]">
          <span className="inline-block text-yellow-600 uppercase tracking-[0.25em] text-sm font-medium border-l-4 border-yellow-600 pl-4 transform hover:translate-x-2 transition-all duration-300">
            Since 2023
          </span>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Our Story of
            <span className="block text-yellow-600 mt-2 bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent"></span>
          </h3>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
          <p className="text-gray-600 leading-relaxed text-lg backdrop-blur-sm bg-white/50 p-6 rounded-xl shadow-sm">
            Founded in 2023, Passona Chicken has redefined the art of fine dining. Our commitment to culinary excellence and exceptional service has made us a destination for food enthusiasts and casual diners alike.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg backdrop-blur-sm bg-white/50 p-6 rounded-xl shadow-sm">
            Our expert chefs combine traditional techniques with modern innovation, creating dishes that celebrate both heritage and contemporary cuisine. Every ingredient is carefully sourced to ensure the highest quality dining experience.
          </p>
          <button className="group mt-8 px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-yellow-600 hover:to-yellow-500 flex items-center space-x-3">
            <Link href={'/Journey'}>
            <span className="font-medium">Discover Our Journey</span>
            </Link>
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
            alt="Restaurant interior"
            className="rounded-2xl shadow-2xl w-full h-[600px] object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-yellow-200"
          />
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
            <div className="flex items-center space-x-4">
          <p className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">25+</p>
          <div>
            <p className="text-gray-900 font-semibold text-lg">Expert Chefs</p>
            <p className="text-gray-500">International Cuisine</p>
          </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-yellow-600 font-medium flex items-center">
          <span className="animate-pulse mr-1">★</span>
          <span>★★★★★</span> Rated
            </p>
          </div>
        </div>
          </div>
        </div>
      </section>
      {/* Menu Section */}
      <section className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 space-y-4">
        <span className="inline-block text-yellow-400 uppercase tracking-[0.25em] text-sm font-medium border-b-2 border-yellow-400 pb-2">
          Our Specialties
        </span>
        <h3 className="text-4xl sm:text-6xl font-bold text-white">
          Signature Menu
          <span className="block text-2xl sm:text-3xl text-yellow-400 mt-2 font-light">Culinary Excellence</span>
        </h3>
        <div className="w-40 h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            name: "Grilled Chicken Supreme",
            description: "Free-range chicken with herbs, served with seasonal vegetables",
            price: "$32",
            image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b"
          },
          {
            name: "Chicken Wellington",
            description: "Classic preparation with mushroom duxelles and prosciutto",
            price: "$45",
            image: "https://img.taste.com.au/36zs6Tm5/w643-h428-cfill-q90/taste/2016/11/chicken-wellingtons-with-creamy-pea-sauce-102606-1.jpeg"
          },
          {
            name: "Truffle Chicken Risotto",
            description: "Creamy Arborio rice with shaved truffles and parmesan",
            price: "$38",
            image: "https://img.taste.com.au/LnlKcmum/w643-h428-cfill-q90/taste/2016/11/mushroom-risotto-with-tarragon-chicken-46110-1.jpeg"
          }
        ].map((dish) => (
          <div key={dish.name} className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
            <div className="aspect-w-16 aspect-h-12">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover brightness-90 transition-all duration-700 group-hover:brightness-110"
          />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <h4 className="text-2xl font-bold text-white mb-2">{dish.name}</h4>
          <p className="text-gray-300 text-sm transform opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{dish.description}</p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-yellow-400 text-xl font-bold">{dish.price}</p>
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-300 transform hover:scale-105">
              Order Now
            </button>
          </div>
            </div>
          </div>
        ))}
          </div>

          <div className="text-center mt-20">
        <Link href={'/Menu'}>
        <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-14 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:from-yellow-500 hover:to-yellow-400 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20">
          Explore Full Menu
          <svg className="inline-block w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        </Link>
          </div>
        </div>
      </section>
      {/* Reservations Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8 transform hover:scale-[1.02] transition-all duration-500">
          <span className="inline-block text-yellow-600 uppercase tracking-[0.25em] text-sm font-medium border-l-4 border-yellow-600 pl-4 animate-pulse">
            Reservations
          </span>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Book Your Table
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400 mt-2">For Any Occasion</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed backdrop-blur-sm bg-white/50 p-6 rounded-xl shadow-sm">
            Experience extraordinary dining in an elegant atmosphere. Reserve your table now and let us create an unforgettable evening for you.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px]">
          <svg className="w-10 h-10 text-yellow-600 mb-4 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Hours</h4>
          <p className="text-gray-600">Mon-Sun: 5:00 PM - 11:00 PM</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px]">
          <svg className="w-10 h-10 text-yellow-600 mb-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">Contact</h4>
          <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:shadow-yellow-200/20 transition-all duration-500 transform hover:scale-[1.01]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="group">
            <label className="block text-gray-700 font-medium mb-2 transition-all group-hover:text-yellow-600">Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:border-yellow-400" />
          </div>
          <div className="group">
            <label className="block text-gray-700 font-medium mb-2 transition-all group-hover:text-yellow-600">Email</label>
            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:border-yellow-400" />
          </div>
          <div className="group">
            <label className="block text-gray-700 font-medium mb-2 transition-all group-hover:text-yellow-600">Date</label>
            <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:border-yellow-400" />
          </div>
          <div className="group">
            <label className="block text-gray-700 font-medium mb-2 transition-all group-hover:text-yellow-600"></label>
            <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:border-yellow-400">
              {Array.from({ length: 13 }, (_, i) => i + 17).map((hour) => (
            <option key={hour}>{`${hour}:00`}</option>
              ))}
            </select>
          </div>
            </div>
            <div className="group">
          <label className="block text-gray-700 font-medium mb-2 transition-all group-hover:text-yellow-600">Number of Guests</label>
          <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 hover:border-yellow-400">
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
            </div>
            <div className="group">
          <label className="block text-gray-700 font-medium mb-2 transition-all group-hover:text-yellow-600">Special Requests</label>
            <textarea 
            className="w-full px-4 py-3 rounded-lg border border-gray-300 
              focus:ring-2 focus:ring-yellow-400 focus:border-transparent 
              transition-all duration-300 hover:border-yellow-400
              resize-none placeholder-gray-400"
            rows={4}
            placeholder="Let us know about any dietary requirements or special occasions..."
            aria-label="Special requests"
            maxLength={500}
            ></textarea>
            </div>
            <button className="group w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 py-4 rounded-lg font-bold text-lg transition-all duration-500 hover:from-yellow-500 hover:to-yellow-400 hover:scale-[1.02] hover:shadow-xl flex items-center justify-center">
          Reserve Now
          <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
            </button>
          </form>
        </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-black relative">
        {/* Enhanced animated background patterns */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagonal-noise.png')] animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,187,0,0.15)_0%,transparent_70%)] animate-[pulse_3s_ease-in-out_infinite]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 transform hover:scale-105 transition-all duration-500">
        <span className="inline-block text-yellow-400 uppercase tracking-[0.3em] text-sm font-medium border-b-2 border-yellow-400 pb-2 animate-[bounce_2s_ease-in-out_infinite]">
          Let's Connect
        </span>
        <h3 className="text-5xl sm:text-7xl font-bold text-white mt-6 tracking-tight bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
          Get in Touch
          <span className="block text-2xl sm:text-3xl text-yellow-400 mt-4 font-light italic">
            We're Here to Serve You
          </span>
        </h3>
        <div className="w-40 h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 rounded-full mx-auto mt-8 animate-[width_3s_ease-in-out_infinite]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {[
          {
            icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
            title: "Visit Us",
            content: ["123 Fine Dining Street", "Culinary District", "New York, NY 10001"],
            gradient: "from-emerald-400 to-teal-500"
          },
          {
            icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
            title: "Reach Out",
            content: ["📞 (555) 123-4567", "✉️ info@passona.com", "📱 (555) 123-4568"],
            gradient: "from-amber-400 to-orange-500"
          },
          {
            icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            title: "Opening Hours",
            content: ["🌙 Mon-Fri: 5pm - 11pm", "✨ Sat: 4pm - 12am", "🌅 Sun: 4pm - 10pm"],
            gradient: "from-purple-400 to-pink-500"
          }
        ].map((item, index) => (
          <div key={index} 
            className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 rounded-3xl 
            transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20
            border border-white/10 hover:border-yellow-400/50">
            <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
            <div className="relative">
          <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-8 mx-auto
            transform group-hover:rotate-12 transition-all duration-500 hover:shadow-lg`}>
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-white text-center mb-6 group-hover:text-yellow-400 transition-colors duration-300">{item.title}</h4>
          {item.content.map((line, i) => (
            <p key={i} className="text-gray-300 text-center leading-loose text-lg hover:text-yellow-400 transition-colors duration-300 mb-2">
              {line}
            </p>
          ))}
            </div>
          </div>
        ))}
          </div>

          <div className="mt-24 text-center">
        <button className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-14 py-5 rounded-full font-bold text-lg 
          transition-all duration-500 hover:from-yellow-500 hover:to-yellow-400 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/20
          inline-flex items-center overflow-hidden">
          <span className="relative z-10 font-extrabold tracking-wide">Send us a Message</span>
          <svg className="w-6 h-6 ml-3 transform transition-transform duration-500 group-hover:translate-x-2 relative z-10" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </button>
          </div>
        </div>
      </section>
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