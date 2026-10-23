import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Smart Expense Tracker',
    subtitle: 'Full-Stack Expense Analytics & AI Categorization',
    period: 'July 2022 – July 2023',
    category: 'Full-Stack',
    featured: true,
    description:
      'React.js and Node.js web application serving 1000+ users with automated expense categorization and intelligent budget targets.',
    bullets: [
      'Automated expense categorization into Food, Transport, and Bills with monthly spending targets.',
      'Integrated OCR receipt data extraction to automate entries, reducing manual data entry by 50%.',
    ],
    tags: ['React.js', 'Node.js', 'Flask', 'OCR', 'Express.js', 'MySQL', 'Recharts'],
    githubUrl: 'https://github.com/DaveDhruvi/Smart-Expense-Tracker',
    liveUrl: 'https://smart-expense-tracker-dd.vercel.app/',
  },
  {
    id: 2,
    title: 'Inventory Management System',
    subtitle: 'High-Performance Java Core & Normalized SQL System',
    period: 'July 2023 – July 2024',
    category: 'Backend & Java',
    featured: true,
    description:
      'Enterprise inventory tracking application with real-time stock alerts, supplier tracking, and Role-Based Access Controls.',
    bullets: [
      'Improved stock tracking efficiency by 50% through optimized CRUD queries and database normalization.',
      'Implemented real-time stock notifications and RBAC, reducing unauthorized access attempts by 30%.',
    ],
    tags: ['Java', 'Swing', 'MySQL', 'JDBC', 'OOP', 'RBAC', 'Multithreading'],
    githubUrl: 'https://github.com/dhruvidave/Inventory-Management-System',
    liveUrl: null,
  },
  {
    id: 3,
    title: 'Placement Management System',
    subtitle: 'Centralized University Recruitment Portal',
    period: 'Academic Project',
    category: 'Full-Stack',
    featured: true,
    description:
      'Full-stack recruitment portal centralizing student registration, resume uploads, and recruiter shortlisting workflows.',
    bullets: [
      'Recruiter portal for job postings, candidate screening, and application progress tracking.',
      'Real-time admin metrics dashboard monitoring placed vs. unplaced student statistics.',
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'SQL', 'MongoDB', 'REST APIs'],
    githubUrl: 'https://github.com/DaveDhruvi/Placement-Management-System',
    liveUrl: null,
  },
  {
    id: 4,
    title: 'MathBot: Math Calculator & Learning Tool',
    subtitle: 'Voice-Enabled Python Educational Tool',
    period: 'Mar 2021 – Mar 2022',
    category: 'Desktop',
    featured: false,
    description:
      'Interactive desktop math calculator featuring step-by-step arithmetic displays and Google Speech API voice input.',
    bullets: [
      'Provides live step-by-step calculations for arithmetic, interest, and geometric operations.',
      'Hands-free, voice-enabled command execution integrated with Google Speech API.',
    ],
    tags: ['Python', 'Tkinter', 'Google Speech API', 'Pyttsx3', 'Voice I/O'],
    githubUrl: 'https://github.com/DaveDhruvi/Mathbot-Math-Calculator-Learning-Tool',
    liveUrl: null,
  },
  {
    id: 5,
    title: 'AI Clinical & Price Prediction Models',
    subtitle: 'Heart Disease Analysis & Bulldozer Price Forecasting',
    period: 'ML Kaggle Research',
    category: 'Python & ML',
    featured: false,
    description:
      'End-to-end Machine Learning pipelines on Kaggle datasets demonstrating feature engineering and model evaluation.',
    bullets: [
      'Heart Disease Analysis: Logistic Regression, Random Forest, and SVM achieving 98% accuracy.',
      'Bulldozer Price Prediction: Regression models (Linear Regression, XGBoost) scoring 0.87 R².',
    ],
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Random Forest', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/dhruvidave/AI-Kaggle-Projects',
    liveUrl: null,
  },
];

const CATEGORIES = ['All', 'Backend & Java', 'Full-Stack', 'Python & ML', 'Desktop'];

const CATEGORY_COLORS = {
  'Backend & Java': '#06b6d4',
  'Full-Stack': '#3b82f6',
  'Python & ML': '#10d9a0',
  'Desktop': '#a855f7',
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = PROJECTS.filter((p) => filter === 'All' || p.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-label">04. Featured Projects</div>
          <h2 className="section-title">
            Engineered with <span>Impact & Code</span>
          </h2>
          <p className="section-subtitle">
            Curated backend applications, automated data systems, and cloud-integrated solutions.
          </p>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="project-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => {
                setFilter(cat);
                setShowAll(false);
              }}
              style={filter === cat && cat !== 'All' ? { borderColor: CATEGORY_COLORS[cat], color: CATEGORY_COLORS[cat] } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {visible.map((p, idx) => (
            <div
              key={p.id}
              className={`project-card card ${p.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="project-top">
                <div
                  className="project-category-badge"
                  style={{
                    color: CATEGORY_COLORS[p.category] || 'var(--cyan)',
                    borderColor: `${CATEGORY_COLORS[p.category] || 'var(--cyan)'}40`,
                    background: `${CATEGORY_COLORS[p.category] || 'var(--cyan)'}15`,
                  }}
                >
                  {p.category}
                </div>

                {/* Top Action Icon Links */}
                <div className="project-links">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-icon-link"
                      title="View GitHub Repository"
                      aria-label={`View ${p.title} on GitHub`}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}

                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-icon-link live-link"
                      title="View Live Website"
                      aria-label={`View live site for ${p.title}`}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <div className="project-period mono">{p.period}</div>
              <p className="project-desc">{p.description}</p>

              <div className="project-bullets">
                <ul>
                  {p.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="bullet-dot" style={{ color: CATEGORY_COLORS[p.category] || 'var(--cyan)' }}>
                        ▸
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons for Live Demo & Code */}
              <div className="project-card-actions">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-btn live"
                  >
                    <span>Live Demo</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                )}
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-btn code"
                  >
                    <span>GitHub Code</span>
                  </a>
                )}
              </div>

              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag tag-cyan">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {filtered.length > 3 && (
          <div className="projects-toggle-area">
            <button className="btn btn-outline" onClick={() => setShowAll(!showAll)}>
              {showAll ? '↑ Show Fewer' : `↓ Show All ${filtered.length} Projects`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
