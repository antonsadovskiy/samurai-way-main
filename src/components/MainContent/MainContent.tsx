import React from "react";
import { Redirect, Route } from "react-router-dom";
import ProfileContainer from "../Profile/ProfileContainer";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import LoginContainer from "../Login/LoginContainer";
import { Content } from "antd/es/layout/layout";

const MainContent = () => {
  return (
    <Content style={{ margin: "10px" }}>
      <Route exact path={"/"} render={() => <Redirect to={"/profile"} />} />
      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      <Route path="/dialogs" render={() => <DialogsContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/news" render={() => <News />} />
      <Route path="/music" render={() => <Music />} />
      <Route path="/settings" render={() => <Settings />} />
      <Route path="/login" render={() => <LoginContainer />} />
    </Content>
  );
};

export default MainContent;
