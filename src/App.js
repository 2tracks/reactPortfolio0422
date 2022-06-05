import './index.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Work from './pages/work/Work';
import Contact from './pages/contact/Contact';


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Home/>
          <About/>
          <Work/>
          <Contact/>
      </div>
  );
}

export default App;
