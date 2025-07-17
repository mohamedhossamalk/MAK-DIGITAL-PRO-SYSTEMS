'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-white/90 border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-black text-xl font-bold">MAK Digital Pro</span>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">الرئيسية</Link>
            <Link href="/services" className="text-gray-700 hover:text-black transition-colors">الخدمات</Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">من نحن</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">اتصل بنا</Link>
          </nav>
          <Link href="/start" className="hidden md:block">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all">
              ابدأ الآن
            </button>
          </Link>
          {/* Hamburger for mobile */}
          <button className="md:hidden flex flex-col justify-center items-center w-10 h-10" onClick={() => setOpen(true)} aria-label="فتح القائمة">
            <span className="block w-7 h-0.5 bg-black mb-1"></span>
            <span className="block w-7 h-0.5 bg-black mb-1"></span>
            <span className="block w-7 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>
      {/* Sidebar Drawer */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black/40 flex">
          <div className="bg-white w-64 h-full shadow-lg p-6 flex flex-col gap-6 animate-slideInRight">
            <button className="self-end mb-4" onClick={() => setOpen(false)} aria-label="إغلاق القائمة">
              <span className="block w-6 h-0.5 bg-black rotate-45 translate-y-1"></span>
              <span className="block w-6 h-0.5 bg-black -rotate-45 -translate-y-1"></span>
            </button>
            <Link href="/" className="text-gray-700 hover:text-black text-lg" onClick={() => setOpen(false)}>الرئيسية</Link>
            <Link href="/services" className="text-gray-700 hover:text-black text-lg" onClick={() => setOpen(false)}>الخدمات</Link>
            <Link href="/about" className="text-gray-700 hover:text-black text-lg" onClick={() => setOpen(false)}>من نحن</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black text-lg" onClick={() => setOpen(false)}>اتصل بنا</Link>
            <Link href="/start" onClick={() => setOpen(false)}>
              <button className="bg-black text-white w-full py-2 rounded-lg hover:bg-gray-800 transition-all mt-4">
                ابدأ الآن
              </button>
            </Link>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setOpen(false)}></div>
        </div>
      )}
      <style jsx>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
} 