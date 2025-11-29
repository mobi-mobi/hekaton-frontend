"use client";

import { AlertTriangle, CheckCircle2, TrendingUp, Activity } from "lucide-react";
import { motion } from "framer-motion";

export default function ResultPreview() {
    return (
        <section className="py-20 px-4 relative">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">See What You're Up Against</h2>
                    <p className="text-zinc-400">Instant analysis of your profession's future viability.</p>
                </motion.div>

                {/* Mock Interface */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl overflow-hidden shadow-2xl"
                >
                    {/* Mock Header */}
                    <div className="border-b border-white/5 p-4 flex items-center gap-4">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="h-6 w-64 bg-white/5 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 p-8">
                        {/* Main Score */}
                        <div className="md:col-span-1 space-y-6">
                            <div className="relative aspect-square rounded-2xl bg-white/5 flex items-center justify-center border border-white/10">
                                <div className="text-center">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="text-5xl font-bold text-white mb-2"
                                    >
                                        68%
                                    </motion.div>
                                    <div className="text-sm text-zinc-400 uppercase tracking-wider">Replaceability Score</div>
                                </div>
                                <svg className="absolute inset-0 w-full h-full -rotate-90 p-4">
                                    <circle cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                                    <motion.circle
                                        initial={{ strokeDashoffset: 251.2 }}
                                        whileInView={{ strokeDashoffset: 80 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                        cx="50%" cy="50%" r="40%" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-purple-500" strokeDasharray="251.2" strokeLinecap="round"
                                    />
                                </svg>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3"
                            >
                                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <div>
                                    <div className="font-medium text-red-200 text-sm">High Automation Risk</div>
                                    <div className="text-xs text-red-300/60 mt-1">Routine tasks are highly vulnerable to AI automation by 2027.</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Analysis Details */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-blue-400" />
                                    Task Breakdown
                                </h3>

                                <div className="space-y-3">
                                    {[
                                        { label: "Data Analysis & Reporting", score: 95, color: "bg-red-500" },
                                        { label: "Client Communication", score: 45, color: "bg-yellow-500" },
                                        { label: "Strategic Planning", score: 15, color: "bg-green-500" },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                                            className="group p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-zinc-300">{item.label}</span>
                                                <span className="text-zinc-400">{item.score}% AI Ready</span>
                                            </div>
                                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${item.score}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 1 + (index * 0.1), ease: "easeOut" }}
                                                    className={`h-full ${item.color}`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <h3 className="text-lg font-medium text-white flex items-center gap-2 mb-4">
                                    <TrendingUp className="w-5 h-5 text-green-400" />
                                    Future-Proofing Skills
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Emotional Intelligence", "Complex Problem Solving", "Creative Direction"].map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) }}
                                            className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-300 text-sm flex items-center gap-2"
                                        >
                                            <CheckCircle2 className="w-3 h-3" />
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
