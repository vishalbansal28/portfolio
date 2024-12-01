import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Footer from './components/Footer';
import About from './components/About';  // Add this import
import Projects from './components/Projects';
import CodeSection from './components/CodeSection';

function App() {
  return (
    <div className="min-h-screen bg-spotify-darker">
      <Navbar />
      <main>
        <Hero />
        <About />  // Add About section
        <Projects />  {/* Add Projects section here */}
        <Experience />
        <Footer />
      </main>
    </div>
  );
}

export default App;
