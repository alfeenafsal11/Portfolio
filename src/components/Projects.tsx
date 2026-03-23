import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Github, ExternalLink } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    highlights: string[];
    stack: string[];
    image: string;
    github?: string;
    demo?: string;
}

const projects: Project[] = [
    {
        id: 2,
        title: "Smart Product Price Prediction System",
        category: "Machine Learning · LightGBM",
        description:
            "End-to-end regression pipeline that predicts product prices from structured and textual features. Combines classical ML with NLP preprocessing to minimize generalization error across diverse product categories.",
        highlights: [
            "TF-IDF vectorization of product titles with dimensionality reduction",
            "One-Hot Encoding for categorical variables (category, condition)",
            "Feature scaling via StandardScaler before gradient boosting",
            "Evaluated using SMAPE metric to handle price-range variance",
            "LightGBM tuned with early stopping and cross-validation",
        ],
        stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "LightGBM", "spaCy", "TF-IDF", "SMAPE"],
        image: "/smart_price_prediction.png",
        github: "https://github.com/Shailja12326646/AI_AGENTS",
    },
    {
        id: 1,
        title: "Vehicle Detection System",
        category: "Computer Vision · OpenCV · SVM",
        description:
            "Real-time vehicle detection pipeline using Histogram of Oriented Gradients (HOG) feature extraction paired with a Support Vector Machine classifier. Achieves 99.1% accuracy with significant inference speed optimization.",
        highlights: [
            "HOG descriptor extracts gradient-based shape features from video frames",
            "SVM classifier trained on balanced vehicle / non-vehicle dataset",
            "Sliding window + Non-Maximum Suppression eliminates duplicate detections",
            "40% inference speed improvement identified via bottleneck profiling",
            "Processes live webcam feed and pre-recorded video streams",
        ],
        stack: ["Python", "OpenCV", "HOG", "SVM", "Scikit-learn", "NumPy", "NMS"],
        image: "/vehicle_detection.png",
    },
    {
        id: 3,
        title: "C++ Debugger Retrieval Agent",
        category: "LLM Systems · RAG · MCP",
        description:
            "Agentic debugging system that intercepts C++ compiler errors and retrieves structured explanations from a local MCP knowledge base. Implements intelligent caching of bug-type retrievals to minimize latency and ensure consistency across repeated error patterns.",
        highlights: [
            "MCP-based knowledge retrieval for contextual C++ error explanations",
            "LLM integration (Ollama/Qwen) generates fix suggestions from retrieved context",
            "Error fingerprinting enables deterministic cache lookup for identical bug types",
            "Caching layer reduces repeated retrieval latency significantly",
            "Modular pipeline: parse → fingerprint → cache/retrieve → generate → return",
        ],
        stack: ["C++", "Python", "Ollama", "Qwen", "MCP", "RAG", "LLM Orchestration", "Caching"],
        image: "/cpp_debugger_agent.png",
        github: "https://github.com/alfeenafsal11/C-Debugger",
    },
    {
        id: 5,
        title: "Resume Screener",
        category: "NLP · Candidate Ranking System",
        description:
            "NLP-powered resume screening pipeline that parses, ranks, and scores candidate resumes against job descriptions. Automates the shortlisting process using semantic similarity and keyword extraction.",
        highlights: [
            "TF-IDF and cosine similarity score resumes against job description vectors",
            "Named Entity Recognition extracts skills, education, and experience spans",
            "Scoring rubric weighs role-specific keywords and years of experience",
            "Batch processing supports ranking multiple resumes in a single run",
            "Outputs ranked shortlist with per-resume score breakdown",
        ],
        stack: ["Python", "spaCy", "NLTK", "TF-IDF", "Cosine Similarity", "NER", "Pandas"],
        image: "/resume_screener.png",
        github: "https://github.com/alfeenafsal11/Resume-Screener",
    },
    {
        id: 4,
        title: "Interactive Pathfinding Visualizer",
        category: "Algorithms · Pygame · DSA",
        description:
            "Interactive grid-based visualizer that animates BFS and Dijkstra's algorithm in real time. Users can draw walls, set source and destination nodes, and watch the search frontier expand step by step.",
        github: "https://github.com/alfeenafsal11/PEPClass_Project",
        highlights: [
            "Dijkstra's algorithm using a min-heap priority queue for optimal path cost",
            "BFS guarantees shortest path on unweighted grids",
            "Grid adjacency list representation with configurable wall placement",
            "Animated node coloring for visited, frontier, and path nodes",
            "Real-time interaction: redraw walls and re-run without restart",
        ],
        stack: ["Python", "Pygame", "BFS", "Dijkstra", "Priority Queue", "DSA"],
        image: "/pathfinding_visualizer.png",
    },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    // Prevent background scroll while modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <motion.div
                className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111] border border-white/10 shadow-2xl"
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 30 }}
                transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
                {/* Header image */}
                <div className="relative h-52 w-full overflow-hidden rounded-t-3xl">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-black/50 to-transparent" />

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                        <X size={16} />
                    </button>

                    {/* Category badge */}
                    <span className="absolute bottom-4 left-6 text-xs font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/10">
                        {project.category}
                    </span>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {project.title}
                    </h2>

                    <p className="text-[#aaa] leading-relaxed text-sm md:text-base">
                        {project.description}
                    </p>

                    {/* Highlights */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
                            Key Highlights
                        </h3>
                        <ul className="space-y-2">
                            {project.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-[#aaa]">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {(project.github !== undefined || project.demo) && (
                        <div className="flex gap-3 pt-2">
                            {project.github ? (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
                                >
                                    <Github size={15} /> GitHub
                                </a>
                            ) : project.github === "" ? (
                                <span className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/5 bg-white/3 text-white/30 cursor-not-allowed select-none">
                                    <Github size={15} /> Repo Coming Soon
                                </span>
                            ) : null}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white text-black hover:bg-white/90 transition-colors"
                                >
                                    <ExternalLink size={15} /> Live Demo
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="work" className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Projects</h2>
                        <p className="text-secondary max-w-md">
                            A showcase of my projects across Machine Learning, Computer Vision, and Software Engineering.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Image card */}
                            <div className="w-full aspect-[4/3] rounded-2xl mb-4 overflow-hidden relative shadow-2xl border border-white/5 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-white/5">
                                {/* Background image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                {/* Persistent overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 z-0" />

                                {/* "View Details" pill — appears on hover */}
                                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full bg-white text-black shadow-lg">
                                        View Details <ArrowUpRight size={15} />
                                    </span>
                                </div>
                            </div>

                            {/* Card footer */}
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold group-hover:text-white transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary text-sm">{project.category}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 bg-white text-black">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
