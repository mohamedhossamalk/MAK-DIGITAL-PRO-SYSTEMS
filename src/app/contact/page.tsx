"use client";
import React, { useRef, useState } from 'react';

export default function ContactPage() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const companyRef = useRef(null);
  const messageRef = useRef(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSendWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const name = nameRef.current?.value.trim() || '';
    const email = emailRef.current?.value.trim() || '';
    const phone = phoneRef.current?.value.trim() || '';
    const company = companyRef.current?.value.trim() || '';
    const message = messageRef.current?.value.trim() || '';
    if (!name || !phone || !message) {
      setError('يرجى تعبئة الاسم ورقم الجوال والرسالة.');
      return;
    }
    if (!/^\d{8,15}$/.test(phone.replace(/[^0-9]/g, ''))) {
      setError('يرجى إدخال رقم جوال صحيح.');
      return;
    }
    const text =
      `*طلب تواصل جديد من الموقع:*
` +
      `الاسم: ${name}\n` +
      (email ? `البريد الإلكتروني: ${email}\n` : '') +
      `رقم الجوال: ${phone}\n` +
      (company ? `اسم الشركة: ${company}\n` : '') +
      `الرسالة: ${message}`;
    const url = `https://wa.me/201552882527?text=${encodeURIComponent(text)}`;
    setSuccess('سيتم تحويلك إلى واتساب لإرسال الرسالة...');
    setTimeout(() => {
      window.location.href = url;
    }, 900);
  };

  return (
    <div className="min-h-[60vh] bg-white text-black py-10 px-2 sm:px-4">
      <div className="container mx-auto max-w-xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">تواصل معنا عبر الواتساب</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            يرجى تعبئة النموذج وسيتم تحويلك مباشرة إلى واتساب لإرسال رسالتك.
          </p>
        </div>
        <form className="space-y-6 bg-white/80 p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-xl backdrop-blur-md">
          {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded text-center font-medium shadow">{error}</div>}
          {success && <div className="bg-green-100 text-green-700 px-4 py-2 rounded text-center font-medium shadow">{success}</div>}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 pr-1">الاسم الكامل *</label>
              <input
                ref={nameRef}
                type="text"
                placeholder="مثال: محمد أحمد"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black/20 focus:outline-none text-base transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 pr-1">البريد الإلكتروني (اختياري)</label>
              <input
                ref={emailRef}
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black/20 focus:outline-none text-base transition"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 pr-1">رقم الجوال *</label>
              <input
                ref={phoneRef}
                type="tel"
                placeholder="مثال: 01012345678"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black/20 focus:outline-none text-base transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 pr-1">اسم الشركة (اختياري)</label>
              <input
                ref={companyRef}
                type="text"
                placeholder="اسم الشركة"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black/20 focus:outline-none text-base transition"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700 pr-1">رسالتك *</label>
            <textarea
              ref={messageRef}
              placeholder="اكتب رسالتك هنا..."
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black/20 focus:outline-none text-base transition"
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white py-4 rounded-lg text-lg font-semibold transition-all shadow-lg mt-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.45l-.38-.23-3.69.96.99-3.59-.25-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.04 2.81 1.19 3.01.15.2 2.05 3.13 5.01 4.27.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
            إرسال عبر واتساب
          </button>
        </form>
      </div>
    </div>
  );
} 