import React from 'react';
import Courses from '../components/Courses';
import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle } from 'lucide-react';

const CoursesPage = () => {
  return (
    <div className="bg-[#020617] min-h-screen">
      <div className="relative pt-48 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block mb-4">Elite Education</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Master Your <span className="gradient-text">Tech Career</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              From absolute basics to advanced distributed systems. Choose your specialized roadmap to join the world's elite technology firms.
            </p>
          </motion.div>
        </div>
      </div>

      <Courses />

      <div className="container mx-auto px-6 pb-32">
        <div className="glass-card !p-12 md:!p-20 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-amber-500/5 transition-colors"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center text-amber-500 mx-auto mb-10">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Confused about which <br />roadway to pick?</h2>
            <p className="text-slate-400 text-lg mb-12">Schedule a free 1-on-1 career counseling session with our FAANG mentors to find your perfect fit.</p>
            <button className="btn btn-primary group">
              Book Free Counseling
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
