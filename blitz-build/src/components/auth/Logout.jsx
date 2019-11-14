import React from "react";



const logoutContainer = {
  marginLeft: '10%'
}
const Logout = (props) => {
    const SignOut = e => {
        e.preventDefault();
        localStorage.removeItem("token");
      localStorage.removeItem('uid');
        props.history.push("/");
      };

      return (
          <div style={logoutContainer}>
              <p> Are you sure you want to logout?</p>
              <button onClick={()=> SignOut}>yes</button>
          </div>
      )
}

export default Logout;