import React from "react";
import { connect } from "react-redux";
import containerStyle from "./common/Container.module.css";
import { initializeApp } from "./redux/app/appReducer";
import { AppStateType } from "./redux/redux-store";
import Layout from "antd/es/layout";
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
      <Layout>
        <HeaderContainer />
        <Layout hasSider className={containerStyle.container}>
          <Navbar
            collapsed={this.state.collapsed}
            onCollapseHandler={this.changeCollapse.bind(this)}
          />
          <MainContent />
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
