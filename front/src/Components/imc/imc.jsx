import { Card } from "antd";
import { Typography } from 'antd';
import { useState } from "react";
import { useSelector } from "react-redux";

import {
    UserOutlined,
    TagOutlined,
    CompassOutlined
} from '@ant-design/icons';

import './imc.css'

const { Text } = Typography;


export function Imc(props) {
    const [data, setData] = useState(props)
    const { userData } = useSelector((state) => ({
        ...state.userReducer,
    }));

    const imcColor = ["blue", "green", "yellow", "red", "black"];
    const imcMessage = [
        "Poids trop faible, réserves insuffisantes en cas de maladie",
        "Poids santé ou poids idéal, essayez d'y rester!",
        "Il vous est conseillé de maigrir pour atteindre un poids santé",
        "Très forte probabilité d'apparition de diabète, de maladies cardiovasculaires",
        "Obésité morbide ou massive, prenez rendez-vous avec un nutritionniste très rapidement",
    ]
    const imcCat = ["Maigreur", "Normal", "Surpoids", "Obésité", "Obésité sévère"]
    let imcIndex = 0;

    let currentImc = Math.round(data.data.dateWeight / Math.pow(userData.height / 100, 2))
    if (currentImc < 15) {
        imcIndex = 0;
    } else {
        if (currentImc < 25) {
            imcIndex = 1;
        } else {
            if (currentImc < 30) {
                imcIndex = 2;
            } else {
                if (currentImc < 45) {
                    imcIndex = 3;
                }
                else {
                    imcIndex = 4;
                }
            }
        }
    }
    let currentImcClass = `imc-${imcColor[imcIndex]}`;
    let currentBlockClass = `imc-block imc-block-${imcColor[imcIndex]}`;
    let bars = Array(imcIndex + 1).fill(imcIndex);

    const optimalImc = currentImc < 15 ? 15 : 25;
    const delatImc = currentImc >= 15 && currentImc <= 25 ? 0 : optimalImc - currentImc
    let deltaWeight = Math.round(delatImc * Math.pow(userData.height / 100, 2))


    return (
        <Card hoverable="true" className="imc-card">
            <h5>
                indice
            </h5>
            <div className="currentImcTitle">
                {currentImc}
            </div>
            <p>{data.data.date}</p>
            <div>
                {bars.map((p, i) => (
                    <p className={currentImcClass} key={i}></p>
                ))}
            </div>
            <div className={currentBlockClass}>
                <table className="block-table">
                    <tr className="block-table-header">
                        <td><UserOutlined /></td>
                        <td><TagOutlined /></td>
                        <td><CompassOutlined /></td>
                    </tr>
                    <tr>
                        <td>{data.data.dateWeight}</td>
                        <td style={{fontSize: "x-small"}}>{imcCat[imcIndex]}</td>
                        <td>{deltaWeight}</td>
                    </tr>
                </table>
            </div>
            <Text type="secondary">{imcMessage[imcIndex]}</Text>
        </Card>
    );
}


