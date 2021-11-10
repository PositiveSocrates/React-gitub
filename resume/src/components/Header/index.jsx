import React, { Component } from "react";

import { withRouter, Link } from 'react-router-dom';


class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hide: {

      }
    }
  }
  render() {
    return (
      <div className="header">
        <div>
          <Link className="link" to="/home">首页</Link>
          <Link className="link" to="/resume">简历</Link>
          <Link className="link" to="/firm">公司</Link>
          <Link className="link" to="/login">登录</Link>
        </div>
        {/* <div>
          <div className="name">王成伟</div>
          <ul>
            <li>投递的职位</li>
            <li>收藏的职位</li>
            <li>修改密码</li>
            <li>退出</li>
          </ul>
        </div> */}
      </div>
    )
  }
}
export default View;