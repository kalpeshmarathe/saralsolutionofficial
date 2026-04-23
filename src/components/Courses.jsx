import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Globe, ArrowRight, Code, ShieldCheck, Zap } from 'lucide-react';

const courses = [
  {
    title: "Java Full Stack Development",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    duration: "6 Months | Full Mastery",
    topics: ["Java 17+", "Spring Boot", "Microservices", "React", "AWS"],
    oldPrice: "₹30,000",
    newPrice: "₹15,000",
    badge: "Most Comprehensive",
    icon: <Code className="text-amber-500" />
  },
  {
    title: "Placement Ready DSA",
    subtitle: "Topic & Pattern Wise 100+ Qs",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    duration: "3 Months | Patterns focused",
    topics: ["Sliding Window", "Recursion", "DP Patterns", "Graphs", "Mock Int."],
    oldPrice: "₹12,000",
    newPrice: "₹5,000",
    badge: "FAANG Oriented",
    icon: <Zap className="text-blue-500" />
  },
  {
    title: "MERN Stack Bootcamp",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
    duration: "4 Months | Real Projects",
    topics: ["MongoDB", "Express", "React", "Node.js", "Docker"],
    oldPrice: "₹25,000",
    newPrice: "₹15,000",
    badge: "Industry Favorite",
    icon: <ShieldCheck className="text-green-500" />
  },
  {
    title: "Python Full Stack",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    duration: "6 Months | Data Focused",
    topics: ["Python", "Django", "PostgreSQL", "React", "Deployment"],
    oldPrice: "₹30,000",
    newPrice: "₹15,000",
    badge: "Modern Tech",
    icon: <Code className="text-purple-500" />
  },
  {
    title: "Programming Essentials",
    subtitle: "Any Language Mastery",
    img: "https://images.unsplash.com/photo-1516116216624-5ed584c7a9c1?auto=format&fit=crop&w=800&q=80",
    duration: "1 Month | Foundation",
    topics: ["C++", "Java", "Python", "Logic Building", "Syntax"],
    oldPrice: "₹5,000",
    newPrice: "₹2,500",
    badge: "Beginner Friendly",
    icon: <Zap className="text-orange-500" />
  }
];

const Courses = () => {
  return (
    <section id="courses" className="section-padding bg-[#020617]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs block mb-4">Elite Learning</span>
            <h2 className="text-4xl md:text-6xl mb-6">Our Ongoing <span className="gradient-text">Premium Courses</span></h2>
            <p className="text-slate-400 font-medium">Industry-vetted curriculums designed to take you from a learner to a high-impact professional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, i) => (
            <motion.div 
              key={i} 
              className="glass-card !p-0 group overflow-hidden flex flex-col h-full border-white/5 hover:border-amber-500/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute top-6 left-6 px-4 py-1 bg-amber-500 rounded-full text-[10px] font-black text-black tracking-widest uppercase">
                    {course.badge}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-amber-500" /> {course.duration.split('|')[0]}
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-blue-500" /> Hybrid Mode
                  </div>
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl text-white tracking-tight font-black mb-2 group-hover:text-amber-500 transition-colors">{course.title}</h3>
                    {course.subtitle && <p className="text-amber-500/70 text-xs font-bold uppercase tracking-widest">{course.subtitle}</p>}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {course.topics.map(topic => (
                    <span key={topic} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                  <div>
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest line-through mb-1">{course.oldPrice || '₹' + (parseInt(course.newPrice.replace('₹','').replace(',','')) * 2).toLocaleString()}</div>
                    <div className="text-3xl text-white font-black">{course.newPrice}</div>
                  </div>
                  <button className="btn btn-primary !px-6 !py-3 !text-[10px] group/btn">
                    ENROLL NOW
                    <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
