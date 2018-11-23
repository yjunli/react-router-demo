import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import TopBar from './TopBar';

const showList = [{'Fail': '挂科预警'}, {'Employment': '就业预警'}, {'Contact': '失联预警'}, {'Behavior': '行为预警'}];

class HomeRouter extends Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    renderList() {
        return showList.map((item) => {
            let key = Object.keys(item)[0];
            return (
                <NavLink key = {key}
                 className = 'showList' 
                 to = {`/StuHologram/${key}`}
                 activeClassName = 'selected'>
                    <span>{item[key]}</span>
                    <div></div>
                </NavLink>
            )
        })
    }

    render() {
        let renderList = this.renderList();
        return (
            <div className = 'app-title'>
                <TopBar/>
                <ul>
                    {renderList}
                </ul>
            </div>
        );
    }
}

export default HomeRouter;
