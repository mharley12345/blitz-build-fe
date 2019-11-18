import axios from "axios";


export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL:"https://api-blitz-build-dev.herokuapp.com/api/auth",
        headers: {
            token: token
        }
    })
};