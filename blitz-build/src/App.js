//notes
import React, { useState, useEffect } from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from "./components/auth/Login";
// import Signup from "./components/auth/Signup";
// import PrivateRoute from "./components/auth/PrivateRoute";
import NavBar from "./components/NavBar";
import jwtDecode from "jwt-decode";
// import Layout from "./components/dashboard/Layout";
// import Dashboard from "./components/dashboard/index";
// import Dashboard from "./components/dashboard/Dashboard";

//task views
import Tasks from "./views/tasks/Tasks";
import ProjectTasks from "./views/tasks/ProjectTasks";

import Templates from "./components/templates/templates";
import IndividualTemplate from "./components/templates/IndividualTemplate";
import NinetyDayTemplate from "./components/templates/90DayTemplate";
import Projects from "./views/projects/Projects";
import IndividualProject from "./views/projects/IndividualProject";
import Logout from "./components/auth/Logout";
import Layout from "./layouts/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import DelayLog from "./views/delayLog/DelayLog";
import OpenTemplateContext from "./contexts/OpenTemplateContext";

import Documents from "./components/documents/Documents";
//SWITCH INDEX TO DASHBOARD AFTER LC CHANGES HIS FILE NAME
import ActivityViewAll from "./components/activityFeed/ActivityViewAll";

import Landing from "./components/landing/pages/Landing";

//context
import UserContext from "./contexts/UserContext";
import TaskProvider from "./contexts/tasks/TaskProvider";
import DelayLogProvider from "./contexts/delayLog/DelayLogProvider";
import PathnameContext from "./contexts/PathnameContext";
import ProjectsProvider from "./contexts/projects/ProjectsProvider";
import EditModalContext from "./contexts/EditModalContext";
import SearchProvider from "./contexts/searching/searchTermProvider";
// import SearchTermContext from "./contexts/searching/searchTerm";
// import TemplateProvider from "./contexts/templates/TemplateProvider";
// import { axiosWithAuth } from "./utils/auth/axiosWithAuth";
import ComponentToPrint from "./components/documents/PrintDocument";
//AUTH0
import Auth from "./components/auth/auth";
import AuthNavBar from "./components/auth/authNavBar";
import Callback from "./components/auth/callback";
import ViewDocument from "./components/documents/ViewDocument";
import TemplatesProvider from "./contexts/templates/TemplateProvider";
import Uploader from "./components/documents/Uploader";
import MyCalendar from "./components/calendar/MyCalender";
import DocumentsProvider from "./contexts/documents/DocumentsProvider";
function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const [openTemplate, setOpenTemplate] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // getting userInfo from id_token in localStorage.
  useEffect(() => {
    if (localStorage.getItem("id_token")) {
      setUserInfo(jwtDecode(localStorage.getItem("id_token")));
    }
  }, []);

  //function that checks the path to see if it should return the marketing page
  const LandingPage = component => {
    if (pathname === "/") {
      return null;
    } else {
      return component;
    }
  };

  // console.log("userInfo", userInfo);
  console.log("pathname", pathname);
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
      path: "/tasks?filter=ACTIVE",
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
      text: "MyCalendar",
      path: "/mycalendar",
      icon: "ion-ios-calendar"
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
            <DocumentsProvider>
              <TaskProvider>
                <DelayLogProvider>
                  <SearchProvider>
                    <EditModalContext.Provider
                      value={{ editModalOpen, setEditModalOpen }}
                    >
                      <PathnameContext.Provider
                        value={{ pathname, setPathname }}
                      >
                        <UserContext.Provider value={{ userInfo, setUserInfo }}>
                          {LandingPage(
                            <NavBar
                              setPathname={setPathname}
                              navLinks={navLinks}
                            />
                          )}
                          <Layout pathname={pathname}>
                            <Switch>
                              <Route exact path="/" component={Landing} />

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
                              <Route
                                exact
                                path="/activity-feed"
                                component={ActivityViewAll}
                              />
                              <Route
                                exact
                                path="/login"
                                // component={Login}
                              />

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
                                path="/projects/:id"
                                component={IndividualProject}
                              />
                              <Route
                                exact
                                path="/projects/:id/tasks"
                                component={ProjectTasks}
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
                                path="/90_Day"
                                component={NinetyDayTemplate}
                              />
                              <Route
                                exact
                                path="/delay-log"
                                component={DelayLog}
                              />
                              <Route
                                exact
                                path="/documents"
                                component={Documents}
                              />
                              <Route
                                exact
                                path="/documents/add"
                                component={Uploader}
                              />
                              <Route
                                exact
                                path="/documents/view/:file_name"
                                component={ViewDocument}
                              />
                              <Route
                                exact
                                path="/documents/print"
                                component={ComponentToPrint}
                              />
                              <Route
                                exact
                                path="/mycalendar"
                                component={MyCalendar}
                              />
                            </Switch>
                          </Layout>
                        </UserContext.Provider>
                      </PathnameContext.Provider>
                    </EditModalContext.Provider>
                  </SearchProvider>
                </DelayLogProvider>
              </TaskProvider>
            </DocumentsProvider>
          </ProjectsProvider>
        </OpenTemplateContext.Provider>
      </TemplatesProvider>
    </Router>
  );
}

export default App;
