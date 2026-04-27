import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Zap, Target, ExternalLink, Github, 
  Code2, Flame, Award, Save, Loader2,
  BarChart3, Calendar, CheckCircle2, TrendingUp,
  RefreshCw, ChevronRight, PieChart, Activity, ArrowRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Dashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  
  const [profiles, setProfiles] = useState({
    leetcode: '',
    gfg: '',
    codechef: '',
    github: ''
  });

  const [stats, setStats] = useState({
    totalSolved: 0,
    leetcode: { solved: 0, easy: 0, medium: 0, hard: 0, acceptance: 0, rank: 0 },
    gfg: { solved: 0, score: 0, streak: 0, rank: 0 },
    codechef: { solved: 0, rating: 0, stars: 0, rank: 0 },
    github: { repos: 0, followers: 0, contributions: 0 },
    streak: 12,
    points: 1450,
    rank: 'Gold II'
  });

  const getUsername = (input) => {
    if (!input) return '';
    if (input.includes('http')) {
      const parts = input.split('/').filter(p => p !== '');
      return parts[parts.length - 1];
    }
    return input.trim();
  };

  const fetchLeetCodeStats = async (rawUsername) => {
    const username = getUsername(rawUsername);
    if (!username) return null;
    const apis = [
      `https://leetcode-api-faisalshohag.vercel.app/${username}`,
      `https://leetcode-stats-api.herokuapp.com/${username}`
    ];
    for (const url of apis) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.totalSolved !== undefined) return {
          solved: data.totalSolved,
          easy: data.easySolved || 0,
          medium: data.mediumSolved || 0,
          hard: data.hardSolved || 0,
          acceptance: data.acceptanceRate || 0,
          rank: data.ranking || 0
        };
      } catch (e) {}
    }
    return null;
  };

  const fetchGFGStats = async (rawUsername) => {
    const username = getUsername(rawUsername);
    if (!username) return null;
    try {
      // Using a community API for GFG stats
      const res = await fetch(`https://gfg-stats-api.vercel.app/?username=${username}`);
      const data = await res.json();
      if (data.total_problems_solved !== undefined) return {
        solved: parseInt(data.total_problems_solved),
        score: parseInt(data.coding_score),
        rank: data.monthly_rank || 0
      };
    } catch (e) { console.error("GFG Fetch Failed"); }
    return null;
  };

  const fetchCodeChefStats = async (rawUsername) => {
    const username = getUsername(rawUsername);
    if (!username) return null;
    try {
      const res = await fetch(`https://codechef-api.vercel.app/${username}`);
      const data = await res.json();
      if (data.success) return {
        solved: data.problemsSolved || 0,
        rating: data.currentRating || 0,
        stars: data.stars || "1*",
        rank: data.globalRank || 0
      };
    } catch (e) { console.error("CodeChef Fetch Failed"); }
    return null;
  };

  const fetchGitHubStats = async (rawUsername) => {
    const username = getUsername(rawUsername);
    if (!username) return null;
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      if (data.id) return {
        repos: data.public_repos,
        followers: data.followers,
        contributions: 0 // GitHub API doesn't give total contributions directly easily
      };
    } catch (e) { console.error("GitHub Fetch Failed"); }
    return null;
  };

  const refreshStats = useCallback(async (currentProfiles) => {
    setRefreshing(true);
    try {
      const [lc, gfg, cc, gh] = await Promise.all([
        fetchLeetCodeStats(currentProfiles.leetcode),
        fetchGFGStats(currentProfiles.gfg),
        fetchCodeChefStats(currentProfiles.codechef),
        fetchGitHubStats(currentProfiles.github)
      ]);

      const total = (lc?.solved || 0) + (gfg?.solved || 0) + (cc?.solved || 0);

      setStats(prev => ({
        ...prev,
        leetcode: lc || prev.leetcode,
        gfg: gfg || prev.gfg,
        codechef: cc || prev.codechef,
        github: gh || prev.github,
        totalSolved: total
      }));
    } catch (err) {
      console.error("Refresh stats failed:", err);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const initDashboard = async () => {
      if (user?.uid) {
        setLoading(true);
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.profiles) {
              setProfiles(data.profiles);
              await refreshStats(data.profiles);
            }
          }
        } catch (err) {
          console.error("Error loading dashboard:", err);
        } finally {
          setLoading(false);
        }
      }
    };
    initDashboard();
  }, [user, refreshStats]);

  const handleSaveProfiles = async () => {
    setSaving(true);
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { profiles });
      await refreshStats(profiles);
    } catch (err) {
      console.error("Save failed:", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="text-amber-500 animate-spin" />
          <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-xs">Unifying Profiles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030712] pt-28 pb-20 selection:bg-amber-500/30">
      <div className="container-xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3 mb-4">
              <span className="section-label !m-0 !py-1.5">OmniSync Portal v3.0</span>
              <div className="h-1 w-12 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-amber-500 animate-pulse w-full" />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]"
            >
              Unified <span className="gradient-text">Scorecard.</span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
            className="flex items-center gap-5 glass-card !p-3 !pr-8 border-white/5"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-black font-black text-2xl">
              {user?.name ? user.name[0] : 'S'}
            </div>
            <div>
              <p className="text-white font-black text-lg leading-tight tracking-tight">{user?.name || 'Saral Student'}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] font-black text-amber-500 uppercase tracking-widest">
                  {stats.rank}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Stats Scorecard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard 
            icon={<Target size={24} />} 
            label="Omni Solve Count" 
            value={stats.totalSolved} 
            sub="Combined Problems"
            accent="#3b82f6"
            isRefreshing={refreshing}
          />
          <StatCard 
            icon={<Flame size={24} />} 
            label="Consistency" 
            value={`${stats.streak} Days`} 
            sub="Active Session"
            accent="#f5a623"
          />
          <StatCard 
            icon={<Award size={24} />} 
            label="Platform XP" 
            value={stats.points + (stats.totalSolved * 10)} 
            sub="Dynamic Ranking"
            accent="#fbbf24"
          />
          <StatCard 
            icon={<Github size={24} />} 
            label="Open Source" 
            value={stats.github.repos} 
            sub="Public Repositories"
            accent="#8b5cf6"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* LEFT: Connections */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="glass-card !p-8"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">Sync Accounts</h3>
                <button 
                  onClick={() => refreshStats(profiles)}
                  className={`p-2 rounded-xl transition-all ${refreshing ? 'animate-spin text-amber-500' : 'text-slate-500 hover:text-white hover:bg-white/5'}`}
                >
                  <RefreshCw size={18} />
                </button>
              </div>
              
              <div className="space-y-6">
                <ProfileInput 
                  label="LeetCode" 
                  icon={<img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" className="w-4 h-4 invert" alt="LC" />}
                  value={profiles.leetcode}
                  onChange={(v) => setProfiles({...profiles, leetcode: v})}
                  placeholder="Username / URL"
                  data={stats.leetcode.solved > 0 ? `${stats.leetcode.solved} Solved` : null}
                />
                <ProfileInput 
                  label="GeeksforGeeks" 
                  icon={<div className="w-4 h-4 bg-green-600 rounded flex items-center justify-center text-[10px] font-bold">G</div>}
                  value={profiles.gfg}
                  onChange={(v) => setProfiles({...profiles, gfg: v})}
                  placeholder="Username / URL"
                  data={stats.gfg.solved > 0 ? `${stats.gfg.solved} Solved` : null}
                />
                <ProfileInput 
                  label="CodeChef" 
                  icon={<div className="w-4 h-4 bg-amber-800 rounded flex items-center justify-center text-[10px] font-bold">C</div>}
                  value={profiles.codechef}
                  onChange={(v) => setProfiles({...profiles, codechef: v})}
                  placeholder="Username / URL"
                  data={stats.codechef.solved > 0 ? `${stats.codechef.solved} Solved` : null}
                />
                <ProfileInput 
                  label="GitHub" 
                  icon={<Github size={16} />}
                  value={profiles.github}
                  onChange={(v) => setProfiles({...profiles, github: v})}
                  placeholder="Username / URL"
                />
              </div>

              <button 
                onClick={handleSaveProfiles}
                disabled={saving || refreshing}
                className="btn btn-primary w-full mt-10 group !py-5 shadow-2xl shadow-amber-500/10"
              >
                {saving ? <Loader2 size={18} className="animate-spin" /> : (
                  <>
                    <Save size={18} />
                    Sync & Save Changes
                    <ArrowRight size={17} className="ml-auto group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* RIGHT: Platform Deep Dive */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* LeetCode Analysis */}
              {stats.leetcode.solved > 0 && (
                <PlatformSmallCard 
                  title="LeetCode"
                  solved={stats.leetcode.solved}
                  accent="#f5a623"
                  metrics={[
                    { label: 'Easy', value: stats.leetcode.easy },
                    { label: 'Medium', value: stats.leetcode.medium },
                    { label: 'Hard', value: stats.leetcode.hard }
                  ]}
                />
              )}

              {/* GFG Analysis */}
              {stats.gfg.solved > 0 && (
                <PlatformSmallCard 
                  title="GeeksforGeeks"
                  solved={stats.gfg.solved}
                  accent="#22c55e"
                  metrics={[
                    { label: 'Coding Score', value: stats.gfg.score },
                    { label: 'Monthly Rank', value: stats.gfg.rank || 'N/A' }
                  ]}
                />
              )}

              {/* CodeChef Analysis */}
              {stats.codechef.solved > 0 && (
                <PlatformSmallCard 
                  title="CodeChef"
                  solved={stats.codechef.solved}
                  accent="#d97706"
                  metrics={[
                    { label: 'Rating', value: stats.codechef.rating },
                    { label: 'Stars', value: stats.codechef.stars }
                  ]}
                />
              )}

              {/* GitHub Analysis */}
              {stats.github.repos > 0 && (
                <PlatformSmallCard 
                  title="GitHub"
                  solved={stats.github.repos}
                  solvedLabel="Repositories"
                  accent="#6366f1"
                  metrics={[
                    { label: 'Followers', value: stats.github.followers },
                    { label: 'Active Repos', value: stats.github.repos }
                  ]}
                />
              )}
            </div>

            {/* Overall Distribution */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="glass-card !p-10"
            >
               <div className="flex items-center gap-3 mb-10">
                  <PieChart size={18} className="text-amber-500" />
                  <h4 className="text-sm font-black text-white uppercase tracking-widest">Global Solve Distribution</h4>
                </div>
                
                <div className="space-y-8">
                  <PlatformProgress label="LeetCode" count={stats.leetcode.solved} total={stats.totalSolved} color="#f5a623" />
                  <PlatformProgress label="GeeksforGeeks" count={stats.gfg.solved} total={stats.totalSolved} color="#22c55e" />
                  <PlatformProgress label="CodeChef" count={stats.codechef.solved} total={stats.totalSolved} color="#d97706" />
                </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, sub, accent, isRefreshing }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card !p-8 flex flex-col justify-between border-white/5 relative overflow-hidden group"
  >
    <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity" style={{ color: accent }}>
      {React.cloneElement(icon, { size: 100 })}
    </div>
    <div className="flex items-center justify-between mb-6 relative z-10">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg" 
           style={{ background: `${accent}15`, border: `1px solid ${accent}30`, color: accent }}>
        {icon}
      </div>
      {isRefreshing && <Loader2 size={16} className="animate-spin text-slate-600" />}
    </div>
    <div className="relative z-10">
      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{label}</p>
      <h3 className="text-3xl font-black text-white leading-tight tracking-tighter">{value}</h3>
      <p className="text-slate-500 text-[10px] font-bold uppercase mt-3">{sub}</p>
    </div>
  </motion.div>
);

const PlatformSmallCard = ({ title, solved, solvedLabel = "Problems Solved", accent, metrics }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card !p-8 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />
    <div className="flex items-center gap-3 mb-6">
       <div className="w-2 h-2 rounded-full" style={{ background: accent }} />
       <h4 className="text-sm font-black text-white uppercase tracking-widest">{title}</h4>
    </div>
    <div className="flex items-end justify-between mb-8">
      <div>
        <p className="text-slate-600 text-[9px] font-black uppercase tracking-widest mb-1">{solvedLabel}</p>
        <h5 className="text-4xl font-black text-white leading-none">{solved}</h5>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
      {metrics.map((m, i) => (
        <div key={i}>
          <p className="text-slate-600 text-[8px] font-black uppercase tracking-widest mb-1">{m.label}</p>
          <p className="text-white font-black text-sm tracking-tight">{m.value}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const PlatformProgress = ({ label, count, total, color }) => {
  const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <span className="text-xs font-black text-white uppercase tracking-tight">{label}</span>
        <span className="text-[10px] font-black text-slate-500 uppercase">{count} / {total} — {percentage}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          className="h-full rounded-full shadow-[0_0_15px_rgba(245,166,35,0.2)]"
          style={{ background: color }}
        />
      </div>
    </div>
  );
};

const ProfileInput = ({ label, icon, value, onChange, placeholder, data }) => (
  <div className="group">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2.5">
        <div className="text-slate-500 group-focus-within:text-amber-500 transition-all">
          {icon}
        </div>
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
      </div>
      {data && (
        <span className="text-[9px] font-black text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded uppercase tracking-widest">{data}</span>
      )}
    </div>
    <div className="relative">
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/[0.02] border border-white/5 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-amber-500/40 transition-all font-medium placeholder:text-slate-700"
      />
    </div>
  </div>
);

export default Dashboard;
