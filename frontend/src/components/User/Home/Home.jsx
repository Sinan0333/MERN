import React,{Fragment} from 'react'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutDetails } from '../../../Store/Slices/UserSlice';


function Home() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData =  useSelector((state)=>state.user)

  const logOut = async()=>{
    localStorage.removeItem('token')
    dispatch(logoutDetails())
    navigate('/login')
  }
    
  return (
    <Fragment>
    <div className="bg">
    <h1>{userData.name}</h1>
  </div>
  <div className="nft">
    <div className="main">
      <img
        className="tokenImage"
         src={
          userData.image
            ? `/uploads/${userData.image}`
            : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"
        }
        alt="NFT"
      />
      <h2>{userData.name}</h2>
      <p className="description">
      {userData.email}
      </p>
      <div className="tokenInfo">
        <div  style={{cursor:'pointer'}} onClick={()=>navigate('/profile')} className="price">
          <p>Profile</p>
        </div>
        <div className="duration">
          <ins>◷</ins>
          <p>11 days left</p>
        </div>
      </div>
      <hr />
      <div className="creator">
        <div className="wrapper">
          <img
           src={
            userData.image
              ? `/uploads/${userData.image}`
              : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"
          }
            alt="Creator"
          />
        </div>
        <p style={{cursor:'pointer'}} onClick={logOut}>
          <ins>click here to </ins> LogOut
        </p>
      </div>
    </div>
  </div>
  </Fragment>
  )
}

export default Home
