import Link from 'next/link';
import Image from 'next/image';
import SplashLoading from '@/components/SplashLoading';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SplashLoading />
      {/* Hero Section with Black Bar and Abstract Lines */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-32 px-4 overflow-hidden">
        {/* Black Bar */}
        <div className="w-full fixed top-0 left-0 h-3 bg-black z-40" />

        {/* Abstract Black Lines SVG - Responsive for mobile */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          width="100%"
          height="100%"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* خطوط أوضح للموبايل */}
          <path d="M0 100 Q400 200 800 100 T1440 100" stroke="#111" strokeWidth="2" opacity="0.12" fill="none" />
          <path d="M0 300 Q600 400 1200 300 T1440 300" stroke="#000" strokeWidth="1.5" opacity="0.10" fill="none" />
          <path d="M0 500 Q500 350 1000 500 T1440 500" stroke="#222" strokeWidth="2.5" opacity="0.13" fill="none" />
          <path d="M0 200 Q700 50 1440 200" stroke="#000" strokeWidth="1" opacity="0.08" fill="none" />
          <path d="M0 400 Q300 600 900 400 T1440 400" stroke="#111" strokeWidth="2" opacity="0.10" fill="none" />

          {/* خطوط أكثر وضوحًا للموبايل */}
          <g className="block sm:hidden">
            <path d="M0 120 Q360 240 720 120 T1440 120" stroke="#000" strokeWidth="3.5" opacity="0.22" fill="none" />
            <path d="M0 350 Q500 500 1000 350 T1440 350" stroke="#111" strokeWidth="3" opacity="0.18" fill="none" />
            <path d="M0 250 Q700 100 1440 250" stroke="#000" strokeWidth="2.5" opacity="0.16" fill="none" />
          </g>
        </svg>

        <div className="max-w-4xl text-center mx-auto mt-6 relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
              حلول <span className="text-black underline decoration-black/30">أنظمة</span> متكاملة وذكية
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              نحن متخصصون في تطوير وتصميم الأنظمة الذكية والمتكاملة لإدارة أعمالك بكفاءة واحترافية. 
              اكتشف كيف يمكننا تحويل أفكارك إلى حلول تقنية تدعم نجاحك.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/services">
              <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105">
                تعرف على خدماتنا
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                تواصل معنا
              </button>
            </Link>
            <Link href="/start">
              <button className="bg-white border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition-all transform hover:scale-105">
                ابدأ الآن
              </button>
            </Link>
          </div>
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>أكثر من 200 عميل راضي</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>خبرة 10+ سنوات</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>دعم فني 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">200+</div>
              <div className="text-gray-600">عميل راضي</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">500+</div>
              <div className="text-gray-600">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">24/7</div>
              <div className="text-gray-600">دعم فني</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">99.9%</div>
              <div className="text-gray-600">رضا العملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">لماذا تختارنا؟</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              نتميز بخبرة واسعة وتقنيات متقدمة لتقديم أفضل الحلول لعملائنا
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">سرعة في التنفيذ</h3>
              <p className="text-gray-700 leading-relaxed">
                نقدم حلول سريعة وفعالة مع الحفاظ على أعلى معايير الجودة والكفاءة.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">أمان وموثوقية</h3>
              <p className="text-gray-700 leading-relaxed">
                أنظمتنا تتميز بأعلى مستويات الأمان والموثوقية لحماية بياناتك.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">دعم فني متواصل</h3>
              <p className="text-gray-700 leading-relaxed">
                فريق دعم فني محترف متاح على مدار الساعة لمساعدتك في أي وقت.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">حلول مبتكرة</h3>
              <p className="text-gray-700 leading-relaxed">
                نستخدم أحدث التقنيات لتقديم حلول مبتكرة تلبي احتياجاتك المستقبلية.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">أسعار تنافسية</h3>
              <p className="text-gray-700 leading-relaxed">
                نقدم أفضل الحلول بأفضل الأسعار مع ضمان عائد استثمار مرتفع.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">خدمة مخصصة</h3>
              <p className="text-gray-700 leading-relaxed">
                كل مشروع يحصل على اهتمام خاص وحلول مخصصة تناسب احتياجاته الفريدة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">جاهز لبدء مشروعك؟</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واحصل على استشارة مجانية لتحويل أفكارك إلى واقع رقمي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105">
                احصل على استشارة مجانية
              </button>
            </Link>
            <Link href="/services">
              <button className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                تعرف على خدماتنا
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
