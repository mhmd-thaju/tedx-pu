import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Sponsors from "./pages/Sponsors.js";
import Speakers from "./pages/Speakers.jsx";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

// 👇 Handles showing Home only on "/" or "/home"
function MainLayout() {
  const location = useLocation();
  const showHome = location.pathname === '/' || location.pathname === '/home';

  return (
    <div className="App d-flex flex-column min-vh-100" style={{ backgroundColor: "#000" }}>
      <Navbar />

      {/* Show Home only for "/" or "/home" */}
      {/*showHome && <Home />*/}

      {/* Routes Section */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
