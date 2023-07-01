
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';

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
    </div>
  );
}

export default App;
