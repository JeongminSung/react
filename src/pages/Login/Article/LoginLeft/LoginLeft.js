import React, { Component } from 'react'
import img1 from '../../../../images/iphone/slide1.jpg'
import img2 from '../../../../images/iphone/slide2.jpg'
import img3 from '../../../../images/iphone/slide3.jpg'
import img4 from '../../../../images/iphone/slide4.jpg'
import img5 from '../../../../images/iphone/slide5.jpg'
import './LoginLeft.scss'

class LoginLeft extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="LoginLeft">
        <img className="slide-img" src={img1} alt="" />
        <img className="slide-img" src={img2} alt="" />
        <img className="slide-img" src={img3} alt="" />
        <img className="slide-img" src={img4} alt="" />
        <img className="slide-img" src={img5} alt="" />
      </div>
    )
  }
}
export default LoginLeft