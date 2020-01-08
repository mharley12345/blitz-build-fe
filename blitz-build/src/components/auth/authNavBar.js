import React from "react";
import { Link, withRouter } from "react-router-dom";
import auth0Client from "./auth";

function NavBar(props) {
  //if you sign out using this then you are signing out with auth0. Right now this is an option, but we are using our own function in Logout.jsx
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace("/dashboard");
  };

  //returns login button
  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      {/* <Link className="navbar-brand" to="/">
        Blitz Build
      </Link> */}
      {!auth0Client.isAuthenticated() && (
        <button className="btn btn-dark" onClick={auth0Client.signIn}>
          Sign In
        </button>
      )}
      {auth0Client.isAuthenticated() && (
        <div>
          <label className="mr-2 text-white">
            {auth0Client.getProfile().name}
          </label>
          <button
            className="btn btn-dark"
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
}

export default withRouter(NavBar);
