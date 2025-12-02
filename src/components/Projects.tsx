"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "RefFlag — AI-powered Chrome Extension",
        description: "Developed a Chrome extension integrating LLM inference APIs and web scraping modules to audit and highlight risky Privacy Policies and Terms & Conditions in real time.",
        tags: ["Chrome Extension", "LLM", "Web Scraping", "Privacy"],
        image: "/placeholder-project.jpg", // We'll need a placeholder or generate one
        links: {
            github: "#",
            demo: "#",
        },
    },
    // Placeholder for more projects
    {
        title: "Portfolio Website",
        description: "A 3D interactive portfolio website built with Next.js, Three.js, and Tailwind CSS to showcase my skills and experience.",
        tags: ["Next.js", "Three.js", "Tailwind CSS", "TypeScript"],
        image: "/placeholder-project.jpg",
        links: {
            github: "https://github.com/maqsoodhuman",
            demo: "#",
        },
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all"
                            >
                                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                                    {/* Placeholder for image */}
                                    <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors" />
                                    <span className="text-gray-500 font-mono text-lg">{project.title}</span>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-white/5 rounded text-xs text-blue-300 border border-white/5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={20} />
                                            <span>Code</span>
                                        </a>
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                            <span>Live Demo</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
