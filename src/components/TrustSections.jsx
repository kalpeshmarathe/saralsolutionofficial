import React from 'react';
import { ShieldCheck, MonitorPlay, Zap, Code, Briefcase, Users, Cpu, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const brands = ["Google", "Amazon", "Microsoft", "Flipkart", "Uber", "Adobe", "Meta", "Netflix", "Apple", "Goldman Sachs"];
  return (
    <div className="py-12 bg-slate-950 border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center gap-3 px-12 text-slate-500 font-display font-black text-2xl tracking-tighter hover:text-amber-500 transition-colors cursor-default grayscale hover:grayscale-0">
            <div className="w-2 h-2 rounded-full bg-amber-500/30"></div>
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyUs = () => {
  const features = [
    { icon: <MonitorPlay size={32} />, title: "Offline experience", desc: "Learn in a high-energy classroom environment with zero distractions.", color: "text-blue-500" },
    { icon: <Zap size={32} />, title: "Live + Recorded", desc: "Never miss a single class with our dual-mode learning technology.", color: "text-amber-500" },
    { icon: <Code size={32} />, title: "FAANG Curriculum", desc: "Our syllabus is architected by engineers from top tier product firms.", color: "text-green-500" },
    { icon: <Briefcase size={32} />, title: "Placements", desc: "Dedicated corporate cell for direct referrals & mock interview prep.", color: "text-purple-500" },
    { icon: <Cpu size={32} />, title: "System Design", desc: "Master HLD and LLD concepts that matter for senior roles.", color: "text-red-500" },
    { icon: <Trophy size={32} />, title: "Industry Mentors", desc: "Get mentored by engineering leads from top-tier technology firms.", color: "text-orange-500" },
  ];

  return (
    <section id="why-us" className="section-padding bg-[#020617] relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block mb-4">The Saral Advantage</span>
            <h2 className="text-4xl md:text-6xl mb-6">Why Professionals <br />Choose <span className="gradient-text">Saral Solutions</span></h2>
          </div>
          <p className="text-slate-400 max-w-sm mb-2">We provide an ecosystem that doesn't just teach technology—it breeds excellence and engineering discipline.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className="glass-card group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`${f.color} mb-8 transform group-hover:scale-110 transition-transform duration-500`}>
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-white mb-4 tracking-tight group-hover:text-amber-500 transition-colors">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Marquee, WhyUs };
