import React, { Component } from 'react';
import './FeedComment.scss'

class FeedComment extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    //map를 써서 계속 리턴
    //comment 배열을 담을 수 있는 빈배열
    //클릭을 할 때 마다 commentarray를 업데이트
    //render안에서는 commnet컴포넌트를 리텅하는 함수를 안에 만들어주는것.
    return (//그 안에 있는 JSX를 구현
      //state가 바뀔때는 render가 불림
     
        <div className="comment-people">
          <a href="" id="id">hellojeongmin</a>
          <span id="content">{this.props.text}</span>
        </div>
    )
  }
}
export default FeedComment