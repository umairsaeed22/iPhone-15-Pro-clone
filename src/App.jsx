import Navbar from './components/navbar';
import Hero from './components/Hero';
import Hightlights from './components/Hightlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react'

const App = () => {
  return (
    
    <main className="bg-black">
       <Navbar />
       <Hero />
       <Hightlights />
       <Model />
       <Features />
       <HowItWorks />
       <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App)
