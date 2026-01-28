import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@gitroom/react/form/button';

export default function LandingPage() {
    return (
        <div className="min-h-screen w-full bg-[#0E0E0E] text-white flex flex-col">
            {/* Navigation */}
            <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">Vinsmoke Media</span>
                </div>
                <div className="flex gap-4">
                    <Link href="/auth/login">
                        <Button className="bg-transparent hover:bg-white/10 text-white border border-white/20">
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/auth/">
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col justify-center items-center text-center px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <Image src="/logo.png" width={150} height={150} alt="Vinsmoke Media Logo" className="mx-auto mb-4" />
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        The Ultimate Social Media
                        <br />
                        <span className="text-[#FC69FF]">Scheduling Tool</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                        Vinsmoke Media helps you schedule posts, analyze performance, and manage all your social media accounts from a single dashboard. Features include unified analytics, team collaboration, multi-platform publishing, and AI-powered content suggestions.
                        <br />
                        Open Source, Privacy-Focused, and Developer Friendly.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                        <Link href="/auth/">
                            <Button className="h-14 px-8 text-lg bg-[#FC69FF] hover:bg-[#FC69FF]/90 text-white border-none">
                                Start Growing Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Pricing Section */}
            <section className="py-20 px-4 bg-[#0E0E0E]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                        Simple, Transparent Pricing
                    </h2>

                    <div className="flex justify-center">
                        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FC69FF]/50 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-[#FC69FF]">Starter</h3>
                                    <p className="text-gray-400 mt-1">Perfect for getting started</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-3xl font-bold">$0</span>
                                    <span className="text-gray-400">/mo</span>
                                </div>
                            </div>

                            <hr className="border-white/10 my-6" />

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-gray-200">
                                    <svg className="w-5 h-5 text-[#FC69FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Manage up to 10 channels
                                </li>
                                <li className="flex items-center gap-3 text-gray-200">
                                    <svg className="w-5 h-5 text-[#FC69FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    400 posts per month
                                </li>
                                <li className="flex items-center gap-3 text-gray-200">
                                    <svg className="w-5 h-5 text-[#FC69FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Unlimited scheduling
                                </li>
                            </ul>

                            <div className="bg-white/5 rounded-xl p-4 mb-8">
                                <p className="text-sm text-gray-400 mb-3 font-medium">Supported Platforms:</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Instagram', 'YouTube', 'TikTok', 'Facebook Pages', 'Pinterest', 'Reddit'].map((platform) => (
                                        <span key={platform} className="px-2 py-1 text-xs rounded-md bg-white/10 text-gray-200">
                                            {platform}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <Link href="/auth/" className="block">
                                <Button className="w-full bg-[#FC69FF] hover:bg-[#FC69FF]/90 text-white h-12">
                                    Get Started for Free
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="p-6 text-center text-gray-600 text-sm flex flex-col gap-2">
                <div>
                    &copy; {new Date().getFullYear()} Vinsmoke Media. All rights reserved.
                </div>
                <div className="flex gap-4 justify-center">
                    <Link href="/privacy/" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms/" className="hover:text-white transition-colors">Terms of Service</Link>
                    <Link href="/deletion-instructions/" className="hover:text-white transition-colors">Data Deletion Instructions</Link>
                </div>
            </footer>
        </div>
    );
}
