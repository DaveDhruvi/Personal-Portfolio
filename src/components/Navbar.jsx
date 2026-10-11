import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Experience & Edu' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, onOpenChat }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Minimalist Logo without devops/be tag */}
        <button className="nav-logo" onClick={() => scrollTo('hero')} aria-label="Dhruvi Dave Home">
          <span className="logo-badge">
            <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="7" fill="url(#nav-grad)" />
              <text x="5.5" y="19.5" fontFamily="'Fira Code', monospace" fontSize="12" fontWeight="700" fill="#ffffff">DD</text>
              <defs>
                <linearGradient id="nav-grad" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo-text">
            Dhruvi<span className="logo-accent">.dave</span>
          </span>
        </button>

        {/* Desktop Links */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => scrollTo(item.id)}
                >
                  <span className="nav-hash mono">#</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="btn-chat-trigger" onClick={onOpenChat} title="Open AI Recruiter Assistant">
              <span className="chat-dot" />
              <span>Ask Bot</span>
            </button>

            <a
              href="/Dhruvi_Dave_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary nav-resume-btn"
            >
              <span>Resume</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  );
}
