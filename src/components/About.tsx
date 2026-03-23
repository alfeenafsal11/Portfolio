import { motion } from "framer-motion";

const skills = [
    "Python", "C++", "C", "JavaScript",
    "Data Structures", "Algorithms", "OOP",
    "Machine Learning", "Generative AI", "LLMs",
    "REST APIs", "SQL", "MongoDB", "ElasticSearch",
    "Pandas", "NumPy", "Scikit-Learn", "OpenCV", "Git"
];

const experience = [
    {
        year: "Aug 2023 - Present",
        role: "B.Tech CSE (CGPA: 8.36)",
        company: "Lovely Professional University"
    },
    {
        year: "Jun 2025 - Jul 2025",
        role: "DSA Trainee",
        company: "Cipher Schools (400+ DSA problems solved)"
    },
    {
        year: "Dec 2025",
        role: "Certified Automation Professional",
        company: "Automation Anywhere"
    },
    {
        year: "Nov 2024",
        role: "Supervised Machine Learning",
        company: "Stanford Online / Coursera"
    }
];

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {/* Bio Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
                        <div className="text-secondary space-y-4 text-lg leading-relaxed">
                            <p>
                                I am an AI Systems and Backend Engineering intern candidate focused on building agentic LLM systems and retrieval-driven architectures. My work centers on designing end-to-end pipelines that integrate local LLMs, structured retrieval (RAG), and workflow automation to solve real engineering problems.
                            </p>
                            <p>
                                I have hands-on experience with LLM orchestration (Ollama, Qwen), MCP-based retrieval systems, and n8n automation, along with a strong foundation in data structures, algorithms, and modular system design. I've built systems such as a C++ debugging agent that retrieves contextual error explanations and optimizes performance through caching strategies.
                            </p>
                            <p>
                                My approach emphasizes system-level thinking over isolated models—prioritizing latency, scalability, and reliability in AI-integrated backend systems.
                            </p>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-white font-semibold mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-surface border border-white/10 rounded-full text-sm text-secondary"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Education & Training</h3>
                        <div className="space-y-6">
                            {experience.map((job, index) => (
                                <div
                                    key={index}
                                    className="group p-6 rounded-2xl border border-white/5 hover:bg-surface hover:border-white/10 transition-colors"
                                >
                                    <span className="text-sm text-secondary block mb-1">{job.year}</span>
                                    <h4 className="text-lg font-semibold text-white group-hover:text-amber-100 transition-colors">{job.role}</h4>
                                    <p className="text-secondary">{job.company}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
