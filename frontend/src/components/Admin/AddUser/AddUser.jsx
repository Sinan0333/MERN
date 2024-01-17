import React, { useEffect, useState } from 'react'
import './AddUser.css'
import { useNavigate} from 'react-router-dom'
import { addUserApi } from '../../../Api/adminApi'

const initialState={
    name:"",
    email:"",
    phone:"",
    password:""
}

function EditUser() {
    const navigate = useNavigate()
    const [userData,setUserData] = useState(initialState)
    const [error,setError] = useState("")
    const emailPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const updateChange = (e)=>{
        e.preventDefault()
        try {
     
            if(!emailPattern.test(userData.email)){
            return  setError("Invalid email format")
            }else if(userData.name < 4){
            return setError("Name must contain 4 character")
            }else if(userData.phone && userData.phone.length < 10){
                return setError('Phone must contain 10 digits')
            }else if(userData.name.length<4){
                return setError('Name must contain 4 letters')
            }
            addUserApi(userData).then((res)=>{
                navigate('/admin/dashboard')
            }).catch((err)=>{
                console.log(err.message);
            })
           
        }catch(err){
            console.log(err.message);
        }
    }

  return (
    <div className="edit-container">
    <div className="main-body">
        <div className="row">
            <div className="col-lg-8">
                <div className=" profile-card2">
                    <form onSubmit={updateChange} className="card-body">
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Full Name</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control col-input" onChange={(e)=>setUserData({...userData,name:e.target.value})} value={userData.name} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-sm-9 text-secondary col-input">
                                <input type="text" className="form-control col-input" onChange={(e)=>setUserData({...userData,email:e.target.value})} value={userData.email} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Phone</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control col-input" onChange={(e)=>setUserData({...userData,phone:e.target.value})} value={userData.phone} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Password</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                                <input type="text" className="form-control col-input" onChange={(e)=>setUserData({...userData,password:e.target.value})} value={userData.password} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-9 text-secondary">
                                <input type="submit" className="btn btn-primary px-4" value={"Add User"} />
                            </div>
                        </div>
                        {error && <span style={{color:"white",justifyContent:"center",alignItems:"center", display:"flex"}}>{error}</span>}
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default EditUser
