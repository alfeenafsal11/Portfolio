import { motion } from "framer-motion";
import { ExternalLink, Award, Code2, FolderGit2 } from "lucide-react";
import SectionNav from "./SectionNav";

const achievements = [
    {
        title: "400+ DSA Problems",
        description: "Solved across multiple coding platforms demonstrating algorithmic reasoning.",
        link: "https://codolio.com/profile/alfeen_afsal",
        linkText: "Codolio Profile",
        icon: <Code2 size={24} className="text-white" />
    },
    {
        title: "50-Day & 100-Day Badges",
        description: "Earned for sustained problem-solving practice and strong consistency.",
        link: "https://leetcode.com/u/alfeen_afsal/",
        linkText: "LeetCode Profile",
        icon: <Award size={24} className="text-white" />
    },
    {
        title: "20+ Projects Completed",
        description: "Built scalable applications and systems across various technologies.",
        link: "https://github.com/alfeenafsal11",
        linkText: "GitHub Profile",
        icon: <FolderGit2 size={24} className="text-white" />
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements</h2>
                    <p className="text-secondary max-w-md">
                        Milestones and recognitions demonstrating problem-solving consistency, project building, and algorithmic reasoning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group flex flex-col p-8 rounded-3xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-surface/80"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                                {item.description}
                            </p>
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors mt-auto"
                            >
                                {item.linkText} <ExternalLink size={14} />
                            </a>
                        </motion.div>
                    ))}
                </div>

                <SectionNav href="#certificates" label="View Certificates" />
            </div>
        </section>
    );
}
