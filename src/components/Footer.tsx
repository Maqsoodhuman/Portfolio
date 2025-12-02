export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-8">
            <div className="container mx-auto px-6 text-center">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Mohammed Maqsood Ahmed. All rights reserved.
                </p>
                <p className="text-gray-600 text-xs mt-2">
                    Built with Next.js, Three.js, and Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}
