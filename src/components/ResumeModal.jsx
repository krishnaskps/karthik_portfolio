import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, darkMode }) {
  const { personal, stats, skillCategories, experience, education, certifications, languages } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white print:fixed-none">
      <div 
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl border transition-all ${
          darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        } print:max-w-none print:max-h-none print:shadow-none print:border-none print:rounded-none print:bg-white print:text-black`}
      >
        
        {/* Modal Top Bar (Sticky, hidden in print) */}
        <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 print:hidden ${
          darkMode ? 'border-slate-800 bg-slate-900/90' : 'border-slate-200 bg-white/90'
        }`}>
          <div className="flex items-center gap-2">
            <span className="font-bold text-base">Verified ATS Resume Preview</span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
              Complete CV
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-lg border transition-colors ${
                darkMode ? 'border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 print:p-0 print:overflow-visible">
          
          {/* Header */}
          <div className="border-b pb-6 border-slate-200 dark:border-slate-800 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-indigo-500 print:text-black">
                  {personal.name}
                </h1>
                <p className="text-lg font-semibold mt-0.5 text-slate-400 print:text-gray-800">
                  {personal.title} (9+ Years Enterprise Experience)
                </p>
              </div>
              <div className="text-xs space-y-1 font-mono text-slate-400 print:text-gray-700">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-indigo-400 print:text-black" />
                  <span>{personal.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-cyan-400 print:text-black" />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-purple-400 print:text-black" />
                  <span>{personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GithubIcon size={13} className="text-emerald-400 print:text-black" />
                  <span>github.com/Krishna1-karthik</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 print:text-black mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 print:text-gray-900">
              {personal.fullBio}
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 print:text-black mb-3 font-mono">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.id} className="p-3 rounded-lg border border-slate-800 dark:border-slate-800 print:border-gray-300">
                  <span className="font-bold text-slate-200 print:text-black block mb-1">
                    {cat.name}:
                  </span>
                  <span className="text-slate-400 print:text-gray-700 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 print:text-black mb-4 font-mono">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="font-bold text-slate-100 print:text-black">
                      {exp.role} <span className="text-indigo-400 print:text-gray-800">| {exp.company}</span>
                    </span>
                    <span className="font-mono text-xs text-slate-400 print:text-gray-600">
                      {exp.period} • {exp.location}
                    </span>
                  </div>

                  {exp.featuredProject && (
                    <div className="text-xs font-semibold text-cyan-400 print:text-gray-800">
                      Project: {exp.featuredProject} ({exp.domain})
                    </div>
                  )}

                  <p className="text-xs leading-relaxed text-slate-300 print:text-gray-800">
                    {exp.description}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="list-disc list-inside text-xs space-y-1 text-slate-400 print:text-gray-700 pl-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}

                  <div className="text-[11px] font-mono text-slate-400 print:text-gray-600">
                    <strong>Tech:</strong> {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800 print:border-black">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 print:text-black mb-2 font-mono">
                Education
              </h2>
              {education.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="font-bold text-slate-200 print:text-black">{edu.degree}</div>
                  <div className="text-slate-400 print:text-gray-700">{edu.institution}</div>
                  <div className="font-mono text-emerald-400 print:text-gray-800">Score: {edu.score} • {edu.period}</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-400 print:text-black mb-2 font-mono">
                Certifications & Languages
              </h2>
              <div className="text-xs space-y-2">
                <div>
                  <span className="font-semibold text-slate-200 print:text-black">Certifications: </span>
                  <span className="text-slate-400 print:text-gray-700">Python Certified Professional</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-200 print:text-black">Languages: </span>
                  <span className="text-slate-400 print:text-gray-700">English (Native/Fluent), Malayalam (Native)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
