import './App.scss';
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
        <div>
          <Hero />
          <Skills />
        </div>
        <Experience />
      </main>
      
      
    </div>
  )
}

export default App
