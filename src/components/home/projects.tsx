"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const PROJECTS = [
  {
    title: "epsilon.stuysu.org",
    description: "Everything app for Stuyvesant",
    src: "/epsilon.png",
    ctaText: "Visit",
    ctaLink: "https://epsilon.stuysu.org/",
    content: "I founded Epsilon, Stuyvesant's premier app for students, faculty, and staff to manage 400+ student organizations, reserve rooms, and run all school-wide events. We serve over 3,300 users on a daily basis and have become an integral part of the school's infrastructure. Built with React, TypeScript, and Supabase.",
  },
  {
    title: "News To Go",
    description: "Convert news into engaging videos",
    src: "/news-to-go.png",
    ctaText: "GitHub",
    ctaLink: "https://github.com/randall-sim/news-to-go",
    content: "Built News To Go, a tool that converts news articles into engaging videos. Personally used this to acquire 3,000+ followers for an Instagram account. Engineered a scalable video pipeline using Selenium, Ollama, and MoviePy. Built a job queue system with multithreading to support concurrent user requests on single-machine infrastructure.",
  },
  {
    title: "internships.dev",
    description: "Be the first to every internship",
    src: "/internshipsdev.png",
    imgPosition: "top left",
    ctaText: "Visit",
    ctaLink: "https://internships.dev",
    content: "Built internships.dev, a platform that helps students find and apply for internships. The platform aggregates listings from various sources and provides personalized recommendations. It uses a decentralized worker system to consistently refresh listings so users are the first to know about every opportunity.",
  },
];

type Project = typeof PROJECTS[number];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17L17 7M7 7h10v10"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [closing, setClosing] = useState(false);

  const triggerClose = () => {
    setClosing(true);
    setTimeout(() => { setClosing(false); onClose(); }, 230);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setClosing(true);
        setTimeout(() => { setClosing(false); onClose(); }, 230);
      }
    };
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = scrollbarWidth + "px";
    const nav = document.querySelector(".site-nav") as HTMLElement | null;
    if (nav) nav.style.paddingRight = (24 + scrollbarWidth) + "px";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      if (nav) nav.style.paddingRight = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, setClosing]);

  return (
    <div className={`modal-overlay${closing ? " closing" : ""}`} onClick={triggerClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={triggerClose}><CloseIcon /></button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.src} alt={project.title} className="modal-img" style={project.imgPosition ? { objectPosition: project.imgPosition } : undefined} />
        <div className="modal-body">
          <div className="modal-row">
            <div>
              <div className="modal-title">{project.title}</div>
              <div className="modal-desc">{project.description}</div>
            </div>
            <a href={project.ctaLink} target="_blank" rel="noreferrer" className="site-btn site-btn-solid" style={{ flexShrink: 0 }}>
              {project.ctaText}
            </a>
          </div>
          <div className="modal-content">{project.content}</div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <div key={p.title} className="project-card" onClick={() => setActive(p)}>
            <div className="project-card-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.title} className="project-card-img" style={p.imgPosition ? { objectPosition: p.imgPosition } : undefined} />
            </div>
            <div className="project-card-body">
              <div className="project-card-title">{p.title}</div>
              <div className="project-card-desc">{p.description}</div>
            </div>
            <div className="project-card-arrow"><ArrowIcon /></div>
          </div>
        ))}
      </div>

      {mounted && active && createPortal(
        <ProjectModal project={active} onClose={() => setActive(null)} />,
        document.body
      )}
    </>
  );
}
