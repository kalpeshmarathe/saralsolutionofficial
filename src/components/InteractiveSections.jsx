import React, { useState, useEffect } from 'react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Choose Course", desc: "Select from our specialized FAANG-grade programs tailored for your goals." },
    { num: "02", title: "Attend Demo", desc: "Experience our high-energy teaching methodology with a live interactive demo." },
    { num: "03", title: "Learn & Build", desc: "Intensive training with daily classes, doubt sessions, and real-world projects." },
    { num: "04", title: "Get Placed", desc: "Unlock premium referrals and master your interviews with our placement cell." },
  ];
  return (
    <section id="how-it-works" className="section-padding bg-slate-950 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-amber-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block mb-4">Our Methodology</span>
          <h2 className="text-4xl md:text-6xl mb-6">A Structured Path to <br /><span className="gradient-text">Engineering Mastery</span></h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="text-8xl font-display font-black text-white opacity-5 absolute -top-10 -left-4 group-hover:opacity-10 transition-opacity">
                {s.num}
              </div>
              <div className="pt-10">
                <CheckCircle2 className="text-amber-500 mb-6" size={32} />
                <h4 className="text-2xl mb-4 text-white group-hover:text-amber-500 transition-colors">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Faq = () => {
  const [active, setActive] = useState(null);
  const faqs = [
    { q: "Is this course for absolute beginners?", a: "Yes, our programs are architected to take you from absolute zero to advanced system architecture. We cover everything from syntax to scale." },
    { q: "Do you provide offline classes in Delhi?", a: "Absolutely. We have high-tech offline centers in Laxmi Nagar and Noida designed for collaborative learning." },
    { q: "What kind of placement support do I get?", a: "We provide complete placement support including resume workshops, mock interviews with FAANG mentors, and referrals to our network of partner firms." },
    { q: "Can I switch between online and offline?", a: "Yes, we offer a hybrid model that allows you to attend classes as per your convenience without missing any lectures." }
  ];
  return (
    <section id="faq" className="section-padding bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block mb-4">Support</span>
          <h2 className="text-4xl md:text-5xl mb-6">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-500/30">
              <button 
                className="w-full flex items-center justify-between p-6 text-left" 
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="text-lg font-bold text-white tracking-tight">{f.q}</span>
                <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${active === i ? 'rotate-180 bg-amber-500 text-black' : 'text-slate-500'}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <motion.div 
                initial={false}
                animate={{ height: active === i ? 'auto' : 0, opacity: active === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                  {f.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { HowItWorks, Faq };
