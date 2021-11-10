import React, { Component } from "react";
import { withRouter, NavLink, Switch, Redirect, Route } from "react-router-dom";

import Header from './components/Header'
import Home from './views/Home'
import Resume from './views/Resume'
import Firm from './views/Firm'
import Login from './views/Login'

class View extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:posts" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/firm" component={Firm} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }

}

export default withRouter(View);
