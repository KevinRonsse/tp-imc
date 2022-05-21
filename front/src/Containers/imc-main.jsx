import { Col, Row } from "antd";
import { Layout } from "antd";
import { Imc } from "./../Components/imc/imc"

const { Content } = Layout;

export function ImcMain() {
    return (
        <Content style={{ margin: '64px 32px' }}>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={6}>
                        <Imc />
                    </Col>
                    <Col span={6}>
                        <Imc />
                    </Col>
                    <Col span={6}>
                        <Imc />
                    </Col>
                    <Col span={6}>
                        <Imc />
                    </Col>
                    <Col span={6}>
                        <Imc />
                    </Col>
                    <Col span={6}>
                        <Imc />
                    </Col>
                    <Col span={6}>
                        <Imc />
                    </Col>
                </Row>
        </Content>
    );
}