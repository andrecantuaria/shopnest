import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ContactUs from './pages/ContactUs';
import './css/index.css';
import ProductDetail from './pages/ProductDetail';import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainHeader from "./components/MainHeader";
import SubHeader from "./components/SubHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Featured from './components/Featured';
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';

function App() {
  return (
    <>
      <header>
        <SubHeader />
        <MainHeader />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
          <Route path='/featured' element={<Featured />} />
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <footer>
        <Footer />
        <SubFooter />
      </footer>
    </>
  );
}

export default App;
