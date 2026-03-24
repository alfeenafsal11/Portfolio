import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-white/10 mt-20">
            <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-secondary text-sm">
                    © {new Date().getFullYear()} Alfeen K Afsal. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <SocialLink href="mailto:alfeen.afsal@gmail.com" icon={<Mail size={20} />} />
                    <SocialLink href="https://linkedin.com/in/alfeen-k-afsal" icon={<Linkedin size={20} />} />
                    <SocialLink href="https://github.com/alfeenafsal11" icon={<Github size={20} />} />
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-secondary hover:text-white transition-colors"
        >
            {icon}
        </a>
    );
}
