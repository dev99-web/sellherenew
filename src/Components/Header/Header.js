import React, { useContext } from 'react';

import './Header.css';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';

function Header() {
  const { user } = useContext(AuthContext)
  const history=useHistory()

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <h1 ><span className="span1">Sell</span><span>Here</span></h1>

        </div>
        {/* <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div> */}
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>

        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName}`:'Login'}</span>
          <hr />
          
        </div>
       <span>Logout</span>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SellHere</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;