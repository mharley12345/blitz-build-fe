import React from "react";
import { Link } from "react-router-dom"

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <p>Already have an account? <Link to="/signup"> Sign up</Link></p>
      <form>
        <label>Email</label>
        <input placeholder="john.doe@gmail.com" />
        <label>Password</label>
        <input placeholder="••••••••" />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;
