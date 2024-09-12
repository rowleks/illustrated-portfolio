import './App.scss';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
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
        <Projects />
      </main>
      
      
    </div>
  )
}

export default App
