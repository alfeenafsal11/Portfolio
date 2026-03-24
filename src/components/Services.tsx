import { motion } from "framer-motion";
import { Brain, Code, Server, Trophy } from "lucide-react";
import SectionNav from "./SectionNav";

const services = [
    {
        icon: <Brain size={24} />,
        title: "Machine Learning",
        description: "Creating models for Regression and Classification. Exploring Generative AI, LLMs, and Prompting.",
    },
    {
        icon: <Code size={24} />,
        title: "Software Engineering",
        description: "Building robust applications with Modular Design, emphasizing clear architecture and debugging.",
    },
    {
        icon: <Server size={24} />,
        title: "Backend Development",
        description: "Designing REST APIs, utilizing Linux CLI, and working with SQL/NoSQL databases.",
    },
    {
        icon: <Trophy size={24} />,
        title: "Problem Solving & Competitions",
        description: "Solved 400+ DSA problems on LeetCode with 50 & 100-Day badges. Ranked Top 50 in Binary Blitz Hackathon.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-surface/30">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Areas of Expertise</h2>
                    <p className="text-secondary max-w-md mx-auto">
                        Here are my core technical domains and achievements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-secondary leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <SectionNav href="#achievements" label="View Achievements" />
            </div>
        </section>
    );
}
