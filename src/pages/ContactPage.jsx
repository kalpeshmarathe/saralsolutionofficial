import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactPage = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-[#030712] min-h-screen pt-20">
      {/* Page Header */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(ellipse, rgba(245,166,35,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        
        <div className="container-xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <span className="section-label">📍 Support & Admissions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Have questions about our programs or career roadmap? Our expert counselors are here to help you navigate your journey.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-xl py-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
                <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Contact Information</h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Reach out to us via any of the following channels. We're here to assist you with admissions, technical doubts, or career guidance.
                </p>
            </div>

            <div className="space-y-4">
                {[
                    { icon: <Phone size={22} />, title: "Call Us", detail: "+91 8080068554", color: "text-amber-400", bg: "rgba(245,166,35,0.12)" },
                    { icon: <Mail size={22} />, title: "Email Us", detail: "contact@saralsolutions.com", color: "text-amber-300", bg: "rgba(245,166,35,0.08)" },
                    { icon: <MapPin size={22} />, title: "Visit Center", detail: "Vitthal Shopping Complex, Ramanand Nagar Rd, near Naivedya Hotel, Jalgaon, 425002", color: "text-amber-500", bg: "rgba(245,166,35,0.15)" }
                ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card flex items-center gap-5 group hover:border-amber-500/30 transition-all cursor-default"
                    >
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                             style={{ background: item.bg, border: `1px solid ${item.color}25`, color: item.color }}>
                            {item.icon}
                        </div>
                        <div>
                            <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.title}</div>
                            <div className="text-white font-bold tracking-tight">{item.detail}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="glass-card border-amber-500/20 bg-amber-500/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
                <h4 className="text-amber-400 font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2 relative z-10">
                    <Clock size={14} /> Counseling Hours
                </h4>
                <div className="space-y-3 text-slate-300 text-sm relative z-10">
                    <div className="flex justify-between items-center pb-2 border-b border-white/5">
                      <span>Monday - Friday</span>
                      <span className="font-bold text-white">10:00 AM - 08:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Saturday - Sunday</span>
                      <span className="font-bold text-white">11:00 AM - 05:00 PM</span>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card !p-10 md:!p-16 relative overflow-hidden"
            >
                {/* Glow behind form */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none opacity-50"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white mb-8 uppercase tracking-tighter">Admission Inquiry</h2>
                    
                    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                            <input 
                                required
                                type="text" 
                                placeholder="Enter your name" 
                                className="input-field"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                            <input 
                                required
                                type="email" 
                                placeholder="your@email.com" 
                                className="input-field"
                            />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Program of Interest</label>
                            <div className="relative">
                              <select className="input-field appearance-none cursor-pointer">
                                  <option className="bg-slate-900">Placement Ready DSA</option>
                                  <option className="bg-slate-900">Java Full Stack Development</option>
                                  <option className="bg-slate-900">MERN Stack Bootcamp</option>
                                  <option className="bg-slate-900">Python Full Stack</option>
                                  <option className="bg-slate-900">Programming Essentials</option>
                              </select>
                              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                <ArrowRight size={16} className="rotate-90" />
                              </div>
                            </div>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Your Message</label>
                            <textarea 
                                required
                                rows="5" 
                                placeholder="How can we help you?" 
                                className="input-field resize-none"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 pt-4">
                            <button 
                              disabled={formState === 'sending'}
                              type="submit" 
                              className="btn btn-primary w-full !py-4.5 group"
                            >
                                {formState === 'idle' && (
                                  <>
                                    SUBMIT INQUIRY 
                                    <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                  </>
                                )}
                                {formState === 'sending' && (
                                  <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                    SENDING...
                                  </div>
                                )}
                                {formState === 'success' && (
                                  <div className="flex items-center gap-3">
                                    <CheckCircle2 size={18} />
                                    INQUIRY SENT SUCCESSFULLY
                                  </div>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Trust Badge Section */}
      <div className="container-xl pb-24">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 py-12 border-y border-white/5 opacity-50">
            <div className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-[10px]">
                <Globe size={16} className="text-amber-500/70" /> Hybrid Learning Presence
            </div>
            <div className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-[10px]">
                <MessageSquare size={16} className="text-amber-500/70" /> 24/7 Priority Support
            </div>
            <div className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-[10px]">
                <ShieldCheck size={16} className="text-amber-500/70" /> Verified Admissions
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
