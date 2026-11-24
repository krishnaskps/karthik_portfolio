import React from 'react';
import { 
  User, 
  Target, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Cloud, 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  Languages, 
  FileText, 
  ArrowUpRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ darkMode, onOpenResume }) {
  const { personal, strengths, technicalInterests, education, certifications, languages } = portfolioData;

  const strengthIcons = {
    Layers: Layers,
    ShieldCheck: ShieldCheck,
    Cloud: Cloud,
    Cpu: Cpu,
    Zap: Zap,
    CheckCircle2: CheckCircle2
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <User size={14} />
            <span>About Karthikeyan</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Scalable Systems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Precision & Resilience</span>
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Over 9 years of architecting robust enterprise solutions across Banking, Healthcare, Government, and Education domains.
          </p>
        </div>

        {/* Top Split: Professional Bio & Career Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Professional Introduction & Background (7 cols) */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border transition-all ${
            darkMode 
              ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-sm' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h3 className={`text-xl font-bold mb-4 flex items-center gap-2.5 ${
              darkMode ? 'text-slate-100' : 'text-slate-900'
            }`}>
              <span className="p-2 rounded-lg bg-indigo-500/15 text-indigo-400">
                <User size={20} />
              </span>
              <span>Professional Background</span>
            </h3>

            <div className={`space-y-4 text-base leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <p>
                {personal.fullBio}
              </p>
              <p>
                Currently serving as a <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Senior Software Engineer at Mphasis</strong> in Bengaluru, leading full-stack engineering for <strong className={darkMode ? 'text-indigo-300' : 'text-indigo-700'}>Charles Schwab Advisor Services</strong>. In this role, I architect resilient REST APIs using C# 12 and .NET 8, along with Angular 19 Single-SPA micro-frontends supporting investment advisors managing billions in custody assets.
              </p>
              <p>
                Prior to this, I developed cloud-native behavioral healthcare platforms at <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Qualifacts</strong> utilizing AWS serverless (Lambda, ECS, DynamoDB, SQS/SNS), spearheaded enterprise integrations at <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Cyspan</strong>, and engineered state education examination portals at <strong className={darkMode ? 'text-white' : 'text-slate-900'}>KSEEB - NIC</strong> serving millions of students.
              </p>
            </div>

            {/* Quick Resume CTA inside bio */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className={`block text-xs font-semibold uppercase tracking-wider ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Need a full verified resume?
                </span>
                <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Download complete ATS-friendly CV formatted with all credentials
                </span>
              </div>
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
              >
                <FileText size={16} />
                <span>View Full CV</span>
              </button>
            </div>
          </div>

          {/* Right: Career Goals & Technical Interests (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Career Goals */}
            <div className={`p-6 sm:p-7 rounded-2xl border ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-sm' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-lg font-bold mb-3 flex items-center gap-2.5 ${
                darkMode ? 'text-slate-100' : 'text-slate-900'
              }`}>
                <span className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400">
                  <Target size={18} />
                </span>
                <span>Career Goals</span>
              </h3>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {personal.careerGoals}
              </p>
            </div>

            {/* Technical Interests */}
            <div className={`p-6 sm:p-7 rounded-2xl border flex-1 ${
              darkMode 
                ? 'bg-slate-900/60 border-slate-800/80 backdrop-blur-sm' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <h3 className={`text-lg font-bold mb-4 flex items-center gap-2.5 ${
                darkMode ? 'text-slate-100' : 'text-slate-900'
              }`}>
                <span className="p-2 rounded-lg bg-cyan-500/15 text-cyan-400">
                  <Sparkles size={18} />
                </span>
                <span>Technical Interests</span>
              </h3>
              <ul className="space-y-2.5">
                {personal.technicalInterests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {interest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Key Strengths Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Key Personal & Technical Strengths
            </h3>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              The core principles that drive high-throughput delivery and architectural excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item, idx) => {
              const IconComp = strengthIcons[item.icon] || CheckCircle2;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-slate-900/50 border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/80 shadow-sm'
                      : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 text-indigo-400 flex items-center justify-center mb-4">
                    <IconComp size={24} />
                  </div>
                  <h4 className={`text-lg font-bold mb-2 ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                    {item.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education, Certifications & Languages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Education Card */}
          <div className={`p-6 sm:p-7 rounded-2xl border ${
            darkMode 
              ? 'bg-slate-900/60 border-slate-800/80' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/15 text-blue-400">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Education
                </h4>
                <span className="text-xs text-blue-400 font-mono">Master's Degree</span>
              </div>
            </div>

            {education.map((edu, idx) => (
              <div key={idx} className="space-y-2">
                <div className={`font-bold text-base ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                  {edu.degree}
                </div>
                <div className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {edu.institution}
                </div>
                <div className="flex items-center justify-between text-xs py-1 text-slate-400 font-mono">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/15 text-emerald-400 font-mono font-bold text-xs mt-1">
                  Score: {edu.score}
                </div>
                <p className={`text-xs mt-3 pt-3 border-t border-slate-800/60 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications Card */}
          <div className={`p-6 sm:p-7 rounded-2xl border ${
            darkMode 
              ? 'bg-slate-900/60 border-slate-800/80' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400">
                <Award size={22} />
              </div>
              <div>
                <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Certifications
                </h4>
                <span className="text-xs text-amber-400 font-mono">Verified Credentials</span>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${
                  darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`font-bold text-base ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                      {cert.title}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">
                      {cert.year}
                    </span>
                  </div>
                  <span className={`text-xs block mb-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {cert.issuer}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className={`p-6 sm:p-7 rounded-2xl border ${
            darkMode 
              ? 'bg-slate-900/60 border-slate-800/80' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400">
                <Languages size={22} />
              </div>
              <div>
                <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Languages
                </h4>
                <span className="text-xs text-purple-400 font-mono">Communication</span>
              </div>
            </div>

            <div className="space-y-3">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex items-center justify-between ${
                    darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div>
                    <div className={`font-bold text-base ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>
                      {lang.name}
                    </div>
                    <div className="text-xs text-indigo-400 font-medium">
                      {lang.level}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-6 pt-4 border-t text-xs ${
              darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
            }`}>
              Open to global engineering collaboration across distributed international teams.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
