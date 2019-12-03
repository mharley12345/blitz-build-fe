import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled, { css } from "styled-components";


const Login = props => {
  const [form, setForm] = useState({ email: "", password: "" });

  useEffect(() => {
    const token = localStorage.getItem("Authorization");

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

    axios
      .post("https://staging-blitz-build.herokuapp.com/users/login", form)
      .then(res => {
  
        console.log(res);

        localStorage.setItem("Authorization", res.data.token);
        localStorage.setItem("id",res.data.id)
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
