import { Layout } from 'antd';
import { NavSide } from '../Components/nav-side/nav-side';
import { ImcMain } from './imc-main';

const { Content} = Layout;

export function Home() {
    return (
            <Content style={{margin: '0 16px'}}>
                <div
                    className="site-layout-background"
                    style={{padding: 24, minHeight: 360}}>
                   <ImcMain/>
                </div>
            </Content>
    );
}

