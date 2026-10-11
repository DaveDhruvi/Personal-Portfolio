import React, { useState } from 'react';
import './Experience.css';

const TIMELINE_DATA = [
  {
    type: 'work',
    role: '.NET Backend Developer',
    org: 'Futran Tech Solutions',
    period: 'Feb 2026 – Sep 2026',
    location: 'On-Site, Pune',
    badge: 'Production Backend',
    color: '#06b6d4',
    metric: '40% → 90% Test Coverage',
    bullets: [
      'Developed and maintained production backend APIs & business logic using ASP.NET Core.',
      'Integrated PostgreSQL/SQL Server with AWS services including DynamoDB and S3 for application data & storage.',
      'Implemented JWT authentication and Role-Based Access Control (RBAC) for secure REST APIs.',
      'Increased automated test coverage from 40% to 90%, supporting reliable CI/CD releases.',
    ],
    tags: ['ASP.NET Core', 'C#', 'AWS DynamoDB', 'AWS S3', 'PostgreSQL', 'JWT', 'RBAC', 'CI/CD'],
  },
  {
    type: 'work',
    role: 'Backend Engineer Intern',
    org: 'WovV Technologies',
    period: 'Feb 2025 – May 2025',
    location: 'On-Site',
    badge: 'Java & Spring Boot',
    color: '#3b82f6',
    metric: 'API Latency Tuning',
    bullets: [
      'Developed backend services with Java & Spring Boot, applying OOP principles for business logic and data workflows.',
      'Contributed to retail bill management backend, processing high-volume client CSV datasets.',
      'Improved service-layer logic and database queries to optimize API response times.',
      'Conducted end-to-end API testing and debugging using Postman.',
    ],
    tags: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Postman', 'CSV Processing', 'OOP'],
  },
  {
    type: 'education',
    role: 'B.Tech in Computer Engineering',
    org: 'Drs. Kiran & Pallavi Patel Global University',
    period: 'Jun 2022 – Jun 2025',
    location: 'Vadodara, Gujarat',
    badge: 'CGPA: 8.56 / 10',
    color: '#10d9a0',
    metric: 'Degree Completed',
    bullets: [
      'Specialized in Cloud Computing, Distributed Systems, Software Engineering, and Database Architecture.',
      'Active participant in Smart India Hackathon (SIH) developing IoT & cloud tracking systems.',
      'Served as Student Ambassador for the G20 Club of Vadodara driving sustainability initiatives.',
    ],
    tags: ['Cloud Computing', 'Database Systems', 'Software Engineering', 'DSA', 'OOP'],
  },
  {
    type: 'work',
    role: 'AWS DevOps Engineer Intern',
    org: 'SoftSages Technology',
    period: 'Jun 2024 – Sep 2024',
    location: 'On-Site',
    badge: 'AWS Cloud & CI/CD',
    color: '#06b6d4',
    metric: '+35% Release Speed',
    bullets: [
      'Built automated CI/CD pipelines with AWS CodeDeploy and Amazon ECS, accelerating releases by 35%.',
      'Containerized applications with Docker and orchestrated workloads on Amazon ECS for scalable deployment.',
      'Standardized environment provisioning with IaC across EC2, S3, RDS, and IAM, cutting errors by 40%.',
      'Configured Amazon CloudWatch monitors, automated alerts, and log metrics.',
    ],
    tags: ['AWS ECS', 'Docker', 'AWS CodeDeploy', 'EC2', 'S3', 'RDS', 'IAM', 'CloudWatch', 'IaC'],
  },
  {
    type: 'education',
    role: 'Diploma in Computer Engineering',
    org: 'Parul Institute of Engineering and Technology',
    period: 'Jun 2019 – Jun 2022',
    location: 'Vadodara, Gujarat',
    badge: 'CGPA: 8.26 / 10',
    color: '#10d9a0',
    metric: 'Diploma Completed',
    bullets: [
      'Built foundational programming expertise in C/C++, Java, Object-Oriented Programming, and SQL databases.',
      'Graduated with First Class distinction (CGPA: 8.26 / 10).',
    ],
    tags: ['Core Java', 'C / C++', 'Relational Databases', 'Algorithms'],
  },
];

export default function Experience() {
  const [filter, setFilter] = useState('all');

  const filtered = TIMELINE_DATA.filter((item) =>
    filter === 'all' ? true : item.type === filter
  );

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-label">02. Career Timeline</div>
          <h2 className="section-title">
            Experience & <span>Education</span>
          </h2>
          <p className="section-subtitle">
            Chronological journey through enterprise software development, cloud operations, and academic foundations.
          </p>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="timeline-filter-tabs">
          <button
            className={`t-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Timeline
          </button>
          <button
            className={`t-filter-btn ${filter === 'work' ? 'active' : ''}`}
            onClick={() => setFilter('work')}
          >
            💼 Work Experience
          </button>
          <button
            className={`t-filter-btn ${filter === 'education' ? 'active' : ''}`}
            onClick={() => setFilter('education')}
          >
            🎓 Education
          </button>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="vertical-timeline">
          <div className="timeline-spine" />

          {filtered.map((item, idx) => (
            <div key={idx} className={`timeline-entry ${item.type}`}>
              
              {/* Center Dot Node */}
              <div
                className="timeline-node"
                style={{
                  borderColor: item.color,
                  boxShadow: `0 0 12px ${item.color}66`,
                }}
              >
                <span className="node-inner" style={{ background: item.color }} />
              </div>

              {/* Timeline Card */}
              <div className="timeline-box card">
                <div className="t-box-header">
                  <div>
                    <span
                      className="t-badge mono"
                      style={{
                        color: item.color,
                        background: `${item.color}15`,
                        borderColor: `${item.color}35`,
                      }}
                    >
                      {item.badge}
                    </span>
                    <h3 className="t-role">{item.role}</h3>
                    <div className="t-org-row">
                      <span className="t-org">{item.org}</span>
                      <span className="t-location mono">📍 {item.location}</span>
                    </div>
                  </div>

                  <div className="t-date-col">
                    <span className="t-period mono">{item.period}</span>
                    {item.metric && (
                      <span className="t-metric mono">{item.metric}</span>
                    )}
                  </div>
                </div>

                <ul className="t-bullets">
                  {item.bullets.map((b, i) => (
                    <li key={i}>
                      <span className="t-bullet-dot" style={{ color: item.color }}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="t-tags-row">
                  {item.tags.map((t) => (
                    <span key={t} className="tag tag-cyan">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
