import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSearch from './components/HeroSearch';
import FeaturedList from './components/FeaturedList';
import Footer from './components/Footer';

function App() {
  const [filters, setFilters] = useState(null);

  const handleSearch = (data) => {
    setFilters(data);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <HeroSearch onSearch={handleSearch} />
        <FeaturedList filters={filters} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
