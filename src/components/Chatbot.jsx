import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const SYSTEM_PROMPT = `You are DhruviBot — a friendly, knowledgeable, and professional AI assistant on Dhruvi Dave's portfolio website.

About Dhruvi Dave:
- She was born on 7th December 2002 and had completed her B.Tech in Computer Engineering from Drs. Kiran & Pallavi Patel Global University (KPGU, Vadodara) with a CGPA of 8.56 in June 2025. She also holds a Diploma in Computer Engineering from Parul Institute of Engineering and Technology with a CGPA of 8.26 (June 2022).

- Profile: Backend Developer & Cloud/DevOps Engineer based in Pune, India.
- Core Skills: ASP.NET Core, C#, Java, Spring Boot, AWS (EC2, ECS, S3, RDS, DynamoDB, IAM, CloudWatch), Docker, CI/CD pipelines, REST APIs, JWT, PostgreSQL, MySQL.
- Experience:
  1. Futran Tech Solutions (Feb 2026 - Sep 2026): .NET Backend Developer in Pune. Developed production APIs with ASP.NET Core, integrated AWS DynamoDB/S3 and PostgreSQL, implemented JWT & RBAC, and increased automated test coverage from 40% to 90%.
  2. WovV Technologies (Feb 2025 - May 2025): Java Backend Intern. Built Java Spring Boot backend services, CSV data processing, retail billing workflows, and optimized query performance.
  3. SoftSages Technology (Jun 2024 - Sep 2024): AWS DevOps Intern. Built automated CI/CD with AWS CodeDeploy and Amazon ECS (35% faster releases), Docker containerization, and IaC (40% fewer deployment errors).
- Education:
  - B.Tech in Computer Engineering from Drs. Kiran & Pallavi Patel Global University (KPGU, Vadodara) | Jun 2022 - Jun 2025 | CGPA: 8.56
  - Diploma in Computer Engineering from Parul Institute of Engineering and Technology | Jun 2019 - Jun 2022 | CGPA: 8.26
- Certifications: Ultimate AWS Certified Cloud Practitioner (CLF-C02) - Oct 2023; Claude in Action - Anthropic (Feb 2026).
- Contact: davedhruvi127@gmail.com | +91 9998001365 | https://www.linkedin.com/in/dhruvi-dave-a6287b193/ | Pune, India.

Your Tone & Style:
- Sound like a natural, smart, and friendly human assistant.
- Keep responses concise: 2 to 4 sentences usually.
- Do NOT output rigid bullet lists with bold prefixes unless the user explicitly asks for a list.
- Highlight her real metrics naturally (like 90% test coverage, 35% faster releases, AWS Certified).
- If asked about hiring or contacting her, warmly provide davedhruvi127@gmail.com and her phone number.`;

const RECRUITER_SUGGESTIONS = [
  "Why hire Dhruvi for Cloud/DevOps?",
  "Tell me about her .NET & AWS experience",
  "What Java & Spring Boot work has she done?",
  "What are her key project metrics?",
  "How can I contact or schedule an interview?",
];

// Natural conversational fallbacks in case of offline/network issues
const CONVERSATIONAL_FALLBACKS = {
  devops: "Dhruvi is an AWS Certified Cloud Practitioner (CLF-C02) who brings proven experience in containerizing microservices with Docker and orchestrating them on Amazon ECS. During her work at SoftSages, she built automated CI/CD pipelines that sped up release cycles by 35% and cut deployment errors by 40% with Infrastructure as Code.",
  dotnet: "At Futran Tech Solutions, Dhruvi worked as a .NET Backend Developer building production APIs and business logic using ASP.NET Core and C#. She integrated PostgreSQL and SQL Server with AWS DynamoDB and S3 for scalable data storage, enforced JWT authentication with role-based access control, and boosted automated test coverage from 40% to 90%.",
  java: "Dhruvi has solid foundations in Java and Spring Boot. At WovV Technologies, she engineered backend services for a retail billing platform, processing high-volume CSV data and tuning SQL queries to optimize response times. She also developed an Inventory Management System in Java with real-time stock alerts and role-based controls.",
  metrics: "Dhruvi is very metrics-driven! A few highlights include raising automated test coverage from 40% to 90% at Futran, accelerating deployment cycles by 35% using AWS CodeDeploy and ECS at SoftSages, reducing deployment errors by 40% through IaC, and graduating with an 8.56 CGPA in Computer Engineering.",
  contact: "You can reach Dhruvi directly via email at davedhruvi127@gmail.com or by phone at +91 9998001365. She is based in Pune and open to Backend and Cloud/DevOps roles on-site, hybrid, or remote!",
  default: "Dhruvi is a Backend Developer and Cloud/DevOps Engineer specializing in ASP.NET Core, Java Spring Boot, and AWS (ECS, Docker, DynamoDB). She has achieved a 90% test coverage record and accelerated CI/CD deployments by 35%. Feel free to ask about her projects, experience, or interview availability!",
};

// Helper to format simple markdown without external libraries
function formatChatText(text) {
  if (!text) return '';
  // Replace **bold** with <strong>
  const boldFormatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  return boldFormatted;
}

export default function Chatbot({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hi there! 👋 I'm **DhruviBot**, Dhruvi's personal AI assistant. Ask me anything about her **Cloud/DevOps work (AWS, Docker, CI/CD)**, **Backend Development (.NET, Java)**, or how to get in touch for an interview!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const getSmartFallback = (query) => {
    const q = query.toLowerCase();
    if (q.includes('devops') || q.includes('cloud') || q.includes('aws') || q.includes('docker') || q.includes('ecs')) {
      return CONVERSATIONAL_FALLBACKS.devops;
    }
    if (q.includes('.net') || q.includes('dotnet') || q.includes('futran') || q.includes('c#')) {
      return CONVERSATIONAL_FALLBACKS.dotnet;
    }
    if (q.includes('java') || q.includes('spring') || q.includes('wovv')) {
      return CONVERSATIONAL_FALLBACKS.java;
    }
    if (q.includes('metric') || q.includes('coverage') || q.includes('stats') || q.includes('achievement')) {
      return CONVERSATIONAL_FALLBACKS.metrics;
    }
    if (q.includes('contact') || q.includes('interview') || q.includes('email') || q.includes('phone') || q.includes('hire')) {
      return CONVERSATIONAL_FALLBACKS.contact;
    }
    return CONVERSATIONAL_FALLBACKS.default;
  };

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;

    const newMessages = [
      ...messages,
      {
        role: 'user',
        content: userText,
      },
    ];

    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const apiKey = process.env.REACT_APP_GROQ_API_KEY;
      if (!apiKey) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              role: 'assistant',
              content: getSmartFallback(userText),
            },
          ]);
          setLoading(false);
        }, 400);
        return;
      }

      // Try available model on Groq account: openai/gpt-oss-120b
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'openai/gpt-oss-120b',
          messages: [
            {
              role: 'system',
              content: SYSTEM_PROMPT,
            },
            ...newMessages.slice(-5).map((m) => ({
              role: m.role,
              content: m.content,
            })),
          ],
          temperature: 0.7,
          max_tokens: 350,
        }),
      });

      const data = await response.json();

      if (data.error || !data.choices?.[0]?.message?.content) {
        throw new Error(data.error?.message || 'Invalid API response');
      }

      const reply = data.choices[0].message.content.trim();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: reply,
        },
      ]);
    } catch (err) {
      console.warn('Using conversational fallback:', err.message);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: getSmartFallback(userText),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chatbot-drawer animate-in">
      {/* Header */}
      <div className="chatbot-header">
        <div className="chatbot-header-info">
          <div className="chatbot-avatar-wrap">
            <span className="chatbot-avatar-icon">⚡</span>
            <span className="online-indicator" />
          </div>
          <div>
            <div className="chatbot-title">DhruviBot</div>
            <div className="chatbot-status-sub mono">Recruiter AI Assistant</div>
          </div>
        </div>

        <button className="chatbot-close-btn" onClick={onClose} aria-label="Close Chat">
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="chatbot-messages-scroll">
        {messages.map((m, i) => (
          <div key={i} className={`chat-message-row ${m.role}`}>
            {m.role === 'assistant' && (
              <div className="assistant-avatar mono">DD</div>
            )}
            <div className="chat-bubble">
              <div
                className="bubble-content"
                dangerouslySetInnerHTML={{ __html: formatChatText(m.content) }}
              />
            </div>
          </div>
        ))}

        {loading && (
          <div className="chat-message-row assistant">
            <div className="assistant-avatar mono">DD</div>
            <div className="chat-bubble typing">
              <span /><span /><span />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggested Questions */}
      <div className="chatbot-suggestions-container">
        <span className="suggestions-label mono">SUGGESTED QUESTIONS:</span>
        <div className="suggestions-scroll">
          {RECRUITER_SUGGESTIONS.map((q) => (
            <button key={q} className="suggestion-pill" onClick={() => sendMessage(q)}>
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input Bar */}
      <div className="chatbot-input-bar">
        <textarea
          ref={inputRef}
          className="chatbot-textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a question about Dhruvi's background..."
          rows={1}
          disabled={loading}
        />
        <button
          className="chatbot-send-button"
          onClick={() => sendMessage()}
          disabled={!input.trim() || loading}
          aria-label="Send message"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>

    </div>
  );
}
