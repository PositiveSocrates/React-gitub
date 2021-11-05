import React, { Component } from "react";
import { withRouter, NavLink, Switch, Redirect, Route } from "react-router-dom";

import Person from './views/Person'
import Header from "./components/Header/index";
import Search from "./components/Search/index";
import Nav from "./components/Nav/index";
import Login from './views/Login'
import Home from "./views/Home/index";
import Reg from './views/Reg/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route exact path="/person" component={Person} />
          <Route exact path="/person/:uid" component={Person} />
          <Route path="/person/:uid/:type" component={Person} />

        </Switch>
      </div>
    );
  }

}

export default App;
