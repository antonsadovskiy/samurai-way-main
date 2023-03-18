import React, {FC} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="mainContainer">
                <NavbarContainer />
                <div className="contentContainer">
                    <Route path="/profile" render={() => <Profile />}/>
                    <Route path="/dialogs" render={() => <DialogsContainer />}/>
                    <Route path="/users" render={() => <UsersContainer />}/>
                    <Route path="/news" render={() => <News />}/>
                    <Route path="/music" render={() => <Music />}/>
                    <Route path="/settings" render={() => <Settings />}/>
                </div>
            </div>
        </div>
    );
}

export default App;
