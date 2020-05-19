import React, { Component } from 'react'
import './NavLi.css';


class NavLi extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists : [
        { name: '소개'},
        { name: '도움말'},
        { name: '홍보 센터'},
        { name: 'API'},
        { name: '채용 정보'},
        { name: '개인정보처리방침'},
        { name: '약관'},
        { name: '위치'},
        { name: '인기 계정'},
        { name: '해시태그'},
        { name: '언어'},
      ]
    }
  }
  render(){
    return (
      <>
        {this.state.lists.map((li, i) => {
          return (<lists className="info-li" key={i}>{li.name}</lists> );
        })}
      </>
    )
  }
}

export default NavLi;