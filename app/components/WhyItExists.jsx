"use client";

import {
  Shield,
  Lightbulb,
  Target,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Activity,
  Search,
  Cpu,
  LineChart,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// ============ WHY IT EXISTS ============
function WhyItExists() {
  const features = [
    {
      icon: Shield,
      title: "Reality Check, Not Fear",
      description:
        "We provide data-backed insights into automation risks, helping you face the future with clarity rather than anxiety.",
      iconColor: "text-blue-400",
    },
    {
      icon: Target,
      title: "Actionable Roadmaps",
      description:
        "Don't just know the problem—see the solution. We identify the exact skills you need to learn to stay relevant.",
      iconColor: "text-purple-400",
    },
    {
      icon: Lightbulb,
      title: "Opportunity Radar",
      description:
        "AI isn't just a threat. Discover new roles and hybrid careers that are emerging as technology evolves.",
      iconColor: "text-yellow-400",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradients - matching hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            Why We Built This
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
          >
            The job market is shifting faster than ever. We're here to help you
            navigate the transition from the workforce of today to the workforce
            of 2030.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative"
              >
                {/* Glassmorphism card matching hero search bar */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/10 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
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

// ============ RESULT PREVIEW ============
function ResultPreview() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
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
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            See What You're Up Against
          </h2>
          <p className="text-xl text-zinc-400">
            Instant analysis of your profession's future viability.
          </p>
        </motion.div>

        {/* Mock Interface with glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-1000"></div>
          <div className="relative rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/20 overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            {/* Mock Header */}
            <div className="border-b border-white/10 p-4 flex items-center gap-4 bg-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/60" />
              </div>
              <div className="h-6 w-64 bg-white/10 backdrop-blur-md rounded-full border border-white/20" />
            </div>

            <div className="grid md:grid-cols-3 gap-8 p-8">
              {/* Main Score */}
              <div className="md:col-span-1 space-y-6">
                <div className="relative aspect-square rounded-2xl bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/20">
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
                    <div className="text-sm text-zinc-400 uppercase tracking-wider">
                      Replaceability Score
                    </div>
                  </div>
                  <svg className="absolute inset-0 w-full h-full -rotate-90 p-4">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-white/10"
                    />
                    <motion.circle
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 80 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                      cx="50%"
                      cy="50%"
                      r="40%"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-purple-500"
                      strokeDasharray="251.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="p-4 rounded-xl bg-red-500/10 backdrop-blur-md border border-red-500/30 flex items-start gap-3"
                >
                  <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-red-200 text-sm">
                      High Automation Risk
                    </div>
                    <div className="text-xs text-red-300/60 mt-1">
                      Routine tasks are highly vulnerable to AI automation by
                      2027.
                    </div>
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
                      {
                        label: "Data Analysis & Reporting",
                        score: 95,
                        color: "bg-red-500",
                      },
                      {
                        label: "Client Communication",
                        score: 45,
                        color: "bg-yellow-500",
                      },
                      {
                        label: "Strategic Planning",
                        score: 15,
                        color: "bg-green-500",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        className="group/item p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                      >
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-zinc-300">{item.label}</span>
                          <span className="text-zinc-400">
                            {item.score}% AI Ready
                          </span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.score}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 1 + index * 0.1,
                              ease: "easeOut",
                            }}
                            className={`h-full ${item.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <h3 className="text-lg font-medium text-white flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Future-Proofing Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Emotional Intelligence",
                      "Complex Problem Solving",
                      "Creative Direction",
                    ].map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                        className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-300 text-sm flex items-center gap-2 hover:bg-white/20 transition-all shadow-lg"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ HOW IT WORKS ============
function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Enter Your Profession",
      desc: "Type in your current job title. We analyze thousands of data points.",
      color: "text-purple-400",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI Analysis Engine",
      desc: "Our engine breaks down your role into tasks and evaluates AI capabilities.",
      color: "text-blue-400",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Get Your Strategy",
      desc: "Receive a personalized report with risk scores and upskilling roadmap.",
      color: "text-green-400",
    },
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
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
              ease: "easeInOut",
            }}
            className="absolute top-1/3 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/3 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-screen"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              How It Works
            </h2>
            <p className="text-xl text-zinc-400">
              The path to future-proofing your career
            </p>
          </div>

          <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
            {/* Vertical Line Container */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                style={{
                  height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                }}
                className="w-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500"
              />
            </div>

            {/* Glowing Node */}
            <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20" />

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

              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  style={{
                    opacity,
                    x: isEven ? x : useTransform(x, (val) => -val),
                    scale,
                  }}
                  className={`absolute ${
                    isEven ? "left-[55%]" : "right-[55%]"
                  } top-1/2 -translate-y-1/2 w-[350px] md:w-[400px]`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] flex flex-col gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center ${step.color} shadow-lg`}
                      >
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-white">
                          {step.title}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div
                    className={`absolute top-1/2 ${
                      isEven ? "-left-12" : "-right-12"
                    } w-12 h-[1px] bg-white/20 -translate-y-1/2`}
                  />
                  <div
                    className={`absolute top-1/2 ${
                      isEven ? "-left-1.5" : "-right-1.5"
                    } w-3 h-3 rounded-full bg-white/30 backdrop-blur-sm -translate-y-1/2 border border-white/40`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ DEMO WRAPPER ============
export default function UpdatedSections() {
  return (
    <div className="bg-black text-white min-h-screen">
      <WhyItExists />
      <ResultPreview />
      <HowItWorks />
    </div>
  );
}
