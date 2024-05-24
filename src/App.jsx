import React, { useRef, useEffect } from 'react';
import Fluid from 'webgl-fluid';
import ReviewSection from './components/ReviewSection';
import BrowserSection from './components/BrowserSection';
import CardSection from './components/CardSection';
import PurchaseSection from './components/PurchaseSection';
import ApplySection from './components/ApplySection';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FooterSection from './components/FooterSection';

const App = () => {
  const canvas = useRef(null);

  useEffect(() => {
    const c = canvas.current;
    const fluid = Fluid(c, {
      SIM_RESOLUTION: 64,       // Lower resolution for faster computation
      DYE_RESOLUTION: 256,      // Lower resolution for dye
      CAPTURE_RESOLUTION: 512,  // Lower capture resolution
      DENSITY_DISSIPATION: 15.0, // Much faster dissipation
      VELOCITY_DISSIPATION: 15.0,// Much faster dissipation
      PRESSURE: 0.5,            // Lower pressure
      PRESSURE_ITERATIONS: 10,  // Fewer iterations for faster simulation
      CURL: 30,
      SPLAT_RADIUS: 0.05,       // Smaller splat radius for faster interaction
      SPLAT_FORCE: 6000  // Adjust velocity decay for visual quality
    });

    const forwardMouseEvent = (e) => {
      const rect = c.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const event = new MouseEvent('mousemove', {
        clientX: x,
        clientY: y,
        bubbles: true,
        cancelable: true,
        view: window
      });

      c.dispatchEvent(event);
    };

    // Add event listeners to all interactive components
    const interactiveComponents = document.querySelectorAll('.interactive-component');
    interactiveComponents.forEach(component => {
      component.addEventListener('mousemove', forwardMouseEvent);
    });

    return () => {
      // Clean up event listeners
      interactiveComponents.forEach(component => {
        component.removeEventListener('mousemove', forwardMouseEvent);
      });
    };
  }, []);

  return (
    <div className="app-container" style={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <canvas 
        ref={canvas} 
        style={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          zIndex: -1,
          pointerEvents: 'none',
          
        }}
      ></canvas>

      <div className='w-[100%] h-[100vh]  flex flex-col'>
        <Navbar />
        <div className='flex-grow bg-transparent overflow-y-auto mt-[54px]'>
          <HeroSection className="interactive-component" />
          <ReviewSection className="interactive-component" />
          <PurchaseSection className="interactive-component" />
          <ApplySection className="interactive-component" />
          <BrowserSection className="interactive-component" />
          <CardSection className="interactive-component" />
          <FooterSection className="interactive-component" />
        </div>
      </div>
    </div>
  );
}

export default App;
