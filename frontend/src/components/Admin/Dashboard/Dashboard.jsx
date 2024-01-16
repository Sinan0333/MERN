import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { deleteUser, listUsers } from '../../../Api/adminApi'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

    const [userList,setUserList] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        listUsers().then((res)=>{
            setUserList(res.usersData)
        }).catch((err)=>{
            console.log(err.message);
        })
    },[])

    const deleteHandle = (userId) =>{
        deleteUser(userId).then((res)=>{
            const users = userList.filter((user)=>user._id != userId)
            setUserList(users)
        }).catch((err)=>{
            console.log(err.message);
        })
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
                        <a href="#" className="btn btn-secondary"><i className="material-icons">&#xE147;</i> <span>Add New User</span></a>
                        <a href="#" className="btn btn-secondary"><i className="material-icons">&#xE24D;</i> <span>Export to Excel</span></a>						
                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>						
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user,ind)=>{
                            return(
                                <tr key={user._id}>
                                    <td>{ind+1}</td>
                                    <td><a href="#"><img src="/examples/images/avatar/1.jpg" className="avatar" alt="Avatar" /> {user.name}</a></td>
                                    <td>{user.email}</td>                        
                                    <td>Admin</td>
                                    <td><span className="status text-success">&bull;</span> Active</td>
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
            <div className="clearfix">
                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul className="pagination">
                    <li className="page-item disabled"><a href="#">Previous</a></li>
                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                    <li className="page-item active"><a href="#" className="page-link">3</a></li>
                    <li className="page-item"><a href="#" className="page-link">4</a></li>
                    <li className="page-item"><a href="#" className="page-link">5</a></li>
                    <li className="page-item"><a href="#" className="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>     
  )
}

export default Dashboard
