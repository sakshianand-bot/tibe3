import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GradientParticles from '../components/GradientParticles';

const MainLayout = () => {
  useEffect(() => {
    const existingScript = document.querySelector('script[data-widget-id="6a16bbd71b5a98ef9ddc564e"]');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
      script.setAttribute('data-widget-id', '6a16bbd71b5a98ef9ddc564e');
      script.setAttribute('data-source', 'WEB_USER');
      script.async = true;

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <GradientParticles />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
