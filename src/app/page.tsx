'use client';

import { useState, useEffect, useRef } from 'react';
import { Minus, Maximize2, X } from 'lucide-react';
import Projects from '@/components/home/projects';
import Experience from '@/components/home/experience';

const PHRASES = [
  { pre: 'CS @ ', hl: 'Brown', post: '.' },
  { pre: 'founded ', hl: 'Epsilon', post: '.' },
  { pre: 'co-founded ', hl: 'internships.dev', post: '.' },
  { pre: 'SWE intern @ ', hl: 'Microsoft', post: '.' },
];

function useCyclingText() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setIdx(i => (i + 1) % PHRASES.length);
          setVisible(true);
        }, 420);
      }, 3000);
      return () => clearInterval(interval);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return { phrase: PHRASES[idx], visible };
}

function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  const { phrase, visible } = useCyclingText();
  useScrollReveal();

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" id="hero">
<div className="hero-grid" />

        <div className="hero-split">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-role">Software Engineer</div>
            <h1 className="hero-name">
              <span className="word"><span>Randall</span></span>
              {' '}
              <span className="word"><span>Sim.</span></span>
            </h1>
            <div className="hero-cycle-wrap">
              <div
                className="hero-cycle"
                style={{
                  transform: visible ? 'translateY(0)' : 'translateY(-110%)',
                  opacity: visible ? 1 : 0,
                  transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
                }}
              >
                {phrase.pre}
                <span className="highlight">{phrase.hl}</span>
                {phrase.post}
              </div>
            </div>
            <p className="hero-sub">
              CS student at Brown University — incoming at{' '}
              <span style={{ display: 'inline-flex', alignItems: 'center', verticalAlign: 'middle', margin: '0 2px' }}>
                <svg width="13" height="13" viewBox="0 0 23 23" fill="none" style={{ display: 'inline', verticalAlign: 'middle' }}>
                  <path d="M0 0h11v11H0V0zm12 0h11v11H12V0zM0 12h11v11H0V12zm12 0h11v11H12V12z" fill="#F25022"/>
                  <path d="M12 0h11v11H12V0z" fill="#7FBA00"/>
                  <path d="M0 12h11v11H0V12z" fill="#00A4EF"/>
                  <path d="M12 12h11v11H12V12z" fill="#FFB900"/>
                </svg>
              </span>
              {' '}Microsoft. I love shipping things that matter to real communities.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="site-btn site-btn-solid">View Projects</a>
              <a href="#about" className="site-btn site-btn-outline">About Me</a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">3,300+</span>
                <span className="hero-stat-label">Daily active users</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">400+</span>
                <span className="hero-stat-label">Orgs managed</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">3,000+</span>
                <span className="hero-stat-label">Followers acquired</span>
              </div>
            </div>
          </div>

          {/* Right: terminal card */}
          <div className="hero-right">
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="terminal-title">randallsim — projects</span>
                <div className="terminal-dots">
                  <Minus size={11} />
                  <Maximize2 size={11} />
                  <X size={11} />
                </div>
              </div>
              <div className="terminal-body">
                <div><span className="t-prompt">$ </span><span className="t-cmd">randall status</span></div>
                <div className="t-spacer" />

                <div className="terminal-status-row">
                  <span className="status-name">epsilon.stuysu.org</span>
                  <span className="t-dim"> - live</span>
                </div>
                <div className="terminal-status-row">
                  <span className="status-name">internships.dev</span>
                  <span className="t-dim"> - live</span>
                </div>
                <div className="terminal-status-row">
                  <span className="status-name">news-to-go</span>
                  <span className="t-dim"> - shipped</span>
                </div>

                <div className="t-spacer" />
                <div><span className="t-prompt">$ </span><span className="t-cmd">randall --stack</span></div>
                <div className="t-spacer" />
                <div><span className="t-key">frontend </span><span className="t-dim">→ </span><span className="t-val">React, TypeScript, Next.js</span></div>
                <div><span className="t-key">backend  </span><span className="t-dim">→ </span><span className="t-val">Node.js, Python, Go, Rust</span></div>
                <div><span className="t-key">infra    </span><span className="t-dim">→ </span><span className="t-val">Docker, PostgreSQL</span></div>
                <div className="t-spacer" />
                <div><span className="t-dim">{'// CS @ '}</span><span className="t-orange">Brown University</span><span className="t-dim">{" '28"}</span></div>
                <div>
                  <span className="t-prompt">$ </span>
                  <span style={{ display: 'inline-block', width: 7, height: 13, background: '#4ade80', verticalAlign: 'middle', borderRadius: 1, animation: 'blink 1.2s step-end infinite' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── About ── */}
      <div id="about">
        <div className="site-section">
          <p className="section-label reveal">About</p>
          <div className="about-grid">
            <div className="reveal">
              <h2 className="about-heading">About Me</h2>
              <p className="about-text" style={{ marginTop: 16 }}>
                {`I'm a developer passionate about building feature rich experiences.
                Particularly, I love building products that serve people and communities.
                Whether it's building the `}
                <a href="https://epsilon.stuysu.org/" target="_blank" rel="noreferrer">everything</a>
                {` app for my school, tools for my organizations,
                or `}
                <a href="https://github.com/randall-sim/fish-net" target="_blank" rel="noreferrer">breaking</a>
                {` other people's projects, I hope to do some cool things and meet some cool people
                along the way :)`}
              </p>
              <div style={{ display: 'flex', gap: 8, marginTop: 24, flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.75rem', padding: '4px 12px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 9999, color: '#888' }}>Distributed Systems</span>
                <span style={{ fontSize: '0.75rem', padding: '4px 12px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 9999, color: '#888' }}>Artificial Intelligence</span>
                <span style={{ fontSize: '0.75rem', padding: '4px 12px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 9999, color: '#888' }}>Startups</span>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
                <a href="mailto:randallsim.me@gmail.com" className="site-btn site-btn-outline" aria-label="Email" style={{ padding: '7px 10px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a href="https://www.youtube.com/@randallsim" target="_blank" rel="noreferrer" className="site-btn site-btn-outline" aria-label="YouTube" style={{ padding: '7px 10px' }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            <div className="about-photo-wrap reveal reveal-delay">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/me.jpg" alt="Randall Sim" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* ── Experience ── */}
      <div id="experience">
        <div className="site-section">
          <p className="section-label reveal">Experience</p>
          <div className="reveal">
            <Experience />
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* ── Projects ── */}
      <div id="projects">
        <div className="site-section">
          <p className="section-label reveal">Projects</p>
          <div className="reveal">
            <Projects />
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* ── Footer ── */}
      <footer className="site-footer">
        <span className="footer-copy">© {new Date().getFullYear()} Randall Sim</span>
        <div className="footer-links">
          <a href="https://github.com/randall-sim" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href="https://www.linkedin.com/in/r-sim/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href="mailto:randallsim.me@gmail.com" className="footer-link">Email</a>
        </div>
      </footer>
    </>
  );
}
