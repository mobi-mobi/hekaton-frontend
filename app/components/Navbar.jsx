"use client";

import { User, TrendingUp, Home } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 hover:opacity-80 transition-opacity">
                    JobAi
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group">
                        <Home className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                        <span>Home</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group">
                        <TrendingUp className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                        <span>Trends</span>
                    </Link>
                </div>

                {/* Profile */}
                <div>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors group">
                        <User className="w-5 h-5 group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
