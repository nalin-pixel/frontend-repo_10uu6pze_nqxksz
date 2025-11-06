import React from 'react';
import { MapPin, Star } from 'lucide-react';

export default function PropertyCard({ item }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white ring-1 ring-gray-200 hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{item.title}</h3>
          <div className="inline-flex items-center gap-1 text-amber-500 text-sm">
            <Star className="h-4 w-4 fill-amber-500" />
            <span>{item.rating}</span>
          </div>
        </div>
        <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
          <MapPin className="h-4 w-4" /> {item.location}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-gray-900 font-semibold">Rp {item.price.toLocaleString('id-ID')}/bln</div>
          <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">
            {item.type}
          </span>
        </div>
      </div>
    </div>
  );
}
