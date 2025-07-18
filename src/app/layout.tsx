import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientScripts from "@/components/ClientScripts";


export const metadata: Metadata = {
  title: {
    default: "MAK Digital Pro - حلول الأنظمة الذكية والمتكاملة",
    template: "%s | MAK Digital Pro"
  },
  description: "شركة متخصصة في تطوير الأنظمة الذكية والمتكاملة لإدارة أعمالك بكفاءة واحترافية. نقدم حلول تقنية مبتكرة لتحويل أفكارك إلى أنظمة ذكية.",
  keywords: [
    "أنظمة",
    "تطوير أنظمة", 
    "حلول تقنية",
    "إدارة أعمال",
    "برمجيات مخصصة",
    "أنظمة إدارية",
    "أنظمة الموارد البشرية",
    "أنظمة نقاط البيع",
    "تكامل الأنظمة",
    "MAK Digital Pro"
  ],
  authors: [{ name: "MAK Digital Pro" }],
  creator: "MAK Digital Pro",
  publisher: "MAK Digital Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://makdigitalpro.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "MAK Digital Pro - حلول الأنظمة الذكية والمتكاملة",
    description: "شركة متخصصة في تطوير الأنظمة الذكية والمتكاملة لإدارة أعمالك بكفاءة واحترافية.",
    url: 'https://makdigitalpro.com',
    siteName: 'MAK Digital Pro',
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "MAK Digital Pro - حلول الأنظمة الذكية والمتكاملة",
    description: "شركة متخصصة في تطوير الأنظمة الذكية والمتكاملة لإدارة أعمالك بكفاءة واحترافية.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional Meta Tags */}
        <meta name="application-name" content="MAK Digital Pro" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MAK Digital Pro" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MAK Digital Pro",
              "description": "شركة متخصصة في تطوير الأنظمة الذكية والمتكاملة",
              "url": "https://makdigitalpro.com",
              "logo": "https://makdigitalpro.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-50-123-4567",
                "contactType": "customer service",
                "areaServed": "SA",
                "availableLanguage": "Arabic"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "الرياض",
                "addressCountry": "SA"
              },
              "sameAs": [
                "https://twitter.com/makdigitalpro",
                "https://linkedin.com/company/makdigitalpro"
              ]
            })
          }}
        />
      </head>
      <body className="font-cairo antialiased bg-white text-black min-h-screen flex flex-col">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 rounded z-50"
        >
          انتقل إلى المحتوى الرئيسي
        </a>
        <Navbar />
        
        <main id="main-content" className="flex-1">
        {children}
        </main>
        <Footer />
        
        {/* Loading indicator */}
        <div id="loading-indicator" className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50 hidden">
          <div className="h-full bg-black transition-all duration-300 ease-out" style={{ width: '0%' }}></div>
        </div>
        
        {/* Back to top button */}
        <button
          id="back-to-top"
          className="fixed bottom-8 left-8 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 opacity-0 invisible z-40"
          aria-label="العودة إلى الأعلى"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
        
        <ClientScripts />
      </body>
    </html>
  );
}
