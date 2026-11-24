import React from 'react';
import { ArrowUp, Globe, Mail, Phone, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ darkMode }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px]">
                <div className={`w-full h-full rounded-[7px] flex items-center justify-center font-bold text-xs ${
                  darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
                }`}>
                  KK
                </div>
              </div>
              <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {personal.name}
              </span>
            </div>
            <p className="text-xs max-w-sm">
              Senior Software Engineer specializing in .NET Core 8, Angular 19, Micro-frontends, and AI developer workflows.
            </p>
          </div>

          {/* Center: Social links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.links.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'border-slate-800 hover:text-white hover:bg-slate-900' : 'border-slate-200 hover:text-slate-900 hover:bg-white'
              }`}
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personal.links.portfolio}
              target="_blank"
              rel="noreferrer"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'border-slate-800 hover:text-white hover:bg-slate-900' : 'border-slate-200 hover:text-slate-900 hover:bg-white'
              }`}
              title="Personal Website"
              aria-label="Personal Website"
            >
              <Globe size={18} />
            </a>

            <a
              href={personal.links.emailMailto}
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'border-slate-800 hover:text-white hover:bg-slate-900' : 'border-slate-200 hover:text-slate-900 hover:bg-white'
              }`}
              title="Email"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            <a
              href={personal.links.phoneTel}
              className={`p-2 rounded-lg border transition-colors ${
                darkMode ? 'border-slate-800 hover:text-white hover:bg-slate-900' : 'border-slate-200 hover:text-slate-900 hover:bg-white'
              }`}
              title="Phone"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>

          {/* Right: Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono">
              © {new Date().getFullYear()} Karthikeyan Keppanan
            </span>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all transform hover:-translate-y-0.5 ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-indigo-400 hover:bg-indigo-950/40 hover:border-indigo-500/50'
                  : 'border-slate-200 bg-white text-indigo-600 hover:bg-indigo-50 hover:border-indigo-300 shadow-sm'
              }`}
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
