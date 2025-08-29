// Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
// import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

// Pages
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Projects from './pages/Projects/Projects.jsx'

// Styles
import './App.css'



function App() {

  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </BrowserRouter>

  );
}

export default App
