import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
import { useHistory } from 'react-router';

function Banner() {
  const history = useHistory()

  return (
    // <div className="bannerParentDiv">
    //   <div className="bannerChildDiv">
    //     <div className="banner">
    //     </div>
    //   </div>
    //   <br />
    //   { user ? <div className="row categoryFilter">
    //     <div> <strong>CATEGORIES FILTER :</strong> </div>
    //     <div className="secondCategory" onClick={()=>{history.push("/car")}}> <strong>CAR</strong> </div>
    //     <div className="secondCategory" onClick={()=>{history.push("/bike")}}><strong>BIKE</strong> </div>
    //   </div> :
    //   <div className="row categoryFilter2">
    //   <div> <strong>CATEGORIES FILTER :...</strong> </div>
    //   <div className="secondCategory" onClick={()=>{history.push("/car")}}> <strong>CAR</strong> </div>
    //   <div className="secondCategory" onClick={()=>{history.push("/bike")}}><strong>BIKE</strong> </div>
    // </div>
    //   }
    // </div>
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>CATEGORIES FILTER : </span>
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>{history.push("/car")}} className="carSpan"> <strong>Cars</strong> </span>
            <span onClick={()=>{history.push("/bike")}} className="bikeSpan"><strong>Bikes</strong></span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;