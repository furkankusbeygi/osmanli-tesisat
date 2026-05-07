/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Bu satır sitenin HTML olarak çıkmasını sağlar
  images: {
    unoptimized: true, // Statik sitede resim optimizasyonu için şart
  },
};

export default nextConfig;