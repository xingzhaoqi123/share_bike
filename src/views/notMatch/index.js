import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./notMatch.less";
class notMatch extends Component {
    render() {
        return (
            <div className="mother">
                <div className="errorBox">
                    <div className="errorText">
                        <h1>Sorry..页面没有找到！</h1>
                        <p>
                            似乎你所寻找的网页已移动或丢失了。
                            <br />
                            或者也许你只是键入错误了一些东西。
                            <br />
                            请不要担心，这没事。如果该资源对你很重要，请与管理员联系。
                        </p>

                        <p>火星不太安全，我可以免费送你回地球</p>
                    </div>
                    <Link to="./admin/home">
                        <div className="link home" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default notMatch;
