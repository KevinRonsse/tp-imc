import { Row } from "antd";
import { Layout } from "antd";
import ImcList from "../Components/imc/imc-list";

const { Content } = Layout;

export function ImcMain() {
    return (
        <Content style={{ margin: '64px 32px' }}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: '0 auto' }}>
                <ImcList />
            </Row>
        </Content>
    );
}