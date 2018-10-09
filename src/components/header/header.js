import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.less";
class header extends Component {
    render() {
        return (
            <div className="header-wrap">
                <div className="user-info">
                <div className='header-info'>
                    <div className="flr header-logout">
                        <Link to="/logout">退出</Link>
                    </div>
                    <div className="flr header-user">
                        <span>欢迎，</span>
                        <span className="header-username">奥德赛</span>
                    </div>
                    </div>
                </div>
                <div className='header-other'>
                
                </div>
            </div>
        );
    }
}

export default header;
