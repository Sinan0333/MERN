import {Routes,Route} from 'react-router-dom'

import UserLoginAuth from '../Authentication/UserLoginAuth.jsx'
import UserLogoutAuth from '../Authentication/UserLogoutAuth.jsx'
import DashboardPage from '../pages/Admin/DashboardPage.jsx'
import LoginPage from '../pages/Admin/LoginPage.jsx'
import EditUserPage from '../pages/Admin/EditUserPage.jsx'



function UserRoutes() {
  return (
    <Routes>
        <Route path='/dashboard' element={ <DashboardPage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/edit/:id' element={ <EditUserPage /> } />
    </Routes>
  )
}

export default UserRoutes
