import React from 'react';
import DsaSheet from '../components/DsaSheet';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';

const DsaSheetPage = () => {
  return (
    <div className="bg-[#020617] min-h-screen">
      <div className="relative pt-48 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block mb-4">Master Algorithms</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              The <span className="gradient-text">Algorithm Hub</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              100+ curated problems from FAANG interviews. Master every pattern, track your progress, and join the elite engineers.
            </p>
          </motion.div>
        </div>
      </div>

      <DsaSheet />

      <div className="container mx-auto px-6 pb-32">
        <div className="glass-card !p-12 md:!p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px]"></div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500 mb-8">
                <Trophy size={32} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Master DSA In-Person</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Get daily live problem-solving sessions, peer programming, and 1-on-1 doubt clearing from ex-FAANG mentors at our offline center.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <button className="btn btn-primary !px-12 !py-5 group">
                Register for Offline Batch
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DsaSheetPage;
