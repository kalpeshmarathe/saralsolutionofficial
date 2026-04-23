import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import DsaSheetPage from './pages/DsaSheetPage';
import ContactPage from './pages/ContactPage';
import LoginModal from './components/LoginModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <Router>
      <div className="app-root">
        <Navbar onLoginClick={() => setIsLoginOpen(true)} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/dsa-sheet" element={<DsaSheetPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />

        <LoginModal 
          isOpen={isLoginOpen} 
          onClose={() => setIsLoginOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
