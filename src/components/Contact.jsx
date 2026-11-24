import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Globe, 
  MessageSquare, 
  Sparkles,
  ArrowUpRight,
  Clock,
  CheckCircle
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ darkMode }) {
  const { personal } = portfolioData;

  const [copiedType, setCopiedType] = useState(null); // 'email' | 'phone' | null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // fallback
      }
    }, 800);
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormStatus('idle');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <MessageSquare size={14} />
            <span>Get in Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Exceptional</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Open to senior engineering roles, technical architecture consulting, and high-impact enterprise collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Badge */}
            <div className={`p-5 rounded-2xl border flex items-center gap-4 ${
              darkMode ? 'bg-slate-900/70 border-emerald-500/30' : 'bg-emerald-50 border-emerald-200'
            }`}>
              <div className="relative flex h-3.5 w-3.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
              </div>
              <div>
                <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Available for Opportunities
                </div>
                <div className="text-xs text-emerald-500 font-medium">
                  Senior Software Engineer / Lead / Architect roles
                </div>
              </div>
            </div>

            {/* Email Card with Copy button */}
            <div className={`p-5 sm:p-6 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-indigo-500/15 text-indigo-400 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email Address
                    </span>
                    <a
                      href={personal.links.emailMailto}
                      className={`block font-semibold text-sm sm:text-base mt-0.5 hover:text-indigo-400 transition-colors ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personal.email, 'email')}
                  className={`p-2 rounded-lg border text-xs font-medium transition-all ${
                    copiedType === 'email'
                      ? 'bg-emerald-500 text-white border-emerald-500'
                      : darkMode
                      ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Phone Card with Copy button */}
            <div className={`p-5 sm:p-6 rounded-2xl border transition-all ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Phone Number
                    </span>
                    <a
                      href={personal.links.phoneTel}
                      className={`block font-semibold text-sm sm:text-base mt-0.5 hover:text-cyan-400 transition-colors ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personal.phone, 'phone')}
                  className={`p-2 rounded-lg border text-xs font-medium transition-all ${
                    copiedType === 'phone'
                      ? 'bg-emerald-500 text-white border-emerald-500'
                      : darkMode
                      ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                      : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  title="Copy phone to clipboard"
                >
                  {copiedType === 'phone' ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className={`p-5 sm:p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-start gap-3.5">
                <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Location & Work Base
                  </span>
                  <div className={`font-semibold text-sm sm:text-base mt-0.5 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {personal.location}
                  </div>
                  <div className="text-xs text-indigo-400 mt-0.5 font-medium">
                    Current work hub: Bengaluru, Karnataka, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Web Profiles */}
            <div className={`p-5 sm:p-6 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-4">
                Online Profiles & Code
              </span>

              <div className="space-y-3">
                <a
                  href={personal.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center justify-between group transition-all ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900'
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon size={18} className="text-indigo-400" />
                    <div>
                      <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        GitHub Repository
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        github.com/Krishna1-karthik
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-indigo-400 transition-colors" />
                </a>

                <a
                  href={personal.links.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 rounded-xl border flex items-center justify-between group transition-all ${
                    darkMode
                      ? 'bg-slate-950/60 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900'
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Globe size={18} className="text-cyan-400" />
                    <div>
                      <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Personal Portfolio Site
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        krishna1-karthik.github.io
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border transition-all ${
            darkMode 
              ? 'bg-slate-900/60 border-slate-800 backdrop-blur-sm' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            {formStatus === 'success' ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center animate-bounce">
                  <CheckCircle size={36} />
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Message Received!
                </h3>
                <p className={`text-sm sm:text-base max-w-md mx-auto ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Thank you for reaching out, <strong className="text-indigo-400">{formData.name}</strong>. I will review your note and respond back to <strong className="text-indigo-400">{formData.email}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Send a Direct Message
                  </h3>
                  <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Feel free to inquire about open positions, project architectures, or technical leadership.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Name <span className="text-indigo-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        darkMode
                          ? 'bg-slate-950/70 border-slate-800 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Email <span className="text-indigo-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        darkMode
                          ? 'bg-slate-950/70 border-slate-800 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Senior .NET / Angular Role Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode
                        ? 'bg-slate-950/70 border-slate-800 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Your Message <span className="text-indigo-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
                      darkMode
                        ? 'bg-slate-950/70 border-slate-800 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-lg shadow-indigo-600/30 transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
