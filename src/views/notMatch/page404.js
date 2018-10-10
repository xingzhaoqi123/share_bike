import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./page404.less";
class page404 extends Component {
    render() {
        return (
            <div className="main">
                <div className="paget404_content">
                    <div className="main-text">
                        <h3>
                            天啊。
                            那页失踪了。
                        </h3>
                        <div className="main-text-a">
                            <Link to="/admin/home">返回首页</Link>
                        </div>
                    </div>
                    <div className="ground">
                        <div className="mound">
                            <div className="mound_text">404 </div>
                            <div className="mound_spade" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default page404;
