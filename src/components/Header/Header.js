import React, { Component } from 'react';
import './Header.scss';
import logo from '../../images/logo_text.png';
import profile from '../../images/profile/profile7.jpg';

class Header extends Component {
  constructor() {
    super();
  }
  //app.js가 최상위니까 랜더에서 jsx로 리턴할때 최고 부모가 되는 section을 감싸야함
  render() {
    return (
      <nav className="Header">
        <div className="nav-container">
          <div className="logo-box">
            <a href="index.html">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="search-container">
            <input type="text" />
            <div className="search-icon-box">
              <span className="material-icons search-icon">search</span>
              <span>검색</span>
            </div>
          </div>
          <div className="icon-container">
            <div className="icon-box">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="" className="icon" />
            </div>
            <div className="icon-box">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="" className="icon" />
            </div>
            <div className="icon-box">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="" className="icon" />
            </div>
            <img src={profile} alt="" className="icon" />
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;