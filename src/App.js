import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import GridBackground from './components/GridBackground';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'timeline', 'skills', 'projects', 'certifications', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <GridBackground />
      <Navbar activeSection={activeSection} onOpenChat={() => setChatOpen(true)} />
      
      <main>
        <Hero onOpenChat={() => setChatOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <button
        className={`chat-fab ${chatOpen ? 'open' : ''}`}
        onClick={() => setChatOpen(!chatOpen)}
        title="Ask Dhruvi's Recruiter AI Bot"
        aria-label="Toggle Recruiter AI Chatbot"
      >
        {!chatOpen && <span className="fab-ping" />}
        <span className="fab-icon">{chatOpen ? '✕' : '💬'}</span>
        <span className="fab-label">{chatOpen ? 'Close' : 'Ask AI Bot'}</span>
      </button>

      {chatOpen && <Chatbot onClose={() => setChatOpen(false)} />}
    </div>
  );
}

export default App;
