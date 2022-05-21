import { useState } from 'react';
import { Avatar, Layout, Menu } from 'antd';
import './nav-side.css';
import {
    LogoutOutlined,
    PieChartOutlined,
    AreaChartOutlined,
    BarChartOutlined,
    LineChartOutlined,
    PlusSquareOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

export function NavSide() {
    const [collapsed, setCollapsed] = useState(false)

    function getItem(label, key, icon, children) {
        return {
            label,
            key,
            icon,
            children
        };
    }

    const items = [
        getItem('Charts', 'sub1', <AreaChartOutlined />, [
            getItem(<Link to="/week">Week</Link>, '1', <BarChartOutlined />),
            getItem(<Link to="/month">Month</Link>, '2', <LineChartOutlined />),
            getItem(<Link to="/trimester">Trimester</Link>, '3', <PieChartOutlined />),
        ]),
        getItem(<Link to="/addimc">Add data</Link>, '4', <PlusSquareOutlined />),
        getItem('Logout', '5', <LogoutOutlined />)
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
                <Link to="/">
                    <Avatar size='large' style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                        U
                    </Avatar>
                    <p>Username</p>
                </Link>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.currentRoute]}> */}
        </Sider>
    );
}