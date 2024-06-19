import React from 'react';
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    
    

      <div className="main-header">
        
        <div className="container flex">
         
          <div className="logo-container">
            <Link to='/'><h1>shopnest</h1></Link>
          </div>

          <nav>
              <ul>
                  <li><Link to='/about'>About</Link></li>
                  <li><Link to='/products'>Buy now</Link></li>
                  <li><Link to='/seelitem'>Seel Item</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
              </ul>
          </nav>

          <div className="nav-icons">
            <Link to='/'><i className="fa-solid fa-cart-shopping mr-2"></i></Link>
            <Link to='/'><i className="fa-solid fa-bell mr-2"></i></Link>
            <Link to='/'><i className="fa-solid fa-user"></i></Link>
          </div>

        </div>
       
      </div>
    
  );
}

export default MainHeader;
