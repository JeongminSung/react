import React from 'react';
//모든 컴포넌트마다 위 임포트는 반드시 써줘야 한다.
import ReactDOM from 'react-dom';
//index.js에만 있으면 된다. DOM을 건들이는걸 대신 해줌.
import Routes from './Routes';
import './styles/common.scss';
import './styles/reset.scss';
//최상위에 reset


ReactDOM.render(
<Routes />, document.getElementById('root')
);
