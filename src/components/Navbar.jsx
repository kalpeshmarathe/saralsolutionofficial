import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, User, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'DSA Sheet', path: '/dsa-sheet' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${scrolled ? 'py-4 bg-slate-950/80 backdrop-blur-2xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="bg-amber-500 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              <Flame size={24} color="#000" fill="#000" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-white">
              SARAL <span className="text-amber-500">SOLUTIONS</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-grow justify-center px-10">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-amber-500 ${location.pathname === link.path ? 'text-amber-500' : 'text-slate-400'}`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div 
                        layoutId="nav-active"
                        className="absolute -bottom-2 left-0 w-full h-[2px] bg-amber-500"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-8 shrink-0">
            <button 
              className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all flex items-center gap-2"
              onClick={onLoginClick}
            >
              <User size={16} />
              LOGIN
            </button>
            <Link to="/contact">
              <button className="btn btn-primary !px-8 !py-3.5 !text-[10px] !rounded-xl">
                ADMISSIONS
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-slate-950 z-[1100] flex flex-col p-8 animate-in fade-in slide-in-from-right duration-500">
          <div className="flex justify-between items-center mb-20">
            <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setMobileOpen(false)}>
                <div className="bg-amber-500 p-2 rounded-xl">
                <Flame size={20} color="#000" fill="#000" />
                </div>
                <span className="font-display font-black text-xl tracking-tighter text-white">SARAL <span className="text-amber-500">SOLUTIONS</span></span>
            </Link>
            <button 
                onClick={() => setMobileOpen(false)} 
                className="text-white p-2 hover:bg-white/10 rounded-full"
            >
                <X size={32} />
            </button>
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between group p-4 rounded-2xl transition-all ${location.pathname === link.path ? 'bg-amber-500 text-black' : 'text-white hover:bg-white/5'}`}
              >
                <span className="text-3xl font-display font-black uppercase tracking-tighter">{link.name}</span>
                <ChevronRight className={`transition-transform duration-300 group-hover:translate-x-2 ${location.pathname === link.path ? 'text-black' : 'text-amber-500'}`} size={32} />
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4">
            <button onClick={onLoginClick} className="btn !bg-white/5 !text-white !border-white/10 w-full !py-5">LOGIN TO STUDENT PORTAL</button>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <button className="btn btn-primary w-full !py-5">START APPLICATION</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
