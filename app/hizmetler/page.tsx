"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HizmetlerPage() {
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
      img: "/hizmetler/pimas-yikama.jpeg" 
    },
    { 
      t: "Kalorifer Tesisat", 
      d: "Kombi ve petek hattı kurulumu, bakımı.",
      detay: "Isınma sisteminizi en verimli şekilde projelendirip kuruyoruz. Radyatör montajı, kaçak onarımı ve tesisat temizliği ile kışı sıcak geçirmenizi sağlıyoruz.",
      img: "/hizmetler/kalorifer.jpeg"
    }
  ]; 

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-white border-b h-20 flex items-center shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <Link href="/" className="text-xl font-black italic uppercase">
            OSMANLI<span className="text-[#3b82f6]">TESİSAT</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-[#3b82f6] hover:underline">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </header>

      <main className="py-20 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-12 text-center text-gray-900">Profesyonel Hizmetlerimiz</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tumHizmetler.map((h, i) => (
            <div 
              key={i} 
              onClick={() => setSeciliHizmet(h)}
              className="group cursor-pointer border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={h.img} 
                  alt={h.t} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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

        {/* POPUP / MODAL KISMI */}
        {seciliHizmet && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setSeciliHizmet(null)}
            ></div>
            <div className="bg-white rounded-3xl max-w-lg w-full relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
              <img src={seciliHizmet.img} alt={seciliHizmet.t} className="w-full h-56 object-cover" />
              <div className="p-8">
                <h2 className="text-2xl font-black mb-4 text-gray-900">{seciliHizmet.t}</h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-8">{seciliHizmet.detay}</p>
                <div className="flex gap-4">
                  <a 
                    href="tel:+905550833001" 
                    className="flex-1 bg-[#3b82f6] text-white text-center py-4 rounded-xl font-black shadow-lg shadow-blue-200"
                  >
                    Hemen Ara
                  </a>
                  <button 
                    onClick={() => setSeciliHizmet(null)}
                    className="flex-1 bg-gray-100 text-gray-900 py-4 rounded-xl font-black"
                  >
                    Kapat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-16 text-center bg-gradient-to-br from-[#3b82f6] to-blue-700 p-12 rounded-[40px] text-white shadow-2xl shadow-blue-200">
          <h2 className="text-3xl font-black mb-4">Ücretsiz Danışın</h2>
          <p className="mb-8 font-medium opacity-90">Tüm tesisat sorunlarınız için bir telefon uzağınızdayız.</p>
          <a href="tel:+905550833001" className="bg-white text-[#3b82f6] px-12 py-5 rounded-2xl font-black text-xl shadow-xl hover:scale-105 transition-transform inline-block">
            0555 083 3001
          </a>
        </div>
      </main>
      <WhatsAppButton />
    </div>
  );
}