import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="bg-[#020617] min-h-screen">
      {/* Page Header */}
      <div className="relative pt-48 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block mb-4">Support & Admissions</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Have questions about our programs or career roadmap? Our expert counselors are here to help you navigate your journey.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-6">Contact Information</h2>
                <p className="text-slate-400 leading-relaxed">Reach out to us via any of the following channels or visit our high-tech centers in Delhi NCR.</p>
            </div>

            <div className="space-y-6">
                {[
                    { icon: <Phone size={24} />, title: "Call Us", detail: "+91 88307 51806", color: "text-amber-500", bg: "bg-amber-500/10" },
                    { icon: <Mail size={24} />, title: "Email Us", detail: "admissions@saralsolutions.in", color: "text-blue-500", bg: "bg-blue-500/10" },
                    { icon: <MapPin size={24} />, title: "Visit Center", detail: "Laxmi Nagar, Delhi | Sector 62, Noida", color: "text-green-500", bg: "bg-green-500/10" }
                ].map((item, i) => (
                    <div key={i} className="glass-card !p-6 flex items-center gap-6 group hover:border-amber-500/30 transition-all">
                        <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                            {item.icon}
                        </div>
                        <div>
                            <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">{item.title}</div>
                            <div className="text-white font-bold tracking-tight">{item.detail}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass-card !p-8 border-amber-500/20 bg-amber-500/5">
                <h4 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                    <Clock size={14} /> Counseling Hours
                </h4>
                <div className="space-y-2 text-slate-300 text-sm">
                    <div className="flex justify-between"><span>Monday - Friday</span><span className="font-bold">10:00 AM - 08:00 PM</span></div>
                    <div className="flex justify-between"><span>Saturday - Sunday</span><span className="font-bold">11:00 AM - 05:00 PM</span></div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card !p-10 md:!p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px]"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">Admission Inquiry</h2>
                    <form className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-amber-500 focus:bg-white/10 transition-all outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="your@email.com" 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-amber-500 focus:bg-white/10 transition-all outline-none"
                            />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Program of Interest</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-amber-500 focus:bg-white/10 transition-all outline-none appearance-none">
                                <option className="bg-slate-900">Placement Ready DSA</option>
                                <option className="bg-slate-900">Java Full Stack Development</option>
                                <option className="bg-slate-900">MERN Stack Bootcamp</option>
                                <option className="bg-slate-900">Python Full Stack</option>
                                <option className="bg-slate-900">Programming Essentials</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-1">Your Message</label>
                            <textarea 
                                rows="5" 
                                placeholder="How can we help you?" 
                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:border-amber-500 focus:bg-white/10 transition-all outline-none resize-none"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 pt-4">
                            <button type="submit" className="btn btn-primary w-full !py-5 shadow-[0_20px_50px_rgba(245,158,11,0.2)] group">
                                SUBMIT INQUIRY 
                                <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trust Badge Section */}
      <div className="container mx-auto px-6 pb-24">
        <div className="flex flex-wrap justify-center items-center gap-12 py-12 border-y border-white/5 opacity-50 grayscale">
            <div className="flex items-center gap-2 text-white font-black tracking-widest uppercase text-xs">
                <Globe size={16} className="text-blue-500" /> Multi-Center Presence
            </div>
            <div className="flex items-center gap-2 text-white font-black tracking-widest uppercase text-xs">
                <MessageSquare size={16} className="text-green-500" /> 24/7 Priority Support
            </div>
            <div className="flex items-center gap-2 text-white font-black tracking-widest uppercase text-xs">
                <ShieldCheck size={16} className="text-amber-500" /> Verified Admissions
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
