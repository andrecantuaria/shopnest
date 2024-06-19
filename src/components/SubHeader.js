import React from 'react'
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';

function SubHeader() {
  return (
    <div className="sub-header">
        <div className="container flex">

        <div className="regional-settings-container">
              <Dropdown />
          </div>

          <nav>
              <ul>
                  <p>&lt; Our<Link to="/"> TrusPilot</Link> rating is <b>4.8</b> &gt;</p>
                  
              </ul>
          </nav>

          <div className="app-icons">
          <p>Download App: <i className="fa-brands fa-apple ml-1 mr-1"></i> <i className="fa-brands fa-android"></i>
          </p>
          
          
          </div>

           
                        
        </div>
        
  </div>
  )
}

export default SubHeader