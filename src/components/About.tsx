"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        About Me
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                I am a Senior Cloud Engineer and AI/ML Developer with over 4 years of experience designing and deploying cloud-native solutions. My expertise lies in building scalable, event-driven architectures on AWS and integrating cutting-edge AI/ML technologies.
                            </p>
                            <p>
                                Currently pursuing my Masters in Computer Science (AI/ML) at the University at Buffalo, I combine academic rigor with practical industry experience. I have a proven track record of reducing costs, improving system reliability, and delivering innovative AI solutions like generative AI assistants and anomaly detection systems.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                        <GraduationCap size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Education</h3>
                                        <p className="text-gray-400 mt-1">Masters in Computer Science (AI/ML)</p>
                                        <p className="text-gray-500 text-sm">University at Buffalo - New York</p>
                                        <p className="text-gray-500 text-sm">Aug 2025 – Present</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                        <Award size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white">Key Achievement</h3>
                                        <p className="text-gray-400 mt-1">Shooting Star Award (2024)</p>
                                        <p className="text-gray-500 text-sm">LTIMindtree</p>
                                        <p className="text-gray-500 text-sm">For key contributions in Cloud Engineering</p>
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
