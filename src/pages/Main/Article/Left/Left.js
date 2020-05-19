import React, { Component } from 'react';
import './Left.scss'
import profile1 from '../../../../images/profile/profile1.jpg'
import Feed from '../Feed/Feed'

class Left extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <section className="Left">
        <div className="story-container">
          <div className="story-box">
            <ul className="story-ul">
              <li className="story-content">
                <div className="story-profile-border">
                  <img src={profile1} className="story-profile-img" alt="" />
                </div>
                <p>parishilton</p>
              </li>
            </ul>
          </div>
        </div>
        <Feed/>
        <Feed/>
      </section>
    )
  }
}

export default Left;