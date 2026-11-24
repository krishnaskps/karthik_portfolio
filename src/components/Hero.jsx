import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Mail, 
  Globe, 
  Phone, 
  Download, 
  MapPin, 
  Briefcase, 
  CheckCircle,
  Sparkles,
  Code2,
  Server,
  Cloud
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ darkMode, onOpenResume }) {
  const { personal, stats } = portfolioData;

  // Typing animation for roles
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = personal.roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        setTypingSpeed(70);

        if (displayedText.length + 1 === currentRole.length) {
          // Pause when word is finished
          setIsDeleting(true);
          setTypingSpeed(2200);
        }
      } else {
        // Deleting
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(35);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personal.roles.length);
          setTypingSpeed(400);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, personal.roles, typingSpeed]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status pill */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border mb-6 transition-all ${
              darkMode 
                ? 'bg-slate-900/90 text-indigo-300 border-indigo-500/30 shadow-sm shadow-indigo-500/10'
                : 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Senior Software Engineer • 9+ Years Enterprise Experience</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4">
              <span className={darkMode ? 'text-slate-100' : 'text-slate-900'}>
                Hi, I'm{' '}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400">
                {personal.name}
              </span>
            </h1>

            {/* Typing Role Subtitle */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className={`text-xl sm:text-2xl lg:text-3xl font-semibold font-mono ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                &gt; {displayedText}
                <span className="inline-block w-2.5 h-6 ml-1 bg-indigo-500 animate-pulse" />
              </span>
            </div>

            {/* Engaging Professional Bio */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {personal.shortBio} Specialized in <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>.NET Core 8</strong>, <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Angular 19</strong>, <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Single-SPA Micro-Frontends</strong>, <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>AWS/Azure Cloud</strong>, and integrating <strong className={darkMode ? 'text-slate-200' : 'text-slate-800'}>Agentic AI & Jira MCP</strong> into production engineering.
            </p>

            {/* Quick meta items (Location, Current company) */}
            <div className={`flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium mb-8 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin size={16} className="text-indigo-400" />
                <span>{personal.location}</span>
              </div>
              <span className="text-slate-600 dark:text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Briefcase size={16} className="text-cyan-400" />
                <span>Mphasis (Charles Schwab Advisor Services)</span>
              </div>
            </div>

            {/* Two Primary CTAs + Resume Button */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all transform hover:-translate-y-0.5 ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600 shadow-sm'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-400 shadow-sm'
                }`}
              >
                <Mail size={18} className="text-indigo-500" />
                <span>Contact Me</span>
              </button>

              <button
                onClick={onOpenResume}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm transition-all border border-dashed ${
                  darkMode
                    ? 'border-indigo-500/40 text-indigo-300 hover:bg-indigo-950/40'
                    : 'border-indigo-300 text-indigo-700 hover:bg-indigo-50'
                }`}
                title="View and download printable CV"
              >
                <Download size={16} />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3">
              <span className={`text-xs font-semibold uppercase tracking-wider ${
                darkMode ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Connect:
              </span>

              <a
                href={personal.links.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 hover:border-indigo-300 hover:bg-white'
                }`}
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personal.links.portfolio}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 hover:border-indigo-300 hover:bg-white'
                }`}
                title="Personal GitHub Pages Website"
                aria-label="Personal Website"
              >
                <Globe size={18} />
              </a>

              <a
                href={personal.links.emailMailto}
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 hover:border-indigo-300 hover:bg-white'
                }`}
                title="Email Karthikeyan"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <a
                href={personal.links.phoneTel}
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900/90 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-900 hover:border-indigo-300 hover:bg-white'
                }`}
                title="Call Phone"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image + Floating Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-84 md:w-96 aspect-square">
              
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 blur-xl opacity-40 animate-pulse -z-10" />
              <div className="absolute -inset-2 rounded-full border border-indigo-500/30 animate-[spin_20s_linear_infinite] pointer-events-none" />
              <div className="absolute -inset-6 rounded-full border border-dashed border-cyan-500/20 pointer-events-none" />

              {/* Main Profile Image Container */}
              <div className={`relative w-full h-full rounded-full p-2.5 shadow-2xl transition-all ${
                darkMode 
                  ? 'bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-slate-700'
                  : 'bg-gradient-to-tr from-slate-100 via-white to-indigo-50 border border-slate-200'
              }`}>
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Tech Badge 1: .NET Core 8 */}
              <div className={`absolute -top-3 -left-3 sm:-left-6 px-3.5 py-2 rounded-xl shadow-xl border flex items-center gap-2.5 backdrop-blur-md animate-bounce duration-1000 ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-700 text-slate-100'
                  : 'bg-white/95 border-slate-200 text-slate-800'
              }`}>
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                  .NET
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-indigo-400 leading-tight">Backend Core</div>
                  <div className="text-xs font-bold leading-tight">C# 12 & .NET 8/10</div>
                </div>
              </div>

              {/* Floating Tech Badge 2: Angular 19 */}
              <div className={`absolute top-1/2 -right-4 sm:-right-8 px-3.5 py-2 rounded-xl shadow-xl border flex items-center gap-2.5 backdrop-blur-md ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-700 text-slate-100'
                  : 'bg-white/95 border-slate-200 text-slate-800'
              }`}>
                <div className="w-7 h-7 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs">
                  NG
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-red-400 leading-tight">Frontend MFE</div>
                  <div className="text-xs font-bold leading-tight">Angular 19 & Single-SPA</div>
                </div>
              </div>

              {/* Floating Tech Badge 3: Agentic AI / Jira MCP */}
              <div className={`absolute -bottom-4 left-6 sm:left-10 px-3.5 py-2 rounded-xl shadow-xl border flex items-center gap-2.5 backdrop-blur-md ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-700 text-slate-100'
                  : 'bg-white/95 border-slate-200 text-slate-800'
              }`}>
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                  <Sparkles size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-cyan-400 leading-tight">Modern Dev Tooling</div>
                  <div className="text-xs font-bold leading-tight">Agentic AI & Jira MCP</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Highlights / Stats Strip */}
        <div className={`mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl border transition-all ${
          darkMode
            ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-md'
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-3">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono">
                {stat.value}
              </span>
              <span className={`text-sm font-semibold mt-1 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                {stat.label}
              </span>
              <span className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                {stat.detail}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
