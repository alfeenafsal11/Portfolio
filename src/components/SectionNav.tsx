import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface SectionNavProps {
    href: string;
    label: string;
}

export default function SectionNav({ href, label }: SectionNavProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16 mb-4"
        >
            <a
                href={href}
                className="group flex flex-col items-center gap-2 text-secondary hover:text-white transition-colors duration-300"
                aria-label={label}
            >
                <span className="text-xs font-medium tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    {label}
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(255,255,255,0.08)]"
                >
                    <ChevronDown size={18} />
                </motion.div>
            </a>
        </motion.div>
    );
}
