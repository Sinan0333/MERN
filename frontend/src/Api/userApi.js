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


const updateProfileApi = async({name,email,phone,image,id})=>{
    try {
        const data = new FormData()
        data.append("id",id)
        data.append("name",name)
        data.append("emil",email)
        data.append("phone",phone)
        data.append("image",image)

        const config = {
            header: {
              "content-type": "multipart/form-data",
              userId: id,
            },
            withCredentials: true,
        };
        
      const resposnse =  await userApi.post('/updateprofile',data,config)
      return resposnse.data
    } catch (error) {
        console.log(error.message);
    }
}


export{
    userSignUp,
    userLogin,
    updateProfileApi,

}