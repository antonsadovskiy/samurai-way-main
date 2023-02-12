import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile, {PostType} from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import Dialogs, {DialogItemType, MessageItemType} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {

    const posts: Array<PostType> = [
        {id: 1, date: "19:08 27 Jan", likes: 53, comments: 2, message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dignissimos eaqueeveniet. At distinctio dolor dolorem doloremque dolores eius est incidunt itaque laborum nam officiaquod reiciendis, reprehenderit temporevoluptas?Commodi delectus deleniti, error iste minima modi quae repudiandae vero! Et excepturi harum molestias nemo nobis non nulla praesentium provident velit, vitae? Aspernatur atque beatae cumque explicabo nisi optio saepe!Aliquam dignissimos, laudantium quisquam reprehenderit saepe voluptatibus voluptatum. Accusamus dolor doloribus incidunt repellat! Debitis est excepturi harum illo, magnam nesciunt nihil perspiciatis placeat quibusdam quis ratione reiciendis repellat repudiandae totam."},
        {id: 2, date: "21:08 28 Mar", likes: 13, comments: 5, message: "How are you doing today?"},
        {id: 3, date: "14:08 4 Apr", likes: 90, comments: 0, message: "I'm busy"},
    ]

    const dialogs: Array<DialogItemType> = [
        {id: 1, name: "Anton"},
        {id: 2, name: "Julia"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Diana"},
        {id: 5, name: "Alex"},
    ]

    const messages: Array<MessageItemType> = [
        {id: 1, message: "message 1"},
        {id: 2, message: "message 2"},
        {id: 3, message: "message 3"},
        {id: 4, message: "message 4"},
        {id: 5, message: "message 5"},
    ]

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar />
                <div className="mainContainer">
                    <div className="contentContainer">
                        <Route path="/profile" render={() => <Profile posts={posts}/>} />
                        <Route path="/dialogs" render={() => <Dialogs dialogs={dialogs} messages={messages}/>} />
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
