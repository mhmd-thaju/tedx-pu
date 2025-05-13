import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import cover_img from './Cover.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Sponsors from "./pages/Sponsors.js";
import Speakers from "./pages/Speakers.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='Cover' style={{
          backgroundImage: `url(${cover_img})`,
          backgroundSize: 'cover',
          height: '100vh'
        }} />

        {/* Routes Section */}
        <div className="content">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/sponsors" element={<Sponsors/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
