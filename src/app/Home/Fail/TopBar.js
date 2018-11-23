import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import TabOne from './TabOne';

const LISTNAME = [{'tabOne': '标签一'}, {'tabTwo': '标签二'}, {'tabThree': '标签三'}];

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.renderTitle = this.renderTitle.bind(this);
    }
    
    renderTitle() {
        return(
            LISTNAME.map((item) => {
                let key = Object.keys(item)[0];
                return(
                        <NavLink key = {key}
                         to = {`/StuHologram/Fail/${key}`} 
                         className = 'keyList'
                         activeClassName = 'selected'>
                            {item[key]}
                            <img src = {require('../../../img/svg/delete.svg')} width = '14px' height = '14px'/>
                        </NavLink>
                )
            })
        )
    }

    render() {
        let renderTitle = this.renderTitle();
        return (
            <div>
                <ul>
                    {renderTitle}
                </ul>
                <div className = 'export-logo'>
                    <img src = {require('../../../img/svg/export.svg')} with = '14px' height = '14px'/>
                    <span>导出</span>
                </div>
                <Switch>
                    <Route path="/StuHologram/Fail/tabOne" component={TabOne}/>
                    <Route path="/StuHologram/Fail/tabTwo" component={TabOne}/>
                    <Route path="/StuHologram/Fail/tabThree" component={TabOne}/>
                    <Redirect from="/StuHologram/Fail" to="/StuHologram/Fail/tabOne"/>
                </Switch>
            </div>

        );
    }
}

export default TopBar;