export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-black">
      <div className="mb-6 animate-spin">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" stroke="#111" strokeWidth="6" opacity="0.15" />
          <path d="M32 4a28 28 0 0128 28" stroke="#111" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
      <div className="text-xl font-bold tracking-wide mb-2">جاري التحميل...</div>
      <div className="text-gray-500 text-sm">يرجى الانتظار قليلاً</div>
    </div>
  );
} 