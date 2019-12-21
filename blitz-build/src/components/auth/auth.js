/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

class Auth {
  //all the configurations of the Blitz Build auth0 dashboard/settings.

  auth0 = new auth0.WebAuth({
    // the following three lines MUST be updated
    domain: "gannondarcy2.auth0.com",
    audience: "https://gannondarcy2.auth0.com/userinfo",
    clientID: "OzMg1e7JDNF7DogxPEPvGzpG7fvvDHNe",
    //redirect is an environment variable
    redirectUri: process.env.REACT_APP_REDIRECT_URL,
    responseType: "id_token",
    scope: "openid profile"
  });

  constructor() {
    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  //gets id token
  getIdToken() {
    return this.idToken;
  }

  //allows you to login based on auth0 credentials
  signIn() {
    this.auth0.authorize();
  }

  //this handles the authentication and then sends local storage certain results that auth0 sends back after authenticating
  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      console.log(authResults);

      if (authResults && authResults.idToken) {
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        // localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
        localStorage.setItem("user_id", authResults.idTokenPayload.sub);
      } else {
        console.log(err);
      }
    });
  }

  //this makes sure the user continues to be authenticated
  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  //gets the profile based on the id token in local storage (might not be in affect). Could be handling this in our own backend
  getProfile() {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.setItem("id_token"));
    } else {
      return {};
    }
  }
}

const auth0Client = new Auth();

export default auth0Client;
