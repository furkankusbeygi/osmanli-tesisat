import React from 'react';
import Link from 'next/link';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-[#3b82f6] selection:text-white">
      
      {/* HEADER VE LOGO KISMI */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3 shrink-0">
            {/* Logoyu public/logo.svg'den çekiyoruz */}
            <img src="/logo.svg" alt="Osmanlı Tesisat Logo" className="h-10 w-10 md:h-12 md:w-12" />
            <div className="text-xl md:text-2xl font-black tracking-tight text-gray-900">
              OSMANLI<span className="text-[#3b82f6]">TESİSAT</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium">
            <Link href="/hizmetler" className="text-gray-600 hover:text-[#3b82f6] transition-colors">Hizmetlerimiz</Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-[#3b82f6] transition-colors">İletişim</Link>
          </div>
          <a href="tel:+905550833001" className="bg-[#3b82f6] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-bold text-sm md:text-base transition-all shadow-md hover:bg-blue-600">
            Tıkla Ara
          </a>
        </div>
      </header>

      {/* HERO BÖLÜMÜ VE YENİ HİZMET LİSTESİ */}
      <section 
        className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center min-h-[90vh] md:min-h-[85vh]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-blue-900/60"></div>
        
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl">
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 inline-block border border-white/20 backdrop-blur-sm">
              İstanbul'un Her Yerine 30 Dakika
            </span>
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 text-white leading-tight">
              Profesyonel <br />
              <span className="text-[#3b82f6]">Su Tesisatçısı</span>
            </h1>
            <p className="text-gray-200 text-base md:text-xl mb-8 md:mb-10 leading-relaxed font-medium max-w-xl">
              Kırmadan su kaçağı tespiti ve robotla tıkanıklık açma. Modern cihazlarla anında kapınızdayız.
            </p>
            
            {/* YENİ EKLENEN 4'LÜ HİZMET KISMI */}
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a href="tel:+905550833001" className="bg-[#3b82f6] text-white px-8 py-4 rounded-xl font-black text-center text-lg transition-all shadow-xl active:scale-95 shrink-0 w-full sm:w-auto hover:bg-blue-600">
                HEMEN ARA
              </a>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {[
                  "Su Kaçağı Tespiti",
                  "Tıkanıklık Açma",
                  "Sıva Üstü Sıhhi Tesisat",
                  "Pimaş Gider Tesisat"
                ].map((hizmet, i) => (
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

      {/* 3. NEDEN BİZ? */}
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

      {/* 4. HİZMETLERİMİZ - TÜM KARTLAR /hizmetler SAYFASINA GİDER */}
      <section id="hizmetler" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-gray-900">Hizmetlerimiz</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Evinizi kırıp dökmeden, son teknoloji akıllı cihazlarla garantili çözümler üretiyoruz.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Su Kaçağı Tespiti", d: "Termal kamera ve akustik dinleme ile nokta atışı yer belirleme." },
              { t: "Robotla Tıkanıklık Açma", d: "Pimaş, lavabo ve tuvalet tıkanıklıklarını makineyle açıyoruz." },
              { t: "Petek Temizliği", d: "Özel kimyasallarla kombi ve petek verimini artırıyoruz." },
              { t: "Gömme Rezervuar Tamiri", d: "Tüm marka gömme rezervuarların onarımı ve bakımı." },
              { t: "Musluk & Batarya", d: "Her türlü armatür montajı ve su sızıntısı tamiri." },
              { t: "Klozet Tamiri", d: "Taharet çubuğu, iç takım ve sızıntı problemleri çözümü." }
            ].map((h, i) => (
              <Link 
                href="/hizmetler" 
                key={i} 
                className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-[#3b82f6] hover:shadow-xl transition-all duration-300 block"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#3b82f6] transition-colors">{h.t}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{h.d}</p>
                <div className="mt-4 text-[#3b82f6] text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Tüm Hizmetleri Gör <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & İMZA */}
      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-2xl font-black text-gray-900">
                <img src="/logo.svg" alt="Osmanlı Tesisat Logo" className="h-8 w-8 grayscale opacity-80" />
                <span>OSMANLI<span className="text-[#3b82f6]">TESİSAT</span></span>
            </div>
            <p className="text-gray-400 text-[10px] md:text-xs max-w-md text-center md:text-right font-medium leading-relaxed uppercase tracking-wider">
              osmanlitesisat.com bağımsız bir iletişim platformudur. Sitede yer alan hizmetlerin ifasından doğacak yasal sorumluluk tesisat ustasına aittir. &copy; {new Date().getFullYear()}
            </p>
          </div>

          {/* DENİZ DIGITAL OPERATE İMZASI */}
          <div className="pt-8 border-t border-gray-200/60 flex justify-center items-center">
            <a 
              href="https://denizdigitaloperate.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2.5 text-gray-400 hover:text-gray-800 transition-all duration-300"
            >
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

      <WhatsAppButton />
    </div>
  );
}