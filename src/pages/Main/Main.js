import React, {Component} from 'react';
import './Main.scss';
import Left from './Article/Left/Left';
import Right from './Article/Right/Right';
import Nav from './Article/Nav/Nav';

class Main extends Component{
  constructor(){
    super();
  }
  
  render(){
    return(
      <>
      <Nav />
      <main className="main" role="main">
        <div className="main-container">
          <Left/>
          <Right/>
        </div>
      </main>
      </>
    )
  }
}
export default Main;