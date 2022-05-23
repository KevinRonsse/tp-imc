import { Col } from "antd";
import { useSelector } from "react-redux";
import { Imc } from "./imc";

function ImcList() {
    const { imcData, updated } = useSelector((state) => ({
        ...state.imcReducer,
    }));

    const maxData = imcData.length;
    const minData = maxData > 7 ? maxData - 7 : 0;
    const displayData = imcData.slice(minData, maxData + 1).reverse();


    return (
        <>
            {displayData.map((p, i) => (
                <Col span={6} key={i} className="imc-card-list">
                    <Imc data={p} />
                </Col>
            ))}
        </>
    );
}

export default ImcList;