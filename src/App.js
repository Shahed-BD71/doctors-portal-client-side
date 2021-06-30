import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Home from './components/Home/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import { createContext } from "react";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import AddDoctor from './components/AddDoctor/AddDoctor';
import Doctor from './components/Home/Doctor/Doctor'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h6>email: {loggedInUser.email}</h6>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/doctors">
            <Doctor></Doctor>
          </Route>
          <PrivateRoute path="/allpatients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
