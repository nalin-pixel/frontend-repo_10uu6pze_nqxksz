import React, { useState } from 'react';
import { MapPin, Search, SlidersHorizontal } from 'lucide-react';

export default function HeroSearch({ onSearch }) {
  const [keyword, setKeyword] = useState('');
  const [city, setCity] = useState('Jakarta');
  const [price, setPrice] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.({ keyword, city, price });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/70 via-white to-white pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="pt-10 pb-12 sm:pt-16 sm:pb-20">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
              <MapPin className="h-3.5 w-3.5" /> Temukan kos nyaman di sekitar Anda
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Cari Kos Ideal untuk Hidup yang Lebih Nyaman
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Filter berdasarkan lokasi, harga, dan fasilitas. Dapatkan rekomendasi yang sesuai dengan kebutuhan Anda.
            </p>
          </div>

          <form onSubmit={submit} className="mt-8 mx-auto max-w-3xl bg-white/80 backdrop-blur rounded-2xl shadow-sm ring-1 ring-gray-200 p-3 sm:p-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5">
                <MapPin className="h-4 w-4 text-gray-500" />
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  placeholder="Kota / Area"
                />
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5">
                <SlidersHorizontal className="h-4 w-4 text-gray-500" />
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  placeholder="Budget per bulan (Rp)"
                />
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5">
                <Search className="h-4 w-4 text-gray-500" />
                <input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                  placeholder="Kata kunci (contoh: dekat kampus)"
                />
              </div>
            </div>
            <div className="mt-3 flex justify-end">
              <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500">
                <Search className="h-4 w-4" /> Cari Kos
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
