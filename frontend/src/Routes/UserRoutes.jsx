import {Routes,Route} from 'react-router-dom'
import LoginPage from '../pages/user/LoginPage.jsx'
import SignUpPage from '../pages/user/SignUpPage.jsx'
import UserProfilePage from '../pages/user/UserProfilePage.jsx'
import HomePage from '../pages/user/HomePage.jsx'
import UserLoginAuth from '../Authentication/UserLoginAuth.jsx'
import UserLogoutAuth from '../Authentication/UserLogoutAuth.jsx'



function UserRoutes() {
  return (
    <Routes>
        <Route path='/' element={<UserLoginAuth> <HomePage/> </UserLoginAuth>} />
        <Route path='/login' element={<UserLogoutAuth> <LoginPage /> </UserLogoutAuth> }/>
        <Route path='/signup' element={<UserLogoutAuth> <SignUpPage /> </UserLogoutAuth>} />
        <Route path='/profile' element={<UserLoginAuth> <UserProfilePage /> </UserLoginAuth>} />
    </Routes>
  )
}

export default UserRoutes
