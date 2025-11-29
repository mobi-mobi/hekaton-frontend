"use client";

import { Github, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black pt-16 pb-8 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-2">
                            FutureProof
                        </div>
                        <p className="text-zinc-500 text-sm">
                            Navigating the AI revolution, one profession at a time.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex gap-6"
                    >
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">Profession Library</a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">About</a>
                        <a href="#" className="text-zinc-500 hover:text-white transition-colors">Contact</a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex gap-4"
                    >
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="border-t border-white/5 pt-8 text-center text-sm text-zinc-600"
                >
                    <p>&copy; 2024 FutureProof AI. Built for the Hackathon.</p>
                </motion.div>
            </div>
        </footer>
    );
}
