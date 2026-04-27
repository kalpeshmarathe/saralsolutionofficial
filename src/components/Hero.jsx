import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, BookOpen, Award, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '500+', label: 'Students Placed', icon: <Users size={16} />, color: 'text-amber-400' },
  { value: '15+', label: 'Expert Mentors', icon: <Award size={16} />, color: 'text-amber-500' },
  { value: '5+', label: 'Years of Excellence', icon: <Star size={16} />, color: 'text-amber-300' },
  { value: '5', label: 'Premium Courses', icon: <BookOpen size={16} />, color: 'text-amber-400' },
];

const marqueeItems = [
  'Java Full Stack', 'DSA Mastery', 'MERN Stack', 'Python Full Stack', 'System Design',
  'React.js', 'Spring Boot', 'AWS Deployment', 'Mock Interviews', 'Placement Ready',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] } }),
};

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Placement', 'Career', 'Future', 'Success'];

  useEffect(() => {
    const t = setInterval(() => setCurrentWord(w => (w + 1) % words.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: '#030712' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Glow orbs - Strictly Gold/Amber theme */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] glow-orb animate-glow-pulse pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.12) 0%, transparent 70%)' }} />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] glow-orb animate-glow-pulse pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)', animationDelay: '1.5s' }} />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] glow-orb pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 70%)' }} />

      <div className="container-xl relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            {/* Announcement pill */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold"
              style={{
                background: 'rgba(245,166,35,0.08)',
                border: '1px solid rgba(245,166,35,0.2)',
              }}
            >
              <Zap size={12} className="text-amber-400" fill="currentColor" />
              <span className="text-amber-400">Jalgaon's #1 Tech Education Institute</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={1}>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] mb-6 uppercase tracking-tighter">
                <span className="text-white">Launch Your</span>
                <br />
                <span
                  key={currentWord}
                  className="shimmer-text inline-block"
                  style={{ animation: 'fadeInWord 0.5s ease forwards, shimmer 4s linear infinite' }}
                >
                  {words[currentWord]}
                </span>
                <br />
                <span className="text-white">with Saral</span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl font-medium"
            >
              Master <span className="text-white font-semibold">DSA, Full Stack & System Design</span> through
              India's most student-friendly offline + online hybrid program. Real mentors. Real projects. Real placements.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link to="/courses">
                <button className="btn btn-primary group !px-8 !py-4 shadow-[0_20px_50px_rgba(245,166,35,0.2)]">
                  Explore Courses
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button
                className="btn btn-secondary group"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" 
                     style={{ background: 'rgba(245,166,35,0.12)', border: '1px solid rgba(245,166,35,0.2)' }}>
                  <Play size={13} className="text-amber-400" fill="currentColor" />
                </div>
                See How It Works
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex -space-x-2">
                  {['👨‍💻', '👩‍💻', '🧑‍💻', '👩‍🎓', '👨‍🎓'].map((e, i) => (
                    <div key={i}
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm border-2"
                      style={{ background: '#0c1220', borderColor: 'rgba(245,166,35,0.2)', zIndex: 5 - i }}
                    >
                      {e}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} className="text-amber-400" fill="currentColor" />)}
                  </div>
                  <span className="text-slate-500 text-[11px] font-black uppercase tracking-widest">Trusted by 500+ Students</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden glass-card !p-0"
              style={{
                boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,166,35,0.08)',
              }}
            >
              {/* Header bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Saral Student Hub</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">Live Sync</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Progress section */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-black text-white uppercase tracking-widest">DSA Mastery Track</span>
                    <span className="badge badge-gold">In Progress</span>
                  </div>
                  <div className="progress-bar mb-2">
                    <div className="progress-fill" style={{ width: '68%' }} />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <span>68 / 100 Solved</span>
                    <span className="text-amber-400">68% COMPLETE</span>
                  </div>
                </div>

                {/* Today's modules */}
                <div className="space-y-2 mb-8">
                  <p className="text-[9px] text-slate-500 font-black uppercase tracking-[0.2em] mb-4">Current Curriculum</p>
                  {[
                    { topic: 'Binary Search Patterns', time: '10:00 AM', done: true },
                    { topic: 'Graph BFS & DFS', time: '2:00 PM', done: false },
                    { topic: 'Mock Interview', time: '5:00 PM', done: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 px-4 rounded-xl transition-all"
                      style={{ 
                        background: item.done ? 'rgba(245,166,35,0.08)' : 'rgba(255,255,255,0.02)', 
                        border: `1px solid ${item.done ? 'rgba(245,166,35,0.15)' : 'rgba(255,255,255,0.04)'}` 
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black ${item.done ? 'bg-amber-500 text-black' : 'bg-white/5 text-slate-500'}`}>
                          {item.done ? '✓' : (i + 1)}
                        </div>
                        <span className={`text-xs font-bold ${item.done ? 'text-amber-300' : 'text-slate-300'}`}>{item.topic}</span>
                      </div>
                      <span className="text-[9px] text-slate-500 font-black tracking-widest">{item.time}</span>
                    </div>
                  ))}
                </div>

                {/* Streak */}
                <div className="flex items-center justify-between px-5 py-4 rounded-2xl relative overflow-hidden"
                  style={{ background: 'rgba(245,166,35,0.06)', border: '1px solid rgba(245,166,35,0.15)' }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <p className="text-white font-black text-sm uppercase tracking-tight">🔥 12 Day Streak!</p>
                    <p className="text-slate-400 text-[10px] font-medium mt-0.5">Top 5% of active learners</p>
                  </div>
                  <div className="text-right relative z-10">
                    <div className="text-xl font-black text-amber-400 tracking-tighter">+25 XP</div>
                    <div className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Global Rank</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-5 -right-5 animate-float">
              <div className="px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
                style={{ background: '#030712', border: '1px solid rgba(245,166,35,0.25)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-amber-400">Admissions Open</span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 animate-float-delay">
              <div className="px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2"
                style={{ background: '#030712', border: '1px solid rgba(245,166,35,0.25)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
              >
                <Star size={12} className="text-amber-400" fill="currentColor" />
                <span className="text-amber-400">High-Performance Lab</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="stat-card group">
              <div className={`flex justify-center mb-2 transition-transform group-hover:scale-110 ${s.color}`}>{s.icon}</div>
              <div className={`text-3xl font-black mb-1 ${s.color} tracking-tighter`}>{s.value}</div>
              <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee ribbon */}
      <div className="relative overflow-hidden py-5 border-y" style={{ borderColor: 'rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.015)' }}>
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #030712, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #030712, transparent)' }} />
        <div className="animate-marquee flex gap-0 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-8 text-slate-600 text-[11px] font-black uppercase tracking-widest">
              <span className="w-1 h-1 rounded-full bg-amber-500/40" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 cursor-pointer hidden md:flex"
        onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-black tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={14} />
      </motion.div>

      <style>{`
        @keyframes fadeInWord {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
