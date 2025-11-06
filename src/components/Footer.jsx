import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">CariKos</h3>
            <p className="mt-2 text-sm text-gray-600">Platform pencarian kos yang memudahkan Anda menemukan tempat tinggal nyaman, aman, dan strategis.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Perusahaan</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-gray-900">Karier</a></li>
              <li><a href="#" className="hover:text-gray-900">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Ikuti Kami</h4>
            <div className="mt-3 flex items-center gap-3 text-gray-600">
              <a href="#" aria-label="Facebook" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} CariKos. Semua hak dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Privasi</a>
            <a href="#" className="hover:text-gray-900">Syarat</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
