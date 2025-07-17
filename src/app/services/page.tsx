import React from 'react';

export default function ServicesPage() {
  return (
    <div className="min-h-[60vh] bg-white text-black py-10 px-2 sm:px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">خدماتنا</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            نحن متخصصون في تطوير أي نوع من الأنظمة (Systems) حسب احتياجك، وننفذ جميع أنواع الأنظمة والبرمجيات باحترافية عالية ومرونة كاملة.<br className="hidden sm:block" />
            سواء كنت تحتاج نظام إدارة، نظام موارد بشرية، نقاط بيع، أنظمة مالية، أنظمة مخصصة أو أي نظام آخر، نحن نلبي جميع المتطلبات التقنية لأي قطاع.
          </p>
        </div>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Card 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-lg flex items-center justify-center mb-6">
              {/* أيقونة حسب الطلب */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 8h8v8H8z" fill="currentColor" /></svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">أنظمة حسب الطلب</h3>
            <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base">
              نصمم ونطور أي نظام أو برنامج تحتاجه مهما كان تخصصك أو مجال عملك، مع مرونة كاملة في التنفيذ والتطوير.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-lg flex items-center justify-center mb-6">
              {/* أيقونة إدارة */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="7" r="2" fill="currentColor" /><circle cx="16" cy="12" r="2" fill="currentColor" /><circle cx="8" cy="17" r="2" fill="currentColor" /></svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">أنظمة إدارة متكاملة</h3>
            <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base">
              أنظمة إدارة موارد بشرية، مالية، مخزون، مشاريع، علاقات عملاء، أو أي نظام إداري آخر يناسب احتياجك.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-lg flex items-center justify-center mb-6">
              {/* أيقونة نقاط بيع ومتاجر */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M16 3v4M8 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="15" r="2" fill="currentColor" /></svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">أنظمة نقاط البيع والمتاجر</h3>
            <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base">
              تطوير أنظمة نقاط بيع، متاجر إلكترونية، حلول دفع إلكتروني، وأنظمة بيع بالتجزئة والجملة.
            </p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-lg flex items-center justify-center mb-6">
              {/* أيقونة تقارير وتحليل */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 16v-4m4 4v-8m4 8v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">أنظمة التقارير والتحليل</h3>
            <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base">
              حلول متقدمة لتحليل البيانات، إعداد التقارير الذكية، ولوحات التحكم لأي نوع من الأنظمة.
            </p>
          </div>
          {/* Service Card 5 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-lg flex items-center justify-center mb-6">
              {/* أيقونة قطاعات */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">أنظمة متخصصة لأي قطاع</h3>
            <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base">
              أنظمة طبية، تعليمية، عقارية، صناعية، لوجستية، أو أي قطاع آخر. خبرتنا تشمل جميع المجالات.
            </p>
          </div>
          {/* Service Card 6 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow hover:shadow-lg transition-all flex flex-col items-center text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-lg flex items-center justify-center mb-6">
              {/* أيقونة تكامل وتطوير */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z" fill="currentColor" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">تكامل الأنظمة والتطوير المستمر</h3>
            <p className="text-gray-700 leading-relaxed text-center text-sm sm:text-base">
              ربط وتكامل الأنظمة المختلفة، تطوير مستمر، دعم فني، وتحديثات دورية لأي نظام لديك.
            </p>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-600 text-base sm:text-lg">
          <span className="inline-block bg-black text-white rounded-lg px-4 py-2 font-semibold tracking-wide shadow">ننفذ أي نظام أو cyctem تحتاجه مهما كان تخصصك</span>
        </div>
      </div>
    </div>
  );
} 