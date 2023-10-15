import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar.jsx'
// import './Components/Intro/intro.css'
import Services from './Components/Services//services.jsx'
import Intro from './Components/Intro/Intro.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Work from './Components/Work/Work.jsx'
import Product from './Components/Products/product.jsx';
import Footer from './Components/Footer/Footer.jsx'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <Product/>
    <Services/>
    <Experience/>
    <Work/>
    <Footer/>
    
    
  </div>
  );
}

export default App;
