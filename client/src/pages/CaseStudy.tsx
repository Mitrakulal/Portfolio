/*
  Electric Editorial × AI Systems Laboratory.
  Case studies present verifiable system decisions through architecture, build notes,
  source links, and clearly labelled illustrative walkthroughs.
*/
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, Download, ExternalLink, Github, LockKeyhole, Play, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import "./CaseStudy.css";

const RESUME_URL = "/manus-storage/mitra-kulal-resume_81ec6eed.pdf";

type CaseStudy = {
  slug: string; serial: string; title: string; type: string; eyebrow: string; image: string; architecture: string;
  lead: string; challenge: string; build: string; evidence: { value: string; label: string }[];
  decisions: { title: string; text: string }[]; stack: string[]; repo?: string; repoLabel: string;
  diagramLabel: string; walkthrough: { title: string; detail: string }[];
};

const cases: CaseStudy[] = [
  {
    slug: "mattrlabs-rag", serial: "01", title: "mattrlabs / RAG", type: "Production knowledge assistant · 2026", eyebrow: "Company production project",
    image: "/manus-storage/rag-assistant_e3b0dbde.jpg", architecture: "/manus-storage/rag-architecture_c806514c.png",
    lead: "A production RAG knowledge assistant for an AI hardware studio, designed to answer product, service, and pricing questions from live company content.",
    challenge: "Company questions need a useful answer, an evidence trail, and a clear boundary when the available context cannot support a reliable response.",
    build: "The system turns live company content into section-aware chunks, embeds it with nomic-embed-text, retrieves relevant context from ChromaDB, and serves the experience through a FastAPI REST API and custom chat UI.",
    evidence: [{ value: "Live", label: "Company content" }, { value: "Source", label: "Attributed context" }, { value: "FastAPI", label: "REST service" }, { value: "Tunnel", label: "Cloudflare Access" }],
    decisions: [{ title: "Section-aware retrieval", text: "Chunking preserves the context and intent of distinct content sections instead of treating every page as a flat text block." }, { title: "LLM-judged sufficiency", text: "The model judges whether retrieved evidence is sufficient rather than relying on one hardcoded similarity threshold." }, { title: "Explicit boundary", text: "An I don’t know fallback prevents unsupported answers when the context does not carry enough evidence." }, { title: "Routing metadata", text: "Responses can steer a user to the most relevant website page instead of only returning conversational text." }],
    stack: ["Python", "LangChain", "nomic-embed-text", "ChromaDB", "FastAPI", "Cloudflare Tunnel"], repoLabel: "Private production project — request walkthrough", diagramLabel: "Retrieval and answer boundary",
    walkthrough: [{ title: "Ingest", detail: "Live company pages are chunked by section and embedded into a ChromaDB vector store." }, { title: "Retrieve", detail: "A product, service, or pricing question retrieves source-attributed context." }, { title: "Judge", detail: "The model assesses context sufficiency and chooses an answer or an explicit fallback." }, { title: "Route", detail: "The FastAPI-backed chat UI delivers the answer and relevant destination page." }],
  },
  {
    slug: "trip-planner-agents", serial: "02", title: "Trip Planner / Agents", type: "Multi-agent system · 2026", eyebrow: "Personal / hackathon project",
    image: "/manus-storage/agent-orchestration_d8c9458f.jpg", architecture: "/manus-storage/agent-architecture_885a7f6d.png",
    lead: "A travel-planning system where a supervisor agent coordinates four focused specialists instead of asking one model to improvise every part of the trip.",
    challenge: "Travel planning joins different kinds of information—destination options, weather, food, and budget—so the system needs a clear handoff model rather than one unstructured answer.",
    build: "LangGraph manages a supervisor with Travel, Weather, Food, and Budget agents. A custom Weather MCP server supplies forecasts, DuckDuckGo supports web search, and a configuration switch selects local Ollama or cloud inference.",
    evidence: [{ value: "04", label: "Specialist agents" }, { value: "MCP", label: "Weather server" }, { value: "Local", label: "Ollama inference" }, { value: "Cloud", label: "Provider switch" }],
    decisions: [{ title: "Supervisor-first graph", text: "The supervisor decides which specialist needs to contribute, keeping responsibilities distinct and the workflow inspectable." }, { title: "Custom weather capability", text: "A dedicated Weather MCP server gives the system a clear real-time forecast interface." }, { title: "Search as a tool", text: "DuckDuckGo web search augments planning with information that is not embedded in a static prompt." }, { title: "Runtime portability", text: "One configuration switch supports local Ollama and cloud providers including OpenAI, Anthropic, and Google." }],
    stack: ["Python", "LangChain", "LangGraph", "Model Context Protocol", "Ollama", "DuckDuckGo"], repo: "https://github.com/Mitrakulal/Trip_planner_langchain", repoLabel: "Open repository", diagramLabel: "Supervisor and specialist routing",
    walkthrough: [{ title: "Interpret", detail: "The supervisor identifies which parts of the request need travel, weather, food, and budget input." }, { title: "Delegate", detail: "Specialist agents handle their bounded task and return structured findings." }, { title: "Enrich", detail: "Weather uses the custom MCP capability while travel research can call web search." }, { title: "Synthesize", detail: "The supervisor merges the specialist outputs into one itinerary-oriented response." }],
  },
  {
    slug: "face-recognition", serial: "03", title: "Face / Recognition", type: "Computer vision system · 2026", eyebrow: "Personal project",
    image: "/manus-storage/face-recognition-system_ec16a682.jpg", architecture: "/manus-storage/vision-architecture_91b70284.png",
    lead: "A real-time offline face recognition layer that adds recognized identity to the context of a local AI assistant.",
    challenge: "A personalization layer needs to identify known people from camera input while keeping the operating loop local and clearly flagging unknown faces.",
    build: "MediaPipe handles face detection, dlib generates identity embeddings, and an enrollment pipeline stores known embeddings for live matching against camera input.",
    evidence: [{ value: "Offline", label: "Local runtime" }, { value: "Live", label: "Camera matching" }, { value: "dlib", label: "Identity embeddings" }, { value: "MediaPipe", label: "Face detection" }],
    decisions: [{ title: "Enrollment before recognition", text: "Known users enter through an explicit enrollment path that captures identity embeddings for later matching." }, { title: "Local recognition loop", text: "The system runs offline, avoiding an external API dependency for the recognition workflow." }, { title: "Unknown-person handling", text: "A non-match is surfaced explicitly instead of being forced into a low-confidence identity." }, { title: "Assistant context bridge", text: "A recognized identity can be attached to conversation context as a personalization input." }],
    stack: ["Python", "MediaPipe", "dlib", "Computer vision", "Local AI assistant"], repo: "https://github.com/Mitrakulal/Face_recognition", repoLabel: "Open repository", diagramLabel: "Enrollment and recognition loop",
    walkthrough: [{ title: "Enroll", detail: "The system captures a known user and stores a dlib-based facial embedding." }, { title: "Detect", detail: "MediaPipe identifies a face in the live camera feed." }, { title: "Match", detail: "The live embedding is compared with the known embedding store." }, { title: "Personalize", detail: "A recognized identity can be attached to the local assistant context; unknown people are flagged." }],
  },
];

function CaseStudyPage({ study }: { study: CaseStudy }) {
  const [activeStep, setActiveStep] = useState(0);
  return <main className={`case-page case-${study.serial}`}>
    <aside className="case-rail" aria-label="Case file navigation"><Link className="case-stamp" href="/"><img src="/manus-storage/shocking-mark_c8e9ac58.png" alt="" /></Link><span>SHOCKING / CASE FILE</span><div className="case-rail-index">{study.serial} / 03</div><div className="case-rail-status"><i /> INSPECTABLE SYSTEM</div></aside>
    <header className="case-nav"><Link href="/" className="case-back"><ArrowLeft size={17} /> Back to systems</Link><div className="case-nav-actions"><a href={RESUME_URL} target="_blank" rel="noreferrer"><Download size={15} /> Résumé</a><a href="mailto:kulalmitra@gmail.com">Contact <ArrowUpRight size={15} /></a></div></header>
    <section className="case-hero"><div className="case-serial">CASE FILE / {study.serial}</div><p className="case-eyebrow">{study.eyebrow}</p><h1>{study.title}</h1><p className="case-lead">{study.lead}</p><div className="case-hero-actions">{study.repo ? <a className="case-primary" href={study.repo} target="_blank" rel="noreferrer"><Github size={18} /> {study.repoLabel} <ArrowUpRight size={16} /></a> : <a className="case-primary" href="mailto:kulalmitra@gmail.com?subject=mattrlabs%20RAG%20walkthrough"><LockKeyhole size={17} /> Request the technical file <ArrowUpRight size={16} /></a>}<a className="case-secondary" href="#walkthrough"><Play size={15} /> Interrogate the system</a></div><div className="case-hero-image"><img src={study.image} alt={`${study.title} project artwork`} /><span>{study.type}</span><b>ISSUE / {study.serial}</b></div></section>
    <section className="case-evidence"><div className="case-section-label">Verified system evidence</div><div className="evidence-grid">{study.evidence.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div></section>
    <section className="case-story"><div className="case-section-label">Problem / build</div><div className="story-grid"><article><h2>The constraint</h2><p>{study.challenge}</p></article><article><h2>The system</h2><p>{study.build}</p></article></div></section>
    <section className="case-architecture"><div className="case-section-label">Architecture / {study.diagramLabel}</div><div className="architecture-frame"><div className="architecture-meta"><span>SYSTEM EVIDENCE BOARD</span><strong>FIG.{study.serial} / A</strong></div><img src={study.architecture} alt={`${study.title} architecture diagram`} /><div className="architecture-notes"><span><i /> ACTIVE SYSTEM PATH</span><span>INSPECTABLE FLOW / NOT UI</span></div></div></section>
    <section className="case-decisions"><div className="case-section-label">Engineering decisions</div><div className="decision-grid">{study.decisions.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h2>{item.title}</h2><p>{item.text}</p></article>)}</div></section>
    <section className="case-walkthrough" id="walkthrough"><div><div className="case-section-label">Interactive walkthrough</div><h2>Trace the<br /><em>system.</em></h2><p className="walkthrough-note"><ShieldCheck size={16} /> Illustrative interaction trace — not a live model.</p></div><div className="walkthrough-panel"><div className="walkthrough-tabs">{study.walkthrough.map((step, index) => <button key={step.title} className={activeStep === index ? "is-active" : ""} onClick={() => setActiveStep(index)}><span>0{index + 1}</span>{step.title}<ChevronRight size={15} /></button>)}</div><div className="walkthrough-output"><span>STATE / 0{activeStep + 1}</span><h3>{study.walkthrough[activeStep].title}</h3><p>{study.walkthrough[activeStep].detail}</p></div></div></section>
    <section className="case-stack"><div className="case-section-label">Implementation vocabulary</div><div>{study.stack.map((item) => <span key={item}>{item}</span>)}</div></section>
    <footer className="case-footer"><Link href="/">← Return to portfolio</Link>{study.repo ? <a href={study.repo} target="_blank" rel="noreferrer">View code <ExternalLink size={14} /></a> : <a href="mailto:kulalmitra@gmail.com">Request walkthrough <ArrowUpRight size={14} /></a>}</footer>
  </main>;
}

export default function CaseStudy() {
  const [location] = useLocation();
  const slug = location.split("/").filter(Boolean).pop();
  const study = cases.find((item) => item.slug === slug);
  if (!study) return <main className="case-not-found"><h1>Case file not found.</h1><Link href="/">Return to portfolio</Link></main>;
  return <CaseStudyPage study={study} />;
}
