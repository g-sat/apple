import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import HowItWorks from "./components/HowItWorks"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import { Analytics } from '@vercel/analytics/react';


const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
      <Analytics />
      </main>
  )
}

export default App
