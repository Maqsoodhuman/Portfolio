"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    MA
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-4 ml-4 border-l border-white/10 pl-4">
                        <a
                            href="https://github.com/maqsoodhuman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/maqsoodhuman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:m58@buffalo.edu"
                            className="text-gray-400 hover:text-red-400 transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-white text-lg font-medium"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center space-x-6 mt-4">
                                <a
                                    href="https://github.com/maqsoodhuman"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/maqsoodhuman"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="mailto:m58@buffalo.edu"
                                    className="text-gray-400 hover:text-red-400"
                                >
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
