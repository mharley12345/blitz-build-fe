import React, { useState } from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
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

function App() {
<<<<<<< HEAD
  const [pathname, setPathname] = useState();
=======

  const [ pathname, setPathname ] = useState(window.location.pathname);
>>>>>>> 8545e0de8f923f29287187f09d8eb6d5cd869a8d
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
          {/* <NavBar setPathname= {setPathname}
          navLinks={navLinks}
          //  logo={ logo }
<<<<<<< HEAD
        /> */}
          <Layout pathname={pathname}>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
=======
        />
        <Layout pathname={pathname}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/log-out" component={Logout} />
>>>>>>> 8545e0de8f923f29287187f09d8eb6d5cd869a8d

              {/*   */}
              <NavBar
                setPathname={setPathname}
                navLinks={navLinks}
                //  logo={ logo }
              />
              <Route exact path="/dashboard" component={TaskCard} />
              <Route exact path="/tasks" component={Tasks} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/project/:id" component={IndividualProject} />
              <Route exact path="/delay-log" component={DelayLog} />
            </Switch>
          </Layout>
        </OpenContext.Provider>
      </TaskProvider>

      {/* </ProjectProvider> */}
    </Router>
  );
}

export default App;
