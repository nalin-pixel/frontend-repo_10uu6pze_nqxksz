import React from 'react';
import { Home, MapPin, Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Home className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">CariKos</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Jelajahi
            </a>
            <a href="#" className="hover:text-gray-900 inline-flex items-center gap-1">
              <Heart className="h-4 w-4" /> Favorit
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50">Masuk</button>
            <button className="inline-flex rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500">Daftar</button>
          </div>
        </div>
      </div>
    </header>
  );
}
