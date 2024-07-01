// src/App.js
import React from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Nav from './Nav';

const products = [
  { name: 'Nike', model: 'Roshe One Essential ID', price: 110, designer: 'Unknown', image: '/images/nike.png' },
  { name: 'Adidas', model: 'NMD City Sock 2', price: 130, designer: 'Kith Unveil', isNew: true, image: '/images/adidas.png' },
  { name: 'Reebok', model: 'Classic Nylon Magic', price: 90, originalPrice: 110, designer: 'Unknown', image: '/images/reebok.png' },
  // Add more products as needed
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-zinc-950 p-5 text-zinc-200">
      <Header/>
      <div className='flex mt-5'>
        <Nav/>
      </div>
      
    </div>
  );
}

export default App;
