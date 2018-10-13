import React, { Component } from "react";
import { Card } from "antd";
import echarts from "echarts/lib/echarts";
import echartsTheme from "../macarons";
import "echarts/lib/chart/pie";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
import "echarts/lib/component/markPoint";
import ReactEcharts from "echarts-for-react";
class pie extends Component {
    componentWillMount() {
        echarts.registerTheme("xzq", echartsTheme);
        this.renderPie1();
    }
    renderPie1 = () => {
        this.options1 = {
            title: {
                text: "某站点用户访问来源",
                subtext: "纯属虚构",
                x: "center"
            },
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                left: "left",
                data: [
                    "直接访问",
                    "邮件营销",
                    "联盟广告",
                    "视频广告",
                    "搜索引擎"
                ]
            },
            series: [
                {
                    name: "访问来源",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "60%"],
                    data: [
                        { value: 335, name: "直接访问" },
                        { value: 310, name: "邮件营销" },
                        { value: 234, name: "联盟广告" },
                        { value: 135, name: "视频广告" },
                        { value: 1548, name: "搜索引擎" }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                }
            ]
        };
        this.options2 = {
            backgroundColor: "#2c343c",

            title: {
                text: "Customized Pie",
                left: "center",
                top: 20,
                textStyle: {
                    color: "#ccc"
                }
            },

            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: "访问来源",
                    type: "pie",
                    radius: "55%",
                    center: ["50%", "50%"],
                    data: [
                        { value: 335, name: "直接访问" },
                        { value: 310, name: "邮件营销" },
                        { value: 274, name: "联盟广告" },
                        { value: 235, name: "视频广告" },
                        { value: 400, name: "搜索引擎" }
                    ].sort(function(a, b) {
                        return a.value - b.value;
                    }),
                    roseType: "radius",
                    label: {
                        normal: {
                            textStyle: {
                                color: "rgba(255, 255, 255, 0.3)"
                            }
                        }
                    },
                    //标签的视觉引导线样式
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: "rgba(255, 255, 255, 0.3)"
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#c23531",
                            shadowBlur: 200,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    },

                    animationType: "scale",
                    animationEasing: "elasticOut",
                    //初始动画的延迟 支持回调函数
                    animationDelay: function(idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
        this.option3 = {
            tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: "vertical",
                x: "left",
                data: [
                    "直接访问",
                    "邮件营销",
                    "联盟广告",
                    "视频广告",
                    "搜索引擎"
                ]
            },
            series: [
                {
                    name: "访问来源",
                    type: "pie",
                    radius: ["50%", "70%"],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: "center"
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: "30",
                                fontWeight: "bold"
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: "直接访问" },
                        { value: 310, name: "邮件营销" },
                        { value: 234, name: "联盟广告" },
                        { value: 135, name: "视频广告" },
                        { value: 1548, name: "搜索引擎" }
                    ]
                }
            ]
        };
    };

    render() {
        return (
            <div>
                <Card title="饼图一">
                    <ReactEcharts option={this.options1} theme="xzq" />
                </Card>
                <Card title="饼图二" style={{ borderTop: "none" }}>
                    <ReactEcharts option={this.options2} theme="xzq" />
                </Card>
                <Card title="饼图三" style={{ borderTop: "none" }}>
                    <ReactEcharts option={this.option3} theme="xzq" />
                </Card>
            </div>
        );
    }
}

export default pie;
