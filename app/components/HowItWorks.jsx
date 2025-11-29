"use client";

import { Search, Cpu, LineChart } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const steps = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "Enter Your Profession",
            desc: "Type in your current job title. We analyze thousands of data points.",
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            icon: <Cpu className="w-8 h-8" />,
            title: "AI Analysis Engine",
            desc: "Our engine breaks down your role into tasks and evaluates AI capabilities.",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            icon: <LineChart className="w-8 h-8" />,
            title: "Get Your Strategy",
            desc: "Receive a personalized report with risk scores and upskilling roadmap.",
            color: "text-green-400",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        }
    ];

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
                        <p className="text-zinc-400 text-lg">The path to future-proofing your career</p>
                    </div>

                    <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
                        {/* Vertical Line Container */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-zinc-800 -translate-x-1/2 rounded-full overflow-hidden">
                            <motion.div
                                style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                                className="w-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"
                            />
                        </div>

                        {/* Glowing Node on the line */}
                        <motion.div
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20"
                        />

                        {steps.map((step, index) => {
                            const start = index / steps.length;
                            const end = (index + 1) / steps.length;
                            const mid = (start + end) / 2;

                            const opacity = useTransform(
                                scrollYProgress,
                                [start, start + 0.1, end - 0.1, end],
                                [0, 1, 1, 0]
                            );

                            const x = useTransform(
                                scrollYProgress,
                                [start, mid, end],
                                [100, 0, -100]
                            );

                            const scale = useTransform(
                                scrollYProgress,
                                [start, mid, end],
                                [0.8, 1, 0.8]
                            );

                            // Alternate sides for visual interest
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    style={{ opacity, x: isEven ? x : useTransform(x, (val) => -val), scale }}
                                    className={`absolute ${isEven ? 'left-[55%]' : 'right-[55%]'} top-1/2 -translate-y-1/2 w-[350px] md:w-[400px]`}
                                >
                                    <div className={`
                    p-8 rounded-2xl border backdrop-blur-xl bg-zinc-900/90 shadow-2xl
                    ${step.border}
                    flex flex-col gap-4
                  `}>
                                        <div className={`w-14 h-14 rounded-xl ${step.bg} flex items-center justify-center ${step.color}`}>
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                                            <p className="text-zinc-400 leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                        <div className={`h-1 w-12 rounded-full bg-current ${step.color} opacity-50`} />
                                    </div>

                                    {/* Connector Line to Center */}
                                    <div className={`absolute top-1/2 ${isEven ? '-left-12' : '-right-12'} w-12 h-[1px] bg-zinc-700 -translate-y-1/2`} />
                                    <div className={`absolute top-1/2 ${isEven ? '-left-1.5' : '-right-1.5'} w-3 h-3 rounded-full bg-zinc-600 -translate-y-1/2`} />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
