import axios from "axios";


export const axiosWithAuth = () => {
    const user_id = localStorage.getItem("user_id");
    const id_token = localStorage.getItem("id_token");
    return axios.create({
        baseURL:"https://blitz-build-production.herokuapp.com",
        headers: {
            user_id: user_id,
            id_token: id_token
        }
    })
};