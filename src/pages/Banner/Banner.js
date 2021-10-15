import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-img">
           
            <div className="text-center banner-text">
              <div>  <h2 className="fw-bolder">
                    Best Food Waiting for your belly
                </h2></div>
              <div>
              <input type="search" name="" id="" /> 
              <input type="submit" value="Search" />
              </div>
              
            </div>
        
        </div>
    );
};

export default Banner;