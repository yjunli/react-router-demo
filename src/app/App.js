import React, {Component} from 'react';
import RouterComponent from './RouterComponent';
import '../sass/App.scss';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <div className = 'app'>
          <RouterComponent/>
          <Switch>
            <Route path="/StuHologram" component={Home}/>
            <Route path="/Warning" component={Home}/>
            <Route path="/povAlleviate" component={Home}/>
            <Route path="/ImportData" component={Home}/>
            <Route path="/MyAttention" component={Home}/>
            <Route path="/Setting" component={Home}/>
            <Route path="/Document" component={Home}/>
            <Route path="/Feedback" component={Home}/>
            <Redirect from="/" to="/StuHologram/Fail/tabOne"/>
          </Switch>
        </div>
      </Router>      
    )
  }
}
export default App;
