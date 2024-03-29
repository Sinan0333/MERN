import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import './LoginForm.css'
import { userLogin } from '../../../Api/userApi'
import { setUserDetails } from '../../../Store/Slices/UserSlice'

function LoginForm() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email,setEamil] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState('')
  const emailPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const loginUser = async (e)=>{
    e.preventDefault()
   try {

    if(!emailPattern.test(email)){
    return  setError("Invalid email format")
    }else if(password.length < 4){
      return setError("Password must contain 4 character")
    }
    const loginResponse = await userLogin({
      email,password
    })

    if(loginResponse.status){
      localStorage.setItem('token',loginResponse.token)
      dispatch(setUserDetails({
        id:loginResponse.userData._id,
        name:loginResponse.userData.name,
        email:loginResponse.userData.email,
        is_Admin:loginResponse.userData.is_Admin,
        image:loginResponse.userData.image,
        phone:loginResponse.userData.phone,
      }))
      navigate('/')
    }else{
      setError(loginResponse.error)
    }

   } catch (error) {
    console.log(error.message);
   }

  }

  return (
    <div className='container'>
    <div className="card">
    <div className="card2">
      <form className="form" onSubmit={loginUser}>
        <p id="heading">Login</p>
        <div className="field">
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            className="input-icon"
          >
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
          </svg>
          <input type="text" className="input-field" placeholder="Email" autoComplete="off" onChange={(e)=>setEamil(e.target.value)} values={email} />
        </div>
        <div className="field">
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            className="input-icon"
          >
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
          </svg>
          <input type="password" className="input-field" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} values={password} />
        </div>
        <div className="btn">
          <button type='submit' className="button1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          <button className="button2" onClick={()=>navigate('/signup')}>Sign Up</button>
        </div>
        <button className="button3">Forgot Password</button>
        {error && <span style={{color:"white",justifyContent:"center",alignItems:"center", display:"flex"}}>{error}</span>}
      </form>
    </div>
  </div>
  </div> 
  )
}

export default LoginForm
