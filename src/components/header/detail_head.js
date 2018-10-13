import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./detail_head.less";
class detail_head extends Component {
    render() {
        return (
            <div className="user-info">
                <div className="head_title fll">共享单车</div>
                <div className="header-info flr clearfix">
                    <div className="flr header-logout">
                        <Link to="/logout">退出</Link>
                    </div>
                    <div className="flr header-user">
                        <span>欢迎，</span>
                        <span className="header-username">奥德赛</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default detail_head;
