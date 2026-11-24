import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Layout, 
  Cloud, 
  Database, 
  Bot, 
  CheckSquare, 
  Sparkles,
  Layers,
  Zap,
  CheckCircle,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills({ darkMode }) {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryIcons = {
    all: Code,
    backend: Server,
    frontend: Layout,
    cloud: Cloud,
    database: Database,
    ai: Bot,
    methodology: CheckSquare
  };

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Code size={14} />
            <span>Technical Expertise</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Tech Stack</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Mastered across 9+ years of enterprise production delivery in high-stakes FinTech, Cloud, and Microservices environments.
          </p>
        </div>

        {/* Highlight Banner: Modern Enterprise & AI Toolchain */}
        <div className={`p-6 sm:p-8 rounded-2xl border mb-14 transition-all ${
          darkMode
            ? 'bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-cyan-950/40 border-indigo-500/30 shadow-lg shadow-indigo-950/30'
            : 'bg-gradient-to-r from-indigo-50 via-white to-cyan-50 border-indigo-200 shadow-sm'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider font-mono">
                <Sparkles size={14} />
                <span>Next-Gen Production Tech</span>
              </div>
              <h3 className={`text-xl sm:text-2xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Active Daily Arsenal at Enterprise Scale
              </h3>
              <p className={`text-sm max-w-2xl ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Architecting high-scale trading & advisory systems at Charles Schwab using cutting-edge Single-SPA Micro-frontends, Polly resilience pipelines, and AI engineering workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 items-center">
              {[
                { tag: '.NET Core 8 & C# 12', color: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40' },
                { tag: 'Angular 19 & Single-SPA', color: 'bg-red-500/20 text-red-300 border-red-500/40' },
                { tag: 'Polly Resilience', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
                { tag: 'AWS Lambda & ECS', color: 'bg-orange-500/20 text-orange-300 border-orange-500/40' },
                { tag: 'Jira MCP Server', color: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
                { tag: 'Agentic AI & Copilot', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
                { tag: 'X-Unit TDD/BDD', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' }
              ].map((pill, i) => (
                <span
                  key={i}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border ${pill.color}`}
                >
                  {pill.tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
              activeCategory === 'all'
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/30'
                : darkMode
                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Code size={16} />
            <span>All Categories</span>
          </button>

          {skillCategories.map((cat) => {
            const IconComp = categoryIcons[cat.id] || Code;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/30'
                    : darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <IconComp size={16} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => {
            const IconComp = categoryIcons[group.id] || Code;
            return (
              <div
                key={group.id}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 backdrop-blur-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
                    <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400">
                      <IconComp size={20} />
                    </div>
                    <div>
                      <h3 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {group.name}
                      </h3>
                      <span className="text-xs text-indigo-400 font-mono">
                        {group.skills.length} core proficiencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-3 rounded-xl border flex items-center justify-between group transition-all ${
                          darkMode
                            ? 'bg-slate-950/50 border-slate-800/60 hover:border-indigo-500/40 hover:bg-slate-950'
                            : 'bg-slate-50 border-slate-200/80 hover:border-indigo-300 hover:bg-white'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                          <span className={`text-sm font-semibold transition-colors ${
                            darkMode ? 'text-slate-200 group-hover:text-white' : 'text-slate-800 group-hover:text-indigo-600'
                          }`}>
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 font-mono">
                          <span className={`text-[11px] px-2 py-0.5 rounded font-semibold ${
                            skill.level === 'Expert'
                              ? 'bg-emerald-500/15 text-emerald-400'
                              : skill.level === 'Advanced'
                              ? 'bg-cyan-500/15 text-cyan-400'
                              : 'bg-indigo-500/15 text-indigo-300'
                          }`}>
                            {skill.level}
                          </span>
                          <span className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            {skill.years}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-5 pt-3 border-t text-[11px] font-mono text-right ${
                  darkMode ? 'border-slate-800/60 text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  Verified in CV & Enterprise Projects
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
