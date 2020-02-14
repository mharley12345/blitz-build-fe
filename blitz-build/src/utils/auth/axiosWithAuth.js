import axios from "axios";

//https://blitz-build-production.herokuapp.com
export const axiosWithAuth = () => {

    return axios.create({
        baseURL:"http://44.233.184.65:3334",
        headers: {
            'Ascess-Control-Origin-Allow': "*",
            user_id: localStorage.getItem("user_id"),
            id_token: localStorage.getItem("id_token"),
            project_name:localStorage.getItem("project_name")
        }
    })
};