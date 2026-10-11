import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('davedhruvi127@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const CONTACT_LINKS = [
    {
      label: 'Email',
      value: 'davedhruvi127@gmail.com',
      sub: 'Direct Mail Inbox',
      href: 'mailto:davedhruvi127@gmail.com',
      color: '#06b6d4',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'in/dhruvi-dave-a6287b193',
      sub: 'Professional Network',
      href: 'https://www.linkedin.com/in/dhruvi-dave-a6287b193/',
      color: '#3b82f6',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'github.com/DaveDhruvi',
      sub: 'Code Repositories',
      href: 'http://github.com/DaveDhruvi',
      color: '#e2e8f0',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+91 9998001365',
      sub: 'Call / WhatsApp',
      href: 'tel:+919998001365',
      color: '#10d9a0',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-label">06. Get in Touch</div>
          <h2 className="section-title">
            Let's Build <span>Together</span>
          </h2>
          <p className="section-subtitle">
            Open to full-time Backend Developer and Cloud/DevOps opportunities in Pune, Hybrid, or Remote.
          </p>
        </div>

        <div className="contact-layout">
          
          {/* Left Side: Recruiter Pitch & Details */}
          <div className="contact-info-card card">
            <span className="mono info-pill">RECRUITER QUICK CONNECT</span>
            <h3 className="info-title">Looking for an engineer who delivers?</h3>
            <p className="info-text">
              Whether you're scaling a microservices backend in <strong>ASP.NET Core</strong>, building distributed <strong>Java Spring Boot</strong> services,
              or automating your <strong>AWS / Docker / ECS</strong> deployment pipelines, I bring tested execution and high standards.
            </p>

            <div className="contact-meta-list">
              <div className="meta-item">
                <span className="meta-label mono">Current Location:</span>
                <span className="meta-val">Pune, Maharashtra, India</span>
              </div>
              <div className="meta-item">
                <span className="meta-label mono">Availability:</span>
                <span className="meta-val text-green">Immediate to Short Notice</span>
              </div>
              <div className="meta-item">
                <span className="meta-label mono">Roles of Interest:</span>
                <span className="meta-val">Backend Developer (.NET / Java), AWS Cloud / DevOps Engineer</span>
              </div>
            </div>

            <div className="contact-actions-row">
              <a href="mailto:davedhruvi127@gmail.com" className="btn btn-primary">
                <span>Send Direct Email</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <button className="btn btn-outline" onClick={copyEmail}>
                <span>{copied ? '✔ Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>

              <a
                href="/Dhruvi_Dave_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Download Resume ↗
              </a>
            </div>
          </div>

          {/* Right Side: Channel Cards */}
          <div className="contact-channels-grid">
            {CONTACT_LINKS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('mailto') || c.href.startsWith('tel') ? '_self' : '_blank'}
                rel="noreferrer"
                className="channel-card card"
              >
                <div className="channel-icon-wrap" style={{ color: c.color, background: `${c.color}15`, borderColor: `${c.color}35` }}>
                  {c.icon}
                </div>
                <div className="channel-body">
                  <span className="channel-label mono">{c.label}</span>
                  <div className="channel-val">{c.value}</div>
                  <span className="channel-sub">{c.sub}</span>
                </div>
                <div className="channel-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* Footer */}
        <footer className="portfolio-footer">
          <div className="footer-line" />
          <div className="footer-content">
            <p className="footer-text mono">
              Designed & Built with precision for <span className="text-cyan">Dhruvi Dave</span>
            </p>
            <p className="footer-sub mono">
              Tech Stack: React 18 · Cloud & DevOps Theme · AI Recruiter Assistant
            </p>
          </div>
        </footer>

      </div>
    </section>
  );
}
