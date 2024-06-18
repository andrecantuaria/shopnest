import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ContactUs from './pages/ContactUs';
import './css/index.css';

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
