"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Download, Mail } from "lucide-react";

// ParticleRing removed as it's now global

// function HeroText() {
//     const { viewport } = useThree();
//     const isMobile = viewport.width < 7;
//     const scale = isMobile ? viewport.width / 7 : 1;

//     return (
//         <group position={[0, 0, 2]}>
//             <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
//                 <Text
//                     fontSize={isMobile ? 0.8 : 1.5}
//                     color="white"
//                     anchorX="center"
//                     anchorY="middle"
//                     position={[0, 1 * scale, 0]}
//                     maxWidth={viewport.width * 0.9}
//                     textAlign="center"
//                 >
//                     Mohammed Maqsood Ahmed
//                 </Text>
//                 <Text
//                     fontSize={isMobile ? 0.3 : 0.6}
//                     color="#a5b4fc"
//                     anchorX="center"
//                     anchorY="middle"
//                     position={[0, -0.5 * scale, 0]}
//                     maxWidth={viewport.width * 0.9}
//                     textAlign="center"
//                 >
//                     Cloud Engineer | AI/ML Developer
//                 </Text>
//             </Float>
//         </group>
//     );
// }

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            {/* No 3D text or objects here, just lighting for the global particles if they were here, 
          but global particles are in a separate canvas. 
          We keep this empty or remove the Canvas entirely if not needed for this section specifically.
          However, keeping it for potential future 3D elements is fine. 
          For now, we can actually remove the Canvas from this component since the particles are global.
      */}
        </>
    );
}

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Slower speed (was 50)

        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayedText}</span>;
};

export default function Hero3D() {
    return (
        <section id="home" className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Content Container */}
            <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-8">

                {/* Icon/Logo */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shadow-2xl shadow-indigo-500/20 backdrop-blur-sm"
                >
                    <BrainCircuit size={64} className="text-indigo-400" />
                </motion.div>

                {/* Name with Glow */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Maqsood</span>
                </motion.h1>

                {/* Typewriter Roles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-xl md:text-3xl font-medium text-gray-200 h-8"
                >
                    <TypewriterText text="Cloud Engineer | AI/ML Developer | Tech Enthusiast" />
                    <span className="animate-pulse">|</span>
                </motion.div>

                {/* Bio Description */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
                >
                    A Cloud AI/ML engineer uncovering the architecture of thought and advancing the frontier of intelligence by designing scalable systems that carry us toward what comes next.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-4 mt-8"
                >
                    <a
                        href="/resume.pdf"
                        download="Mohammed_Maqsood_Ahmed_Resume.pdf"
                        className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25"
                    >
                        <Download size={20} />
                        Download Resume
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-semibold transition-all flex items-center gap-2 backdrop-blur-sm"
                    >
                        <Mail size={20} />
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-10 left-0 w-full z-20 flex justify-center"
            >
                <div className="text-white/30 text-sm animate-bounce">
                    Scroll Down
                </div>
            </motion.div>
        </section>
    );
}
