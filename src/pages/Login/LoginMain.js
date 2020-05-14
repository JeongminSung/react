import React, {Component} from 'react';
import LoginLeft from './Article/LoginLeft/LoginLeft';
import LoginRight from './Article/LoginRight/LoginRight';
import './LoginMain.scss';

class LoginMain extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <main className="LoginMain">
        <LoginLeft/>
        <LoginRight/>
      </main>
    )
  };
};
export default LoginMain;