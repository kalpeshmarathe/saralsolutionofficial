import React from 'react';
import { motion } from 'framer-motion';
import { MonitorPlay, Zap, Code, Briefcase, Cpu, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <MonitorPlay size={28} />,
    title: 'Offline + Online',
    desc: 'High-energy classroom in Jalgaon. Also attend from home via live streaming with session recordings.',
    color: '#3b82f6',
    emoji: '🖥️',
  },
  {
    icon: <Zap size={28} />,
    title: 'Daily Live Classes',
    desc: 'No pre-recorded content only. Every session is live with interactive doubt-solving in real time.',
    color: '#f5a623',
    emoji: '⚡',
  },
  {
    icon: <Code size={28} />,
    title: 'FAANG-Grade Curriculum',
    desc: 'Our syllabus is built by engineers from top product companies, updated every quarter.',
    color: '#22c55e',
    emoji: '🧑‍💻',
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Placement Cell',
    desc: 'Dedicated corporate relations team for referrals, resume reviews & mock interviews.',
    color: '#a855f7',
    emoji: '💼',
  },
  {
    icon: <Cpu size={28} />,
    title: 'System Design',
    desc: 'HLD & LLD mastery that separates SDE-1 from SDE-2. Crucial for senior roles.',
    color: '#ef4444',
    emoji: '🏗️',
  },
  {
    icon: <Trophy size={28} />,
    title: 'Streak & Gamification',
    desc: 'Stay motivated with daily streaks, XP points, leaderboards, and achievement badges.',
    color: '#f5a623',
    emoji: '🏆',
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #060d1c 50%, #030712 100%)' }}>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse, rgba(245,166,35,0.15) 0%, transparent 70%)' }} />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mb-5">
              <span className="section-label">⚡ Why Saral</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-black">
              Built for Students,<br /><span className="gradient-text">Not Just Credentials</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }} className="text-slate-400 text-lg leading-relaxed">
            We obsess over student outcomes — not just teaching. Every feature, session, and interaction is designed
            to maximise your learning speed and confidence.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="feature-card group"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top left, ${f.color}08 0%, transparent 60%)` }} />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${f.color}12`, border: `1px solid ${f.color}20`, color: f.color }}>
                {f.icon}
              </div>

              {/* Text */}
              <h4 className="text-xl font-black text-white mb-3 relative z-10 group-hover:text-amber-300 transition-colors">
                {f.emoji} {f.title}
              </h4>
              <p className="text-slate-400 leading-relaxed text-sm relative z-10">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Marquee = () => {
  const brands = ["Google", "Amazon", "Microsoft", "Flipkart", "Uber", "Adobe", "Meta", "Netflix", "Apple", "Goldman Sachs", "Infosys", "TCS"];
  return (
    <div className="py-10 border-y overflow-hidden relative" style={{ borderColor: 'rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.01)' }}>
      <div className="absolute inset-y-0 left-0 w-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(90deg, #030712, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(-90deg, #030712, transparent)' }} />
      <div className="animate-marquee flex gap-0 whitespace-nowrap">
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-10 text-slate-600 text-sm font-bold uppercase tracking-wider hover:text-amber-500 transition-colors cursor-default">
            <span className="w-1 h-1 rounded-full bg-amber-500/40" />
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export { WhyUs, Marquee };
