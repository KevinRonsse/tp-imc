import { Card } from "antd";
import './imc.css'

export function Imc() {
    return (
        <Card title="imc data" hoverable="true" className="imc-card">
            <p>date:</p>
            <p>weight:</p>
            <p>imc:</p>
        </Card>
    );
}