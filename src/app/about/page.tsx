import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-[60vh] bg-white text-black py-10 px-2 sm:px-4">
      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">من نحن</h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              نحن فريق من الخبراء في تطوير الأنظمة الذكية والمتكاملة، نعمل على تحويل أفكارك إلى حلول تقنية متطورة تدعم نمو أعمالك.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-gray-700 text-sm sm:text-base">خبرة واسعة في تطوير الأنظمة</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-gray-700 text-sm sm:text-base">فريق عمل محترف ومبدع</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-gray-700 text-sm sm:text-base">حلول مخصصة لكل عميل</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-gray-700 text-sm sm:text-base">دعم فني متواصل</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">200+</div>
                  <div className="text-gray-700 text-sm sm:text-base">عميل راضي</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">500+</div>
                  <div className="text-gray-700 text-sm sm:text-base">مشروع مكتمل</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">24/7</div>
                  <div className="text-gray-700 text-sm sm:text-base">دعم فني</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">99.9%</div>
                  <div className="text-gray-700 text-sm sm:text-base">رضا العملاء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 