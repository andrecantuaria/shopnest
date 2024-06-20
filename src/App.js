import React from 'react';
import { BrowserRouter as Router,Routes, Route,Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ContactUs from './pages/ContactUs';
import './css/index.css';
import MainHeader from "./components/MainHeader";
import SubHeader from "./components/SubHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Featured from './components/Featured';
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';
import SellItem from './pages/SellItem';
import NotFound from './pages/NotFound';


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
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/featured' element={<Featured />} />
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/sellitem" element={<SellItem />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/notfound" replace />} />
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
