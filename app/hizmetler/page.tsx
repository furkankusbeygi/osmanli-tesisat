import React from 'react';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HizmetlerPage() {
  const tumHizmetler = [
    { t: "Su Kaçağı Tespiti", d: "Termal kamera ve akustik dinleme cihazları ile kırmadan noktasal tespit yapıyoruz. Sızıntıyı bulup garantili onarıyoruz." },
    { t: "Robotla Tıkanıklık Açma", d: "Mutfak, banyo ve tuvalet giderlerini robot cihazlarla kırmadan açıyoruz. Kameralı görüntüleme yapıyoruz." },
    { t: "Petek Temizliği", d: "Isınmayan peteklere özel ilaçlı temizlik yaparak yakıt tasarrufu ve verim sağlıyoruz." },
    { t: "Gömme Rezervuar Tamiri", d: "Vitra, Serel, Siamp gibi her marka gömme rezervuarın iç takım tamiri ve parça değişimini yapıyoruz." },
    { t: "Musluk & Batarya Tamiri", d: "Her türlü batarya değişimi, ara musluk montajı ve su sızıntısı giderilmesi." },
    { t: "Klozet Tamiri", d: "Sifon arızaları, taharet musluğu değişimleri ve gider bağlantılarını yeniliyoruz." }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-white border-b h-20 flex items-center shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <Link href="/" className="text-xl font-black italic uppercase">OSMANLI<span className="text-[#3b82f6]">TESİSAT</span></Link>
          <Link href="/" className="text-sm font-bold text-[#3b82f6]">← Ana Sayfaya Dön</Link>
        </div>
      </header>

      <main className="py-20 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-black mb-12 text-center text-gray-900">Tüm Hizmetlerimiz</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tumHizmetler.map((h, i) => (
            <div key={i} className="p-8 border-2 border-gray-100 rounded-2xl bg-gray-50">
              <h3 className="text-xl font-bold mb-4 text-[#3b82f6]">{h.t}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{h.d}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-[#3b82f6] p-12 rounded-3xl text-white">
          <h2 className="text-3xl font-black mb-4">Hemen Fiyat Alın</h2>
          <p className="mb-8 font-medium">İşinizi ustasına bırakın, kafanız rahat etsin.</p>
          <a href="tel:+905550833001" className="bg-white text-[#3b82f6] px-10 py-4 rounded-xl font-black text-lg">0555 083 3001</a>
        </div>
      </main>
      <WhatsAppButton />
    </div>
  );
}