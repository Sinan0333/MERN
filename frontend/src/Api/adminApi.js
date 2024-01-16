import axios from "axios";

const AdminApi = axios.create({
    baseURL: "http://localhost:3000/admin",
  });

  const adminLogin = async (loginData)=>{
    try {
        const adminLogin = await AdminApi.post('/login',loginData)
        return adminLogin.data
    } catch (error) {
        
    }
  }

  const listUsers = async ()=>{
   try {
    const listResposnse = await AdminApi.get('/list')
    return listResposnse.data
   } catch (error) {
    console.log(error.message);
   }
  }

  const deleteUser = async (userId) =>{
    try {
      const deleteResponse = await AdminApi.post('/delete',{userId})  
      return deleteResponse.data
    } catch (error) {
        console.log(error.message);
    }
  }

  const loadEditProfle = async (id)=>{
    try {
        const userData = await AdminApi.post('/edituser',{id})
        return userData.data
    } catch (error) {
        console.log(error.message);
    }
  }

  const updateUserData = async (userData,id)=>{
   try {
    userData.id=id
    console.log(userData);
    const resposnse = await AdminApi.post('/updateUser',userData)
    return resposnse
   } catch (error) {
    console.log(error.message);
   }
  }
  
export{
    adminLogin,
    listUsers,
    deleteUser,
    loadEditProfle,
    updateUserData

}