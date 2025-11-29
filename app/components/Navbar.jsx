"use client";

import { User, TrendingUp, Home, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Background with blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl border-b border-white/20"></div>

      {/* Gradient glow effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -top-20 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative z-10">
        {/* Logo with gradient and glow */}
        <Link href="/" className="relative group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Sparkles className="w-5 h-5 text-blue-400 relative z-10" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 relative z-10">
              JobAi
            </span>
          </motion.div>
        </Link>

        {/* Navigation Links with glassmorphism */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-sm text-zinc-300 hover:bg-white/10 hover:border-white/30 transition-all shadow-lg group"
            >
              <Home className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
              <span>Home</span>
            </motion.div>
          </Link>
          <Link href="#">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-sm text-zinc-300 hover:bg-white/10 hover:border-white/30 transition-all shadow-lg group"
            >
              <TrendingUp className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
              <span>Trends</span>
            </motion.div>
          </Link>
        </div>

        {/* Profile with glassmorphism */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all shadow-lg">
            <User className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
          </div>
        </motion.button>
      </div>
    </motion.nav>
  );
}
