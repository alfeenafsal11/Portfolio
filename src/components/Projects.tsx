import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 2,
        title: "Smart Product Price Prediction System",
        category: "Machine Learning (LightGBM)",
        description: "End-to-end regression pipeline with TF-IDF, One-Hot Encoding, and scaling. Evaluated via SMAPE to reduce generalization error.",
        stack: "Python, Pandas, NumPy, Scikit-learn, LightGBM, spaCy",
        image: "/smart_price_prediction.png",
    },
    {
        id: 1,
        title: "Vehicle Detection System",
        category: "Computer Vision (OpenCV, SVM)",
        description: "Real-time HOG + SVM pipeline with 99.1% accuracy. 40% inference speed improvement via bottleneck profiling.",
        stack: "Python, OpenCV, HOG, SVM",
        image: "/vehicle_detection.png",
    },
    {
        id: 3,
        title: "C++ Debugger Retrieval Agent",
        category: "LLM Systems / Retrieval-Augmented Debugging",
        description: "Agentic debugging system that retrieves error explanations using a structured MCP knowledge base. Implements caching of bug-type retrievals to optimize latency and improve consistency across repeated error patterns.",
        stack: "C++, Python, Retrieval Systems, MCP (Model Context Protocol), LLM Integration, Caching Strategies",
        image: "/cpp_debugger_agent.png",
    },
    {
        id: 4,
        title: "Interactive Pathfinding Visualizer",
        category: "Python (Pygame, Dijkstra)",
        description: "Implemented BFS & Dijkstra's algorithms using queues, heaps, and grid-based adjacency.",
        stack: "C++, Python, Pygame, DSA",
        image: "/pathfinding_visualizer.png",
    },
];

export default function Projects() {
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
                    <a
                        href="#"
                        className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
                    >
                        All Projects <ArrowUpRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group cursor-pointer perspective-1000"
                        >
                            <div
                                className={`w-full aspect-[4/3] rounded-2xl mb-4 overflow-hidden relative transform transition-transform duration-700 ease-out group-hover:scale-[1.02] shadow-2xl p-6 sm:p-8 flex flex-col justify-center border border-white/5`}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                ></div>

                                {/* Dark Overlay Filter (always partially active, gets darker on hover) */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors duration-500 z-0" />

                                {/* Text Content Overlay (appears on hover) */}
                                <div className="relative z-10 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 h-full flex flex-col justify-end">
                                    <p className="text-white font-medium text-sm md:text-base leading-relaxed mb-4 text-shadow-sm">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.stack.split(', ').map(tech => (
                                            <span key={tech} className="text-xs px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-semibold group-hover:text-white transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-secondary text-sm transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">{project.category}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out bg-white text-black">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
                        All Projects <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
