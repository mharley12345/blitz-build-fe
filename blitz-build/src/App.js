import React, { useState } from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import PrivateRoute from "./components/auth/PrivateRoute";
import NavBar from "./components/NavBar";
// import Layout from "./components/dashboard/Layout";
// import Dashboard from "./components/dashboard/index";
// import Dashboard from "./components/dashboard/Dashboard";
import Tasks from "./views/tasks/Tasks";
import Projects from "./components/projects/Projects";
import IndividualProject from "./components/projects/IndividualProject";
import Logout from "./components/auth/Logout";
import Layout from "./layouts/Layout";
import TaskCard from "./components/dashboard/TaskCard";
import DelayLog from "./components/delayLog/DelayLog";
//SWITCH INDEX TO DASHBOARD AFTER LC CHANGES HIS FILE NAME

//context
import TaskProvider from "./contexts/tasks/TaskProvider";
import OpenContext from "./contexts/projects/OpenContext";
// import ProjectProvider from "./contexts/projects/ProjectsProvider";

//AUTH0
import Auth from "./components/auth/auth";
import AuthNavBar from "./components/auth/authNavBar";
import Callback from "./components/auth/callback";

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [open, setOpen] = useState(false);
  const navLinks = [
    {
      text: "Home",
      path: "/dashboard",
      icon: "ion-ios-home"
    },
    {
      text: "Projects",
      path: "/projects",
      icon: "ion-ios-construct"
    },
    {
      text: "Tasks",
      path: "/tasks",
      icon: "ion-ios-notifications"
    },
    {
      text: "Documents",
      path: "/documents",
      icon: "ion-ios-document"
    },
    {
      text: "Templates",
      path: "/templates",
      icon: "ion-ios-menu"
    },
    {
      text: "Delay Log",
      path: "/delay-log",
      icon: "ion-ios-hourglass"
    },
    {
      text: "Log Out",
      path: "/log-out",
      icon: "ion-ios-cog"
    },
    {
      text: "Help",
      path: "/help",
      icon: "ion-ios-help-circle-outline"
    }
  ];

  return (
    <Router>
      {/* <ProjectProvider> */}
      <TaskProvider>
        <OpenContext.Provider value={{ open, setOpen }}>
          <NavBar setPathname={setPathname} navLinks={navLinks} />
          <Layout pathname={pathname}>
            <Switch>
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/navbar" component={AuthNavBar} />
              <Route exact path="/callback" component={Callback} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/log-out" component={Logout} />

              {/*   */}
              <PrivateRoute exact path="/dashboard" component={TaskCard} />
              <PrivateRoute exact path="/tasks" component={Tasks} />
              <PrivateRoute exact path="/projects" component={Projects} />
              <PrivateRoute
                exact
                path="/project/:id"
                component={IndividualProject}
              />
              <PrivateRoute exact path="/delay-log" component={DelayLog} />
            </Switch>
          </Layout>
        </OpenContext.Provider>
      </TaskProvider>

      {/* </ProjectProvider> */}
    </Router>
  );
}

export default App;
