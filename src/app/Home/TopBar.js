import React, { Component } from 'react';
const HOLDER = '请输入学生姓名';
const DATE = '本周';
const USERNAME = '辅导员'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.renderSearch = this.renderSearch.bind(this)
    }

    renderSearch() {
        return (
            <div className = 'top'>
                <div className = 'user'>
                    <img src = {require('../../img/svg/user.svg')} width = '19px' height = '23px'/>
                    <div>{USERNAME}</div>
                </div>
                <div className = 'button'>{DATE}</div>
                <div className = 'search'>
                    <input placeholder = {HOLDER} type = 'text'/>
                    <img src = {require('../../img/svg/search.svg')} width = '12px' height = '12px'/>
                </div>
            </div>
        )
    }

    render() {
        let renderSearch = this.renderSearch();
        return (
            <div className = 'topBar'>
                <img src = {require('../../img/svg/menu.svg')} width = '20px' height = '20px'/>
                {renderSearch}
            </div>
        );
    }
}

export default TopBar;