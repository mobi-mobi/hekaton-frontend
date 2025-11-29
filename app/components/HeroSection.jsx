"use client";

import { Search, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
    const [profession, setProfession] = useState("");

    const commonJobs = [
        "Developer",
        "Teacher",
        "Designer",
        "Lawyer",
        "Driver",
        "Doctor",
        "Marketer",
    ];

    return (
        <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3],
                        x: [0, 20, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-400 mb-8 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span>Future of Work 2030</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                    >
                        Will AI Replace Your Job?
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Discover your career's future in the age of artificial intelligence.
                        We analyze risks and reveal the skills you need to become irreplaceable.
                    </motion.p>

                    {/* Search Component */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-2xl mx-auto mb-12"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative flex items-center bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                                <Search className="w-6 h-6 text-zinc-500 ml-4" />
                                <input
                                    type="text"
                                    value={profession}
                                    onChange={(e) => setProfession(e.target.value)}
                                    placeholder="Enter a profession (e.g. UX Designer)"
                                    className="w-full bg-transparent border-none focus:ring-0 text-lg text-white placeholder-zinc-500 px-4 py-3 outline-none"
                                />
                                <button className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 whitespace-nowrap">
                                    Analyze
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Access Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        <span className="text-sm text-zinc-500 py-2">Popular:</span>
                        {commonJobs.map((job, index) => (
                            <motion.button
                                key={job}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                                onClick={() => setProfession(job)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-colors"
                            >
                                {job}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
