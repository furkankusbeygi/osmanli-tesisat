import React from 'react';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/905550833001" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25d366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform animate-pulse"
    >
      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.749-3.321l.383.227c1.479.878 3.185 1.341 4.932 1.342 5.405 0 9.802-4.397 9.804-9.802 0-2.618-1.02-5.08-2.871-6.932-1.851-1.852-4.312-2.873-6.931-2.873-5.405 0-9.803 4.398-9.806 9.804 0 2.029.533 4.01 1.539 5.772l.25.439-1.003 3.666 3.753-.983z"/>
      </svg>
    </a>
  );
}