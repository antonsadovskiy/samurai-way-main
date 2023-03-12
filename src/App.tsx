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
import {ActionsTypes} from "./redux/store";
import {AppStateType} from "./redux/redux-store";
import {Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: AppStateType
    dispatch: (action: ActionsTypes) => void
    store: Store<AppStateType>
}

const App:FC<AppPropsType> = (props) => {
    return (
        <div className="App">
            <Header />
            <div className="mainContainer">
                <Navbar friends={props.state.sideBar.friends}/>
                <div className="contentContainer">
                    <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                    <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path="/news" render={() => <News/>} />
                    <Route path="/music" render={() => <Music/>} />
                    <Route path="/settings" render={() => <Settings/>} />
                </div>
            </div>
        </div>
    );
}

export default App;
