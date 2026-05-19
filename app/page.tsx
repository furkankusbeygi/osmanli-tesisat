"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [seciliHizmet, setSeciliHizmet] = useState<any>(null);

  const tumHizmetler = [
    {
      t: "Su Kaçak Tespiti",
      d: "Termal kamera ve akustik cihazlarla kırmadan tespit.",
      detay: "Modern cihazlarımızla duvarların arkasındaki sızıntıları noktasal olarak belirliyoruz. Hiçbir yeri kırmadan sorunu tespit edip, sadece ilgili noktada işlem yaparak sizi ek masraflardan kurtarıyoruz.",
      img: "/hizmetler/su-kacak.jpeg"
    },
    {
      t: "Tıkanıklık Açma",
      d: "Robot cihazlarla kırmadan gider açma hizmeti.",
      detay: "Mutfak, banyo ve tuvalet giderlerindeki tıkanıklıkları robot makinelerimizle açıyoruz. Kameralı görüntüleme sistemimizle tıkanıklığın sebebini görüntüleyip kesin çözüm sunuyoruz.",
      img: "/hizmetler/tikaniklik.jpeg"
    },
    {
      t: "Pimaş Yıkama",
      d: "Gider borularının içini yüksek basınçla temizliyoruz.",
      detay: "Zamanla yağlanan ve daralan pimaş borularını yüksek basınçlı yıkama makineleriyle ilk günkü temizliğine kavuşturuyoruz. Bu işlem boru ömrünü uzatır ve kötü kokuları engeller.",
      img: "/hizmetler/pimas-yikama.jpeg"
    },
    {
      t: "WC Banyo Tadilat",
      d: "Komple banyo ve tuvalet yenileme çözümleri.",
      detay: "Eski banyonuzu tamamen yıkıp, tesisatından seramiğine kadar her şeyi anahtar teslim yeniliyoruz. Modern tasarımlar ve kaliteli işçilikle hayalinizdeki banyoyu kuruyoruz.",
      img: "/hizmetler/banyo-tadilat.jpeg"
    },
    {
      t: "Seramik",
      d: "Profesyonel seramik ve fayans döşeme işçiliği.",
      detay: "Zemin ve duvar seramiklerinde milimetrik hassasiyetle çalışıyoruz. Estetik görünüm ve su sızdırmazlık garantisiyle en iyi markaların ürünlerini uyguluyoruz.",
      img: "/hizmetler/seramik.jpeg"
    },
    {
      t: "Sıva Üstü Sıhhi Tesisat",
      d: "Modern ve dekoratif boru döşeme sistemleri.",
      detay: "Kırma işlemi yapılamayan yerlerde veya dekoratif tercihlerde, temiz ve düzenli bir şekilde sıva üstü su tesisatı kurulumu yapıyoruz.",
      img: "/hizmetler/siva-ustu.jpeg"
    },
    {
      t: "Pimaş Gider Tesisat",
      d: "Sıfırdan gider hattı kurulumu ve onarımı.",
      detay: "Atık su gider sistemlerinizi doğru eğim ve kaliteli malzeme ile kuruyoruz. Sızıntı yapmayan, tıkanmaya dirençli pimaş hatları sağlıyoruz.",
      img: "/hizmetler/pimas-gider.jpeg"
    },
    {
      t: "Kalorifer Tesisat",
      d: "Kombi ve petek hattı kurulumu, bakımı.",
      detay: "Isınma sisteminizi en verimli şekilde projelendirip kuruyoruz. Radyatör montajı, kaçak onarımı ve tesisat temizliği ile kışı sıcak geçirmenizi sağlıyoruz.",
      img: "/hizmetler/kalorifer.jpeg"
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-[#3b82f6] selection:text-white">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HDB19FWC13"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HDB19FWC13');
        `}
      </Script>

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
            <a href="tel:+905550833001" className="hidden md:flex items-center gap-2 bg-[#FFD700] text-gray-900 px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-sm md:text-base transition-all shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:shadow-[0_0_25px_rgba(255,215,0,0.8)] hover:scale-105">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Tıkla Ara
            </a>
            <button className="md:hidden p-2 text-gray-900 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-[100%] left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col px-6 py-6 gap-5 font-bold text-center">
              <Link href="/hizmetler" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-800 hover:text-[#3b82f6]">Hizmetlerimiz</Link>
              <Link href="/iletisim" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-800 hover:text-[#3b82f6]">İletişim</Link>
              <div className="h-px w-full bg-gray-100 my-2"></div>
              <a href="tel:+905550833001" className="flex items-center justify-center gap-2 bg-[#FFD700] text-gray-900 px-4 py-4 rounded-xl font-black text-lg shadow-[0_0_15px_rgba(255,215,0,0.5)] active:scale-95 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                HEMEN ARA
              </a>
            </div>
          </div>
        )}
      </header>

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[90vh] md:min-h-[85vh]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-blue-900/60"></div>
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl">
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 inline-block border border-white/20 backdrop-blur-sm">
              İstanbul'un Her Yerine 30 Dakika
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              Temiz İşçilik, Net Teşhis!<br />
              <span className="text-[#3b82f6]">Güvenilir Su Tesisatı Servisi</span>
            </h1>
            <p className="text-gray-200 text-base md:text-xl mb-8 md:mb-10 leading-relaxed font-medium max-w-xl">
              Tıkanıklık açma, kırmadan su kaçağı tespiti, pimaş açma, petek temizliği ve sıhhi tesisat çözümlerinde hızlı ve profesyonel destek
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a href="tel:+905550833001" className="flex items-center justify-center gap-3 bg-[#FFD700] text-gray-900 px-8 py-4 rounded-xl font-black text-center text-lg transition-all shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:shadow-[0_0_30px_rgba(255,215,0,1)] active:scale-95 shrink-0 w-full sm:w-auto hover:bg-yellow-400">
                <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                HEMEN ARA
              </a>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {["Su Kaçağı Tespiti", "Tıkanıklık Açma", "Sıva Üstü Sıhhi Tesisat", "Pimaş Gider Tesisat"].map((hizmet, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md text-white">
                    <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-sm md:text-base font-bold tracking-wide">{hizmet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="neden-biz" className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl font-black text-[#3b82f6] mb-3">30dk</div>
              <p className="text-gray-700 font-bold">Hızlı Servis</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl font-black text-[#3b82f6] mb-3">%100</div>
              <p className="text-gray-700 font-bold">Kırmadan Tespit</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl font-black text-[#3b82f6] mb-3">7/24</div>
              <p className="text-gray-700 font-bold">Acil Destek Hattı</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl font-black text-[#3b82f6] mb-3">1 Yıl</div>
              <p className="text-gray-700 font-bold">İşçilik Garantisi</p>
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-gray-900">Hizmetlerimiz</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Evinizi kırıp dökmeden, son teknoloji akıllı cihazlarla garantili çözümler üretiyoruz.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tumHizmetler.map((h, i) => (
              <div key={i} onClick={() => setSeciliHizmet(h)} className="group cursor-pointer border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="h-48 overflow-hidden relative">
                  <img src={h.img} alt={h.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#3b82f6] transition-colors">{h.t}</h3>
                  <p className="text-gray-500 text-sm font-medium line-clamp-2">{h.d}</p>
                  <button className="mt-4 text-[#3b82f6] text-xs font-black uppercase tracking-widest">Detayları Gör</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-2xl font-black text-gray-900">
              <img src="/logo.svg" alt="Osmanlı Tesisat Logo" className="h-8 w-8 grayscale opacity-80" />
              <span>OSMANLI<span className="text-[#3b82f6]">TESİSAT</span></span>
            </div>
            <p className="text-gray-400 text-[10px] md:text-xs max-w-md text-center md:text-right font-medium leading-relaxed uppercase tracking-wider">
              osmanlitesisat.com. Tüm Hakları Saklıdır. &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className="pt-8 border-t border-gray-200/60 flex justify-center items-center">
            <a href="https://denizdigitaloperate.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5 text-gray-400 hover:text-gray-800 transition-all duration-300">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">Developed by</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center group-hover:bg-[#3b82f6] transition-all duration-500 shadow-sm group-hover:shadow-[#3b82f6]/30">
                  <span className="text-[11px] text-white font-black">D</span>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[11px] font-black tracking-tighter text-gray-800">DENİZ DIGITAL</span>
                  <span className="text-[8px] font-bold tracking-[0.1em] text-gray-400 group-hover:text-[#3b82f6]">OPERATE</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </footer>

      {seciliHizmet && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setSeciliHizmet(null)}></div>
          <div className="bg-white rounded-3xl max-w-lg w-full relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <img src={seciliHizmet.img} alt={seciliHizmet.t} className="w-full h-56 object-cover" />
            <div className="p-8">
              <h2 className="text-2xl font-black mb-4 text-gray-900">{seciliHizmet.t}</h2>
              <p className="text-gray-600 font-medium leading-relaxed mb-8">{seciliHizmet.detay}</p>
              <div className="flex gap-4">
                <a href="tel:+905550833001" className="flex-1 flex items-center justify-center gap-2 bg-[#FFD700] text-gray-900 text-center py-4 rounded-xl font-black shadow-[0_0_15px_rgba(255,215,0,0.5)] hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hemen Ara
                </a>
                <button onClick={() => setSeciliHizmet(null)} className="flex-1 bg-gray-100 text-gray-900 py-4 rounded-xl font-black hover:bg-gray-200 transition-colors">
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <WhatsAppButton />
    </div>
  );
}