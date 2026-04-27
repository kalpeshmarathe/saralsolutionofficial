import React from 'react';
import DsaSheet from '../components/DsaSheet';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const DsaSheetPage = () => {
  return (
    <div style={{ background: '#030712', minHeight: '100vh' }}>

      {/* Hero */}
      <div className="relative pt-40 pb-24 overflow-hidden border-b" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
        {/* Background Decorative */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle at top right, rgba(245,166,35,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex justify-center mb-6">
              <span className="section-label">⚡ DSA Mastery Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Crack Every <span className="gradient-text">Algorithm</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
              150+ curated problems from real FAANG interviews — organized by pattern, difficulty, and topic. Track your progress. Build your streak.
            </p>

            {/* Quick stat pills */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: <Target size={14} />, label: '150+ Problems', color: '#f5a623' },
                { icon: <Zap size={14} />, label: 'Pattern-wise', color: '#e8950f' },
                { icon: <Trophy size={14} />, label: 'FAANG Grade', color: '#ffd166' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}30`, color: item.color }}>
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* DSA Sheet Component */}
      <DsaSheet />

      {/* Offline batch CTA */}
      <div className="container-xl pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 md:p-20 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(8,15,30,0.95) 100%)',
            border: '1px solid rgba(245,166,35,0.2)',
          }}
        >
          {/* Decorative glow */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.25)' }}>
                <Trophy size={26} className="text-amber-400" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-5 uppercase tracking-tighter leading-tight">
                Master DSA <br />In-Person at <span className="gradient-text">Jalgaon</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Join our offline DSA batch for live problem-solving, peer coding, 1-on-1 doubt clearing, and mock interviews from experienced mentors.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link to="/contact">
                <button className="btn btn-primary group !text-base !px-10 !py-5 shadow-2xl shadow-amber-500/10">
                  Register for Offline Batch
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DsaSheetPage;
