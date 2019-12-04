import axios from "axios";


export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id")
    return axios.create({
        baseURL:"https://blitz-build-production.herokuapp.com",
        headers: {
            // token: token,
            user_id: user_id
        }
    })
};