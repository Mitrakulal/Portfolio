/*
  Electric Editorial × AI Systems Laboratory.
  This page presents Mitra Kulal as an AIML engineer through evidence-led case files,
  architecture layers, and a deliberate technical stack—not generic portfolio cards.
*/
import { ArrowDownRight, ArrowUpRight, BrainCircuit, Circle, Code2, Database, ExternalLink, Github, Layers3, Mail, Network, Server, Sparkles } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "mattrlabs / RAG",
    type: "Production system · 2026",
    image: "/manus-storage/project-01-kinetic_9a8ad94f.jpg",
    note: "A source-attributed knowledge assistant for an AI hardware studio.",
    tag: "LIVE CONTENT → GROUNDED ANSWERS",
    stack: ["LangChain", "ChromaDB", "FastAPI", "Cloudflare Tunnel"],
    detail: "Section-aware chunking, nomic-embed-text embeddings, LLM-judged context sufficiency, routing metadata, and an explicit I don’t know fallback.",
    link: "mailto:kulalmitra@gmail.com?subject=mattrlabs%20RAG%20case%20file",
  },
  {
    id: "02",
    title: "Trip Planner / Agents",
    type: "Multi-agent system · 2026",
    image: "/manus-storage/project-02-signal_c05de8fd.jpg",
    note: "A supervisor coordinating four specialist agents through LangGraph.",
    tag: "SUPERVISOR → TRAVEL · WEATHER · FOOD · BUDGET",
    stack: ["LangGraph", "MCP", "Ollama", "DuckDuckGo"],
    detail: "One configuration switch moves inference between local Ollama and cloud providers including OpenAI, Anthropic, and Google.",
    link: "https://github.com/Mitrakulal/Tripplannerlangchain",
  },
];

const stackGroups = [
  { icon: BrainCircuit, label: "Model layer", items: "RAG · LangChain · LangGraph · Ollama · TensorFlow · PyTorch · OpenCV" },
  { icon: Network, label: "Orchestration", items: "Multi-agent systems · MCP · FAISS · ChromaDB · nomic-embed-text" },
  { icon: Server, label: "Runtime layer", items: "Python · FastAPI · uvicorn · REST APIs · Streamlit · Docker" },
  { icon: Database, label: "Data layer", items: "SQLite · MongoDB · Firebase · Supabase · Vector search" },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="portfolio-shell">
      <aside className="side-rail" aria-label="Portfolio navigation">
        <a className="stamp" href="#top" aria-label="Shocking home"><img src="/manus-storage/shocking-mark_c8e9ac58.png" alt="" /></a>
        <div className="rail-line" />
        <span className="rail-copy">SHOCKING / AI SYSTEMS</span>
        <nav className="rail-nav">
          <button onClick={() => scrollTo("work")}>01 — Work</button>
          <button onClick={() => scrollTo("stack")}>02 — Stack</button>
          <button onClick={() => scrollTo("about")}>03 — About</button>
          <button onClick={() => scrollTo("contact")}>04 — Contact</button>
        </nav>
        <div className="rail-status"><Circle size={8} fill="currentColor" /> Building intelligent systems</div>
      </aside>

      <div className="portfolio-content" id="top">
        <header className="topbar"><span className="eyebrow">MITRA KULAL / AI·ML ENGINEER / 2026</span><a className="top-link" href="mailto:kulalmitra@gmail.com">KULALMITRA@GMAIL.COM <ArrowUpRight size={15} /></a></header>

        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker"><span className="signal-dot" /> AI systems with a point of view.</p>
            <h1 id="hero-title">Make it<br /><em>intelligent.</em></h1>
            <p className="hero-intro">I’m Mitra, an AI/ML engineer building grounded RAG pipelines, multi-agent systems, and local-first AI applications that turn messy information into useful decisions.</p>
            <button className="text-cta" onClick={() => scrollTo("work")}>Open the case files <ArrowDownRight size={20} /></button>
          </div>
          <div className="hero-art" aria-hidden="true"><img src="/manus-storage/portfolio-hero_abcfbf56.jpg" alt="" /><div className="hero-art-label">FIG. 00 / SYSTEMS IN MOTION</div></div>
          <div className="hero-index">[ 00 — 04 ]</div>
        </section>

        <section className="signal-section">
          <div className="section-label">00 / System readout</div>
          <div className="signal-grid"><div><strong>8.75</strong><span>CGPA / AIML</span></div><div><strong>04</strong><span>Active system patterns</span></div><div><strong>∞</strong><span>Curiosity / runtime</span></div><div className="signal-note"><Sparkles size={17} /><p>Currently exploring MLOps, scalable vector databases, and system design for AI applications.</p></div></div>
        </section>

        <section className="statement-section" id="about">
          <div className="section-label">03 / Point of view</div>
          <div className="statement-copy"><p className="large-statement">Useful AI is <mark>grounded.</mark><br /><span>Curious systems<br />know when to ask.</span></p><div className="statement-detail"><span className="detail-rule" /><p>I build with a bias toward inspectable decisions: retrieved context, explicit fallbacks, configurable runtimes, and interfaces that make the system’s behavior legible.</p></div></div>
        </section>

        <section className="work-section" id="work">
          <div className="work-heading"><div className="section-label">01 / Selected systems</div><span className="work-count">02 CASE FILES / 2026</span></div>
          <div className="project-list">{projects.map((project) => <article className={`project-card ${project.id === "02" ? "cobalt" : "acid"}`} key={project.id} onMouseEnter={() => setActiveProject(project.id)} onMouseLeave={() => setActiveProject(null)}>
            <div className="project-meta"><span className="project-number">CASE FILE / {project.id}</span><span>{project.type}</span></div><div className="project-stamp">SYSTEM<br />EVIDENCE</div>
            <div className="project-image-wrap"><img src={project.image} alt={`${project.title} system artwork`} /><div className={`project-cursor ${activeProject === project.id ? "is-active" : ""}`}><ExternalLink size={16} /> Inspect system</div></div>
            <div className="project-footer"><div><h2>{project.title}</h2><p>{project.note}</p></div><a className="project-arrow" href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={24} /></a></div>
            <div className="project-detail"><span className="project-tag">{project.tag}</span><p>{project.detail}</p><div className="stack-chip-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
          </article>)}</div>
          <div className="work-footer"><span>More systems in the archive</span><span className="archive-line" /><span>Repositories available</span></div>
        </section>

        <section className="stack-section" id="stack">
          <div className="section-label">02 / Technical stack</div>
          <div className="stack-intro"><h2>Layered<br /><span>by design.</span></h2><p>Not a list of tools. A working vocabulary for shipping AI applications from retrieval to runtime.</p></div>
          <div className="stack-groups">{stackGroups.map(({ icon: Icon, label, items }, index) => <div className="stack-group" key={label}><div className="stack-index">0{index + 1}</div><Icon size={21} /><div><h3>{label}</h3><p>{items}</p></div></div>)}</div>
        </section>

        <section className="achievements-section"><div className="section-label">04 / Proof of motion</div><div className="achievement-grid"><div><h2>Built by<br /><em>competing.</em></h2><p>From campus robotics to national tech stages, I bring a builder’s bias toward real constraints and visible outcomes.</p></div><div className="achievement-list"><div><strong>02</strong><span>TechSprint 2025<br />Hackathon placement</span></div><div><strong>12</strong><span>National rank<br />IIT Bombay Techfest</span></div><div><strong>01</strong><span>Line follower<br />robotics winner</span></div></div></div></section>

        <section className="contact-section" id="contact"><div className="section-label">04 / Start a conversation</div><div className="contact-grid"><h2>Bring the<br /><span>hard</span><br />problem.</h2><div className="contact-side"><p>Have a system to ground, orchestrate, or make useful? I’m looking for the next interesting constraint.</p><a className="contact-link" href="mailto:kulalmitra@gmail.com">Let’s build <Mail size={19} /></a><div className="contact-links"><a href="https://github.com/Mitrakulal" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://linkedin.com/in/mitra-kulal" target="_blank" rel="noreferrer"><Code2 size={16} /> LinkedIn</a></div></div></div></section>

        <footer className="footer"><span>© Mitra Kulal, 2026</span><span>Udupi / Worldwide</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></footer>
      </div>
    </main>
  );
}
