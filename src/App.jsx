// App.js
import React from 'react';

import ReviewSection from './components/ReviewSection';
import BrowserSection from './components/BrowserSection';
import CardSection from './components/CardSection';
import PurchaseSection from './components/PurchaseSection';
import ApplySection from './components/ApplySection';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FooterSection from './components/FooterSection';

const App = () => {
  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Include SmokeFluidBackground as the background */}
   
    
      <div className='w-[100%] h-[100vh] flex flex-col'>
        <Navbar />
        <div className='flex-grow bg-[#0E0F1A] overflow-y-auto mt-[54px]'>
          <HeroSection />
          <ReviewSection />
          <PurchaseSection />
          <ApplySection />
          <BrowserSection />
          <CardSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

export default App;
