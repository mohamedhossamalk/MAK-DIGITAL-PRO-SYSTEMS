'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const socials = [
  {
    href: 'https://wa.me/201552882527',
    label: 'WhatsApp',
    color: '#25D366',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.45l-.38-.23-3.69.96.99-3.59-.25-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3.01.15.2 2.05 3.13 5.01 4.27.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
    ),
  },
  {
    href: 'https://facebook.com/',
    label: 'Facebook',
    color: '#1877F3',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    ),
  },
  {
    href: 'https://linkedin.com/',
    label: 'LinkedIn',
    color: '#0077B5',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
    ),
  },
  {
    href: 'https://twitter.com/',
    label: 'Twitter',
    color: '#1DA1F2',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.634A9.936 9.936 0 0024 4.557z"/></svg>
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const socialRef = useRef<HTMLDivElement>(null);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    if (!showSocial) return;
    const handleClick = (e: MouseEvent) => {
      if (socialRef.current && !socialRef.current.contains(e.target as Node)) {
        setShowSocial(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showSocial]);

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
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">الرئيسية</Link>
            <Link href="/services" className="text-gray-700 hover:text-black transition-colors">الخدمات</Link>
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors">من نحن</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">اتصل بنا</Link>
            {/* زر تواصل (أيقونة) */}
            <div className="relative flex items-center">
              <button
                className="flex items-center justify-center bg-black text-white w-10 h-10 rounded-full hover:bg-gray-800 shadow transition-all focus:outline-none"
                onClick={() => setShowSocial((v) => !v)}
                aria-haspopup="true"
                aria-expanded={showSocial}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
              </button>
              {/* قائمة التواصل */}
              {showSocial && (
                <div
                  ref={socialRef}
                  className="absolute top-full mt-2 min-w-[180px] bg-white border border-gray-200 rounded-xl shadow-lg py-2 px-3 flex flex-col gap-2 z-50 animate-fadeIn rtl:right-0 ltr:left-0"
                  style={{ direction: 'rtl' }}
                >
                  {socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors"
                      style={{ color: s.color }}
                      onClick={() => setShowSocial(false)}
                    >
                      {s.icon}
                      <span className="font-medium text-sm">{s.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
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
            {/* زر تواصل في الموبايل */}
            <button
              className="flex items-center justify-center bg-black text-white w-10 h-10 rounded-full hover:bg-gray-800 transition-all focus:outline-none"
              onClick={() => setShowSocial((v) => !v)}
              aria-haspopup="true"
              aria-expanded={showSocial}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
            </button>
            {showSocial && (
              <div
                ref={socialRef}
                className="mt-2 bg-white border border-gray-200 rounded-xl shadow-lg py-2 px-3 flex flex-col gap-2 min-w-[180px] z-50 animate-fadeIn"
                style={{ direction: 'rtl' }}
              >
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors"
                    style={{ color: s.color }}
                    onClick={() => setShowSocial(false)}
                  >
                    {s.icon}
                    <span className="font-medium text-sm">{s.label}</span>
                  </a>
                ))}
              </div>
            )}
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease;
        }
      `}</style>
    </header>
  );
} 