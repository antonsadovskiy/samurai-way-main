import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="mainContainer">
                <Navbar
                    // friends={state.sideBar.friends}
                />
                <div className="contentContainer">
                    <Route path="/profile" render={() => <Profile />}/>
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/news" render={() => <News/>} />
                    <Route path="/music" render={() => <Music/>} />
                    <Route path="/settings" render={() => <Settings/>} />
                </div>
            </div>
        </div>
    );
}

export default App;
