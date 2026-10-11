import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    category: 'Cloud & DevOps (AWS)',
    icon: '☁️',
    color: '#06b6d4',
    badge: 'Core Focus',
    skills: [
      { name: 'Amazon ECS & Docker Orchestration', level: 90 },
      { name: 'CI/CD & AWS CodeDeploy', level: 88 },
      { name: 'AWS Core (EC2, S3, RDS, IAM)', level: 92 },
      { name: 'Infrastructure as Code (IaC)', level: 85 },
      { name: 'Amazon CloudWatch & Observability', level: 86 },
    ],
  },
  {
    category: 'Backend Development (.NET & Java)',
    icon: '⚡',
    color: '#3b82f6',
    badge: 'Backend Core',
    skills: [
      { name: 'ASP.NET Core & C#', level: 90 },
      { name: 'Java & Spring Boot', level: 92 },
      { name: 'Core Java & Multithreading', level: 88 },
      { name: 'REST APIs, JWT & RBAC', level: 94 },
      { name: 'Swagger / OpenAPI Specs', level: 90 },
    ],
  },
  {
    category: 'Databases & Cloud Storage',
    icon: '🗄️',
    color: '#10d9a0',
    badge: 'Data Layer',
    skills: [
      { name: 'PostgreSQL & SQL Server', level: 88 },
      { name: 'Amazon DynamoDB (NoSQL)', level: 85 },
      { name: 'MySQL & JDBC Integration', level: 90 },
      { name: 'Database Normalization', level: 86 },
    ],
  },
  {
    category: 'Testing & Developer Tools',
    icon: '🛠️',
    color: '#a855f7',
    badge: 'Quality & Tools',
    skills: [
      { name: 'Automated Unit Testing & JUnit', level: 90 },
      { name: 'Postman & API Integration Testing', level: 94 },
      { name: 'Git & GitHub Workflows', level: 90 },
      { name: 'Python & Shell Scripting', level: 84 },
    ],
  },
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="container" ref={containerRef}>
        
        <div className="section-header">
          <div className="section-label">03. Technical Skills</div>
          <h2 className="section-title">
            Cloud, DevOps & <span>Backend Stack</span>
          </h2>
          <p className="section-subtitle">
            Core technical proficiencies across cloud automation, resilient backend architectures, and database design.
          </p>
        </div>

        {/* Minimalist Grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.category} className="skill-category-card card">
              <div className="cat-card-header">
                <div className="cat-icon-wrap" style={{ background: `${cat.color}15`, borderColor: `${cat.color}35` }}>
                  <span className="cat-icon">{cat.icon}</span>
                </div>
                <div>
                  <span className="cat-badge mono" style={{ color: cat.color }}>
                    {cat.badge}
                  </span>
                  <h3 className="cat-title">{cat.category}</h3>
                </div>
              </div>

              <div className="skills-items-list">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <div className="skill-meta">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct mono" style={{ color: cat.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: animate ? `${skill.level}%` : '0%',
                          background: `linear-gradient(90deg, ${cat.color}aa, ${cat.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
