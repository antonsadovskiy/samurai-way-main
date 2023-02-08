import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar />
                <div className="mainContainer">
                    <div className="contentContainer">
                        <Route path="/profile" render={() => <Profile />} />
                        <Route path="/dialogs" component={Dialogs} />
                        <Route path="/news" component={News} />
                        <Route path="/music" component={Music} />
                        <Route path="/settings" component={Settings} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
