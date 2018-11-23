import React, { Component } from 'react';
import HomeRouter from './HomeRouter';
import { Switch, Route, Redirect } from 'react-router-dom';
import Fail from './Fail/Fail';

const About = () => (
    <div>
      <h2>About</h2>
    </div>
  )
class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // 路由必须包含根路径，RR4不会帮我们自动拼接location。
        return (
            <div className = 'app-container'>
                <HomeRouter/>
                <Switch>
                    <Route path="/StuHologram/Fail" component={Fail}/>
                    <Route path="/StuHologram/Employment" component={About}/>
                    <Route path="/StuHologram/Contact" component={About}/>
                    <Route path="/StuHologram/Behavior" component={About}/>
                    <Redirect from="/StuHologram" to="/StuHologram/Fail/tabOne"/>
                </Switch>
            </div>
        );
    }
}

export default Home;