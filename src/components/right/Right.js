import React, { Component } from 'react'
import './Right.css'
import profile1 from '../../img/profile/profile2.jpg'
import profile2 from '../../img/profile/profile4.jpg'
import profile3 from '../../img/profile/profile5.jpg'

class Right extends Component{

  render() {
    return (
      <section className="right-box">
        <div className="my-profile">
          <img src={profile3} alt="" className="profile-img" />
          <div className="profile-box">
            <a href="" className="profile-id">sojung_mon</a>
            <p className="profile-name">성정민</p>
          </div>
        </div>
        <div className="recommend-container">
          <div className="recommend-box">
            <p className="recommend-text">회원님을 위한 추천</p>
            <a href="" className="recommend-seemore">모두 보기</a>
          </div>
          <div className="recommend-people-box">
            <div className="people-box">
              <div className="people-profile">
                <img src={profile1} alt="" className="people-img" />
                <div>
                  <a href="" className="profile-id">hellojeongmin</a>
                  <p className="profile-name">회원님을 팔로우 합니다</p>
                </div>
              </div>
              <div className="followbtn-box">
                <button className="followbtn">팔로우</button>
              </div>
            </div>
            
            <div className="people-box">
              <div className="people-profile">
                <div className="feed-profile-border">
                  <img src={profile2} alt="" className="feed-profile-img" />
                </div>
                <div>
                  <a href="" className="profile-id">hellojeongmin</a>
                  <p className="profile-name">인기</p>
                </div>
              </div>
              <div className="followbtn-box">
                <button className="followbtn">팔로우</button>
              </div>
            </div>
          </div>
        </div>
        <div className="info-nav-container">
          <nav className="info-nav">
            <ul className="info-ul">
              <li className="info-li">
                <a href="">소개</a>
              </li>
              <li className="info-li">
                <a href="">도움말</a>
              </li>
              <li className="info-li">
                <a href="">홍보 센터</a>
              </li>
              <li className="info-li">
                <a href="">API</a>
              </li>
              <li className="info-li">
                <a href="">채용 정보</a>
              </li>
              <li className="info-li">
                <a href="">개인정보처리방침</a>
              </li>
              <li className="info-li">
                <a href="">약관</a>
              </li>
              <li className="info-li">
                <a href="">위치</a>
              </li>
              <li className="info-li">
                <a href="">인기 계정</a>
              </li>
              <li className="info-li">
                <a href="">해시태그</a>
              </li>
              <li className="info-li">
                <a href="">언어</a>
              </li>
            </ul>
          </nav>
          <span className="copyright">© 2020 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </section>
    )
  }
}
export default Right;