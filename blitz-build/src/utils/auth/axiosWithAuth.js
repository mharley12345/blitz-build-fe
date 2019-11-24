import axios from "axios";


export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    return axios.create({
        baseURL:"https://staging-blitz-build.herokuapp.com/",
        headers: {
            token: token
        }
    })
};