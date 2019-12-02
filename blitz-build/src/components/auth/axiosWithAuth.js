import axios from "axios";
let token = localStorage.getItem('token')
let reFresh = localStorage.getItem('refreshToken')
export default _ => axios.create({ headers: { 
     token:token,
     refreshToken:reFresh
}});