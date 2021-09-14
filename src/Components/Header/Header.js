import React, { useContext } from 'react';

import './Header.css';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';
import {FirebaseContext} from '../../store/Context';
import { SearchContext } from '../../store/SearchContext';
import { useState } from 'react/cjs/react.development';


function Header() {
  const { user } = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const {setSearchItem} = useContext(SearchContext)
  const [search, setSearch] = useState("")
  const history = useHistory()
  const [arry,setArry] = useState([])
  
  // console.log(arry)
  const handleSearch=(e)=>{
    e.preventDefault();
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allSearch = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      console.log(allSearch)
      const filterData = allSearch.filter(
        itm=>itm.name.includes(search.toUpperCase())
      )
      console.log("filterData")
      setSearchItem(filterData)
    })
    history.push("/search")
    }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{history.push("/")}}>
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
              onChange={(e)=>{setSearch(e.target.value)}}
            />
          </div>
          <div className="searchAction" onClick={handleSearch}>
            <Search color="#ffffff"></Search>
          </div>
        </div>

        <div className="loginpage" onClick={()=>{history.push("/login")}}>
          {user ? <span>{`Welcome ${user.displayName}`}</span>
          : <button className="btn btn-light">Login</button>}
        </div>
        {user && <div>
          <button className="btn btn-light" onClick={()=>{history.push("/account")}}>My Account</button>
        </div>}
        {user && <button className="btn btn-light" 
           onClick={()=>{
            firebase.auth().signOut();
            history.push("/login")
          }} >
            Logout</button>}
        <div className="sellMenu" onClick={()=>{history.push('/create')}}>
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