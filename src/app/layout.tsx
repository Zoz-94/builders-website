import './globals.css';

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Builders Agency",
  description: "Marketing and Branding Solutions by Builders",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-black overflow-x-hidden overflow-y-auto flex flex-col min-h-screen">
        <div className="relative z-10 flex flex-col min-h-screen">
          <header className="w-full bg-[#2B124C] bg-opacity-90 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 nav-hover-box">
                <Image src="/bulder brand.jpg" alt="Builders Logo" width={50} height={50} className="rounded-sm" />
                <span className="text-2xl font-bold tracking-wide">Builders</span>
              </Link>
              <nav className="flex space-x-4 text-base">
                <Link href="/" className="nav-hover-box">Home</Link>
                <Link href="/services" className="nav-hover-box">Services</Link>
                <Link href="/values" className="nav-hover-box">Values</Link>
                <Link href="/branding" className="nav-hover-box">Branding</Link>
                <Link href="/contact" className="nav-hover-box">Contact</Link>
              </nav>
            </div>
            {children} {/* ✅ Add this */}
          </header>

          <main className="relative max-w-6xl mx-auto px-4 py-20 flex-grow w-full">
            <div className="text-center z-10">
              <h1 className="text-5xl font-bold text-purple-900 mb-6">Welcome to Builders</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
                Your dedicated partner in crafting innovative and effective marketing solutions. Our mission is to empower businesses with strategies that capture attention and deliver results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-[#F7F5F9] shadow-md p-6 rounded-lg">Future update card #1</div>
                <div className="bg-[#F7F5F9] shadow-md p-6 rounded-lg">Future update card #2</div>
                <div className="bg-[#F7F5F9] shadow-md p-6 rounded-lg">Future update card #3</div>
              </div>
            </div>
          </main>

          <div className="bg-[#2B124C] text-white py-3">
            <div className="max-w-6xl mx-auto px-6">
              <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
              <p className="text-sm">Email: contact@builders.agency</p>
              <p className="text-sm">Phone: +123 456 7890</p>
              <p className="text-sm">Location: Amman, Jordan</p>
            </div>
          </div>

          <footer className="text-center text-gray-400 bg-[#2B124C] py-2 text-xs">
            © 2025 Builders. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}