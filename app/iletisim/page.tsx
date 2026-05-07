import React from 'react';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function IletisimPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Mini Header */}
      <header className="bg-white border-b h-20 flex items-center shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
          <Link href="/" className="text-xl font-black italic uppercase">OSMANLI<span className="text-[#3b82f6]">TESİSAT</span></Link>
          <Link href="/" className="text-sm font-bold text-[#3b82f6]">← Ana Sayfaya Dön</Link>
        </div>
      </header>

      <main className="py-20 max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#3b82f6] font-bold tracking-[0.2em] uppercase text-xs">Bize Ulaşın</span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 text-gray-900">İletişim Bilgileri</h1>
          <p className="text-gray-500 mt-4 font-medium">İstanbul'un tüm semtlerine 7/24 hizmet veriyoruz.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Telefon Kartı */}
          <a href="tel:+905550833001" className="p-10 border-2 border-gray-100 rounded-3xl bg-gray-50 hover:border-[#3b82f6] transition-all group">
            <div className="w-12 h-12 bg-[#3b82f6]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Telefon</h3>
            <p className="text-gray-500 mb-4 font-medium">7/24 Acil Destek Hattı</p>
            <span className="text-2xl font-black text-[#3b82f6]">0555 083 3001</span>
          </a>

          {/* WhatsApp Kartı */}
          <a href="https://wa.me/905550833001" target="_blank" rel="noopener noreferrer" className="p-10 border-2 border-gray-100 rounded-3xl bg-gray-50 hover:border-green-500 transition-all group">
            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.631.058-1.745-.371-1.391-.536-2.292-1.942-2.361-2.035-.069-.093-.561-.745-.561-1.422 0-.678.354-1.012.48-1.148.126-.136.275-.17.367-.17.092 0 .183.001.263.005.083.004.195-.031.305.236.11.266.376.918.409.985.033.067.054.146.01.233-.044.088-.066.143-.131.22-.065.077-.137.171-.196.23-.066.066-.135.138-.058.271.077.132.341.562.731.909.502.448.924.587 1.056.653.132.065.21.055.287-.033.077-.088.329-.384.417-.515.088-.131.176-.11.297-.066s.768.362.901.428c.132.066.22.099.253.154.033.055.033.318-.111.723z"/>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-gray-500 mb-4 font-medium">Hızlı Mesaj ve Konum</p>
            <span className="text-2xl font-black text-green-600">Mesaj Gönder</span>
          </a>
        </div>

        <div className="mt-12 p-8 bg-gray-50 rounded-3xl border-2 border-gray-100 text-center">
          <h3 className="font-bold text-gray-900 mb-2">Çalışma Saatleri</h3>
          <p className="text-gray-500 font-medium">Haftanın her günü, günün her saati kesintisiz hizmet veriyoruz.</p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-black">7/24 AÇIK</span>
          </div>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
}