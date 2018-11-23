import React, { Component } from 'react';
import TopBar from './TopBar';

class Fail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className = 'app-tab'>
                <TopBar/>
            </div>
        );
    }
}

export default Fail;