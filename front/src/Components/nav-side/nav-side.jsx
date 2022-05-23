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
import { useDispatch, useSelector } from 'react-redux';

const { Sider } = Layout;

export function NavSide() {
    const [collapsed, setCollapsed] = useState(false)
    const { userData, loggedIn } = useSelector((state) => ({
        ...state.userReducer,
    }));

    function getItem(label, key, icon, children) {
        return {
            label,
            key,
            icon,
            children
        };
    }
    
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch ({
            type: "LOGOUT",
          });
    }
    
    const items = [
        getItem('Charts', 'sub1', <AreaChartOutlined />, [
            getItem(<Link to="/week">Week</Link>, '1', <BarChartOutlined />),
            getItem(<Link to="/month">Month</Link>, '2', <LineChartOutlined />),
            getItem(<Link to="/trimester">Trimester</Link>, '3', <PieChartOutlined />),
        ]),
        getItem(<Link to="/addimc">Add data</Link>, '4', <PlusSquareOutlined />),
        getItem(<span onClick={handleLogout}>Logout</span>, '5', <LogoutOutlined />)
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
                    <Avatar size='large' className='avatar-user-icon'>
                        {userData.firstName.charAt(0).toUpperCase()}
                    </Avatar>
                    <p>{userData.firstName} {userData.lastName}</p>
                </Link>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.currentRoute]}> */}
        </Sider>
    );
}