import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Users, ArrowRight, Code, ShieldCheck, Zap, BookOpen, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: "Java Full Stack",
    subtitle: "Spring Boot + React + AWS",
    duration: "6 Months",
    students: "120+",
    topics: ["Java 17+", "Spring Boot", "Microservices", "React", "AWS"],
    price: "₹15,000",
    originalPrice: "₹30,000",
    badge: "Most Popular",
    badgeClass: "badge-gold",
    icon: <Code size={22} className="text-amber-400" />,
    iconBg: "rgba(245,166,35,0.12)",
    accent: "#f5a623",
    perks: ["Live classes daily", "Project portfolio", "Placement support"],
    rating: 4.9,
  },
  {
    title: "Placement-Ready DSA",
    subtitle: "100+ Pattern-Wise Problems",
    duration: "3 Months",
    students: "200+",
    topics: ["Sliding Window", "Recursion", "DP Patterns", "Graphs", "Mock Interviews"],
    price: "₹5,000",
    originalPrice: "₹12,000",
    badge: "FAANG Oriented",
    badgeClass: "badge-gold",
    icon: <Zap size={22} className="text-amber-300" />,
    iconBg: "rgba(245,166,35,0.08)",
    accent: "#e8950f",
    perks: ["150+ curated Qs", "Live doubt sessions", "Interview mock rounds"],
    rating: 4.8,
  },
  {
    title: "MERN Stack Bootcamp",
    subtitle: "MongoDB · Express · React · Node",
    duration: "4 Months",
    students: "80+",
    topics: ["MongoDB", "Express.js", "React", "Node.js", "Docker"],
    price: "₹15,000",
    originalPrice: "₹25,000",
    badge: "Industry Favorite",
    badgeClass: "badge-gold",
    icon: <ShieldCheck size={22} className="text-amber-500" />,
    iconBg: "rgba(245,166,35,0.15)",
    accent: "#c47d0e",
    perks: ["5 real-world projects", "GitHub portfolio", "Deployment included"],
    rating: 4.9,
  },
  {
    title: "Python Full Stack",
    subtitle: "Django + PostgreSQL + React",
    duration: "6 Months",
    students: "60+",
    topics: ["Python", "Django", "PostgreSQL", "React", "Deployment"],
    price: "₹15,000",
    originalPrice: "₹30,000",
    badge: "Data & Web",
    badgeClass: "badge-gold",
    icon: <BookOpen size={22} className="text-amber-400" />,
    iconBg: "rgba(245,166,35,0.1)",
    accent: "#f5a623",
    perks: ["Data + Web combo", "REST API mastery", "Live project deployment"],
    rating: 4.7,
  },
  {
    title: "Programming Essentials",
    subtitle: "Begin Your Coding Journey",
    duration: "1 Month",
    students: "300+",
    topics: ["C++", "Java", "Python", "Logic Building", "Problem Solving"],
    price: "₹2,500",
    originalPrice: "₹5,000",
    badge: "Beginner Friendly",
    badgeClass: "badge-gold",
    icon: <Star size={22} className="text-amber-400" />,
    iconBg: "rgba(245,166,35,0.1)",
    accent: "#f5a623",
    perks: ["Perfect for freshers", "3 languages covered", "Certification included"],
    rating: 4.8,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
  }),
};

const Courses = () => {
  return (
    <section id="courses" className="section-padding" style={{ background: '#030712' }}>
      <div className="container-xl">

        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex justify-center mb-5"
          >
            <span className="section-label">🎓 Our Courses</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-5"
          >
            Choose Your <span className="gradient-text">Learning Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed"
          >
            Every course is crafted by industry mentors and designed to get you job-ready faster.
          </motion.p>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="course-card flex flex-col"
            >
              {/* Card top accent line */}
              <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${course.accent}, transparent)` }} />

              <div className="p-7 flex flex-col flex-grow">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: course.iconBg, border: `1px solid ${course.accent}25` }}>
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-black text-lg leading-tight">{course.title}</h3>
                      <p className="text-slate-500 text-xs font-medium mt-0.5">{course.subtitle}</p>
                    </div>
                  </div>
                  <span className={`badge ${course.badgeClass} shrink-0 ml-2`}>{course.badge}</span>
                </div>

                {/* Rating & Meta */}
                <div className="flex items-center gap-4 mb-5 pb-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <div className="flex items-center gap-1.5">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} size={11} className="text-amber-400" fill="currentColor" />
                    ))}
                    <span className="text-white text-xs font-bold ml-1">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Clock size={11} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Users size={11} />
                    <span>{course.students} enrolled</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {course.topics.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>

                {/* Perks */}
                <div className="space-y-2 mb-6 flex-grow">
                  {course.perks.map((p, pi) => (
                    <div key={pi} className="flex items-center gap-2.5 text-sm text-slate-400">
                      <CheckCircle size={14} style={{ color: course.accent }} />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing + CTA */}
                <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  <div>
                    <div className="text-slate-600 text-xs line-through font-medium">{course.originalPrice}</div>
                    <div className="text-2xl font-black text-white">{course.price}</div>
                    <div className="text-amber-500/70 text-[10px] font-bold">
                      Save {Math.round((1 - parseInt(course.price.replace(/[₹,]/g,'')) / parseInt(course.originalPrice.replace(/[₹,]/g,''))) * 100)}%
                    </div>
                  </div>
                  <Link to="/contact">
                    <button className="btn btn-primary group text-sm !px-5 !py-3">
                      Enroll Now
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-4">Not sure which course is right for you?</p>
          <Link to="/contact">
            <button className="btn btn-secondary">
              Book a Free Counseling Session
              <ArrowRight size={16} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
