import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app/appReducer";
import {AppStateType} from "./redux/redux-store";
import Layout from 'antd/es/layout';
import Sider from 'antd/es/layout/Sider';
import {Menu, MenuProps} from 'antd';
import {Content} from "antd/lib/layout/layout";
import {Footer} from "antd/es/layout/layout";
import MenuItem from 'antd/es/menu/MenuItem';
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {
  CustomerServiceOutlined,
  GlobalOutlined,
  HomeOutlined,
  MessageOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";
import NavItem from "./components/Navbar/NavItem";

type MapDispatchToPropsType = {
  initializeApp: () => void
}
type MapStateToPropsType = {
  initialized: boolean
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType


function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

type MenuItem = Required<MenuProps>['items'][number];


const items: MenuItem[] = [
  getItem('Profile', '1', <NavItem urlPath={'/profile'}><HomeOutlined/></NavItem>),
  getItem('Dialogs', '2', <NavItem urlPath={'/dialogs'}><MessageOutlined/></NavItem>),
  getItem('Users', '3', <NavItem urlPath={'/users'}><UserOutlined/></NavItem>),
  getItem('News', '4', <NavItem urlPath={'/news'}><GlobalOutlined/></NavItem>),
  getItem('Music', '5', <NavItem urlPath={'/music'}><CustomerServiceOutlined/></NavItem>),
  getItem('Settings', '6', <NavItem urlPath={'/settings'}><SettingOutlined/></NavItem>),
  getItem('Friends', '7', <UserOutlined/>, [
    getItem('Tom', 'friend1'),
    getItem('Bill', 'friend2'),
    getItem('Alex', 'friend3'),
  ]),
];

class App extends React.Component<PropsType> {

  state = {collapsed: false}

  componentDidMount() {
    this.props.initializeApp()
  }

  changeCollapse(value: boolean) {
    this.setState({collapsed: value})
  }

  render() {
    return (
      this.props.initialized
        ? (
          <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={(value) => this.changeCollapse(value)}>
              <div style={{height: 32, margin: 16}}/>
              <Menu theme="dark" mode="inline" items={items}/>
            </Sider>
            <Layout className="site-layout">
              <HeaderContainer/>
              <Content style={{margin: '10px'}}>
                <Route path={"/"} render={() => <Redirect to={"/profile"}/>}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/login" render={() => <LoginContainer/>}/>
              </Content>
              <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        )
        : <Preloader/>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)