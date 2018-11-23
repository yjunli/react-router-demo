import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function RenderRouter(WrappedComponent) {
    return class HOC extends Component {
        constructor(props) {
            super(props);
            this.state = {
                selected: this.props.selected
            }
            this.renderList = this.renderList.bind(this);
            this.handleClick = this.handleClick.bind(this);
        }
    
        handleClick(key) {
            this.setState({
                selected: key
            })
        }

        renderList() {
            let {selected} = this.state;
            return showList.map((item) => {
                let key = Object.keys(item)[0];
                let className = selected === key ? 'showList selected' : 'showList';
                return (
                    <li key = {key} className = {className} onClick = {this.handleClick.bind(this, key)}>
                        <Link to = {`/StuHologram/${key}`}>{item[key]}</Link>
                        <div></div>
                    </li>
                )
            })
        }
        render() {
            let renderList = this.renderList();
            return (
                <div>
                    <ul>
                        {renderList}
                    </ul>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

export default RenderRouter;
