"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2 } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setSubmitStatus("success");
            reset();
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus("idle"), 3000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-transparent text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Get In Touch
                    </h2>
                    <p className="text-center text-gray-400 mb-12">
                        Have a project in mind or want to discuss cloud solutions? Send me a message!
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    {...register("name")}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs">{errors.name.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    {...register("email")}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white"
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-xs">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                {...register("message")}
                                rows={5}
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-white resize-none"
                                placeholder="Your message..."
                            />
                            {errors.message && (
                                <p className="text-red-400 text-xs">{errors.message.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} /> Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={20} /> Send Message
                                </>
                            )}
                        </button>

                        {submitStatus === "success" && (
                            <p className="text-green-400 text-center text-sm">
                                Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        {submitStatus === "error" && (
                            <p className="text-red-400 text-center text-sm">
                                Something went wrong. Please try again later.
                            </p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
