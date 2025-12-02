"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Terminal, Cpu } from "lucide-react";

const skillCategories = [
    {
        title: "Programming Languages",
        icon: <Code className="text-blue-400" />,
        skills: ["Python", "Java", "JavaScript", "SQL", "Bash/Shell"],
    },
    {
        title: "Cloud Computing (AWS)",
        icon: <Cloud className="text-purple-400" />,
        skills: [
            "EC2", "RDS", "S3", "Lambda", "API Gateway", "Glue",
            "Step Functions", "SNS", "SQS", "IAM", "VPC",
            "CloudWatch", "EventBridge", "CloudFormation"
        ],
    },
    {
        title: "AI & Machine Learning",
        icon: <Cpu className="text-green-400" />,
        skills: [
            "PyTorch", "Hugging Face", "LangChain", "Pinecone",
            "SageMaker", "Bedrock", "Kendra", "OpenSearch",
            "Optuna", "NumPy", "Pandas"
        ],
    },
    {
        title: "DevOps & Infrastructure",
        icon: <Terminal className="text-orange-400" />,
        skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD", "Git"],
    },
    {
        title: "Databases",
        icon: <Database className="text-red-400" />,
        skills: ["Snowflake", "DynamoDB", "MySQL", "PostgreSQL", "Data Lakes"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Technical Skills
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10"
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="p-2 bg-white/5 rounded-lg">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 border border-white/5 hover:border-white/20 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
