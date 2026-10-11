import React from 'react';
import './About.css';

const PILLARS = [
  { icon: '☁️', title: 'Cloud & DevOps', desc: 'AWS ECS, Docker containerization & CI/CD pipeline automation.' },
  { icon: '⚡', title: 'Backend APIs', desc: 'High-throughput REST services in ASP.NET Core & Java Spring Boot.' },
  { icon: '🗄️', title: 'Data Architecture', desc: 'PostgreSQL, SQL Server, MySQL & Amazon DynamoDB.' },
  { icon: '🛡️', title: 'Security & Quality', desc: 'JWT authentication, RBAC policies & 90% automated test coverage.' },
];

const INTERESTS = [
  'AWS Cloud Architecture',
  'Core Java & Multithreading',
  '.NET Microservices',
  'Docker & ECS Orchestration',
  'CI/CD Pipelines',
  'Smart India Hackathon',
  'Tech Reading',
  'Swimming',
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-label">01. About Me</div>
          <h2 className="section-title">
            Passionate About <span>Scalable Systems</span>
          </h2>
        </div>

        <div className="about-minimal-grid">
          {/* Left: Clean Bio */}
          <div className="about-bio-text">
            <p className="bio-lead">
              I'm <strong>Dhruvi Dave</strong>, a Backend Developer and Cloud/DevOps Engineer based in Pune (hometown: Vadodara, Gujarat).
              I specialize in architecting production-grade services with <strong>ASP.NET Core</strong> and <strong>Java Spring Boot</strong>,
              deployed on <strong>AWS</strong>.
            </p>

            <p className="bio-body">
              My engineering approach prioritizes reliability and automation: from driving automated test coverage to <strong>90%</strong> at Futran Tech Solutions,
              to accelerating release cycles by <strong>35%</strong> using AWS ECS & CodeDeploy at SoftSages.
            </p>

            <div className="interests-row">
              <span className="interests-label mono">Interests:</span>
              <div className="interest-tags">
                {INTERESTS.map((tag) => (
                  <span key={tag} className="tag tag-cyan">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: 4 Clean Pillars */}
          <div className="pillars-grid">
            {PILLARS.map((p) => (
              <div key={p.title} className="pillar-card card">
                <div className="pillar-icon">{p.icon}</div>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
