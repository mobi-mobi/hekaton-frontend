"use client";

import { Shield, Lightbulb, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyItExists() {
    const features = [
        {
            icon: Shield,
            title: "Reality Check, Not Fear",
            description: "We provide data-backed insights into automation risks, helping you face the future with clarity rather than anxiety.",
            color: "blue",
            gradient: "from-blue-500/20 to-cyan-500/20",
            iconColor: "text-blue-400",
            glow: "group-hover:shadow-blue-500/20"
        },
        {
            icon: Target,
            title: "Actionable Roadmaps",
            description: "Don't just know the problem—see the solution. We identify the exact skills you need to learn to stay relevant.",
            color: "purple",
            gradient: "from-purple-500/20 to-pink-500/20",
            iconColor: "text-purple-400",
            glow: "group-hover:shadow-purple-500/20"
        },
        {
            icon: Lightbulb,
            title: "Opportunity Radar",
            description: "AI isn't just a threat. Discover new roles and hybrid careers that are emerging as technology evolves.",
            color: "yellow",
            gradient: "from-yellow-500/20 to-orange-500/20",
            iconColor: "text-yellow-400",
            glow: "group-hover:shadow-yellow-500/20"
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Noise/Gradient */}
            <div className="absolute inset-0 bg-zinc-900/30">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white/60">
                            Why We Built This
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                        The job market is shifting faster than ever. We're here to help you navigate the transition from the workforce of today to the workforce of 2030.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                    {features.map((feature, index) => {
                        const isMiddle = index === 1;
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                className={`
                  group relative p-8 rounded-3xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:bg-zinc-900/60 hover:border-white/10
                  ${feature.glow} hover:shadow-2xl
                  ${isMiddle ? 'md:scale-110 md:z-10 bg-zinc-900/60 border-white/10 shadow-xl' : 'hover:scale-105'}
                `}
                            >
                                {/* Card Gradient Background */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className={`
                    w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8
                    group-hover:scale-110 transition-transform duration-500
                    border border-white/5 group-hover:border-white/20
                  `}>
                                        <Icon className={`w-7 h-7 ${feature.iconColor} transition-all duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`} />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-white/90 transition-colors">
                                        {feature.title}
                                    </h3>

                                    <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed tracking-wide font-light group-hover:text-zinc-300 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
