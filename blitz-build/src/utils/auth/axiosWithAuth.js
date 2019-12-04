import axios from "axios";


export const axiosWithAuth = () => {
    const user_id = localStorage.getItem("user_id");
    return axios.create({
        baseURL:"http://localhost:3333",
        headers: {
            user_id: user_id
        }
    })
};