/*
  Electric Editorial × AI Systems Laboratory.
  The homepage frames Mitra's work as inspectable AI systems: credible evidence,
  technical case files, and direct routes into deeper engineering decisions.
*/
import { ArrowDownRight, ArrowUpRight, BrainCircuit, Circle, Code2, Database, Download, ExternalLink, Github, Mail, Network, Server, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import "./Motion.css";

const RESUME_URL = "/manus-storage/mitra-kulal-resume_81ec6eed.pdf";

const projects = [
  {
    id: "01", slug: "mattrlabs-rag", title: "mattrlabs / RAG", type: "Production system · 2026",
    image: "/manus-storage/rag-assistant_e3b0dbde.jpg", note: "A source-attributed knowledge assistant for an AI hardware studio.",
    tag: "LIVE CONTENT → GROUNDED ANSWERS", stack: ["LangChain", "ChromaDB", "FastAPI", "Cloudflare Tunnel"],
    detail: "Section-aware chunking, nomic-embed-text embeddings, LLM-judged context sufficiency, routing metadata, and an explicit I don’t know fallback.",
  },
  {
    id: "02", slug: "trip-planner-agents", title: "Trip Planner / Agents", type: "Multi-agent system · 2026",
    image: "/manus-storage/agent-orchestration_d8c9458f.jpg", note: "A supervisor coordinating four specialist agents through LangGraph.",
    tag: "SUPERVISOR → TRAVEL · WEATHER · FOOD · BUDGET", stack: ["LangGraph", "MCP", "Ollama", "DuckDuckGo"],
    detail: "One configuration switch moves inference between local Ollama and cloud providers including OpenAI, Anthropic, and Google.",
  },
  {
    id: "03", slug: "face-recognition", title: "Face / Recognition", type: "Computer vision · 2026",
    image: "/manus-storage/face-recognition-system_ec16a682.jpg", note: "A real-time offline recognition layer for a local AI assistant.",
    tag: "CAMERA → LANDMARKS → EMBEDDING → IDENTITY", stack: ["MediaPipe", "dlib", "Python", "Local runtime"],
    detail: "Enrollment and live matching pipelines attach recognized identity to assistant context while flagging unrecognized individuals.",
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
  useScrollReveal();

  return (
    <main className="portfolio-shell">
      <aside className="side-rail" aria-label="Portfolio navigation">
        <a className="stamp" href="#top" aria-label="Mitra Kulal portfolio home"><img src="/manus-storage/shocking-mark_c8e9ac58.png" alt="Mitra Kulal personal mark" /></a>
        <div className="rail-line" />
        <span className="rail-copy">MITRA KULAL / AI SYSTEMS</span>
        <nav className="rail-nav">
          <button onClick={() => scrollTo("work")}>01 — Work</button>
          <button onClick={() => scrollTo("stack")}>02 — Stack</button>
          <button onClick={() => scrollTo("principles")}>03 — Proof</button>
          <button onClick={() => scrollTo("contact")}>04 — Contact</button>
        </nav>
        <div className="rail-status"><Circle size={8} fill="currentColor" /> Open to AIML opportunities</div>
      </aside>

      <div className="portfolio-content" id="top">
        <header className="topbar"><span className="eyebrow">MITRA KULAL / AI·ML ENGINEER / 2026</span><div className="topbar-actions"><a className="top-resume" href={RESUME_URL} target="_blank" rel="noreferrer"><Download size={13} /> Résumé</a><a className="top-link" href="mailto:kulalmitra@gmail.com">KULALMITRA@GMAIL.COM <ArrowUpRight size={15} /></a></div></header>

        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker"><span className="signal-dot" /> AI systems with a point of view.</p>
            <h1 id="hero-title">Make it<br /><em>intelligent.</em></h1>
            <p className="hero-intro">I’m Mitra, an AI/ML engineer building grounded RAG pipelines, multi-agent systems, and local-first AI applications that turn messy information into useful decisions.</p>
            <div className="hero-actions"><button className="text-cta" onClick={() => scrollTo("work")}>Open the case files <ArrowDownRight size={20} /></button><a className="hero-resume" href={RESUME_URL} target="_blank" rel="noreferrer"><Download size={16} /> Download résumé</a></div>
          </div>
          <div className="hero-art" aria-hidden="true"><img src="/manus-storage/ai-systems-hero_320b2b64.jpg" alt="" /><div className="hero-art-label">FIG. 00 / SYSTEMS IN MOTION</div></div>
          <div className="hero-index">[ 00 — 04 ]</div>
        </section>

        <section className="signal-section" data-reveal><div className="section-label">00 / System readout</div><div className="signal-grid"><div><strong>8.75</strong><span>CGPA / AIML</span></div><div><strong>04</strong><span>System patterns</span></div><div><strong>03</strong><span>Inspectable case files</span></div><div className="signal-note"><Sparkles size={17} /><p>Currently exploring MLOps, scalable vector databases, and system design for AI applications.</p></div></div></section>

        <section className="statement-section" id="about" data-reveal><div className="section-label">03 / Point of view</div><div className="statement-copy"><p className="large-statement">Useful AI is <mark>grounded.</mark><br /><span>Curious systems<br />know when to ask.</span></p><div className="statement-detail"><span className="detail-rule" /><p>I build with a bias toward inspectable decisions: retrieved context, explicit fallbacks, configurable runtimes, and interfaces that make the system’s behavior legible.</p></div></div></section>

        <section className="work-section" id="work" data-reveal>
          <div className="work-heading"><div className="section-label">01 / Selected systems</div><span className="work-count">03 CASE FILES / 2026</span></div>
          <div className="project-list">{projects.map((project) => <article className={`project-card ${project.id === "02" ? "cobalt" : "acid"}`} key={project.id} onMouseEnter={() => setActiveProject(project.id)} onMouseLeave={(event) => { setActiveProject(null); event.currentTarget.style.setProperty("--pointer-x", "50%"); event.currentTarget.style.setProperty("--pointer-y", "50%"); }} onMouseMove={(event) => { const bounds = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty("--pointer-x", `${((event.clientX - bounds.left) / bounds.width) * 100}%`); event.currentTarget.style.setProperty("--pointer-y", `${((event.clientY - bounds.top) / bounds.height) * 100}%`); }}>
            <div className="project-meta"><span className="project-number">CASE FILE / {project.id}</span><span>{project.type}</span></div><div className="project-stamp">SYSTEM<br />EVIDENCE</div>
            <Link className="project-image-wrap" href={`/case/${project.slug}`} aria-label={`Open ${project.title} case study`}><img src={project.image} alt={`${project.title} system artwork`} /><div className={`project-cursor ${activeProject === project.id ? "is-active" : ""}`}><ExternalLink size={16} /> Inspect system</div></Link>
            <div className="project-footer"><div><h2>{project.title}</h2><p>{project.note}</p></div><Link className="project-arrow" href={`/case/${project.slug}`} aria-label={`Open ${project.title} case study`}><ArrowUpRight size={24} /></Link></div>
            <div className="project-detail"><span className="project-tag">{project.tag}</span><p>{project.detail}</p><div className="stack-chip-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
          </article>)}</div>
          <div className="work-footer"><span>Repositories and system evidence included</span><span className="archive-line" /><span>Open each case file</span></div>
        </section>

        <section className="stack-section" id="stack" data-reveal><div className="section-label">02 / Technical stack</div><div className="stack-intro"><h2>Layered<br /><span>by design.</span></h2><p>Not a list of tools. A working vocabulary for shipping AI applications from retrieval to runtime.</p></div><div className="stack-groups">{stackGroups.map(({ icon: Icon, label, items }, index) => <div className="stack-group" key={label}><div className="stack-index">0{index + 1}</div><Icon size={21} /><div><h3>{label}</h3><p>{items}</p></div></div>)}</div></section>

        <section className="principles-section" id="principles" data-reveal><div className="section-label">04 / Engineering principles</div><div className="principle-header"><h2>Build it so<br /><span>you can inspect it.</span></h2><p>The portfolio is built around the decisions I use to make AI systems more useful, legible, and dependable in practice.</p></div><div className="principle-grid"><article><ShieldCheck size={24} /><h3>Ground the answer</h3><p>Prefer retrieved, source-attributed context over unbounded model improvisation.</p></article><article><Network size={24} /><h3>Orchestrate deliberately</h3><p>Give agents distinct responsibilities, then make their coordination visible and controllable.</p></article><article><Server size={24} /><h3>Keep runtimes flexible</h3><p>Design for local-first inference when privacy or offline availability changes the requirements.</p></article><article><Code2 size={24} /><h3>Expose the trade-offs</h3><p>Use fallbacks, routing logic, and clear interface cues to make system limits explicit.</p></article></div></section>

        <section className="achievements-section" data-reveal><div className="section-label">05 / Proof of motion</div><div className="achievement-grid"><div><h2>Built by<br /><em>competing.</em></h2><p>From campus robotics to national tech stages, I bring a builder’s bias toward real constraints and visible outcomes.</p></div><div className="achievement-list"><div><strong>02</strong><span>TechSprint 2025<br />Google Developer Groups on Campus, SCEM</span></div><div><strong>12</strong><span>National rank<br />IIT Bombay Techfest 2024</span></div><div><strong>01</strong><span>Line Follower Robot<br />competition winner</span></div><div><strong>03</strong><span>Maze Solver Robot<br />competition placement</span></div></div></div></section>

        <section className="contact-section" id="contact"><div className="section-label">06 / Start a conversation</div><div className="contact-grid"><h2>Bring the<br /><span>hard</span><br />problem.</h2><div className="contact-side"><p>Open to AI/ML internships and entry-level engineering opportunities. Have a system to ground, orchestrate, or make useful? I’m looking for the next interesting constraint.</p><a className="contact-link" href="mailto:kulalmitra@gmail.com">Let’s build <Mail size={19} /></a><div className="contact-links"><a href={RESUME_URL} target="_blank" rel="noreferrer"><Download size={16} /> Résumé</a><a href="https://github.com/Mitrakulal" target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a><a href="https://linkedin.com/in/mitra-kulal" target="_blank" rel="noreferrer"><Code2 size={16} /> LinkedIn</a></div></div></div></section>
        <footer className="footer"><span>© Mitra Kulal, 2026</span><span>Udupi / Worldwide</span><a href="#top">Back to top <ArrowUpRight size={14} /></a></footer>
      </div>
    </main>
  );
}
