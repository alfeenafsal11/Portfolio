import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
    Brain, Code2, Server, Wrench, ChevronRight,
    Database, GitBranch, Network, Cpu, MessageSquare,
    Layers, FlaskConical, Search, Puzzle,
    Terminal, Zap, Users, ClipboardList
} from "lucide-react";
import SectionNav from "./SectionNav";

const categories = [
    {
        id: "technical",
        label: "Technical Skills",
        icon: <Code2 size={18} />,
        groups: [
            {
                title: "Programming Languages",
                icon: <Terminal size={16} />,
                skills: ["Python", "C++", "SQL"],
            },
            {
                title: "Machine Learning",
                icon: <Brain size={16} />,
                skills: [
                    "Supervised Learning (Regression, Classification)",
                    "Model Evaluation (Precision, Recall, F1-score)",
                    "Feature Engineering",
                    "Data Preprocessing & Cleaning",
                ],
            },
            {
                title: "Deep Learning",
                icon: <Cpu size={16} />,
                skills: [
                    "PyTorch",
                    "Neural Network Training & Optimization",
                    "Loss Function Tuning",
                    "Hyperparameter Optimization",
                ],
            },
            {
                title: "Natural Language Processing",
                icon: <MessageSquare size={16} />,
                skills: [
                    "Text Preprocessing",
                    "Semantic Similarity",
                    "Embeddings",
                    "Transformer-based Models",
                ],
            },
            {
                title: "LLM Engineering",
                icon: <Layers size={16} />,
                skills: [
                    "Prompt Engineering",
                    "Retrieval-Augmented Generation (RAG)",
                    "LLM Pipeline Design",
                    "Structured Output Generation",
                ],
            },
            {
                title: "Explainable AI (XAI)",
                icon: <Search size={16} />,
                skills: [
                    "Model Interpretability",
                    "Feature Importance Analysis",
                    "Explainability Techniques",
                ],
            },
            {
                title: "Algorithms & Problem Solving",
                icon: <Puzzle size={16} />,
                skills: [
                    "Data Structures & Algorithms (DSA)",
                    "Graph Algorithms (BFS, DFS)",
                    "Dynamic Programming (Foundations)",
                ],
            },
        ],
    },
    {
        id: "systems",
        label: "Systems & Engineering",
        icon: <Server size={18} />,
        groups: [
            {
                title: "AI Systems Design",
                icon: <Network size={16} />,
                skills: [
                    "Retrieval Systems (Vector / Keyword-based)",
                    "Debugging & Log Analysis Pipelines",
                    "Modular Pipeline Architecture",
                ],
            },
            {
                title: "Backend Development",
                icon: <Database size={16} />,
                skills: [
                    "Flask (API Development)",
                    "REST API Design",
                    "System Modularization",
                ],
            },
        ],
    },
    {
        id: "tools",
        label: "Tools & Platforms",
        icon: <Wrench size={18} />,
        groups: [
            {
                title: "LLM & Local Inference",
                icon: <FlaskConical size={16} />,
                skills: ["Ollama", "Qwen (3B / 7B Models)"],
            },
            {
                title: "Automation & Workflows",
                icon: <Zap size={16} />,
                skills: ["n8n", "Automation Anywhere"],
            },
            {
                title: "Development & Deployment",
                icon: <GitBranch size={16} />,
                skills: [
                    "Git & GitHub",
                    "Vercel",
                    "Netlify",
                    "Localhost Deployment & Testing",
                ],
            },
        ],
    },
    {
        id: "soft",
        label: "Soft Skills",
        icon: <Users size={18} />,
        groups: [
            {
                title: "Professional",
                icon: <ClipboardList size={16} />,
                skills: [
                    "Technical Documentation",
                    "Cross-Team Collaboration",
                    "Experiment Reporting",
                ],
            },
        ],
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const groupVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Skills() {
    const [activeTab, setActiveTab] = useState("technical");

    const activeCategory = categories.find((c) => c.id === activeTab)!;

    return (
        <section id="skills" className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Skills</h2>
                    <p className="text-secondary max-w-lg">
                        A structured overview of my technical toolkit, engineering capabilities, and professional competencies.
                    </p>
                </motion.div>

                {/* Tab Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-10"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-250 ${
                                activeTab === cat.id
                                    ? "bg-white text-black border-white"
                                    : "bg-surface text-secondary border-white/10 hover:border-white/25 hover:text-white"
                            }`}
                        >
                            {cat.icon}
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Skill Groups */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    >
                        {activeCategory.groups.map((group) => (
                            <motion.div
                                key={group.title}
                                variants={groupVariants}
                                className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/12 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="w-7 h-7 rounded-full bg-white/8 flex items-center justify-center text-secondary">
                                        {group.icon}
                                    </span>
                                    <h3 className="text-sm font-semibold text-white/90">{group.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/8 text-xs text-secondary hover:text-white hover:border-white/20 transition-colors duration-200"
                                        >
                                            <ChevronRight size={10} className="opacity-50" />
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <SectionNav href="#work" label="See My Projects" />
            </div>
        </section>
    );
}
