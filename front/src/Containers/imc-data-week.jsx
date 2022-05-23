import { Card, Col, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import { DemoGauge } from "../Components/speed-o-meter/speed-o-meter";

export function ImcDataWeek() {
    return (
        <Content style={{ margin: '0 16px' }}>
            <h1>
                imc data per week
            </h1>
            <Row>
                <Col span={6}>
                    <Card className="gauge-card">
                        <DemoGauge />
                    </Card>
                </Col>
            </Row>

        </Content>
    );
}