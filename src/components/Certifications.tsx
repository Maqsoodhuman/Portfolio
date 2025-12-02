"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
    "Oracle Generative AI Professional",
    "AWS Solutions Architect",
    "AWS Developer Associate",
    "Deep Learning (IIT Madras)",
    "Oracle AI Fundamentals Associate",
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Certifications
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition-colors flex items-center space-x-4"
                            >
                                <div className="p-2 bg-green-500/20 rounded-full text-green-400">
                                    <Award size={20} />
                                </div>
                                <span className="text-lg font-medium text-gray-200">{cert}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
