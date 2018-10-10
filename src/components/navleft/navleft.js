import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import './navleft.less'
const MenuItem = Menu.Item;
class navleft extends Component {
    render() {
        return (
            <div className="navbar">
                <Menu mode="vertical" theme="dark" >
                    <MenuItem key="/home">
                        <Link to="/admin/home">首页</Link>
                    </MenuItem>
                    <MenuItem key="/404">
                        <Link to="/admin/secondPage">第二页</Link>
                    </MenuItem> 
                </Menu>
            </div>
        );
    }
}

export default navleft;
