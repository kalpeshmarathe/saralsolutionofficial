import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ChevronRight, Phone, LogOut, LayoutDashboard } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ onLoginClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'DSA Sheet', path: '/dsa-sheet' },
    ...(user ? [{ name: 'Dashboard', path: '/dashboard' }] : []),
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[1000] transition-all duration-500"
        style={{
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled
            ? 'rgba(3, 7, 18, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : '1px solid transparent',
        }}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="/logo.png"
                alt="Saral Solutions"
                className="h-11 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 12px rgba(245,166,35,0.3))' }}
              />
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="relative flex items-center px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl"
                        style={{
                          color: isActive ? '#f5a623' : '#94a3b8',
                          background: isActive ? 'rgba(245,166,35,0.08)' : 'transparent',
                        }}
                        onMouseEnter={e => {
                          if (!isActive) {
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                          }
                        }}
                        onMouseLeave={e => {
                          if (!isActive) {
                            e.currentTarget.style.color = '#94a3b8';
                            e.currentTarget.style.background = 'transparent';
                          }
                        }}
                      >
                        {link.name}
                        {isActive && (
                          <motion.div
                            layoutId="nav-active-dot"
                            className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Desktop right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+918080068554"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium px-3 py-2">
                <Phone size={15} className="text-green-400" />
                +91 8080068554
              </a>

              {user ? (
                <div className="flex items-center gap-2">
                  <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all hover:bg-amber-500/10"
                       style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)' }}>
                    <div className="w-6 h-6 rounded-lg bg-amber-500 text-black flex items-center justify-center text-[10px] font-black uppercase">
                      {user.name ? user.name[0] : user.email[0]}
                    </div>
                    <span className="text-sm font-bold text-white max-w-[100px] truncate">{user.name || 'Student'}</span>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="p-2.5 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
                    title="Logout"
                  >
                    <LogOut size={16} />
                  </button>
                </div>
              ) : (
                <button
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-all text-sm font-medium px-4 py-2 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onClick={onLoginClick}
                >
                  <User size={15} />
                  Student Login
                </button>
              )}

              <Link to="/contact">
                <button className="btn btn-primary !text-sm !px-5 !py-2.5">
                  Enroll Now
                </button>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2.5 rounded-xl transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen
                ? <X size={22} className="text-white" />
                : <Menu size={22} className="text-white" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1100] flex flex-col"
            style={{ background: 'rgba(3,7,18,0.98)', backdropFilter: 'blur(20px)' }}
          >
            {/* Mobile header */}
            <div className="flex justify-between items-center px-6 py-5 border-b"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img src="/logo.png" alt="Saral Solutions" className="h-10 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2.5 rounded-xl text-white"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-grow flex flex-col justify-center px-6 gap-3">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between p-5 rounded-2xl transition-all"
                      style={{
                        background: isActive ? 'rgba(245,166,35,0.1)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${isActive ? 'rgba(245,166,35,0.25)' : 'rgba(255,255,255,0.05)'}`,
                      }}
                    >
                      <span className="text-2xl font-black uppercase tracking-tight"
                        style={{ color: isActive ? '#f5a623' : '#fff' }}>
                        {link.name}
                      </span>
                      <ChevronRight size={24} style={{ color: isActive ? '#f5a623' : '#475569' }} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTAs */}
            <div className="px-6 pb-10 flex flex-col gap-3 border-t pt-6"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              {user ? (
                <div className="flex flex-col gap-3">
                   <Link 
                    to="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 p-5 rounded-2xl bg-white/5 border border-white/10"
                   >
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-black flex items-center justify-center text-sm font-black uppercase">
                      {user.name ? user.name[0] : user.email[0]}
                    </div>
                    <div>
                      <p className="text-white font-bold">{user.name || 'Student'}</p>
                      <p className="text-slate-500 text-xs">{user.email}</p>
                    </div>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn btn-secondary w-full !text-red-400 !border-red-500/20"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => { setMobileOpen(false); onLoginClick?.(); }}
                  className="btn btn-secondary w-full"
                >
                  <User size={16} />
                  Student Login
                </button>
              )}
              
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <button className="btn btn-primary w-full">
                  Enroll Now — Free Counseling
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
