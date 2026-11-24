import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Moon, Sun, ArrowUpRight, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-sm tracking-tight ${
                darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
              }`}>
                <span className="text-indigo-500 font-mono font-bold">&lt;</span>
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">KK</span>
                <span className="text-indigo-500 font-mono font-bold">/&gt;</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-base tracking-tight transition-colors ${
                darkMode ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
              }`}>
                Karthikeyan K.
              </span>
              <span className="text-xs text-indigo-400 font-mono font-medium">Senior Software Engineer</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all relative ${
                    isActive
                      ? darkMode
                        ? 'text-white bg-indigo-500/15'
                        : 'text-indigo-600 bg-indigo-50'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-300 hover:bg-slate-800'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-md shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <FileText size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-300'
                  : 'border-slate-200 bg-slate-100 text-slate-700'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-200'
                  : 'border-slate-200 bg-slate-100 text-slate-800'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 ${
            darkMode
              ? 'bg-slate-950/95 border-slate-800'
              : 'bg-white/95 border-slate-200'
          }`}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                activeSection === link.id
                  ? darkMode
                    ? 'text-white bg-indigo-500/20'
                    : 'text-indigo-600 bg-indigo-50'
                  : darkMode
                  ? 'text-slate-300 hover:bg-slate-900'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={16} className="opacity-50" />
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md shadow-indigo-600/20"
            >
              <FileText size={18} />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
