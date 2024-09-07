import './App.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <Skills />
      
    </div>
  )
}

export default App
