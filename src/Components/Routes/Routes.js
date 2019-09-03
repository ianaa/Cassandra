// import UserList from 'path/to/user/list';
// import AddUserForm from 'path/....';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home Page/Home";
import Courses from "../Courses/Courses";
import ExternalRecources from "../ExternalResources/ExternalResources";
import ExternalResourcePage from "../ExternalResources/ExternalResourcePage";
import About from "../About Page/About";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/about" component={About} />
      <Route path="/resources/:id" component={ExternalResourcePage} />
      <Route path="/resources" component={ExternalRecources} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
