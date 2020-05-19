import React, { Component } from 'react';
import Card from './Card'

// const arr = [
//   {title : 'hello', number : 1},
//   {title : 'hey', number : 2},
//   {title : 'yo', number : 3},
// ];

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      users : [] //빈 배열로 초기화 해두고
    }
  }

  //데이터로딩을 하는 곳
  //컴포넌트가 마운팅을 끝나고 실행되는 함수
  componentDidMount(){
    /* data loading
    body태그 맨 아래에 자바스크립트 파일을 넣는것과 비슷하다.
    리액트도 똑같음. 컴포넌트가 다 마운트가 된 후 틀이 만들어 진 후에 데이터를 로딩해주는 것.
    */
    fetch('https://jsonplaceholder.typicode.com/users')//세미콜론 쓰지마!
      .then((res) => res.json()) 
      .then((res) => this.setState({users : res})); //통째로 넣거나 아래처럼 자르거나!
      //만약 data의 일부만 빼고 싶으면? this.setState({data :response[3].geo}) 식으로 접근
      //앞, 뒤 파일의 데이터 타입이 다르기 때문에 
      //response를 다시 기다리고 그 다음에 하고싶은거 호출(console.log 혹은 setState)
      //요청을 받는게 비동기이기 때문에 .then()안에 ~를 하겠다 라는 함수를 사용.
                //json 데이터를 자바스크립트에서 읽을 수 없기 때문에
                //.json()으로 형식을 자바스크립트화 해줘야 한다.
                //이또한 비동기 요청이기 때문에 여기에도 response를 받아줌
    //서버(api)호출 주소
    //도메인으로 덮인 api 혹은 api 주소를 인자로 
    //post, get 따라서 두번째 인자도 호출해줄 수 있음.
  }

  render() {
    console.log("state: ", this.state); //일단은 먼저 들어오는지 확인하고 먼저 에러 방지 해주자
    return (
      <div>
        {this.state.users.map((user,idx) =>{
          return <Card key={idx} name={user.name} phone={user.phone}/>
        })}
        {/* return <div>{user}</div> 
        이건 불가능하다. 왜냐하면 이건 객체를 그냥 넘겨버리는 것이다.
        이걸 가능하게 하려면 자식에게 객체를 넘겨 객체.props.name식으로 서야한다.
        index는 퍼포먼스가 떨어지기 때문에 최선은 data안에 무조건 유니크한. 이메일같은 넘버를
        넣어줘서 인덱스로 사용해도 된다.  
        */}
      </div>
    )
  }
}

