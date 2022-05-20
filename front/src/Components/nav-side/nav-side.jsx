import { useState } from 'react';
import { Avatar, Divider, Layout, Menu } from 'antd';
import './nav-side.css';
import {
    LogoutOutlined,
    PieChartOutlined,
    AreaChartOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PlusSquareOutlined,
    LinkOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

export function NavSide() {
    const [collapsed, setCollapsed] = useState(false)

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }

    const items = [
        getItem('Charts', 'sub1', <AreaChartOutlined />, [
            getItem('Week', '1', <BarChartOutlined />),
            getItem('Month', '2', <LineChartOutlined />),
            getItem('Trimester', '3', <PieChartOutlined />),
        ]),
        getItem('Enter new data', '4', <PlusSquareOutlined />),
        getItem('Logout', '5', <LogoutOutlined />),
        getItem(
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                link test
            </a>,
            'link',
            <LinkOutlined />,
        ),
    ];

    const onCollapse = () => {
        setCollapsed(!collapsed)
    };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo">
                <h1>IMC React</h1>
            </div>
            <div className='avatar-user'>
                <Avatar size='large' style={{ color: '#f56a00', backgroundColor: '#fde3cf'}}>
                    U
                </Avatar>
                <p>Username</p>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.currentRoute]}> */}
        </Sider>
    );
}