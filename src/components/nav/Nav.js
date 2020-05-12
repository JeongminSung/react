import React, { Component } from 'react';
import './Nav.css'
import logo from '../../img/logo_text.png'

class Nav extends Component {
  constructor() {
    super();
  }
//app.js가 최상위니까 랜더에서 jsx로 리턴할때 최고 부모가 되는 section을 감싸야함
  render() {
    return (
      <nav className="nav">
        <div className="nav-container">
          <div className="logo-box">
            <a href="index.html">
              <img src={logo} alt="" className="logo-img" />
            </a>
          </div>
          <div className="search-container">
            <input type="text" className="search" />
            <div className="search-icon-container">
              <span className="material-icons search-icon">search</span>
              <span className="search-text">검색</span>
            </div>
          </div>

          <div className="icon-container">
            <div className="icon-box">
              <a href="">
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt="" className="icon" />
              </a>
            </div>
            <div className="icon-box">
              <a href="">
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="" className="icon" />
              </a>
            </div>
            <div className="icon-box">
              <a href="">
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt="" className="icon" />
              </a>
            </div>
            <div className="nav-profile">
              <a href="">
                <img src="" alt="" className="" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;