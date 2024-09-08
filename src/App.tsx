import './App.scss';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className='container'>
      <header>
        <Navbar />
      </header>

      <main>
        <div className='div--padding'>
          <Hero />
          <Skills />
        </div>
        <Experience />
        <div className='div--padding'>
          <About />
        </div>
      </main>
      
      
    </div>
  )
}

export default App
