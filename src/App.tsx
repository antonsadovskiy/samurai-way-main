import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {
    ActionsTypes,
    AddMessageActionType,
    AddPostActionType,
    StateType,
    UpdateNewPostTextActionType
} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

const App:FC<AppPropsType> = (props) => {

    return (
        <div className="App">
            <Header />
            <div className="mainContainer">
                <Navbar friends={props.state.sideBar.friends}/>
                <div className="contentContainer">
                    <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsPage={props.state.dialogPage}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/news" render={() => <News/>} />
                    <Route path="/music" render={() => <Music/>} />
                    <Route path="/settings" render={() => <Settings/>} />
                </div>
            </div>
        </div>
    );
}

export default App;
