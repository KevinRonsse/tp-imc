import { Layout } from 'antd';
import { NavSide } from '../Components/nav-side/nav-side';
import { ImcMain } from './imc-main';

const { Content} = Layout;

export function Home() {
    return (
        <Layout style={{minHeight: '100vh'}}>
            <NavSide/>
            <Content style={{margin: '0 16px'}}>
                <div
                    className="site-layout-background"
                    style={{padding: 24, minHeight: 360}}>
                   <ImcMain/>
                </div>
            </Content>
        </Layout>
    );
}

