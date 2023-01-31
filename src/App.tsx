import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="contentContainer">
                <Navbar />
                <Profile />
            </div>
        </div>
    );
}

export default App;
