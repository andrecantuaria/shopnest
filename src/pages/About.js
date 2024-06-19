import React from 'react'

function About() {
  const videoUrl = "https://videos.pexels.com/video-files/5043439/5043439-uhd_2560_1440_30fps.mp4"; 
  return (
    <div className="container mt-3 mb-3">

      <div className="generic-section">

        <div className="generic-info-container">
          <h2 className="mb-1">Discover Shopnest's World</h2>

          <p className="mb-2">
          Welcome to Shopnest, your ultimate destination for cutting-edge electronics and technology.
          At Shopnest, we are passionate about providing our customers with the latest gadgets, 
          devices, and accessories that enhance your digital lifestyle.
          </p>
          <p>
          Whether you're a tech enthusiast, a professional looking for reliable tools, 
          or someone seeking the perfect gift, Shopnest has you covered. Our curated selection 
          features top brands known for innovation and quality, ensuring you have access to the 
          best products on the market.
          </p>
          <p className="mb-2">
          Driven by a commitment to customer satisfaction, Shopnest offers a seamless shopping 
          experience with secure transactions, fast shipping, and dedicated customer support. 
          Explore our diverse range of electronics including smartphones, laptops, smart home 
          devices, and more, all designed to meet your modern needs.
          </p> 
          <p>
          Discover the future of technology with Shopnest – where innovation meets convenience. 
          Join us on our journey to elevate your digital world, one gadget at a time.
          </p>
          

        </div>
      

        <div className="circle-container-generic">
            <video className="circle-generic" autoPlay muted loop>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
      </div>

    </div>
    
  )
}

export default About