import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { useEffect } from 'react/cjs/react.development'
import {FirebaseContext} from "../../../store/Context"
import {PostContext} from "../../../store/PostContext"

function Bike() {

    const {firebase} = useContext(FirebaseContext)
    const {setPostDetails} = useContext(PostContext)
    const [bike, setBike] = useState([])

    const history = useHistory();

    useEffect(()=>{
        firebase.firestore().collection('products').get().then((snapshot)=>{
            const allCar = snapshot.docs.map((product) => {
                return {
                  ...product.data(),
                  id: product.id
                }
              })
              const filterData = allCar.filter(itm=> itm.category==="BIKE")
              setBike(filterData)
        })
    },[])

    return (
        <div>
            <div className="postParentDiv">
                

            <div className="moreView">
        <div className="heading">
          <span>Bike results</span>
        </div>
        <div className="cards">

        {bike.map((item,index)=>{
                    return(
                    <div 
                className="card"
                onClick={()=>{
                    setPostDetails(item)
                    history.push("/view")
                }}
              >
                <div className="image">
                  <img src={item.url} alt="" />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9;{item.price}</p>
                  <span className="kilometer">{item.category}</span>
                  <p className="name">{item.name}</p>
                </div>
                <div className="date">
                  <span>{item.createdAt}</span>
                </div>
              </div>      
                    )
                })}
                </div>
              </div>
        </div>
        </div>
    )
}

export default Bike
