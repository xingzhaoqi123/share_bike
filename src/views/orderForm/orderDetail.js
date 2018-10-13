import React, { Component } from "react";
import Header from "../../components/header/detail_head";
import "./orderDetail.less";
import BMap from "BMap";
import { Card } from "antd";
import axios from "../../utils/fetch";
class orderDetail extends Component {
    state = {
        detail: {}
    };
    init() {
        this.map = new window.BMap.Map("container"); // 创建地图实例
        this.addControl();
    }

    getData() {
        let id = this.props.match.params.id;
        axios.get("/order/detail", { id: id }).then(res => {
            if (res.code === 0) {
                this.setState({
                    detail: res.result
                });
                this.drawPolyline(res.result.position_list);
                this.serviceArea(res.result.area);
            }
        });
    }
    serviceArea(area) {
        let styleOptions = {
            strokeColor: "#934541", //边线颜色。
            fillColor: "#E4D1CA", //填充颜色。当参数为空时，圆形将没有填充效果。
            strokeWeight: 3, //边线的宽度，以像素为单位。
            strokeOpacity: 0.8, //边线透明度，取值范围0 - 1。
            fillOpacity: 0.4, //填充的透明度，取值范围0 - 1。
            strokeStyle: "solid" //边线的样式，solid或dashed。
        };
        var map = this.map;
        var polygon = new BMap.Polygon(
            area.map(point => {
                return new BMap.Point(point.lon, point.lat);
            }),
            styleOptions
        );
        map.addOverlay(polygon);
    }
    drawPolyline(position_list) {
        var map = this.map;
        map.enableScrollWheelZoom(true);
        var startPoint = position_list[0];
        var startmappoint = new BMap.Point(startPoint.lon, startPoint.lat);
        var endPoint = position_list[position_list.length - 1];
        var endmappoint = new BMap.Point(endPoint.lon, endPoint.lat);
        var startIcon = new BMap.Icon(
            "./start_point.png",
            new BMap.Size(36, 42),
            { anchor: new BMap.Size(10, 25) }
        );
        var endIcon = new BMap.Icon("./end_point.png", new BMap.Size(36, 42), {
            anchor: new BMap.Size(10, 25)
        });
        var startMarker = new BMap.Marker(startmappoint, { icon: startIcon });
        var endMarker = new BMap.Marker(endmappoint, { icon: endIcon });
        var polyline = new BMap.Polyline(
            position_list.map(point => {
                return new BMap.Point(point.lon, point.lat);
            }),
            {
                strokeColor: "blue",
                strokeWeight: 6,
                strokeOpacity: 0.5
            }
        );
        map.addOverlay(startMarker);
        map.addOverlay(endMarker);
        map.addOverlay(polyline);
        map.centerAndZoom(startmappoint, 11);
    }
    addControl() {
        var map = this.map;
        // map.enableScrollWheelZoom(true);
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.addControl(
            new BMap.NavigationControl({
                type: window.BMAP_NAVIGATION_CONTROL_SMALL
            })
        ); //平移缩放空间
        map.addControl(new BMap.OverviewMapControl()); //缩略地图
        map.addControl(
            new BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_BOTTOM_RIGHT })
        ); //比例尺
        map.addControl(new BMap.MapTypeControl()); //地图类型
        map.setCurrentCity("北京"); //仅当设置城市信息时，MapTypeControl的切换功能才能可用
    }
    componentDidMount() {
        // this.init();
        // this.getData();
    }
    render() {
        return (
            <div>
                <Header />
                <Card>
                    <div className="map" id="container" />
                </Card>
            </div>
        );
    }
}

export default orderDetail;
