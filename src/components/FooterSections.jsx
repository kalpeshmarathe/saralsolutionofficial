import React from 'react';
import { FileText, Map, HelpCircle, Video, Youtube, Instagram, Linkedin, Twitter, ArrowRight, Flame, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const cards = [
    { icon: <FileText className="text-amber-500" />, title: "DSA Ultimate Sheet", desc: "Comprehensive FAANG Problems with solutions", action: "Download Guide" },
    { icon: <Map className="text-blue-500" />, title: "Developer Roadmap", desc: "Complete Full Stack Architecture Guide", action: "Access Now" },
    { icon: <HelpCircle className="text-green-500" />, title: "Interview Vault", desc: "Top SDE Questions from recent interviews", action: "Explore Now" },
    { icon: <Video className="text-purple-500" />, title: "System Design", desc: "Free Primer Series on Scalable Architectures", action: "Watch Series" }
  ];
  return (
    <section id="resources" className="section-padding bg-[#020617]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block mb-4">Free Knowledge Base</span>
          <h2 className="text-4xl md:text-5xl mb-6">Level Up for <span className="text-amber-500">Free</span></h2>
          <p className="text-slate-400">Access our premium curated resources and roadmap guides at zero cost.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="glass-card flex flex-col group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500">
                {c.icon}
              </div>
              <h4 className="text-xl mb-4 text-white group-hover:text-amber-500 transition-colors">{c.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">{c.desc}</p>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-500 hover:text-white transition-colors group/btn">
                {c.action}
                <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
    return (
        <section id="blog" className="section-padding bg-slate-950">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block mb-4">Industry Insights</span>
                        <h2 className="text-4xl md:text-5xl">From Our <span className="gradient-text">Engineering Blog</span></h2>
                    </div>
                    <button className="btn btn-outline !px-6 !py-3 !text-xs">VIEW ALL ARTICLES</button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="group cursor-pointer">
                            <div className="relative h-64 rounded-3xl overflow-hidden mb-8">
                                <img 
                                    src={`https://images.unsplash.com/photo-${1516116216624 + i}-5ed584c7a9c1?auto=format&fit=crop&w=600&q=80`} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                    alt="Blog Post"
                                />
                                <div className="absolute top-6 right-6 px-4 py-1 bg-amber-500 rounded-full text-[10px] font-black text-black">TECH GUIDE</div>
                            </div>
                            <div>
                                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">April {25-i}, 2025</span>
                                <h4 className="text-2xl mt-4 mb-4 text-white group-hover:text-amber-500 transition-colors tracking-tight leading-tight">Architecting for Scale: What SDE Interviews demand in 2025</h4>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">Learn the critical system design patterns that major tech giants are looking for during their architecture rounds...</p>
                                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                    Read Article <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CtaBanner = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="relative rounded-[3rem] overflow-hidden bg-amber-500 p-12 md:p-24 group">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full translate-y-1/2 -translate-x-1/4 blur-[60px]"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-7xl font-black text-black mb-8 leading-[1.1] tracking-tighter">
                Ready to transform <br />your engineering career?
            </h2>
            <p className="text-black/70 text-lg md:text-xl font-medium mb-12 max-w-2xl">
                Limited seats available for the upcoming Summer Batch. Secure your future with the best mentors in the industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
                <button className="btn !bg-black !text-white !px-12 !py-5 hover:!bg-slate-900 shadow-2xl">
                    Join June Admission Batch
                </button>
                <button className="btn !border-2 !border-black !text-black hover:!bg-black/5 !px-10">
                    TALK TO COUNSELOR
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#01040f] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="bg-amber-500 p-2 rounded-xl">
                <Flame size={20} color="#000" fill="#000" />
              </div>
              <span className="font-display font-black text-xl tracking-tighter text-white">
                SARAL <span className="text-amber-500">SOLUTIONS</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-10">
              The premium institute for modern programming, distributed systems architecture, and elite SDE placement success in India.
            </p>
            <div className="flex gap-4">
                {[Youtube, Instagram, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all">
                        <Icon size={18} />
                    </a>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                <div>
                    <h5 className="text-white font-black uppercase tracking-widest text-xs mb-8">Specializations</h5>
                    <ul className="space-y-4">
                        {['DSA Mastery', 'Full Stack Development', 'MERN Bootcamp', 'System Design'].map(item => (
                            <li key={item}><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">{item}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5 className="text-white font-black uppercase tracking-widest text-xs mb-8">Company</h5>
                    <ul className="space-y-4">
                        {['About Academy', 'Student Portal', 'Placement Cell', 'Privacy Policy'].map(item => (
                            <li key={item}><a href="#" className="text-slate-400 hover:text-amber-500 text-sm transition-colors">{item}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h5 className="text-white font-black uppercase tracking-widest text-xs mb-8">Contact Us</h5>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-3 text-sm text-slate-400">
                            <MapPin size={18} className="text-amber-500 shrink-0" />
                            Laxmi Nagar, Delhi 110092<br />Noida Sector 62, UP
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-400">
                            <Mail size={18} className="text-amber-500" />
                            admissions@saralsolutions.in
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-400">
                            <Phone size={18} className="text-amber-500" />
                            +91 8830751806
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
            © 2025 Saral Solutions Academy. Developed for Engineering Excellence.
          </p>
          <div className="flex gap-10">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-[10px] font-black uppercase tracking-widest transition-colors">Cookie Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-[10px] font-black uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Resources, Blog, CtaBanner, Footer };
