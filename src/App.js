import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min"

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
 <body id="page-top">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

 </body>
  );
}

export default App;
