import Link from 'next/link';
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
                    <Link href="/auth/register">
                        <Button className="bg-primary hover:bg-primary/90 text-white">
                            Get Started
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col justify-center items-center text-center px-4">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Over <span className="text-[#FC69FF]">100+</span> Entrepreneurs use
                        <br />
                        <span className="block mt-2">Vinsmoke Media</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
                        To Grow Their Social Presence
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                        <Link href="/auth/register">
                            <Button className="h-14 px-8 text-lg bg-[#FC69FF] hover:bg-[#FC69FF]/90 text-white border-none">
                                Start Growing Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="p-6 text-center text-gray-600 text-sm flex flex-col gap-2">
                <div>
                    &copy; {new Date().getFullYear()} Vinsmoke Media. All rights reserved.
                </div>
                <div className="flex gap-4 justify-center">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                </div>
            </footer>
        </div>
    );
}
