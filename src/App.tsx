import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

const App:FC<AppPropsType> = ({state}) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar />
                <div className="mainContainer">
                    <div className="contentContainer">
                        <Route path="/profile" render={() => <Profile profilePage={state.profilePage}/>} />
                        <Route path="/dialogs" render={() => <Dialogs dialogsPage={state.dialogPage}/>} />
                        <Route path="/news" render={() => <News/>} />
                        <Route path="/music" render={() => <Music/>} />
                        <Route path="/settings" render={() => <Settings/>} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
