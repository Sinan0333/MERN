import axios from 'axios'

const userApi = axios.create({
    baseURL:'http://localhost:3000'
})

const userSignUp = async (signUpData)=>{
    try {
        const data = await userApi.post('/signup',signUpData)
        return data.data
    } catch (error) {
        console.log(error.message);
    }
}

const userLogin = async (logginData)=>{
    try {
        const data = await userApi.post('/login',logginData)
        console.log(data.data);
        return data.data
    } catch (error) {
        console.log(error.message);
    }
}


export{
    userSignUp,
    userLogin,
}