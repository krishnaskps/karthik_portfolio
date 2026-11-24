import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Top sticky navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main single-page content sections */}
      <main>
        {/* Section 1: Home / Hero */}
        <Hero
          darkMode={darkMode}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Section 2: About Me */}
        <About
          darkMode={darkMode}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Section 3: Technical Skills */}
        <Skills
          darkMode={darkMode}
        />

        {/* Section 4: Work Experience & Featured Projects */}
        <Experience
          darkMode={darkMode}
        />

        {/* Section 5: Contact */}
        <Contact
          darkMode={darkMode}
        />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
      />

      {/* ATS Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
