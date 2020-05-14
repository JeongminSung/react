import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/LoginMain';

class Routes extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/main" component={Main}/>
        </Switch>
      </Router>
    )
  }
}
export default Routes;