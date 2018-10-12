import React, { Component } from "react";
import {
    Select,
    Card,
    Form,
    DatePicker,
    Button,
    Table,
    message,
    Modal
} from "antd";
import "./index.less";
import axios from "../../utils/fetch";
const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;

class FilterForm extends Component {
    cityOpiton = [
        {
            label: "北京",
            value: 0
        },
        {
            label: "上海",
            value: 1
        },
        {
            label: "广州",
            value: 2
        }
    ];
    orderStatus = [
        {
            label: "全部",
            value: 0
        },
        {
            label: "进行中",
            value: 1
        },
        {
            label: "结束行程",
            value: 2
        }
    ];
    getForm = () => {
        const form = this.props.form.getFieldsValue();
        console.log(form);
    };
    reset = () => {
        this.props.form.resetFields();
    };
    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <Form layout="inline">
                <FormItem label="城市">
                    {getFieldDecorator("city", {})(
                        <Select
                            placeholder="请选择一个城市"
                            style={{ width: 150 }}
                        >
                            {this.cityOpiton.map(item => (
                                <Option value={item.value} key={item.value}>
                                    {item.label}
                                </Option>
                            ))}
                        </Select>
                    )}
                </FormItem>
                <FormItem label="起止时间">
                    {getFieldDecorator("date")(<RangePicker />)}
                </FormItem>
                <FormItem label="订单状态">
                    {getFieldDecorator("order_status")(
                        <Select style={{ width: 200 }}>
                            {this.orderStatus.map(item => (
                                <Option value={item.value} key={item.value}>
                                    {item.label}
                                </Option>
                            ))}
                        </Select>
                    )}
                </FormItem>
                <div className="form_btn">
                    <Button type="primary" onClick={this.getForm}>
                        查询
                    </Button>
                    <Button type="wraning" className="btn" onClick={this.reset}>
                        重置
                    </Button>
                </div>
            </Form>
        );
    }
}
const FilterFormWrap = Form.create()(FilterForm);

const columns = [
    {
        title: "订单编号",
        dataIndex: "order_sn"
    },
    {
        title: "车辆编号",
        dataIndex: "bike_sn"
    },
    {
        title: "用户名",
        dataIndex: "user_name"
    },
    {
        title: "手机号",
        dataIndex: "mobile"
    },
    {
        title: "里程",
        dataIndex: "distance"
    },
    {
        title: "行驶时长",
        dataIndex: "total_time"
    },
    {
        title: "状态",
        dataIndex: "status"
    },
    {
        title: "开始时间",
        dataIndex: "start_time"
    },
    {
        title: "结束时间",
        dataIndex: "end_time"
    },
    {
        title: "订单金额",
        dataIndex: "total_fee"
    },
    {
        title: "实付金额",
        dataIndex: "user_pay"
    }
];

class orderForm extends Component {
    state = {
        orderData: [],
        total: "",
        isLoading: false,
        selectedItem:'',
        selectedKey: "",
        visible: false,
        orderInfo:{},
    };

    params = {
        pn: 1
    };
    getOrder() {
        this.setState({
            isLoading: true
        });
        axios.get("/order/list", this.params).then(res => {
            console.log(res);
            this.setState({
                orderData: res.result.item_list.map(item => {
                    item.key = item.id;
                    return item;
                }),
                total: res.result.total_count,
                isLoading: false
            });
        });
    }
    componentWillMount() {
        this.getOrder();
    }
    handleOk = e => {
        axios
            .get("/order/finish_order", { id: this.state.selectedItem.id })
            .then(res => {
                if(res.code == 0){
                    this.getOrder();
                }
            });
        this.setState({
            visible: false
        });
    };
    handleCancel = e => {
        this.setState({
            visible: false
        });
    };
    orderDetail=()=>{
        let id = this.state.selectedItem.id;
        if(id){
            window.open(`/#/common/order/detail/${id}`,'_blank')
        }else{
            message.warning("请选择一条订单");
        }
    }
    orderDone = () => {
        let selectedItem = this.state.selectedItem;
        if (selectedItem) {
            axios
                .get("/order/ebike_info",{id:this.state.selectedItem.id})
                .then(res => {
                    this.setState({
                        orderInfo:res.result
                    })
                }).catch(err=>{
                    console.log(err)
                });
            this.setState({
                visible: true
            });
        } else {
            message.warning("请选择一条订单");
        }
    };
    rowSelection = {
        type: "radio",
        onChange: (selectedRowKeys, selectedRows) => {
            // console.log(
            //     `selectedRowKeys: ${selectedRowKeys}`,
            //     "selectedRows: ",
            //     selectedRows
            // );
            this.setState({
                selectedItem: selectedRows[0],
                selectedKey: selectedRowKeys
            });
        },
    };

    render() {
        const pagination = {
            total: this.state.total,
            pageSize: 10,
            onChange: page => {
                this.params.pn = page;
                this.getOrder();
            }
        };
        return (
            <div className="order-wrap">
                <Card>
                    <FilterFormWrap />
                </Card>
                <Card style={{ marginTop: -1 }}>
                    <Button type="primary" onClick={this.orderDetail}>
                        订单详情
                    </Button>
                    <Button
                        type="primary"
                        onClick={this.orderDone}
                        className="btn"
                    >
                        结束订单
                    </Button>
                </Card>
                <Card style={{ marginTop: -1 }}>
                    <Table
                        rowSelection={this.rowSelection}
                        columns={columns}
                        dataSource={this.state.orderData}
                        pagination={pagination}
                        loading={this.state.isLoading}
                    />
                </Card>
                <Modal
                    title="结束订单"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>
                        车辆编号:
                        {this.state.orderInfo.bike_sn}
                    </p>
                    <p>
                        剩余电量:
                        {this.state.orderInfo.battery}
                    </p>
                    <p>
                        行程开始时间:
                        {this.state.orderInfo.start_time}
                    </p>
                    <p>
                        当前位置:
                        {this.state.orderInfo.location}
                    </p>
                </Modal>
            </div>
        );
    }
}

export default orderForm;
