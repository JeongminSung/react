import React from 'react';
//모든 컴포넌트마다 위 임포트는 반드시 써줘야 한다.
import ReactDOM from 'react-dom';
//index.js에만 있으면 된다. DOM을 건들이는걸 대신 해줌.
import App from './App';
import './Reset.css';
//컴포넌트 중에 가장 부모가 되는 컴포넌트
//'./App' 상대경로 쓰는 법 : . = 내 위치 /파일이름 
//.js를 생략해도 된다 왜냐? 당연히 JavaScript니까 ㅋㅋ


ReactDOM.render(
  <App />,
  /*
  컴포넌트 네이밍의 룰
  1. 반드시 대문자로 시작
  2. < /> 형태
  3. 가장 부모가되는 컴포넌트를 사용
  */
  document.getElementById('root')
  //자바스크립트 안에 넣어줌
);