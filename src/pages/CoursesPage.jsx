import React from 'react';
import Courses from '../components/Courses';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  return (
    <div style={{ background: '#030712', minHeight: '100vh' }}>

      {/* Hero section */}
      <div className="relative pt-40 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(245,166,35,0.1) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="container-xl relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex justify-center mb-6">
              <span className="section-label">🎓 All Courses</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Find Your Perfect <br />
              <span className="gradient-text">Learning Path</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              From beginner to placement-ready — every course is designed by industry experts for maximum career impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Courses list */}
      <Courses />

      {/* Counseling CTA */}
      <div className="container-xl pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(8,15,30,0.95) 100%)',
            border: '1px solid rgba(245,166,35,0.15)',
          }}
        >
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(245,166,35,0.1)', border: '1px solid rgba(245,166,35,0.2)' }}>
                  <MessageCircle size={22} className="text-amber-400" />
                </div>
                <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">Free Counseling</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Not sure which course <br />is right for you?
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Book a free 30-minute session with our mentors. We'll understand your goals and map the perfect roadmap for your career.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <Link to="/contact">
                <button className="btn btn-primary group">
                  Book Free Session
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a href="tel:+918080068554">
                <button className="btn btn-secondary">
                  Call Us Now
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesPage;
