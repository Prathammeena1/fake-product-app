import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import MainRouter from './components/Routes/MainRouter';


function App() {

  return (
    <div className="min-h-screen bg-gradient-to-r from-zinc-900 to-zinc-950 p-5 text-zinc-200 w-full overflow-hidden">
      <Header/>
      <div className='flex mt-5 gap-5'>
        <Nav />
        <MainRouter/>
      </div>
      
    </div>
  );
}

export default App;
