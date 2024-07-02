// src/App.js
import React from 'react';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Nav from './Nav';
import Home from './components/Home';



function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-zinc-950 p-5 text-zinc-200">
      <Header/>
      <div className='flex mt-5 gap-5'>
        <Nav/>
        <Home/>
      </div>
      
    </div>
  );
}

export default App;
