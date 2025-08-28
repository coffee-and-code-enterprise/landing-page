// Dependencies
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Components
// import Header from './components/Header.jsx'

// Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'

// Styles
import './App.css'



function App() {

  return (
    <BrowserRouter>
      {/* Header */}
      <header>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/projects">Projects</Link>
        </nav>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      {/* Footer */}
      <footer><h1>Footer</h1></footer>
    </BrowserRouter>

  );
}

export default App
