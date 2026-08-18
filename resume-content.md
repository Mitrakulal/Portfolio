# Resume Content Brief — Mitra Kulal

## Positioning
AI/ML-trained engineering student and entry-level AI/ML Engineer focused on agentic AI, retrieval-augmented generation, local LLM deployment, multi-agent systems, and FastAPI-backed production workflows.

## Contact and links
- Location: Udupi, Karnataka
- Email: kulalmitra@gmail.com
- Phone: 6360874181
- LinkedIn: https://linkedin.com/in/mitra-kulal
- GitHub: https://github.com/Mitrakulal

## Education
- Sahyadri College of Engineering and Management, Mangaluru, Karnataka
- BE in Artificial Intelligence and Machine Learning
- Expected 2028
- CGPA: 8.75 / 10.0
- Relevant coursework: Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Database Fundamentals, Statistics

## Technical stack
- Languages: Python, C, C++, SQL
- AI/ML & LLMs: RAG, LangChain, LangGraph, ChromaDB, FAISS, Ollama, Model Context Protocol (MCP), OpenCV, TensorFlow, PyTorch, Streamlit
- Backend & deployment: FastAPI, uvicorn, REST APIs, Cloudflare Tunnel, Git, GitHub, Docker, Postman
- Databases: ChromaDB, SQLite, MongoDB, Firebase, Supabase
- Currently exploring: MLflow, Weights & Biases, Pinecone, Weaviate, system design for AI applications

## Selected projects
### mattrlabs RAG Knowledge Assistant — 2026
Company production project. Deployed a production RAG knowledge assistant for mattrlabs, an AI hardware studio, answering product, service, and pricing questions grounded in live company content. Engineered a ChromaDB vector store with nomic-embed-text embeddings and section-aware chunking, retrieving source-attributed context for every answer. Added routing metadata to steer users to the correct website page and an explicit “I don’t know” fallback, with the LLM judging context sufficiency instead of hardcoded thresholds. Served through FastAPI REST API with custom chat UI; deployed on Mac Mini behind Cloudflare Tunnel with named tunnel and Access.

### AI Trip Planner — 2026
Personal / hackathon project. Architected a multi-agent trip-planning system with a supervisor coordinating four specialized agents: Travel, Weather, Food, and Budget, using LangChain and LangGraph. Built a custom Weather MCP server for real-time forecast retrieval and integrated real-time web search via DuckDuckGo. Supports local Ollama and cloud LLM inference through OpenAI, Anthropic, and Google via a single configuration switch. Repository: https://github.com/Mitrakulal/Tripplannerlangchain

### RAG Pipeline — 2026
Personal project. Built a RAG pipeline with document chunking, embedding generation, and FAISS vector search. Grounded responses in retrieved context using LangChain to reduce hallucinations and improve factual accuracy. Runs fully offline using local LLMs via Ollama with no external API dependency. Repository: https://github.com/Mitrakulal/simpleragpipeline

### Face Recognition System — 2026
Personal project. Built a real-time offline face recognition system using MediaPipe for detection and dlib-based embeddings for identity recognition. Designed enrollment and live camera matching pipelines, flagging unrecognized individuals. Integrated it as a personalization layer in a local AI assistant, attaching recognized user identity to conversation context. Repository: https://github.com/Mitrakulal/Facerecognition

## Achievements
- 2nd Place — TechSprint 2025 hackathon, Google Developer Groups on Campus, SCEM
- 12th Nationally — IIT Bombay Techfest 2024 robotics competition
- Consolation Award — AARAMBH 2025, Incub8, NITK Surathkal
- 1st Place — Line Follower Robot Competition
- 3rd Place — Maze Solver Robot Competition, St. Joseph’s Engineering College

## Product direction for site
Preserve the Electric Editorial identity but evolve it into an “AI systems laboratory” portfolio. Present work as technical case files with architecture, model/runtime choices, retrieval strategy, deployment surface, and engineering outcomes. Make the stack feel layered and systems-oriented instead of a flat logo list. Avoid unsupported claims, fabricated metrics, or invented experience.
