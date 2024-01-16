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
    dispatch(logoutDetails)
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
        src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
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
