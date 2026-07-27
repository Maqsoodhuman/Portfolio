export type Project = {
  name: string;
  year: string;
  /** cover photo (public path); cards without one get a designed cover */
  img?: string;
  /** object-position tailwind class for the cover crop */
  imgPos?: string;
  link: string;
  desc: string;
  tags: string;
};

export type Job = {
  when: string;
  org: string;
  role: string;
  blurb: string;
};

export type Post = {
  title: string;
  meta: string;
  /** minutes to read */
  read: string;
  /** article link; falls back to the Medium profile until published */
  url?: string;
};

/** Medium profile: update the handle if it differs. */
export const MEDIUM_URL = "https://medium.com/@maqsoodhuman";

export const PROJECTS: Project[] = [
  {
    name: "Neural Observatory",
    year: "2026",
    link: "https://github.com/Maqsoodhuman/Neural-Observatory",
    desc: "Interactive, honest visualizations of a real GPT-2 forward pass: all 144 attention heads, the logit lens, and a guided 3D walkthrough from tokens to prediction. Every number is measured, not simulated.",
    tags: "GPT-2 · FastAPI · Next.js · Three.js",
  },
  {
    name: "Resist",
    year: "2026",
    link: "https://github.com/Maqsoodhuman/resist",
    desc: "Android app that curbs phone addiction: every unlock is gated behind a typed reason. Fully offline event log, deterministic usage stats, and an on-device model that clusters reasons and predicts overruns.",
    tags: "Kotlin · Jetpack Compose · Room",
  },
  {
    name: "MedRoute",
    year: "2026",
    img: "/images/maqsood-dl.jpg",
    imgPos: "object-[62%_30%]",
    link: "https://github.com/Maqsoodhuman/patient-portal-rag",
    desc: "Hybrid RAG + knowledge-graph clinical decision support. A trained MLP router picks the cheapest sufficient path per query: 96% accuracy at 42% less compute.",
    tags: "Gemma2-9B · FAISS · PrimeKG",
  },
  {
    name: "PriceWatch",
    year: "2026",
    link: "https://github.com/Maqsoodhuman/pricewatch",
    desc: "AI-powered Amazon price intelligence agent: fault-tolerant, containerized, with n8n orchestration and a real-time webhook dashboard.",
    tags: "Playwright · GPT-4o-mini · ChromaDB",
  },
  {
    name: "MolFM-Lite",
    year: "2025",
    link: "https://arxiv.org/abs/2602.22405",
    desc: "Published multimodal model fusing 1D, 2D and 3D molecular representations with cross-attention and FiLM conditioning.",
    tags: "arXiv · Deep learning · Chemistry",
  },
  {
    name: "Red Flag",
    year: "2025",
    img: "/images/maqsood-redflag.jpg",
    imgPos: "object-[50%_72%]",
    link: "https://github.com/Maqsoodhuman/Red-Flag",
    desc: "Chrome extension that reads privacy policies for you: real-time LLM analysis with semantic chunking and dynamic page monitoring.",
    tags: "Manifest V3 · LLM inference",
  },
];

export const JOBS: Job[] = [
  {
    when: "2026 - NOW",
    org: "Kuiper Lab",
    role: "Agentic & Edge AI Engineer",
    blurb:
      "Multimodal models optimized for edge inference: 3× latency reduction on mobile hardware. Agentic workflows turning live camera feeds and voice into flight logic at 30+ FPS.",
  },
  {
    when: "2026 - NOW",
    org: "IAIMS",
    role: "Lead Technical Advisor",
    blurb:
      "Leading the team building a multi-agent AI governance pipeline: NIST AI RMF, ISO 42001 and the EU AI Act compiled into versioned, executable evidence with human-in-the-loop gates.",
  },
  {
    when: "2025 - NOW",
    org: "University at Buffalo",
    role: "AI Researcher · MS CS (4.0)",
    blurb:
      "Clinical sensing research (wound infection detection, ICU monitoring) and digital-twin autonomous-vehicle simulation with CARLA + ROS 2 at CAVAS Lab.",
  },
  {
    when: "2021 - 2025",
    org: "LTIMindtree · Portland General Electric",
    role: "Senior Cloud Engineer (ML)",
    blurb:
      "Replaced legacy systems with event-driven AWS: 30% cost cut, 99.9% uptime. 100+ APIs, Databricks pipelines 50% faster, GenAI assistant on Bedrock, CI/CD 60% quicker.",
  },
];

export const POSTS: Post[] = [
  {
    title: "Compliance as code: making the EU AI Act executable",
    meta: "GOVERNANCE",
    read: "8 min",
  },
  {
    title: "Getting 30 FPS multimodal inference out of edge hardware",
    meta: "EDGE AI",
    read: "6 min",
  },
  {
    title: "What a 2M-event day teaches you about pipeline design",
    meta: "CLOUD",
    read: "7 min",
  },
];

export const LIME_MARQUEE = [
  "Multimodal models",
  "✦",
  "Agentic pipelines",
  "✦",
  "2M events / day",
  "✦",
  "99.9% uptime",
  "✦",
  "Edge inference",
  "✦",
  "Published research",
  "✦",
];

/** [iconKey | null, label]: icon only where the brand logo truly matches */
export const TECH_MARQUEE: Array<[string | null, string]> = [
  ["amazonwebservices", "AWS"],
  [null, "Bedrock"],
  ["python", "Python"],
  ["langchain", "LangChain"],
  ["apachespark", "Spark"],
  ["databricks", "Databricks"],
  ["ros", "ROS 2"],
  ["docker", "Docker"],
  ["kubernetes", "Kubernetes"],
  ["pytorch", "PyTorch"],
  [null, "FAISS"],
  [null, "CARLA"],
  ["jenkins", "Jenkins"],
  ["tensorflow", "TensorFlow"],
  ["terraform", "Terraform"],
];

export const HERO_STACK = [
  "python",
  "amazonwebservices",
  "kubernetes",
  "docker",
  "pytorch",
  "langchain",
];
