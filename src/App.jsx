import { useState } from 'react'
import Hero from '../../matcha-cafe/src/components/Hero.jsx'
import FeaturedBakes from '../../matcha-cafe/src/components/FeaturedBakes/FeaturedBakes.jsx'
import OurBranches from '../../matcha-cafe/src/components/OurBranches/OurBranches.jsx'
import OrderCTA from '../../matcha-cafe/src/components/OrderCta/OrderCta.jsx'
import Footer from '../../matcha-cafe/src/components/Footer/Footer.jsx'
import './App.css';

function App() {
  return (
    <main>
      <Hero />
      <FeaturedBakes />
      <OurBranches />
      <OrderCTA />
      <Footer />
    </main>
  );
}

export default App
