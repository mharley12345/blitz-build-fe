import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <h1>Sign up</h1>
      <p>
        Don't have an account? <Link to="/">Login</Link>
      </p>
      <form>
        <label>Name</label>
        <input placeholder="John Doe" />
        <label>Email</label>
        <input placeholder="john.doe@gmail.com" />
        <label>Password</label>
        <input placeholder="••••••••" />
        <label>Confirm password</label>
        <input placeholder="••••••••" />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default Signup;