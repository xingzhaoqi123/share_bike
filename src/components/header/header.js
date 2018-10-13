import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.less";
import utils from "../../utils";
import axios from "../../utils/fetch";
const formDate = utils.formatDate;
class header extends Component {
    state = {
        date: "",
        weather: ""
        // cip: "",
        // city: ""
    };
    getWeather() {
        axios
            .get("http://t.weather.sojson.com/api/weather/city/101010100")
            .then(res => {
                let weinfo = res.data.forecast[0];
                let we = `${weinfo.low}~${weinfo.high},${weinfo.fx}${
                    weinfo.fl
                }`;
                this.setState({
                    weather: we
                });
            });
    }
    // getCity() {
    //     axios
    //         .get("http://pv.sohu.com/cityjson")
    //         .then(res => {
    //             let cityinfo = res.split("=")[1];
    //             var json = new Function("return " + cityinfo)();
    //             // console.log(json.cip);
    //             this.setState({
    //                 cip: json.cip
    //             });
    //             this.getinfo();
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }
    // getinfo() {
    //     axios
    //         .get(
    //             `http://ip.taobao.com/service/getIpInfo.php?ip=${
    //                 this.state.cip
    //             }`
    //         )
    //         .then(res => {
    //             this.setState({
    //                 city: res.data.city
    //             });
    //             this.getWeather();
    //         });
    // }
    // getWeather() {
    //     axios
    //         .get(
    //             `http://wthrcdn.etouch.cn/weather_mini?city=${this.state.city}`
    //         )
    //         .then(res => {
    //             let weinfo = res.data.forecast[0];
    //             var r = /^.+?\[(.+?)\].+?\[(.+?)\].*$/;
    //             var fl= r.exec(weinfo.fengli);
    //             let we = `${weinfo.low}~${weinfo.high},${weinfo.fengxiang}${fl}`;
    //             this.setState({
    //                 weather: we
    //             });
    //         });
    // }
    gettime() {
        setInterval(() => {
            let unixTime = new Date().getTime();
            let timeStr = formDate(unixTime);
            this.setState({
                date: timeStr
            });
        }, 1000);
    }
    componentWillMount() {
        this.gettime();
        // this.getCity();
        this.getWeather();
    }
    render() {
        return (
            <div className="header-wrap">
                <div className="head_title fll">共享单车</div>
                <div className="user-info">
                    <div className="header-info">
                        <div className="flr header-logout">
                            <Link to="/logout">退出</Link>
                        </div>
                        <div className="flr header-user">
                            <span>欢迎，</span>
                            <span className="header-username">奥德赛</span>
                        </div>
                    </div>
                </div>
                <div className="weather-wrap">
                    <div className="breadcrumb fll">
                        <Link to="/admin/home">首页</Link>
                    </div>
                    <div className="weather-info flr clearfix">
                        <div className="weather flr">{this.state.weather}</div>
                        <div className="date flr">{this.state.date}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default header;
