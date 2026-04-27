import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/FooterSections';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import DsaSheetPage from './pages/DsaSheetPage';
import ContactPage from './pages/ContactPage';
import Dashboard from './pages/Dashboard';
import LoginModal from './components/LoginModal';
import { useAuth } from './context/AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/" />;
  return children;
};

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
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
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
