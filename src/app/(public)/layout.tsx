import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
