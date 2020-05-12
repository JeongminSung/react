import React, {Component} from 'react'
import './Main.css'
import Left from '../left/Left'
import Right from '../right/Right'

class Main extends Component{
  render(){
    return(
      <main className="main" role="main">
        <div className="main-container">
          <Left/>
          <Right/>
        </div>
      </main>
    )
  }
}
export default Main;