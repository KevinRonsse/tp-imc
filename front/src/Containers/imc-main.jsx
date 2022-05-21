import { Col, Row } from "antd";
import { Imc } from "./../Components/imc/imc"

export function ImcMain() {
    return (
        <div >
            <h1>imc Main</h1>
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
        </div>
    );
}