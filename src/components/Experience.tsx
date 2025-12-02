"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Senior Cloud Engineer",
        company: "LTIMindtree | Portland General Electric",
        location: "Hyderabad, India",
        period: "Jan 2021 – June 2025",
        points: [
            "Designed and deployed cloud-native solutions across multiple enterprise projects, replacing legacy systems with scalable, event-driven architectures on AWS, achieving 30% cost reduction and 99.9% uptime.",
            "Built more than 100 high-performance APIs and serverless ETL pipelines, improving outage detection and customer alerting speed by ∼40% for over 500K+ customers.",
            "Implemented anomaly detection and real-time alerting in the energy trading platform, reducing trading risks by 25% through early detection of pricing anomalies.",
            "Collaborated with data science teams to automate hydro and budget forecasting models, reducing report generation time from 3 hours to 20 minutes.",
            "Developed and deployed smart meter–based proactive outage alert system using AWS and Twilio, handling ∼2M daily events and reducing storm-time calls by 35%.",
            "Architected real-time Socket APIs and integrated Amazon Kendra with AWS Bedrock (Claude); delivered a Generative AI assistant for natural language enterprise search.",
            "Automated CI/CD pipelines (Jenkins) across all environments, reducing deployment time by 60%.",
        ],
    },
    {
        role: "Cloud Intern",
        company: "Grepthor Software Solutions",
        location: "Hyderabad, India",
        period: "March 2019 – Oct 2019",
        points: [
            "Collaborated with cross-functional teams to execute cloud migration initiatives on AWS, enhancing scalability and application performance.",
            "Implemented and maintained AWS CloudWatch alarms and dashboards tracking 15+ key metrics, reducing incident response time by 30%.",
            "Engineered event-driven and serverless architectures leveraging AWS Lambda, Amazon S3, and Amazon SNS.",
        ],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Professional Experience
                    </h2>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 border-l-2 border-blue-500/30"
                            >
                                <div className="absolute -left-[9px] top-0 p-1 bg-black rounded-full border-2 border-blue-500">
                                    <Briefcase size={12} className="text-blue-500" />
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <div className="text-blue-400 font-medium mb-1">{exp.company}</div>
                                    <div className="flex justify-between text-sm text-gray-500">
                                        <span>{exp.period}</span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <ul className="space-y-3">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start">
                                            <span className="mr-2 text-blue-500">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
