"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [seciliHizmet, setSeciliHizmet] = useState<any>(null);

  const tumHizmetler = [
    { t: "Su Kaçak Tespiti", d: "Termal kamera ve akustik cihazlarla kırmadan tespit.", detay: "Modern cihazlarımızla duvarların arkasındaki sızıntıları noktasal olarak belirliyoruz. Hiçbir yeri kırmadan sorunu tespit edip, sadece ilgili noktada işlem yaparak sizi ek masraflardan kurtarıyoruz.", img: "/hizmetler/su-kacak.jpeg" },
    { t: "Tıkanıklık Açma", d: "Robot cihazlarla kırmadan gider açma hizmeti.", detay: "Mutfak, banyo ve tuvalet giderlerindeki tıkanıklıkları robot makinelerimizle açıyoruz. Kameralı görüntüleme sistemimizle tıkanıklığın sebebini görüntüleyip kesin çözüm sunuyoruz.", img: "/hizmetler/tikaniklik.jpeg" },
    { t: "Pimaş Yıkama", d: "Gider borularının içini yüksek basınçla temizliyoruz.", detay: "Zamanla yağlanan ve daralan pimaş borularını yüksek basınçlı yıkama makineleriyle ilk günkü temizliğine kavuşturuyoruz. Bu işlem boru ömrünü uzatır ve kötü kokuları engeller.", img: "/hizmetler/pimas-yikama.jpeg" },
    { t: "WC Banyo Tadilat", d: "Komple banyo ve tuvalet yenileme çözümleri.", detay: "Eski banyonuzu tamamen yıkıp, tesisatından seramiğine kadar her şeyi anahtar teslim yeniliyoruz. Modern tasarımlar ve kaliteli işçilikle hayalinizdeki banyoyu kuruyoruz.", img: "/hizmetler/banyo-tadilat.jpeg" },
    { t: "Seramik", d: "Profesyonel seramik ve fayans döşeme işçiliği.", detay: "Zemin ve duvar seramiklerinde milimetrik hassasiyetle çalışıyoruz. Estetik görünüm ve su sızdırmazlık garantisiyle en iyi markaların ürünlerini uyguluyoruz.", img: "/hizmetler/seramik.jpeg" },
    { t: "Sıva Üstü Sıhhi Tesisat", d: "Modern ve dekoratif boru döşeme sistemleri.", detay: "Kırma işlemi yapılamayan yerlerde veya dekoratif tercihlerde, temiz ve düzenli bir şekilde sıva üstü su tesisatı kurulumu yapıyoruz.", img: "/hizmetler/siva-ustu.jpeg" },
    { t: "Pimaş Gider Tesisat", d: "Sıfırdan gider hattı kurulumu ve onarımı.", detay: "Atık su gider sistemlerinizi doğru eğim ve kaliteli malzeme ile kuruyoruz. Sızıntı yapmayan, tıkanmaya dirençli pimaş hatları sağlıyoruz.", img: "/hizmetler/pimas-gider.jpeg" },
    { t: "Kalorifer Tesisat", d: "Kombi ve petek hattı kurulumu, bakımı.", detay: "Isınma sisteminizi en verimli şekilde projelendirip kuruyoruz. Radyatör montajı, kaçak onarımı ve tesisat temizliği ile kışı sıcak geçirmenizi sağlıyoruz.", img: "/hizmetler/kalorifer.jpeg" }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-[#3b82f6] selection:text-white">
      
      {/* GA4 TAKİP KODU */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HDB19FWC13" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HDB19FWC13');
        `}
      </Script>
      
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 shrink-0">
            <img src="/logo.svg" alt="Osmanlı Tesisat Logo" className="h-10 w-10 md:h-12 md:w-12" />
            <div className="text-xl md:text-2xl font-black tracking-tight text-gray-900">
              OSMANLI<span className="text-[#3b82f6]">TESİSAT</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 font-medium">
            <Link href="/hizmetler" className="text-gray-600 hover:text-[#3b82f6] transition-colors">Hizmetlerimiz</Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-[#3b82f6] transition-colors">İletişim</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+905550833001" className="hidden md:flex items-center gap-2 bg-[#FFD700] text-gray-900 px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-sm md:text-base transition-all shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:shadow-[0_0_25px_rgba(255,215,0,0.8)] hover:scale-105">Tıkla Ara</a>
            <button className="md:hidden p-2 text-gray-900 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-[100%] left-0 w-full bg-white border-b border-gray-100 shadow-xl">
             <div className="flex flex-col px-6 py-6 gap-5 font-bold text-center">
              <Link href="/hizmetler" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-800">Hizmetlerimiz</Link>
              <Link href="/iletisim" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-800">İletişim</Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[90vh] md:min-h-[85vh]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-blue-900/60"></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">Temiz İşçilik, Net Teşhis!<br /><span className="text-[#3b82f6]">Güvenilir Su Tesisatı Servisi</span></h1>
            <p className="text-gray-200 text-base md:text-xl mb-8 leading-relaxed font-medium">Tıkanıklık açma, kırmadan su kaçağı tespiti, pimaş açma ve sıhhi tesisat çözümleri.</p>
            <a href="tel:+905550833001" className="flex items-center justify-center gap-3 bg-[#FFD700] text-gray-900 px-8 py-4 rounded-xl font-black text-lg transition-all shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:bg-yellow-400">HEMEN ARA</a>
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section id="hizmetler" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tumHizmetler.map((h, i) => (
              <div key={i} onClick={() => setSeciliHizmet(h)} className="group cursor-pointer border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all p-6 bg-white">
                <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#3b82f6]">{h.t}</h3>
                <p className="text-gray-500 text-sm">{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-xs uppercase tracking-wider">osmanlitesisat.com &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>

      {seciliHizmet && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60" onClick={() => setSeciliHizmet(null)}></div>
          <div className="bg-white rounded-3xl max-w-lg w-full relative z-10 p-8">
            <h2 className="text-2xl font-black mb-4">{seciliHizmet.t}</h2>
            <p className="text-gray-600 mb-8">{seciliHizmet.detay}</p>
            <button onClick={() => setSeciliHizmet(null)} className="w-full bg-gray-100 py-4 rounded-xl font-black">Kapat</button>
          </div>
        </div>
      )}
      <WhatsAppButton />
    </div>
  );
}