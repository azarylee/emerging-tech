import React from 'react'
import { Menu, Icon } from 'antd'
import './index.scss'
import "antd/dist/antd.css"
import Content from './Content'
import { Link } from 'react-router-dom'


const SubMenu = Menu.SubMenu;

class Layout extends React.Component {
    state = {
        current: 'home',
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        const { current } = this.state
        return (
        <div className="wrap">
            <Menu
                onClick={this.handleClick}
                selectedKeys={[current]}
                mode="horizontal"
            >
                <Menu.Item key="yijun" className="ant-col-10 website-name">
                    YIJUN's HOME
                </Menu.Item>
                <Menu.Item key="home" className="ant-col-6 ant-col-offset-2">
                    <Link to='/emerging-tech/'>
                        <Icon type="home" />Home
                    </Link>
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper ant-col-6"><Icon type="project" />Assignment</span>}>
                    <Menu.Item key="1">
                        <Link to='/assignment/lesson1'>Lesson 1</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/assignment/lesson2'>Lesson 2</Link>   
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/assignment/lesson3'>Lesson 3</Link>   
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='/assignment/lesson4'>Lesson 4</Link>   
                    </Menu.Item>
                </SubMenu>
            </Menu>
            <Content />
        </div>    

        );
    }
}

export default Layout