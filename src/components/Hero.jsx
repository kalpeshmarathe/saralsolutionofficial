import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-amber-500 text-xs font-bold tracking-widest uppercase mb-8">
              <Star size={14} fill="currentColor" />
              Elite Tech Education
            </div>
            
            <h1 className="text-6xl md:text-8xl leading-tight mb-8">
              Build Your <br />
              <span className="gradient-text">Elite Career</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 font-medium leading-relaxed">
              Master DSA, Full Stack, and System Design with India's premium tech institution. 
              We don't just teach code; we architect futures through engineering discipline.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <button className="btn btn-primary group">
                Start Your Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="btn btn-outline gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={16} fill="white" />
                </div>
                Watch Showreel
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative z-20 glass-card !p-2 !rounded-[2.5rem] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                alt="Saral Solutions Classroom" 
                className="w-full h-full object-cover rounded-[2.3rem] grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Decorative background shape */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
