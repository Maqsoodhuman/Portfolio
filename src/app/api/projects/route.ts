import { NextResponse } from "next/server";

const projects = [
    {
        id: 1,
        title: "RefFlag — AI-powered Chrome Extension",
        description: "Developed a Chrome extension integrating LLM inference APIs and web scraping modules to audit and highlight risky Privacy Policies and Terms & Conditions in real time.",
        tags: ["Chrome Extension", "LLM", "Web Scraping", "Privacy"],
        image: "/placeholder-project.jpg",
        links: {
            github: "#",
            demo: "#",
        },
    },
    {
        id: 2,
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

export async function GET() {
    return NextResponse.json(projects);
}
