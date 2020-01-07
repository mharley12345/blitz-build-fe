import axios from "axios";

//https://blitz-build-production.herokuapp.com
export const axiosWithAuth = () => {

    return axios.create({
        baseURL:"https://blitz-build-production.herokuapp.co",
        headers: {
            'Ascess-Control-Origin-Allow': "*",
            user_id: localStorage.getItem("user_id"),
            id_token: localStorage.getItem("id_token"),
            project_name:localStorage.getItem("project_name")
        }
    })
};