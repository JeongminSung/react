import React, { Component } from 'react';
import './LoginRight.scss';
import osBtn from '../../../../images/iphone/app_button.png';
import googleBtn from '../../../../images/iphone/google_button.png';
import facebook from '../../../../images/facebook_icon.png';
import logo from '../../../../images/logo_text.png';
import {withRouter} from 'react-router-dom';


class LoginRight extends Component {
  constructor() {
    super();
    this.state = {
      id : '',
      pwd : '',
      btnColor : false
    }
  }

  goToMain = () => {
    console.log(this.state.id);
    console.log(this.state.pwd);
    if (this.state.id.includes('@') && this.state.pwd.length >= 5){
      this.props.history.push('/main');
      //메인으로 넘어감
    }else{
      alert('아이디와 비밀번호를 확인해주세요');
    }
  }

  onChangeInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
      //input에 해당 함수를 둘 다 넣고 이벤트를 받아서
      //해당 타겟의 name에 타겟에서 들어온 벨류값을 모두 넣어줌. 
    })
  }

  btnChange = () => {
    const { id, pwd } = this.state;
    //es6 비구조화 할당으로 변수이름을 지정해줌.
    if (id.includes('@') && pwd.length >= 5) {
      this.setState({ btnColor: true });
    } else {
      this.setState({ btnColor: false });
    }
  }

  render() {
    // console.log(this.state.pwd)
    // console.log(this.state.id)
    // console.log(this.state.btnColor)
    return (
      <div className="LoginRight">
        <div className="login-setup">
          <img className="login-logo" src={logo} alt="" />
          <div className="login-container">
            <form className="login-form">
              {/* 컴포넌트화 */}
              <input onChange={this.onChangeInput} onKeyUp={this.btnChange}
                className="login-input" 
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={this.state.id} 
                name ="id"/>
              <input onChange={this.onChangeInput} onKeyUp={this.btnChange}
                className="login-input" 
                type="password"
                placeholder="비밀번호" 
                value={this.state.pwd}
                name="pwd"/>
              <button onClick={this.goToMain}
                className={this.state.btnColor ? 'btnDefault' : 'btnChange'} 
                type="button">로그인</button>
              <div className="login-divide-box">
                <div className="line left"></div>
                <div className="and">또는</div>
                <div className="line right"></div>
              </div>
              <div className="facebook-login-box">
                <button className="facebook-login-btn">
                  <img src={facebook} alt="" />
                  <span className="facebook-login">Facebook으로 로그인</span>
                </button>
              </div>
              <a href="https://www.instagram.com/accounts/password/reset/"
                className="login-forget">비밀번호를 잊으셨나요?</a>
            </form>
          </div>
        </div>

        <div className="login-setup login-register-box">
          <span>계정이 없으신가요? </span>
          <a href="https://www.instagram.com/accounts/emailsignup/">가입하기</a>
        </div>

        <div className="login-setup login-store">
          <p>앱을 다운로드하세요.</p>
          <div className="store-btn-box">
            <a href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
              className="appstore">
              <img className="store-btn" src={osBtn} alt="" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=ko">
              <img className="store-btn" src={googleBtn} alt="" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(LoginRight);