import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      emoji: '🎯',
      title: 'Pick Your Goal',
      desc: 'Choose a course that matches your ambition — from beginner to advanced. Our counselors help you decide.',
      color: '#f5a623',
    },
    {
      num: '02',
      emoji: '🧑‍🏫',
      title: 'Attend a Free Demo',
      desc: 'Experience our teaching live. See the classroom, meet the mentor, and feel the energy before committing.',
      color: '#3b82f6',
    },
    {
      num: '03',
      emoji: '🔥',
      title: 'Learn & Build Daily',
      desc: 'Daily live sessions, doubt clearing, real projects, and streak-based learning that keeps you motivated.',
      color: '#22c55e',
    },
    {
      num: '04',
      emoji: '🚀',
      title: 'Get Placed',
      desc: 'Our dedicated placement cell connects you to top companies with resume prep, mock interviews & referrals.',
      color: '#a855f7',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #060d1c 0%, #030712 100%)' }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex justify-center mb-5">
            <span className="section-label">📍 The Journey</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-black mb-4">
            Your Path from <span className="gradient-text">Zero to Placed</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="text-slate-400 text-lg">
            A proven 4-step framework that has launched hundreds of careers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px z-0"
                  style={{ background: `linear-gradient(90deg, ${s.color}40, transparent)`, transform: 'translateX(-50%)' }} />
              )}

              <div className="feature-card relative z-10 h-full">
                {/* Step number */}
                <div className="text-7xl font-black font-mono absolute top-4 right-5 opacity-[0.06] select-none pointer-events-none"
                  style={{ color: s.color }}>
                  {s.num}
                </div>

                {/* Icon circle */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 relative z-10"
                  style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                  {s.emoji}
                </div>

                {/* Step indicator */}
                <div className="text-xs font-black uppercase tracking-widest mb-3 flex items-center gap-2"
                  style={{ color: s.color }}>
                  <span className="w-4 h-0.5 rounded" style={{ background: s.color }} />
                  Step {s.num}
                </div>

                <h4 className="text-xl font-black text-white mb-3">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex justify-center mt-16">
          <Link to="/contact">
            <button className="btn btn-primary group">
              Start Your Journey Today
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const faqs = [
  {
    q: "Is this suitable for absolute beginners with no coding experience?",
    a: "Absolutely! Our Programming Essentials course starts from scratch — no prior experience needed. We cover logic building, syntax, and problem-solving fundamentals before moving to advanced topics.",
  },
  {
    q: "Do you offer offline classes in Jalgaon?",
    a: "Yes! We are based in Jalgaon, Maharashtra, and offer high-quality offline classes at our centre. We also provide a hybrid model so you never miss a class.",
  },
  {
    q: "What kind of placement support will I get?",
    a: "Our dedicated placement cell offers resume building, mock interviews with industry mentors, and direct referrals to our hiring partner network.",
  },
  {
    q: "Can I attend a free demo class before enrolling?",
    a: "Yes, we always recommend attending a free demo session first. It's the best way to experience our teaching style and connect with our mentors.",
  },
  {
    q: "Are the courses available online too?",
    a: "Yes, we offer both offline and online (live) modes. All sessions are recorded so you can revise anytime. You choose what works best for you.",
  },
  {
    q: "What is the EMI or payment option available?",
    a: "We offer flexible payment options including EMI plans. Our counselors will help you find the best payment structure based on your situation.",
  },
];

const Faq = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="section-padding" style={{ background: '#030712' }}>
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="section-label mb-6 inline-flex">❓ FAQs</span>
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              Common Questions,<br /><span className="gradient-text">Honest Answers</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              We believe in full transparency. Here are the questions students ask us most.
            </p>

            {/* Contact CTA card */}
            <div className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg, rgba(245,166,35,0.08), rgba(245,166,35,0.02))', border: '1px solid rgba(245,166,35,0.15)' }}>
              <p className="text-white font-bold mb-1">Still have questions?</p>
              <p className="text-slate-400 text-sm mb-4">Talk directly to our counselors — we reply within 2 hours.</p>
              <Link to="/contact">
                <button className="btn btn-primary text-sm !px-5 !py-3 group">
                  Chat With Us
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: active === i ? 'rgba(15,23,42,0.8)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${active === i ? 'rgba(245,166,35,0.25)' : 'rgba(255,255,255,0.05)'}`,
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left gap-4"
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <span className="font-bold text-white text-base leading-snug">{f.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${active === i ? 'bg-amber-500 text-black' : 'bg-white/5 text-slate-400'}`}>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t text-slate-400 leading-relaxed text-sm pt-4"
                        style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { HowItWorks, Faq };
