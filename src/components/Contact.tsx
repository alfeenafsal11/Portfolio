import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) return;

        setStatus("sending");

        try {
            // Uses mailto as a reliable, zero-backend approach that opens the user's mail client
            // pre-filled with the right from/to details and body
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(
                `Name: ${name}\nFrom: ${email}\n\n${message}`
            );
            window.location.href = `mailto:alfeen.afsal@gmail.com?subject=${subject}&body=${body}&from=${encodeURIComponent(email)}`;
            setStatus("sent");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setStatus("error");
        }

        setTimeout(() => setStatus("idle"), 3000);
    };

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's work together</h2>
                    <p className="text-secondary text-lg">
                        Have a project or internship opportunity in mind? I'd love to hear about it.
                        <br />You can also reach me at +91-8590627725.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-8 md:p-10 rounded-3xl bg-surface border border-white/5"
                >
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-white placeholder:text-zinc-600"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-white placeholder:text-zinc-600"
                                    placeholder="yourname@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-background border border-white/10 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-white placeholder:text-zinc-600 resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? (
                                "Opening mail client..."
                            ) : status === "sent" ? (
                                "Message ready! ✓"
                            ) : status === "error" ? (
                                "Something went wrong"
                            ) : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
