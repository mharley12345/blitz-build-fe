/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";

class Auth {
  auth0 = new auth0.WebAuth({
    // the following three lines MUST be updated
    domain: "gannondarcy2.auth0.com",
    audience: "https://gannondarcy2.auth0.com/userinfo",
    clientID: "OzMg1e7JDNF7DogxPEPvGzpG7fvvDHNe",
    redirectUri: "http://localhost:3000/callback",
    responseType: "id_token",
    scope: "openid profile"
  });

  constructor() {
    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    // this.signOut = this.signOut.bind(this);
  }

  // getProfile() {
  //   return this.profile;
  // }

  getIdToken() {
    return this.idToken;
  }

  // isAuthenticated() {
  //   return new Date().getTime() < this.expiresAt;
  // }

  signIn() {
    this.auth0.authorize();
  }

  // handleAuthentication() {
  //   return new Promise((resolve, reject) => {
  //     this.auth0.parseHash((err, authResult) => {
  //       if (err) return reject(err);
  //       if (!authResult || !authResult.idToken) {
  //         return reject(err);
  //       }
  //       this.idToken = authResult.idToken;
  //       this.profile = authResult.idTokenPayload;
  //       // set the time that the id token will expire at
  //       this.expiresAt = authResult.idTokenPayload.exp * 1000;
  //       resolve();
  //     });
  //   });
  // }

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

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  // doing this function in the logout component
  signOut() {
    // clear id token, profile, and expiration
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

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
