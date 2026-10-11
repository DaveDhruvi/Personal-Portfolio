import React, { useState, useEffect } from 'react';
import './Hero.css';

const ROLES = [
  'Backend Developer (.NET & Java)',
  'AWS Cloud & DevOps Engineer',
  'Spring Boot & ASP.NET Core Specialist',
  'CI/CD & Microservices Architect',
];

export default function Hero({ onOpenChat }) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 50);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 25);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Clean Minimalist Bio */}
        <div className="hero-left">
          <div className="hero-status-pill animate-up">
            <span className="status-indicator">
              <span className="indicator-ping" />
              <span className="indicator-dot" />
            </span>
            <span className="mono status-text">Available for Backend & Cloud/DevOps Roles</span>
          </div>

          <h1 className="hero-name animate-up" style={{ animationDelay: '0.12s' }}>
            Dhruvi <span className="text-gradient">Dave</span>
          </h1>

          <div className="hero-role-wrapper animate-up" style={{ animationDelay: '0.22s' }}>
            <span className="role-prefix mono">&gt; </span>
            <span className="role-title">{displayed}</span>
            <span className="cursor-caret">_</span>
          </div>

          <p className="hero-description animate-up" style={{ animationDelay: '0.32s' }}>
            Backend engineer focused on scalable <strong>ASP.NET Core</strong> & <strong>Java Spring Boot</strong> services,
            cloud infrastructure on <strong>AWS</strong>, and automated <strong>CI/CD</strong> pipelines.
          </p>

          <div className="hero-cta-group animate-up" style={{ animationDelay: '0.42s' }}>
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              <span>View Projects</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>

            <button className="btn btn-outline" onClick={onOpenChat}>
              <span>💬 Ask Recruiter Bot</span>
            </button>

            <a
              href="/Dhruvi_Dave_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Resume ↗
            </a>
          </div>

          {/* Clean Minimalist Metrics Strip */}
          <div className="hero-stats-row animate-up" style={{ animationDelay: '0.52s' }}>
            <div className="hero-stat-card">
              <span className="stat-number text-cyan">90%</span>
              <span className="stat-caption mono">Test Coverage</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-card">
              <span className="stat-number text-blue">35%</span>
              <span className="stat-caption mono">Faster Releases</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-card">
              <span className="stat-number text-green">40%</span>
              <span className="stat-caption mono">Fewer IaC Errors</span>
            </div>
          </div>
        </div>

        {/* Right Column: Dedicated Space for Photo */}
        <div className="hero-right animate-in" style={{ animationDelay: '0.25s' }}>
          <div className="photo-container">
            <div className="photo-backdrop-glow" />
            
            <div className="photo-frame">
              <img
                src="/dhruvi-photo.jpeg"
                alt="Dhruvi Dave"
                className="photo-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/dhruvi-photo.svg';
                }}
              />

              <div className="photo-corner top-left" />
              <div className="photo-corner top-right" />
              <div className="photo-corner bottom-left" />
              <div className="photo-corner bottom-right" />
            </div>

            {/* Floating Tech Badges */}
            <div className="photo-floating-pill pill-top">
              <span className="pill-dot" />
              <span className="mono">AWS Certified (CLF-C02)</span>
            </div>

            <div className="photo-floating-pill pill-bottom">
              <span className="pill-icon">⚡</span>
              <span className="mono">Java &amp; .NET Core</span>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle Scroll Cue */}
      <div className="hero-scroll-cue">
        <span className="mono">SCROLL TO EXPLORE</span>
        <div className="scroll-track">
          <div className="scroll-thumb" />
        </div>
      </div>
    </section>
  );
}
