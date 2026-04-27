import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const partners = [
  { name: 'Balwishwa Vidyalay', logo: '/partners/Balwishwa vidyalay.jfif.jpeg' },
  { name: "Banjo's", logo: '/partners/banjos.png' },
  { name: 'Browletto', logo: '/partners/browletto.jfif.jpeg' },
  { name: 'Finlegia', logo: '/partners/finlegia.jfif.jpeg' },
  { name: 'Hotel Khandesh Wada', logo: '/partners/hotelkhandeshwada.jfif.jpeg' },
  { name: 'Lapinozz Jalgaon', logo: '/partners/lapinozz jalgaon.png' },
  { name: 'Poshakh', logo: '/partners/poshakh.jfif.jpeg' },
  { name: 'Thick Shake Therapy', logo: '/partners/thichshaketherapy.jfif.jpeg' },
];

// Duplicate for seamless infinity scroll
const allPartners = [...partners, ...partners];

const testimonials = [
  {
    quote: "Saral Solution completely transformed our digital presence. Our online reservations increased by 340% within three months of their targeted social campaigns. The team genuinely understands how to drive real ROI for local businesses.",
    name: 'Pramod ',
    role: 'Owner',
    company: "Hotel Khandesh Wada",
    avatar: '🏨',
    rating: 5,
    division: 'Agency',
    divisionColor: 'text-amber-400 bg-amber-400/10 border-amber-400/25',
  },
  {
    quote: "The SaaS automation tools they built for our boutique eliminated hours of manual work. Order tracking, customer follow-ups, inventory alerts — everything runs on its own now. Truly game-changing infrastructure.",
    name: 'Shruti Patil',
    role: 'Co-Founder',
    company: 'Poshakh Fashion',
    avatar: '👗',
    rating: 5,
    division: 'SaaS',
    divisionColor: 'text-amber-300 bg-amber-300/10 border-amber-300/25',
  },
  {
    quote: "We enrolled our entire faculty in Saral's digital upskilling workshop. The quality rivalled anything you'd get in Pune or Mumbai — right here in Jalgaon. Our team\'s capabilities improved dramatically.",
    name: 'Vijay Chaudhari',
    role: 'Director',
    company: 'Balwishwa Vidyalay',
    avatar: '🎓',
    rating: 5,
    division: 'Education',
    divisionColor: 'text-amber-500 bg-amber-500/10 border-amber-500/25',
  },
  {
    quote: "From logo design to our Instagram strategy, Saral's agency team handled everything with a level of professionalism you rarely see. Our brand went from unknown to Jalgaon's most talked-about brow studio.",
    name: 'Meera Joshi',
    role: 'Founder',
    company: 'Browletto',
    avatar: '✨',
    rating: 5,
    division: 'Agency',
    divisionColor: 'text-amber-400 bg-amber-400/10 border-amber-400/25',
  },
];

const SocialProof = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section id="social-proof" className="py-28 relative overflow-hidden bg-[#030712]">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex justify-center mb-5">
            <span className="section-label">💎 Testimonials</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white">
            Loved by <span className="gradient-text">Hundreds</span>
          </motion.h2>
        </div>

        {/* ---- Testimonials Slider ---- */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl border border-white/5 p-8 md:p-12 relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.15) 0%, transparent 70%)' }} />

                {/* Quote icon */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" 
                     style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)' }}>
                  <Quote size={22} className="text-amber-400" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium mb-8 relative z-10">
                  "{t.quote}"
                </p>

                {/* Author + Division */}
                <div className="flex items-center justify-between flex-wrap gap-4 border-t border-white/5 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">{t.name}</p>
                      <p className="text-slate-500 text-sm">{t.role}, {t.company}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${t.divisionColor}`}>
                    {t.division}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${i === active ? 'bg-amber-400 w-6 h-2' : 'bg-white/10 w-2 h-2 hover:bg-white/20'}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/5 border border-white/10 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/5 border border-white/10 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
