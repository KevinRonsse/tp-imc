import { Card, Col, Row, Space } from "antd";
import { useState } from "react";
import Connexion from "../Components/Connexion/Connexion";
import Inscription from "../Components/Inscription/Inscription";

export function Landing() {
    const [register, setRegister] = useState(false)

    const handleCallback = (childData) => {
        setRegister(childData);
    }

    return (
        <div className="layout-imc">
            <Row style={{ paddingTop: 24, display: "block" }}>
                <h1 style={{ textAlign: 'center' }}>IMC React</h1>
            </Row>
            <Row style={{ paddingTop: 24 }}>
                <Col span={20} offset={2}>
                    <Card className="imc-card">
                        {!register && <Connexion parentCallBack={handleCallback} />}
                        {register && <Inscription parentCallBack={handleCallback} />}
                    </Card>
                </Col>
            </Row>
        </div>
    );
}