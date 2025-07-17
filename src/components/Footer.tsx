import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-black text-lg font-bold">MAK Digital Pro</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              شركة متخصصة في تطوير الأنظمة الذكية والمتكاملة لإدارة أعمالك بكفاءة واحترافية.
            </p>
          </div>
          <div>
            <h3 className="text-black font-bold mb-4">الخدمات</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-700 hover:text-black transition-colors">تطوير الأنظمة الإدارية</Link></li>
              <li><Link href="/services" className="text-gray-700 hover:text-black transition-colors">أنظمة الموارد البشرية</Link></li>
              <li><Link href="/services" className="text-gray-700 hover:text-black transition-colors">أنظمة نقاط البيع</Link></li>
              <li><Link href="/services" className="text-gray-700 hover:text-black transition-colors">أنظمة مخصصة</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-bold mb-4">الشركة</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-700 hover:text-black transition-colors">من نحن</Link></li>
              <li><a href="#" className="text-gray-700 hover:text-black transition-colors">فريق العمل</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black transition-colors">الوظائف</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black transition-colors">الأخبار</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-black font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-700 hover:text-black transition-colors">اتصل بنا</Link></li>
              <li><a href="#" className="text-gray-700 hover:text-black transition-colors">الدعم الفني</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-700 hover:text-black transition-colors">طلب عرض سعر</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 MAK Digital Pro. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
} 