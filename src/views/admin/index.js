import React, { Component } from "react";
import { Row, Col } from "antd";
import './index.less'
import NavLeft from "../../components/navleft/navleft";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
class index extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={4}>
                        <NavLeft />
                    </Col>
                    <Col span={20} className='content'>
                        <Header />
                        <div className="content-wrap">
                            {this.props.children}
                        </div>
                        <Footer />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default index;
