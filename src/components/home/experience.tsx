export default function Experience() {
  return (
    <div className="timeline">
      {/* Microsoft — upcoming */}
      <div className="timeline-item">
        <div className="timeline-dot upcoming" />
        <div className="timeline-card upcoming">
          <div className="timeline-top">
            <div>
              <div className="timeline-company">
                Microsoft
                <span className="timeline-badge">
                  <span className="timeline-badge-dot" />
                  Upcoming
                </span>
              </div>
              <div className="timeline-role">Software Engineer Intern</div>
            </div>
            <div className="timeline-date">May 2026 — Aug 2026</div>
          </div>
          <p className="timeline-desc">
            Incoming software engineering intern. Excited to work on large-scale systems and ship meaningful product improvements alongside world-class engineers.
          </p>
          <div className="timeline-tags">
            <span className="timeline-tag">Large-scale Systems</span>
            <span className="timeline-tag">Full-stack</span>
          </div>
        </div>
      </div>

      {/* MDLand */}
      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-card">
          <div className="timeline-top">
            <div>
              <div className="timeline-company">MDLand</div>
              <div className="timeline-role">Software Engineer Intern</div>
            </div>
            <div className="timeline-date">Jan 2025 — May 2025</div>
          </div>
          <p className="timeline-desc">
            Built and maintained features for healthcare software used by clinicians across the US. Worked across the full stack on patient data workflows, contributing to systems that handle sensitive health records at scale.
          </p>
          <div className="timeline-tags">
            <span className="timeline-tag">Healthcare Tech</span>
            <span className="timeline-tag">Full-stack</span>
            <span className="timeline-tag">Python</span>
          </div>
        </div>
      </div>

      {/* Stony Brook */}
      <div className="timeline-item">
        <div className="timeline-dot" />
        <div className="timeline-card">
          <div className="timeline-top">
            <div>
              <div className="timeline-company">Stony Brook Campus Residences</div>
              <div className="timeline-role">Software Engineer Intern</div>
            </div>
            <div className="timeline-date">Sep 2024 — May 2025</div>
          </div>
          <p className="timeline-desc">
            Developed internal tooling and web applications to support campus housing operations for thousands of students. Shipped features end-to-end, from design to deployment.
          </p>
          <div className="timeline-tags">
            <span className="timeline-tag">React</span>
            <span className="timeline-tag">Node.js</span>
            <span className="timeline-tag">Internal Tools</span>
          </div>
        </div>
      </div>
    </div>
  );
}
