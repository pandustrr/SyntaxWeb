import Navbar from '@/components/layout/Navbar';

export default function PublicLayout({ children }) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="pt-16">
                {children}
            </main>

            <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} SyntaxWeb. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
