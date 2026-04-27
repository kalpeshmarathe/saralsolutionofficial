import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Youtube, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaBanner = () => {
  return (
    <section className="section-padding" style={{ background: '#030712' }}>
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-12 md:p-20 text-center"
          style={{
            background: 'linear-gradient(135deg, #f5a623 0%, #e8950f 50%, #c47d0e 100%)',
            boxShadow: '0 40px 100px rgba(245,166,35,0.3)',
          }}
        >
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.3), transparent)' }} />

          <div className="relative z-10">
            <span className="inline-block text-black/60 text-xs font-black uppercase tracking-widest mb-5">
              🎓 Limited Seats Available
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 leading-tight">
              Ready to Build Your<br />Dream Tech Career?
            </h2>
            <p className="text-black/70 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
              Join Jalgaon's most successful tech education program. Summer batch starting soon — seats fill fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="btn !bg-black !text-white hover:!bg-slate-900 !px-10 !py-4 group shadow-2xl"
                  style={{ borderRadius: '0.875rem' }}>
                  Enroll in Summer Batch
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn !border-2 !border-black/30 !text-black hover:!bg-black/10 !px-10 !py-4"
                  style={{ borderRadius: '0.875rem' }}>
                  Book Free Counseling
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Blog = () => {
  const posts = [
    {
      tag: 'DSA Guide',
      date: 'April 20, 2026',
      title: 'Top 10 DP Patterns Every SDE Interview Candidate Must Know',
      desc: 'Dynamic programming becomes simple when you learn patterns. We break down the 10 most tested DP patterns in FAANG interviews.',
      img: 'https://images.unsplash.com/photo-1516116216624-5ed584c7a9c1?auto=format&fit=crop&w=600&q=80',
      color: '#f5a623',
    },
    {
      tag: 'Career Tips',
      date: 'April 15, 2026',
      title: 'How to Crack Your First Developer Interview as a Fresher',
      desc: 'A step-by-step roadmap for freshers — from resume writing to final offer negotiation. Real advice from our placement mentors.',
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
      color: '#3b82f6',
    },
    {
      tag: 'System Design',
      date: 'April 10, 2026',
      title: 'Designing a Scalable URL Shortener — A Full HLD Walkthrough',
      desc: 'System design demystified. Learn how to design production-grade systems with the exact framework our mentors use.',
      img: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80',
      color: '#22c55e',
    },
  ];

  return (
    <section id="blog" className="section-padding"
      style={{ background: 'linear-gradient(180deg, #060d1c 0%, #030712 100%)' }}>
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="section-label mb-5 inline-flex">📚 Resources</span>
            <h2 className="text-4xl md:text-5xl font-black">
              Learn for <span className="gradient-text">Free, First</span>
            </h2>
          </div>
          <button className="btn btn-outline self-start md:self-end">
            View All Articles
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-52 rounded-2xl overflow-hidden mb-6">
                <img src={post.img} alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(3,7,18,0.8))' }} />
                <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg text-black"
                  style={{ background: post.color }}>
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">{post.date}</span>
              <h4 className="text-lg font-black text-white mt-2 mb-3 leading-snug group-hover:text-amber-400 transition-colors">
                {post.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{post.desc}</p>
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold group-hover:gap-3 transition-all">
                Read Article <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple footer for FooterSections export
const Footer = () => {
  const socials = [
    { icon: <Youtube size={17} />, href: '#', color: 'hover:bg-red-600' },
    { icon: <Instagram size={17} />, href: '#', color: 'hover:bg-pink-600' },
    { icon: <Linkedin size={17} />, href: '#', color: 'hover:bg-blue-700' },
    { icon: <Twitter size={17} />, href: '#', color: 'hover:bg-sky-500' },
  ];

  const links = {
    Courses: ['Java Full Stack', 'MERN Stack', 'Python Full Stack', 'DSA Mastery', 'Essentials'],
    Company: ['About Us', 'Student Portal', 'Placement Cell', 'Privacy Policy'],
  };

  return (
    <footer style={{ background: '#020914', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="container-xl py-20">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/">
              <img src="/logo.png" alt="Saral Solutions" className="h-12 w-auto object-contain mb-6" />
            </Link>
            <p className="text-slate-500 leading-relaxed mb-6 max-w-xs text-sm">
              Jalgaon's premier hybrid firm combining{' '}
              <span className="text-white font-semibold">Marketing</span>,{' '}
              <span className="text-white font-semibold">SaaS</span>, and{' '}
              <span className="text-white font-semibold">Education</span> under one roof.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a key={i} href={s.href}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-all duration-300 ${s.color}`}
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat} className="lg:col-span-2">
              <h5 className="text-white font-black uppercase tracking-widest text-xs mb-6">{cat}</h5>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-slate-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="lg:col-span-4">
            <h5 className="text-white font-black uppercase tracking-widest text-xs mb-6">Contact Us</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-slate-500 text-sm">Vitthal Shopping Complex, Omkareshwar Temple, Ramanand Nagar Rd, near Naivedya Hotel, Jai Nagar, Jalgaon, Maharashtra 425002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-400 shrink-0" />
                <span className="text-slate-500 text-sm">+91 8080068554</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <span className="text-slate-500 text-sm break-all">contact@saralsolutions.com</span>
              </li>
            </ul>
            <Link to="/contact">
              <button className="btn btn-primary mt-6 text-sm !px-5 !py-3 group">
                Get in Touch
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} <span className="text-slate-400 font-semibold">Saral Solution</span>.
            All rights reserved. Proudly built in Jalgaon.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l => (
              <a key={l} href="#" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Blog, CtaBanner, Footer };
