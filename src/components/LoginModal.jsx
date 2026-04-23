import React from 'react';
import { X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal">
          <motion.div 
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <button 
              className="close-modal" 
              onClick={onClose}
              style={{ background: 'none', border: 'none', color: 'white' }}
            >
              <X size={24} />
            </button>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <Flame size={40} color="var(--accent)" style={{ marginBottom: "1rem" }} />
              <h2>Access Dashboard</h2>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Unlock your coding potential</p>
            </div>
            <form className="login-form">
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", fontSize: "0.85rem" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-muted)" }}>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" style={{ color: "var(--gold-primary)", fontWeight: 600 }}>Forgot?</a>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Login Now</button>
            </form>
            <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
              New here? <span style={{ color: "var(--gold-primary)", fontWeight: 700, cursor: "pointer" }}>Join Academy</span>
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
