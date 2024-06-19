import React from 'react'

function SellItem() {
  const videoUrl = "https://videos.pexels.com/video-files/7287301/7287301-uhd_2560_1440_25fps.mp4"; 
  return (
    <div className="container mt-3 mb-3">

      <div className="generic-section">

        <div className="generic-info-container">
          <h2 className="mb-1">Sell with the top-growing, preferred channel</h2>

          <p className="mb-2">
          Our newly revised beginner's guide provides an overview of how to create a 
          selling account, list products, fulfill customer orders, and more. 
          Learn how to succeed with Shopnest—whether you’re new to online retail or 
          just new to the Shopnest store. This guide walks you through each step of 
          the selling process, offering tips and insights to help you maximize your 
          sales and streamline your operations. From setting up your seller profile 
          to managing inventory and handling customer inquiries, our comprehensive 
          guide ensures you have all the information you need to get started.
          </p>
          <p>
          Selling on Shopnest provides access to a large customer base, easy product 
          listing tools, and strong order fulfillment support. Our guide helps you 
          optimize product descriptions, set effective prices, and use promotional 
          tools to increase visibility. You'll also learn strategies for excellent 
          customer service, handling returns and refunds, and analyzing sales data 
          to improve performance. Join the Shopnest community to elevate your online 
          retail business.
          </p>

          <button className="primary-btn mt-3">Start Selling Today</button>
          

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

export default SellItem