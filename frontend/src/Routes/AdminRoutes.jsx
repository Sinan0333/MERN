import {Routes,Route} from 'react-router-dom'
import AdminLoginAuth from '../Authentication/AdminLoginAuth.jsx'
import AdminLogoutAuth from '../Authentication/AdminLogoutAuth.jsx'
import DashboardPage from '../pages/Admin/DashboardPage.jsx'
import LoginPage from '../pages/Admin/LoginPage.jsx'
import EditUserPage from '../pages/Admin/EditUserPage.jsx'
import AddUserPage from '../pages/Admin/AddUserPage.jsx'



function UserRoutes() {
  return (
    <Routes>
        <Route path='/dashboard' element={ <AdminLoginAuth> <DashboardPage /> </AdminLoginAuth> } />
        <Route path='/login' element={ <AdminLogoutAuth> <LoginPage /> </AdminLogoutAuth> } />
        <Route path='/edit/:id' element={ <AdminLoginAuth> <EditUserPage /> </AdminLoginAuth> } />
        <Route path='/adduser' element={ <AdminLoginAuth> <AddUserPage/> </AdminLoginAuth>} />
    </Routes>
  )
}

export default UserRoutes
