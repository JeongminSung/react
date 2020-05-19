import React, { Component } from 'react';
import './Feed.scss'
import profile1 from '../../../../images/profile/profile1.jpg'
import feedimg from '../../../../images/feedpic/pic1.jpg'
import FeedComment from './FeedComment/FeedComment';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      //input에 들어온 value값
      inputArr: [],
      // input에 들어간 value값을 담을 배열, 여기의 index를 가지고 배열에 있는 value를 붙여준다.
    }
  }

  // input의 value값을 받아오는 함수(리스너)
  onChangeInput = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.addComment();
  }

  // 버튼을 클릭했을 때 실행되는 함수
  addComment = () => {
    const { input, inputArr } = this.state

    if (input) {
      const test = inputArr.concat(input);
      //input에서 들어온 value를 빈배열에 push해준다.
      /** push와 concat의 차이?
       * 정리 : push -> 원본을 바꿈
       *       concat -> 원본을 바꾸지 않음. 원본을 토대로 변경한 새로운 배열이 리턴
       * @@ state에대가 값을 추가할 때 push처럼 원본 데이터를 바꾸지 말고
       * @@ concat으로 새로운 데이터를 추가하자(성능 개선에 좋음)
       */
      this.setState({
        inputArr: test,
        input: '',
        /*다시한 번 재할당 해주는 이유?
        1. setState를 하기 전까지 랜더는 그대로 멈춰져있다.
        2. setState를 해서 값이 바뀌면 새로 랜더가 되는데, 이 때문에 state값을 새로 업데이트 해준다.
        */
      }, () => {
        console.log(this.state)
      });
      console.log('inputArr: ',inputArr)
      console.log('input: ',input)
    } else {
      alert('댓글을 입력해주세요');
    }
    // 이 값을 state값을 가지고map을 돌려 랜더 함수 안에서 돌려준다.
  };


  render() {
    //console.log(this.state.input)
    return (
      <article className="feed-container">
        <header className="feed-header">
          <div className="feed-profile-box">
            <div className="feed-profile-border">
              <img src={profile1} className="feed-profile-img" alt="" />
            </div>
            <div className="feed-id-box">
              <a href="">parishilton</a>
              <p>Beverly Hills, California</p>
            </div>
          </div>
          <div className="feed-btn-box">
            <button type="button">
              <span className="material-icons">more_horiz</span>
            </button>
          </div>
        </header>
        <div className="feed-pic-box">
          <img src={feedimg} alt="" />
        </div>
        <div className="feed-comment-container">
          <section className="comment-icon-box">
            <div className="icon-box-left">
              <button>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="" />
              </button>
              <button>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="" />
              </button>
              <button>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt="" />
              </button>
            </div>
            <div className="icon-box-right">
              <button>
                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="" />
              </button>
            </div>
          </section>
          <section className="like-container">
            <span className="like-text">좋아요&nbsp;</span>
            <span className="like-text-num">20,362</span>
            <span className="like-text">개</span>
          </section>
          <div id="comment-box" className="comment-box">

            <div className="comment-people">
              <a href="" id="id">hello_sjm</a>
              <span id="content">Welcome Adventures! hello</span>
            </div>

            <div className="comment-all">댓글 514개 모두 보기</div>
            {
              this.state.inputArr.map((i, index) =>
              <FeedComment key={index} text={i} />
              )
            }
          </div>
          <section className="comment-add-box">
            <form className="comment-add-form"
              onSubmit={this.handleSubmit}
            >
              <input
                onChange={this.onChangeInput} 
                className="comment"
                placeholder="댓글 달기..."
                value={this.state.input}
              />
              <button
                onClick={this.addComment}
                type="button"
                className={this.state.input ? 'btnChange' :'btnDefault'}
              >
                게시
              </button>
            </form>
          </section>
        </div>
      </article>
    )
  }
}
export default Feed