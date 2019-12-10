import React, { useState, useEffect } from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import PrivateRoute from "./components/auth/PrivateRoute";
import NavBar from "./components/NavBar";
import axios from "axios";
import jwtDecode from "jwt-decode";
// import Layout from "./components/dashboard/Layout";
// import Dashboard from "./components/dashboard/index";
// import Dashboard from "./components/dashboard/Dashboard";
import Tasks from "./views/tasks/Tasks";
import Templates from "./components/templates/templates";
import IndividualTemplate from "./components/templates/IndividualTemplate";
import Projects from "./components/projects/Projects";
import IndividualProject from "./components/projects/IndividualProject";
import Logout from "./components/auth/Logout";
import Layout from "./layouts/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import DelayLog from "./components/delayLog/DelayLog";
import OpenTemplateContext from "./contexts/OpenTemplateContext";
//SWITCH INDEX TO DASHBOARD AFTER LC CHANGES HIS FILE NAME

//context
import UserContext from "./contexts/UserContext";
import SearchTermContext from "./contexts/searching/searchTerm";
import TaskProvider from "./contexts/tasks/TaskProvider";
import DelayLogProvider from "./contexts/delayLog/DelayLogProvider";
import OpenContext from "./contexts/projects/OpenContext";
import PathnameContext from "./contexts/PathnameContext";
import ProjectsProvider from "./contexts/projects/ProjectsProvider";
import { axiosWithAuth } from "./utils/auth/axiosWithAuth";
import EditModalContext from "./contexts/EditModalContext";
import TemplateProvider from "./contexts/templates/TemplateProvider";
//AUTH0
import Auth from "./components/auth/auth";
import AuthNavBar from "./components/auth/authNavBar";
import Callback from "./components/auth/callback";
import TemplatesProvider from "./contexts/templates/TemplateProvider";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pathname, setPathname] = useState(window.location.pathname);
  const [open, setOpen] = useState(false);
  const [openTemplate, setOpenTemplate] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // getting userInfo from id_token in localStorage.
  useEffect(() => {
    if (localStorage.getItem("id_token")) {
      setUserInfo(jwtDecode(localStorage.getItem("id_token")));
    }
  }, []);

  console.log("userInfo", userInfo);

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
      <TemplatesProvider>
        <OpenTemplateContext.Provider value={{ openTemplate, setOpenTemplate }}>
          <ProjectsProvider>
            <TaskProvider>
              <DelayLogProvider>
                <SearchTermContext.Provider
                  value={{ searchTerm, setSearchTerm }}
                >
                  <OpenContext.Provider value={{ open, setOpen }}>
                    <EditModalContext.Provider
                      value={{ editModalOpen, setEditModalOpen }}
                    >
                      <PathnameContext.Provider
                        value={{ pathname, setPathname }}
                      >
                        <UserContext.Provider value={{ userInfo, setUserInfo }}>
                          <NavBar
                            setPathname={setPathname}
                            navLinks={navLinks}
                          />
                          <Layout pathname={pathname}>
                            <Switch>
                              <Route exact path="/auth" component={Auth} />
                              <Route
                                exact
                                path="/navbar"
                                component={AuthNavBar}
                              />
                              <Route
                                exact
                                path="/callback"
                                component={Callback}
                              />
                              <Route exact path="/login" component={Login} />

                              {/* <Route exact path="/signup" component={Signup} /> */}
                              <Route exact path="/log-out" component={Logout} />
                              {/*   */}
                              <Route
                                exact
                                path="/dashboard"
                                component={Dashboard}
                              />
                              <Route exact path="/tasks" component={Tasks} />
                              <Route
                                exact
                                path="/projects"
                                component={Projects}
                              />
                              <Route
                                exact
                                path="/project/:id"
                                component={IndividualProject}
                              />
                              <Route
                                exact
                                path="/templates"
                                component={Templates}
                              />
                              <Route
                                exact
                                path="/templates/:id"
                                component={IndividualTemplate}
                              />
                              <Route
                                exact
                                path="/delay-log"
                                component={DelayLog}
                              />
                            </Switch>
                          </Layout>
                        </UserContext.Provider>
                      </PathnameContext.Provider>
                    </EditModalContext.Provider>
                  </OpenContext.Provider>
                </SearchTermContext.Provider>
              </DelayLogProvider>
            </TaskProvider>
          </ProjectsProvider>
        </OpenTemplateContext.Provider>
      </TemplatesProvider>
    </Router>
  );
}

export default App;
