import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./navleft.less";
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
class navleft extends Component {
    render() {
        return (
            <div className="navbar">
                <Menu mode="vertical" theme="dark">
                    <MenuItem key="/home">
                        <Link to="/admin/home">首页</Link>
                    </MenuItem>
                    <MenuItem key="/orderForm">
                        <Link to="/admin/orderForm">订单管理</Link>
                    </MenuItem>
                    <SubMenu title='图例'>
                        <MenuItem key='/bar'>
                            <Link to="/admin/echarts/bar">柱状图</Link>
                        </MenuItem>
                        <MenuItem key="/pie">
                        <Link to="/admin/echarts/pie">饼状图</Link>
                    </MenuItem>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default navleft;
