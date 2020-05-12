import React, { Component } from 'react';
import './Left.css'
import profile1 from '../../img/profile/profile1.jpg'
import feedimg from '../../img/feedpic/pic1.jpg'

class Left extends Component {

  render() {
    return (
      <section className="left-box">
        <div className="story-container">
          <div className="story-box">
            <ul className="story-ul">
              <li className="story-content">
                <div className="story-profile-inner">
                  <div className="story-profile-border">
                    <img src={profile1} className="story-profile-img" />
                  </div>
                  <p>parishilton</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="feed-box">
          <article className="feed-squ">
            <header className="feed-header">
              <div className="feed-profile-box">
                <div className="feed-profile-border">
                  <img src={profile1} className="feed-profile-img" />
                </div>
                <div className="feed-id-box">
                  <a className="feed-id" href="">parishilton</a>
                  <p className="feed-loc">Beverly Hills, California</p>
                </div>
              </div>
              <div className="feed-btn-box">
                <button type="button">
                  <span className="material-icons">more_horiz</span>
                </button>
              </div>
            </header>

            <div className="feed-pic-box">
              <img className="feed-pic" src={feedimg} alt="" />
            </div>

            <div className="feed-comment-container">
              <section className="comment-icon">
                <div className="icon-box-left">
                  <button className="icon-button">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="" className="icon-img" />
                  </button>
                  <button className="icon-button">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="" className="icon-img" />
                  </button>
                  <button className="icon-button">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt="" className="icon-img" />
                  </button>
                </div>
                <div className="icon-box-right">
                  <button className="icon-button">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="" className="icon-img" />
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
                  <a href="" id="id" className="comment-id">hello_sjm</a>
                  <span id="content" className="comment-content">Welcome Adventures! hello</span>
                </div>
                <div className="comment-all">
                  댓글 514개 모두 보기
                    </div>
                <div className="comment-people">
                  <a href="" className="comment-id">day19324</a>
                  <span className="comment-content">Thankyou</span>
                </div>
                  </div>
              <section className="comment-add-box">
                <form className="comment-add-form">
                  <textarea id="comment" placeholder="댓글 달기..."></textarea>
                  <button id="btn" type="button" className="comment-btn">게시</button>
                </form>
              </section>
            </div>
          </article>
        </div>
      </section>
    )
  }
}

export default Left;