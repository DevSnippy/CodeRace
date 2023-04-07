import React from 'react';
import WebNav from "./components/WebNav";
import HomePage from "./components/home_page/homePage"; 
import AboutPage from './components/about_page/about';
import BenchmarkPage from "./components/benchmark_page/benchmark_page" 
import QuickSortPage from './components/quickSort_page/quickSort_page';
import Footer from "./components/footer" 
import CryptoPage from './components/crypto_page/crypto_page';
import {BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div className='bg-sky-200 rounded-3xl'>
          <WebNav/>
        </div>
        <br/>
        <div className='pb-64'>
        <Routes>
        <Route path="/crypto" element={<CryptoPage/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="/fetch" element={<BenchmarkPage />} />
          <Route path="/quickSort" element={<QuickSortPage />} />
          <Route path='/about' element ={<AboutPage/>} />
        </Routes>
        </div>
      </BrowserRouter>
      <Footer/ >
    </div>
  );
}

export default App;
