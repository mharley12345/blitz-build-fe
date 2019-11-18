import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from 'axios'
const Login = props => {
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      props.history.push("/projects");
    } else {
      console.log("no token");
    }
  }, [props.history]);

  const changeHandler = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
//https://api-blitz-build-pro.herokuapp.com/api/login
      axios
      .post("http://localhost:4000/api/login", form)
      .then(res => {
         
         console.log(res)
        localStorage.setItem("uid", res.data.uid);
        localStorage.setItem("token", res.data.accessToken);
         
        localStorage.setItem("refeshToken",res.data.refreshToken)

        props.history.push("/projects");
        if(res){
          console.log(res)
        
        }
   
      })
      .catch(err => {
        console.log(err);
      });
    
  };

  return (
    <div>
      <h1>Login</h1>
      <p>
        Don't have an account? <Link to="/signup"> Sign up</Link>
      </p>
      <form onSubmit={submitForm}>
        <input
          name="email"
          placeholder="email"
          onChange={changeHandler}
          value={form.email}
        />
        <input
          name="password"
          placeholder="password"
          onChange={changeHandler}
          value={form.password}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
