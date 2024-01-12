import {Routes,Route} from 'react-router-dom'
import LoginPage from '../pages/user/LoginPage.jsx'
import SignUpPage from '../pages/user/SignUpPage.jsx'
import UserProfilePage from '../pages/user/UserProfilePage.jsx'
import HomePage from '../pages/user/HomePage.jsx'




function UserRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
    </Routes>
  )
}

export default UserRoutes
