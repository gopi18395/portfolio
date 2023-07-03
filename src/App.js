
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services/>
      <Portfolio/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
