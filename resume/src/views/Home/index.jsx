import React, { Component } from 'react'

import { NavLink, Link, Route } from 'react-router-dom';

import Car from './Car'
import Insurance from './Insurance'
import Estate from './Estate'

class View extends Component {
  ifPage(params) {
    switch (params.posts) {
      case 'car':
        return <Car></Car>
      case 'insurance':
        return <Insurance></Insurance>
      case 'estate':
        return <Estate></Estate>
      default:
        return <div>无效地址</div>
    }
  }
  render() {
    let { match } = this.props;
    return (
      <div className="home">
        <div className="left">
          <div>
            <NavLink className="link" to="/home/car">汽车销售</NavLink>
            <NavLink className="link" to="/home/insurance">保险销售</NavLink>
            <NavLink className="link" to="/home/estate">房地产</NavLink>
          </div>
        </div>
        <div className="right">
          {this.ifPage(match.params)}
        </div>
      </div>
    )
  }
}
export default View;