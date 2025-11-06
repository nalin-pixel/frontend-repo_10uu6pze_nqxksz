import React from 'react';
import PropertyCard from './PropertyCard';

const sampleData = [
  {
    id: 1,
    title: 'Kos Modern Dekat Kampus UI',
    location: 'Depok, Jawa Barat',
    price: 1500000,
    rating: 4.7,
    type: 'Putra',
    image: 'https://images.unsplash.com/photo-1600281179192-2509a56bc3dc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLb3MlMjBNb2Rlcm4lMjBEZWthdCUyMEthbXB1cyUyMFVJfGVufDB8MHx8fDE3NjI0MzIwOTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Kamar Nyaman Pusat Kota',
    location: 'Bandung, Jawa Barat',
    price: 1200000,
    rating: 4.5,
    type: 'Campur',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Kos Eksklusif Fasilitas Lengkap',
    location: 'Jakarta Selatan, DKI Jakarta',
    price: 2500000,
    rating: 4.9,
    type: 'Putri',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Kos Asri dan Tenang',
    location: 'Yogyakarta, DIY',
    price: 900000,
    rating: 4.3,
    type: 'Campur',
    image: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function FeaturedList() {
  return (
    <section className="py-10 sm:py-14 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Rekomendasi untuk Anda</h2>
            <p className="mt-1 text-gray-600">Pilihan kos populer dengan rating tinggi dan lokasi strategis.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-500">Lihat semua</a>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sampleData.map((item) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
