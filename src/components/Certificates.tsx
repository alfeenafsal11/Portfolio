import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Award, X } from "lucide-react";
import { useState, useEffect } from "react";
import SectionNav from "./SectionNav";

const certificates = [
    {
        title: "Certified Essentials Automation Professional",
        issuer: "Automation Anywhere",
        date: "Dec 2025",
        link: "https://certificates.automationanywhere.com/4caea647-a15b-4fd3-9414-2b6e00e65f00#acc.PBdsXeQO",
    },
    {
        title: "Java Programming",
        issuer: "iamNeo",
        date: "Jul 2025",
        link: "https://drive.google.com/file/d/1foDIHO3AIgHkhepo9HNzKBHEjhRht2DJ/view?usp=drive_link",
    },
    {
        title: "Supervised Machine Learning: Regression & Classification",
        issuer: "Stanford Online / Coursera",
        date: "Nov 2024",
        link: "https://www.coursera.org/account/accomplishments/verify/WGCZO3MQ60GZ",
    },
    {
        title: "The Bits and Bytes of Computer Networking",
        issuer: "Coursera",
        date: "Sept 2024",
        link: "https://www.coursera.org/account/accomplishments/verify/6ZJL2W0J2E7O",
    },
];

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedCert]);

    const getIframeUrl = (url: string) => {
        if (url.includes('drive.google.com/file/d/')) {
            return url.replace('/view?usp=drive_link', '/preview');
        }
        return url;
    };

    return (
        <section id="certificates" className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Certificates</h2>
                    <p className="text-secondary max-w-md">
                        Verified credentials and professional certifications earned through coursework and training.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {certificates.map((cert, index) => (
                        <motion.button
                            key={cert.title}
                            onClick={() => setSelectedCert(cert)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group flex items-start gap-4 p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/20 transition-all duration-300 hover:bg-surface/80 text-left w-full"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                                <Award size={18} className="text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="text-base font-semibold leading-snug group-hover:text-white transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <ExternalLink size={14} className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-secondary" />
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <p className="text-secondary text-sm">{cert.issuer}</p>
                                    <span className="text-white/20">·</span>
                                    <p className="text-secondary text-sm">{cert.date}</p>
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>

                <SectionNav href="#contact" label="Get In Touch" />
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setSelectedCert(null);
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-5xl h-[80vh] bg-surface border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
                        >
                            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-background/80 backdrop-blur-md z-10">
                                <h3 className="font-semibold text-lg text-white">{selectedCert.title}</h3>
                                <div className="flex gap-2">
                                    <a
                                        href={selectedCert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-secondary hover:text-white flex items-center gap-2 text-sm font-medium"
                                        title="Open in new tab if preview fails"
                                    >
                                        <ExternalLink size={18} />
                                        <span className="hidden md:inline">Open Original</span>
                                    </a>
                                    <button
                                        onClick={() => setSelectedCert(null)}
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white bg-white/5"
                                        title="Close"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 bg-black/50 relative">
                                <div className="absolute inset-0 flex items-center justify-center -z-10">
                                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                </div>
                                <iframe
                                    src={getIframeUrl(selectedCert.link)}
                                    className="w-full h-full border-0 absolute inset-0 z-0 bg-white"
                                    title={selectedCert.title}
                                    allow="autoplay"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
