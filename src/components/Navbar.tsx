import { useState, useEffect } from "react";
import { Copy } from "lucide-react";


const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Expertise", href: "#services" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const copyEmail = () => {
        navigator.clipboard.writeText("alfeen.afsal@gmail.com");
        // Could add toast here
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-4" : "py-6"
                }`}
        >
            <div className="container mx-auto px-4 max-w-5xl">
                <div
                    className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${isScrolled
                        ? "bg-background/80 backdrop-blur-md border border-white/10 shadow-lg"
                        : "bg-transparent"
                        }`}
                >
                    <a href="#" className="text-xl font-bold tracking-tighter hover:text-white transition-colors">
                        Alfeen.
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-secondary hover:text-white transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={copyEmail}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        <Copy size={16} />
                        <span>Copy Email</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
