// src/App.js
import React from 'react';

const products = [
  { name: 'Nike', model: 'Roshe One Essential ID', price: 110, designer: 'Unknown', image: 'path/to/nike.png' },
  { name: 'Adidas', model: 'NMD City Sock 2', price: 130, designer: 'Kith Unveil', isNew: true, image: 'path/to/adidas.png' },
  { name: 'Reebok', model: 'Classic Nylon Magic', price: 90, originalPrice: 110, designer: 'Unknown', image: 'path/to/reebok.png' },
  // Add more products as needed
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dope</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4">Sneakers</h2>
            <div className="grid grid-cols-4 gap-4">
              {products.map((product) => (
                <div key={product.name} className="bg-white p-4 rounded-lg shadow">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="mt-4">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-gray-500">{product.model}</p>
                    <p className="text-gray-900 font-semibold">${product.price}</p>
                    {product.isNew && <span className="text-xs text-red-500">NEW</span>}
                    {product.originalPrice && (
                      <p className="text-gray-400 line-through">${product.originalPrice}</p>
                    )}
                    <p className="text-gray-500 text-sm">Designer: {product.designer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
