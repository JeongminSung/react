import React, { Component } from 'react';
//class형태로 사용할 때는 , {Component} 도 함께 임포트 해줘야 한다.
import Nav from "./components/nav/Nav"
import Main from "./components/main/Main"

class App extends Component {
  constructor(){
    super();
  }
  
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    )
    //1. return문은 ()소괄호 : 여러줄이 있는게 하나일 때 
    //2. () => return문을 원래 한줄로 인식하는데, ()를 쓰면 멀티라인으로 써도 인식한다.
    //3. 부모 <요소>가 반드시 하나 있어야 한다 꼭 div일 필요는 없다.
  }
}

export default App;
//이 자바스크립트 파일은 App파일을 기반으로 export한다.
//여기서 export해야 다른 파일에서 import로 가져올 수 있다. 