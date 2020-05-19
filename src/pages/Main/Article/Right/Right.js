import React, { Component } from 'react';
import './Right.scss';
import profile1 from '../../../../images/profile/profile2.jpg';
import profile2 from '../../../../images/profile/profile4.jpg';
import profile3 from '../../../../images/profile/profile5.jpg';
import NavLi from '../../Article/NavLi/NavLi'
//import NavLi2 from '../../Article/NavLi/NavLi2'
// import list from "./list.js"
// const list = [
//   { name: '소개' },
//   { name: '도움말' },
//   { name: '홍보 센터' },
//   { name: 'API' },
//   { name: '채용 정보' },
//   { name: '개인정보처리방침' },
//   { name: '약관' },
//   { name: '위치' },
//   { name: '인기 계정' },
//   { name: '해시태그' },
//   { name: '언어' }
// ];


class Right extends Component {
  constructor() {
    super();
  };

  render() {
  //  console.log(list)
    return (
      <section className="Right">
        <div className="profile-container">
          <img src={profile3} alt="" />
          <div className="profile-box">
            <a className="id" href="">sojung_mon</a>
            <p className="name">성정민</p>
          </div>
        </div>
        <div className="recommend-container">
          <div className="recommend-box">
            <p>회원님을 위한 추천</p>
            <a href="">모두 보기</a>
          </div>
          <div className="recommend-people-box">
            <div className="people-box">
              <div className="people-profile">
                <img src={profile1} alt="" className="people-img" />
                <div>
                  <a href="" className="id">hellojeongmin</a>
                  <p className="name">회원님을 팔로우 합니다</p>
                </div>
              </div>
              <div className="followbtn-box">
                <button className="followbtn">팔로우</button>
              </div>
            </div>

            <div className="people-box">
              <div className="people-profile">
                <div className="feed-profile-border">
                  <img src={profile2} alt="" />
                </div>
                <div>
                  <a href="" className="id">hellojeongmin</a>
                  <p className="name">인기</p>
                </div>
              </div>
              <div className="followbtn-box">
                <button className="followbtn">팔로우</button>
              </div>
            </div>
          </div>
        </div>

        <nav className="info-nav-container">
          <ul className="info-ul">
            {/* <NavLi2 /> */}
            <NavLi className="info-li"/>
          </ul>
          <span className="info-li">© 2020 INSTAGRAM FROM FACEBOOK</span>
        </nav>

      </section>
    )
  }
}
export default Right;