import React, { Component, useEffect } from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "./auth";

// class Callback extends Component {
//   async componentDidMount() {
//     console.log("im here");
//     await auth0Client.handleAuthentication();
//     this.props.history.replace("/dashboard");
//   }

//   render() {
//     return <p>Loading profile...</p>;
//   }
// }

const Callback = props => {
  useEffect(() => {
    async function authentication() {
      const auth = await auth0Client.handleAuthentication();
      props.history.replace("/dashboard");
    }

    authentication();
  }, []);

  return <p>Loading profile...</p>;
};

export default withRouter(Callback);
