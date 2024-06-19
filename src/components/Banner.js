import React from 'react'
import { Link } from "react-router-dom";


function Banner() {
  return (
    <div className="banner">
      <div className="container flex">

      <div className="highlight-info">
       
        <h1>Phone Deals</h1>
        <p>Discover our exciting smartphone promotions! < br />Upgrade your tech today with our latest deals on top brands.</p>
        <button className="primary-btn mt-3">Buy now</button>
        </div>

      </div>
      
      <div className="circle-container"></div>


    </div>
  );
}

export default Banner