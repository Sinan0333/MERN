import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { deleteUser, listUsers } from '../../../Api/adminApi'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

    const [userList,setUserList] = useState([])
    const [search,setSeach] = useState("")
    const [searchList,setSeachList] = useState([]) 
    const navigate = useNavigate()

    useEffect(()=>{
        listUsers().then((res)=>{
            setUserList(res.usersData)
            setSeachList(res.usersData)
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])

    const deleteHandle = (userId) =>{
        deleteUser(userId).then((res)=>{
            const users = userList.filter((user)=>user._id != userId)
            setUserList(users)
            setSeachList(users)
        }).catch((err)=>{
            console.log(err.message);
        })
    }

    const searchUser = (e)=>{
        const term = e.target.value
        setSeach(term)
        if(term.trim() === ''){
            setSeachList(userList)
        }else{
            const regexPattern = new RegExp(`^${term}`,'i')
            const searchData = searchList.filter((user)=>regexPattern.test(user.name))
            setSeachList(searchData)
        }
        
    }

    const logOut = async()=>{
        localStorage.removeItem('adminToken')
        navigate('/admin/login')
      }

  return (
    
<div className="container-xl">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-5">
                        <h2>User <b>Management</b></h2>
                    </div>
                    <div className="col-sm-7">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={searchUser}
                    />
                  <button onClick={()=> navigate('/admin/adduser')} className='add-button'>Add User</button>
                  <button onClick={()=> logOut()} className='add-button'>Logout</button>
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>						
                        <th>Email</th>
                        <th>Phone</th>
                        <th>id</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchList.map((user,ind)=>{
                            return(
                                <tr key={user._id}>
                                    <td>{ind+1}</td>
                                    <td><a href="#"><img src={user.image ? `/uploads/${user.image}` : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"} className="rounded-circle " width="40px" height="40px" alt="Avatar" /> {user.name}</a></td>
                                    <td>{user.email}</td>                        
                                    <td>{user.phone || 'Not added '}</td>
                                    <td><span className="status text-success">&bull;</span> {user._id}</td>
                                    <td>
                                        <a onClick={()=>navigate(`/admin/edit/${user._id}`)} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                                        <a onClick={()=>deleteHandle(user._id)}  className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>     
  )
}

export default Dashboard
