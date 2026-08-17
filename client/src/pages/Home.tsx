/*
  Electric Editorial direction: contemporary Swiss editorial + post-internet art direction.
  This page uses oversized hierarchy, an asymmetric rail, acid chartreuse signals, and tactile motion.
*/
import { ArrowDownRight, ArrowUpRight, Circle, Mail, MoveUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "Kinetic / Type",
    type: "Identity system · 2024",
    image: "/manus-storage/project-01-kinetic_9a8ad94f.jpg",
    note: "A visual language for a festival that refuses to sit still.",
    tone: "acid",
  },
  {
    id: "02",
    title: "Signal / Noise",
    type: "Digital direction · 2023",
    image: "/manus-storage/project-02-signal_c05de8fd.jpg",
    note: "Turning invisible infrastructure into a visible point of view.",
    tone: "cobalt",
  },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="portfolio-shell">
      <aside className="side-rail" aria-label="Portfolio navigation">
        <a className="stamp" href="#top" aria-label="Shocking home">
          <img src="/manus-storage/shocking-mark_c8e9ac58.png" alt="" />
        </a>
        <div className="rail-line" />
        <span className="rail-copy">SHOCKING / PORTFOLIO</span>
        <nav className="rail-nav">
          <button onClick={() => scrollTo("work")}>01 — Work</button>
          <button onClick={() => scrollTo("about")}>02 — About</button>
          <button onClick={() => scrollTo("contact")}>03 — Contact</button>
        </nav>
        <div className="rail-status"><Circle size={8} fill="currentColor" /> Available for select work</div>
      </aside>

      <div className="portfolio-content" id="top">
        <header className="topbar">
          <span className="eyebrow">Independent creative practice / 2026</span>
          <a className="top-link" href="mailto:hello@shocking.studio">hello@shocking.studio <ArrowUpRight size={15} /></a>
        </header>

        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker"><span className="signal-dot" /> Design that interrupts the scroll.</p>
            <h1 id="hero-title">Make it<br /><em>shocking.</em></h1>
            <p className="hero-intro">I’m a multidisciplinary designer building visual systems, identities, and digital moments for people who would rather be remembered than approved.</p>
            <button className="text-cta" onClick={() => scrollTo("work")}>Open the case files <ArrowDownRight size={20} /></button>
          </div>
          <div className="hero-art" aria-hidden="true">
            <img src="/manus-storage/portfolio-hero_abcfbf56.jpg" alt="" />
            <div className="hero-art-label">FIG. 00 / A STUDY IN IMPACT</div>
          </div>
          <div className="hero-index">[ 00 — 03 ]</div>
        </section>

        <section className="statement-section" id="about">
          <div className="section-label">02 / Point of view</div>
          <div className="statement-copy">
            <p className="large-statement">Good design gets <mark>noticed.</mark><br /><span>Great design changes<br />the temperature.</span></p>
            <div className="statement-detail"><span className="detail-rule" /><p>From first thought to final artifact, I build with a bias toward the unexpected. The goal isn’t noise. It’s signal with a pulse.</p></div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="work-heading"><div className="section-label">01 / Selected work</div><span className="work-count">02 CASE FILES</span></div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className={`project-card ${project.tone}`} key={project.id} onMouseEnter={() => setActiveProject(project.id)} onMouseLeave={() => setActiveProject(null)}>
                <div className="project-meta"><span className="project-number">CASE FILE / {project.id}</span><span>{project.type}</span></div><div className="project-stamp">EVIDENCE<br />OF IMPACT</div>
                <div className="project-image-wrap">
                  <img src={project.image} alt={`${project.title} project artwork`} />
                  <div className={`project-cursor ${activeProject === project.id ? "is-active" : ""}`}><MoveUpRight size={18} /> Open case file</div>
                </div>
                <div className="project-footer"><div><h2>{project.title}</h2><p>{project.note}</p></div><span className="project-arrow"><ArrowUpRight size={24} /></span></div>
              </article>
            ))}
          </div>
          <div className="work-footer"><span>More evidence in the archive</span><span className="archive-line" /><span>Available on request</span></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-label">03 / Start a conversation</div>
          <div className="contact-grid">
            <h2>Bring the<br /><span>good kind</span><br />of trouble.</h2>
            <div className="contact-side"><p>Have a brief, a half-formed idea, or a problem that needs a sharper edge? I’m listening.</p><a className="contact-link" href="mailto:hello@shocking.studio">Let’s talk <Mail size={19} /></a></div>
          </div>
        </section>

        <footer className="footer"><span>© Shocking Studio, 2026</span><span>New York / Worldwide</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></footer>
      </div>
    </main>
  );
}
