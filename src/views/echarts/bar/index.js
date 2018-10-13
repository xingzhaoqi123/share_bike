import React,{Component} from 'react'
import {Card} from 'antd'
import echarts from 'echarts/lib/echarts'
import echartsTheme from '../macarons'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/markPoint';
import ReactEcharts from 'echarts-for-react'
class bar extends Component {
    componentWillMount() {
        echarts.registerTheme('xzq', echartsTheme)
        this.renderBar1()
        this.renderBar2()
    }

    renderBar1 = () => {
        this.options1 = {
            title: {
                text: 'OFO周订单'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {         
                    type : 'shadow'   
                }
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'ofo订单量',
                    type:'bar',
                    data:[500, 1000, 1600, 3000, 2800, 2600, 2870]
                }
            ]
        }
    }
    renderBar2=()=>{
        this.options2={
            title: {
                text: '共享单车数据'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {         
                    type : 'shadow'   
                }
            },
            legend: {
                data: ['OFO','摩拜', '小蓝单车']
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'ofo订单量',
                    type:'bar',
                    data:[500, 1000, 1600, 3000, 2800, 2600, 2870]
                },
                {
                    name:'哈啰单车订单量',
                    type:'bar',
                    data:[1500, 1200, 1500, 3600, 2400, 2500, 5870]
                },
                {
                    name:'小红单车订单量',
                    type:'bar',
                    data:[1600, 1800, 1600, 3500, 4800, 4600, 6870]
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <Card title="柱形图表一">
                    <ReactEcharts option={this.options1} theme='xzq'></ReactEcharts>
                </Card>
                <Card title='柱形图表二' style={{borderTop:'none'}}>
                    <ReactEcharts option={this.options2} theme='xzq'></ReactEcharts>
                </Card>
            </div>
        )
    }
}
export default bar;
