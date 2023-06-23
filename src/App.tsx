import React from "react";
import s from "./App.module.css";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app/appReducer";
import { AppStateType } from "./redux/redux-store";
import Layout from "antd/es/layout";
import { Footer } from "antd/es/layout/layout";
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";

type MapDispatchToPropsType = {
  initializeApp: () => void;
};
type MapStateToPropsType = {
  initialized: boolean;
};
type PropsType = MapStateToPropsType & MapDispatchToPropsType;

class App extends React.Component<PropsType> {
  state = { collapsed: false };

  componentDidMount() {
    this.props.initializeApp();
  }

  changeCollapse(value: boolean) {
    this.setState({ collapsed: value });
  }

  render() {
    return this.props.initialized ? (
      <Layout className={s.layout}>
        <Navbar
          collapsed={this.state.collapsed}
          onCollapseHandler={this.changeCollapse.bind(this)}
        />
        <Layout className="site-layout">
          <HeaderContainer />
          <MainContent />
          <Footer className={s.footer}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    ) : (
      <Preloader />
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
