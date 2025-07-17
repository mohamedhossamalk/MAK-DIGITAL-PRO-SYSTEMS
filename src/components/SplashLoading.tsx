"use client";
import { useEffect, useState } from 'react';

export default function SplashLoading() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('visited')) {
        setShow(false);
        return;
      }
      window.localStorage.setItem('visited', 'true');
    }
    const timer = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-black transition-opacity duration-500">
      <div className="mb-6 animate-spin">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" stroke="#111" strokeWidth="6" opacity="0.15" />
          <path d="M32 4a28 28 0 0128 28" stroke="#111" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
      <div className="text-xl font-bold tracking-wide mb-2">مرحباً بك في MAK Digital Pro</div>
      <div className="text-gray-500 text-sm">جاري التحميل...</div>
    </div>
  );
} 