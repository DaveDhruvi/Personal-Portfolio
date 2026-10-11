import React from 'react';
import './Certifications.css';

const CERTS = [
  {
    id: 'aws',
    title: 'Ultimate AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services (AWS)',
    date: 'Oct 2023',
    credentialId: 'CLF-C02 Validated',
    icon: '☁️',
    color: '#f59e0b',
    badgeText: 'AWS Certified',
    description: 'Comprehensive validation of AWS Cloud fluency, cloud security best practices, core services (EC2, ECS, S3, RDS, DynamoDB, IAM), and cost optimization.',
    skills: ['AWS Cloud', 'IAM Security', 'EC2 & ECS', 'DynamoDB', 'S3 & RDS', 'CloudWatch'],
  },
  {
    id: 'claude',
    title: 'Claude in Action – Anthropic',
    issuer: 'Anthropic',
    date: 'Feb 2026',
    credentialId: 'Anthropic Certified',
    icon: '⚡',
    color: '#06b6d4',
    badgeText: 'AI Engineering',
    description: 'Hands-on training in leveraging advanced LLM reasoning, API function calling, prompt engineering architectures, and agentic workflows.',
    skills: ['Anthropic Claude', 'Agentic AI', 'Prompt Architecture', 'Tool Integration'],
  },
];

const ACHIEVEMENTS = [
  {
    title: 'Smart India Hackathon (SIH)',
    role: 'IoT & Cloud Anti-Theft Project Team',
    type: 'National Hackathon',
    icon: '🏆',
    color: '#3b82f6',
    description: 'Collaborated in designing an IoT and cloud-based Vehicle Anti-Theft System featuring real-time GPS telemetry, cloud sensor streaming, and automated remote lockdown triggers.',
    tags: ['IoT Sensors', 'Cloud Telemetry', 'Real-Time Tracking', 'Hackathon'],
  },
  {
    title: 'Student Ambassador – G20 Club Vadodara',
    role: 'Community Ambassador & Outreach Lead',
    type: 'Leadership & Impact',
    icon: '🌱',
    color: '#10d9a0',
    description: 'Spearheaded youth engagement initiatives for the G20 Club in Vadodara, driving environmental sustainability campaigns, educational seminars, and regional tree plantation drives.',
    tags: ['Leadership', 'Sustainability', 'Public Engagement', 'Event Organizing'],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certs-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-label">05. Credentials & Recognition</div>
          <h2 className="section-title">
            Certifications & <span>Achievements</span>
          </h2>
          <p className="section-subtitle">
            Formal cloud accreditation, state-of-the-art AI training, and national hackathon participation.
          </p>
        </div>

        <div className="certs-layout">
          
          {/* Left Column: Certifications */}
          <div className="certs-column">
            <h3 className="sub-title mono">{"//"} Professional Certifications</h3>
            <div className="certs-cards-list">
              {CERTS.map((cert) => (
                <div key={cert.id} className="cert-card card">
                  <div className="cert-top-row">
                    <div className="cert-icon-container" style={{ background: `${cert.color}15`, borderColor: `${cert.color}35` }}>
                      <span className="cert-icon-symbol">{cert.icon}</span>
                    </div>
                    <div className="cert-badge-wrap">
                      <span className="cert-tag mono" style={{ color: cert.color, borderColor: `${cert.color}40`, background: `${cert.color}15` }}>
                        {cert.badgeText}
                      </span>
                    </div>
                  </div>

                  <h4 className="cert-card-title">{cert.title}</h4>
                  <div className="cert-issuer-row">
                    <span className="cert-org">{cert.issuer}</span>
                    <span className="cert-date mono">{cert.date}</span>
                  </div>

                  <p className="cert-desc">{cert.description}</p>

                  <div className="cert-skills-chips">
                    {cert.skills.map((s) => (
                      <span key={s} className="tag tag-cyan">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hackathons & Community */}
          <div className="achievements-column">
            <h3 className="sub-title mono">{"//"} Hackathons & Leadership</h3>
            <div className="achieve-cards-list">
              {ACHIEVEMENTS.map((item, i) => (
                <div key={i} className="achieve-card card">
                  <div className="achieve-top">
                    <span className="achieve-icon">{item.icon}</span>
                    <span className="achieve-type tag mono" style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}15` }}>
                      {item.type}
                    </span>
                  </div>

                  <h4 className="achieve-title">{item.title}</h4>
                  <div className="achieve-role mono">{item.role}</div>
                  <p className="achieve-desc">{item.description}</p>

                  <div className="achieve-tags">
                    {item.tags.map((t) => (
                      <span key={t} className="tag tag-green">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
