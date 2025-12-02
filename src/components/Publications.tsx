"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, ExternalLink } from "lucide-react";

const publications = [
    {
        title: "An Approach to Translate Human Gestures into Telugu",
        journal: "International Journal of Scientific and Technology Research (IJSTR)",
        year: "2022",
        link: "https://bit.ly/4nTIJHY",
    },
    {
        title: "Question Answering System using Deep Learning",
        journal: "Journal of Xidian University",
        year: "2021",
        link: "https://bit.ly/44RHArw",
    },
];

export default function Publications() {
    return (
        <section id="publications" className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Publications & Awards
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold flex items-center gap-2">
                                <BookOpen className="text-blue-400" /> Publications
                            </h3>
                            {publications.map((pub, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors"
                                >
                                    <h4 className="text-lg font-medium mb-2">{pub.title}</h4>
                                    <p className="text-gray-400 text-sm mb-4">{pub.journal} • {pub.year}</p>
                                    <a
                                        href={pub.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
                                    >
                                        Read Paper <ExternalLink size={14} className="ml-1" />
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold flex items-center gap-2">
                                <Award className="text-purple-400" /> Awards
                            </h3>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors">
                                <h4 className="text-lg font-medium mb-2">Shooting Star Award</h4>
                                <p className="text-gray-400 text-sm mb-2">LTIMindtree • 2024</p>
                                <p className="text-gray-300 text-sm">
                                    Recipient of the Shooting Star Award for key contributions in the Cloud Engineering Pillar at LTIMindtree.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
