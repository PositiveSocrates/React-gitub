import React, { Component } from "react";
class Com extends Component {
  render() {
    return (
      <div className="Search">
        {/* <!-- 搜索 --> */}
        <div className="search">
          {/* <!-- logo --> */}
          <div className="search-logo">
            <img
              src={require("../../images/search/search_10.png").default}
              alt=""
            />
          </div>
          {/* <!-- 我的订阅 --> */}
          <div className="search-subs">
            <img
              src={require("../../images/search/search_10.png").default}
              alt=""
            />
            <span>我的订阅</span>
          </div>
          {/* <!-- 搜索框 --> */}
          <div className="search-inp">
            {/* <!-- 搜索框input --> */}
            <div className="button">
              <input type="text" placeholder="找名师、查名校、搜科目" />
              <button></button>
              {/* <!-- 搜索下拉框 --> */}
              <div className="select">
                <span>微课</span>
                <img
                  src={require("../../images/search/search_10.png").default}
                  alt=""
                />
              </div>
            </div>
            {/* <!-- 词条 --> */}
            <div className="search-ul">
              <li>圆周运动</li>
              <li>导数及其应用</li>
              <li>英语定语从句</li>
              <li>化学反应率和化学平衡</li>
              <li>农业区域因</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Com;
