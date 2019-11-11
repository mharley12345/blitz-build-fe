import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import NavBar from './components/NavBar'

function App() {
     const navLinks = [
       {
         text: 'Home',
         path: '/',
         icon: "ion-ios-home"
       },
       {
        text: 'Projects',
        path: '/projects',
        icon: 'ion-ios-build'
      },
      {
        text: 'Tasks',
        path: '/tasks',
        icon: 'ion-ios-checkbox'
      },
      {
        text: 'Documents',
        path: '/documents',
        icon: 'ion-ios-document'
      },
      {
        text: 'Templates',
        path: '/templates',
        icon: 'ion-ios-menu'
      },
      {
        text: 'Calendar',
        path: '/calendar',
        icon: 'ion-ios-calendar'
      },
      {
        text: 'Log Out',
        path: '/log-out',
        icon: 'ion-ios-power'
      },
     ]
      

  return (
    
    
    <Router> 

     <NavBar 
         navLinks ={ navLinks }
        //  logo={ logo } 
     />
     
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch> 

    </Router>

   
  );
}

export default App;
