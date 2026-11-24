import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  FolderGit2, 
  Sparkles,
  Terminal,
  Shield,
  Server,
  Cloud
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience({ darkMode }) {
  const { experience, projects } = portfolioData;
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'projects'
  const [expandedId, setExpandedId] = useState('mphasis'); // default expand current role

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Briefcase size={14} />
            <span>Proven Track Record</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Work Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Featured Projects</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            9+ years delivering critical platforms across Banking, Healthcare, Government, and Integration domains.
          </p>
        </div>

        {/* View Switcher: Experience Timeline vs Featured Projects */}
        <div className="flex justify-center mb-14" id="projects">
          <div className={`p-1.5 rounded-2xl border flex items-center gap-2 ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'
          }`}>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'experience'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : darkMode
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase size={16} />
              <span>Career Timeline ({experience.length} Companies)</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'projects'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : darkMode
                  ? 'text-slate-400 hover:text-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FolderGit2 size={16} />
              <span>Featured Enterprise Projects ({projects.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CAREER TIMELINE */}
        {activeTab === 'experience' && (
          <div className="relative">
            {/* Vertical timeline spine */}
            <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800" />

            <div className="space-y-8">
              {experience.map((exp, index) => {
                const isCurrent = exp.period.includes('Present');
                const isExpanded = expandedId === exp.id;

                return (
                  <div
                    key={exp.id}
                    className={`relative lg:pl-20 transition-all`}
                  >
                    {/* Timeline Node on Left */}
                    <div className={`hidden lg:flex absolute left-5 top-8 -translate-x-1/2 w-7 h-7 rounded-full border-4 items-center justify-center transition-all ${
                      isCurrent
                        ? 'border-indigo-500 bg-indigo-500 text-white shadow-lg shadow-indigo-500/50'
                        : darkMode
                        ? 'border-slate-800 bg-slate-900 text-slate-400'
                        : 'border-slate-200 bg-white text-slate-500'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-white animate-ping' : 'bg-slate-400'}`} />
                    </div>

                    {/* Company Card */}
                    <div className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                      darkMode
                        ? isCurrent
                          ? 'bg-slate-900/90 border-indigo-500/40 shadow-xl shadow-indigo-950/20'
                          : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                        : isCurrent
                        ? 'bg-white border-indigo-200 shadow-lg shadow-indigo-100'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                    }`}>
                      {/* Top Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h3 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                              {exp.role}
                            </h3>
                            <span className="text-indigo-400 font-semibold text-lg">@</span>
                            <span className={`text-xl font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                              {exp.company}
                            </span>
                            {isCurrent && (
                              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                Current Role
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400 mt-2">
                            <span className="flex items-center gap-1 font-mono">
                              <Calendar size={14} className="text-indigo-400" />
                              {exp.period}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} className="text-cyan-400" />
                              {exp.location}
                            </span>
                            <span>•</span>
                            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono">
                              Domain: {exp.domain}
                            </span>
                          </div>
                        </div>

                        {exp.featuredProject && (
                          <div className="self-start sm:self-center">
                            <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold font-mono bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                              Project: {exp.featuredProject}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className={`text-sm sm:text-base leading-relaxed mb-5 ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {exp.description}
                      </p>

                      {/* Key Highlights / Responsibilities */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <div className="mb-6 space-y-2.5">
                          <h4 className={`text-xs font-bold uppercase tracking-wider font-mono ${
                            darkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            Key Responsibilities & Deliverables:
                          </h4>
                          <div className="space-y-2">
                            {exp.highlights.map((h, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2.5 text-sm">
                                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                                  {h}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech stack badges */}
                      <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 items-center">
                        <span className={`text-xs font-bold uppercase tracking-wider mr-2 font-mono ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Tech Stack:
                        </span>
                        {exp.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-xs px-2.5 py-1 rounded-lg font-mono font-medium border ${
                              darkMode
                                ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                                : 'bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: FEATURED ENTERPRISE PROJECTS */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className={`p-7 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/40 backdrop-blur-sm shadow-lg'
                    : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <div>
                  {/* Top tags */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-indigo-500/15 text-indigo-400 border border-indigo-500/25">
                      {proj.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {proj.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {proj.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-4">
                    <span className="text-indigo-400 font-semibold">{proj.role}</span>
                    <span>•</span>
                    <span>{proj.client}</span>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {proj.description}
                  </p>

                  {/* Architectural Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className={`block text-xs font-bold uppercase tracking-wider font-mono ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Architectural Highlights:
                    </span>
                    {proj.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech chips */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[11px] px-2 py-0.5 rounded font-mono ${
                        darkMode ? 'bg-slate-950 text-indigo-300 border border-slate-800' : 'bg-slate-100 text-indigo-700 border border-slate-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
