import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/App.scss';

const showList = [
            {'功能': [{'StuHologram': '学生全息图'}, {'Warning': '及时预警'}, {'PovAlleviate': '精准扶贫'}]},
            {'数据': [{'ImportData': '导入数据'}]},
            {'个人': [{'MyAttention': '我的关注'}, {'Setting': '通用设置'}]},
            {'帮助': [{'Document': '帮助文档'}, {'Feedback': '意见反馈'}]}
        ];
const TITLE = '学生面面观';

class RouterComponent extends Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
        this.keyList = this.keyList.bind(this);
    }

    keyList(arr) {
        return(
            <ul>
                {arr.map((item) => {
                    let key = Object.keys(item)[0];
                    return (
                        <NavLink
                         key = {key} 
                         to = {`/${key}`}
                         className = 'keyList'
                         activeClassName = 'selcted'>
                            <li >
                                <img src = {require(`../img/svg/${key}.svg`)} width = '20px' height = '20px'/>
                                &nbsp;&nbsp;&nbsp;
                                {item[key]}
                            </li>
                        </NavLink>
                    )
                })}
            </ul>
        )
    }

    renderList() {
        return showList.map((item) => {
            let key = Object.keys(item)[0];
            return (
                <li key = {key}>
                    <div className = 'keyTitle'>
                        {key}
                        &nbsp;
                        <img src = {require('../img/svg/Down.svg')} width = '10px' height = '6px'/>
                    </div>
                    {this.keyList(item[key])}
                </li>
            )
        })
    }

    render() {
        let renderList = this.renderList();
        return (
            <div className = 'app-router'>
                <div className = 'app-title'>
                    <img src = {require('../img/svg/BachelorJHat.svg')} width = '38px' height = '51px'/>
                    <div>{TITLE}</div>
                </div>
                <nav>
                    <ul>
                        {renderList}
                    </ul>                    
                </nav>

            </div>
        );
    }
}

export default RouterComponent;