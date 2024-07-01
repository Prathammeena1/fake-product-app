// src/App.js
import React from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';

const products = [
  { name: 'Nike', model: 'Roshe One Essential ID', price: 110, designer: 'Unknown', image: '/images/nike.png' },
  { name: 'Adidas', model: 'NMD City Sock 2', price: 130, designer: 'Kith Unveil', isNew: true, image: '/images/adidas.png' },
  { name: 'Reebok', model: 'Classic Nylon Magic', price: 90, originalPrice: 110, designer: 'Unknown', image: '/images/reebok.png' },
  // Add more products as needed
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      
    </div>
  );
}

export default App;
