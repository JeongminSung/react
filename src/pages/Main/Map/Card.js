import React, { Component } from 'react';

class Card extends Component {
  render() {
    console.log("Card", this.props)
    return (
      <>
        <div>name : {this.props.name}</div>
        <div>phone : {this.props.phone}</div>
      </>
    )
  }
}
export default Card;