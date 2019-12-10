import axios from "axios";

//https://staging-blitz-build.herokuapp.com
export const axiosWithAuth = () => {

    return axios.create({
        baseURL:"http://localhost:5000",
        headers: {
            user_id: localStorage.getItem("user_id"),
            id_token: localStorage.getItem("id_token"),
           
        }
    })
};