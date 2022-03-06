import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./redux/state";

const App = (props: StateType) => {
    return (
        <main className="App app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs" render={() =>
                    <Dialogs addDialogMessage={props.addDialogMessage} messages={props.messagePage.messages}
                             dialogs={props.messagePage.dialogs}/>}
                />
                <Route path="/profile" render={() =>
                    <Profile addPost={props.addPost} updateNewPostText={props.updateNewPostText}
                             posts={props.profilePage.posts} postText={props.profilePage.newPostText}/>}
                />
                <Route path="/news" render={() =>
                    <News/>}
                />
                <Route path="/music" render={() =>
                    <Music/>}
                />
                <Route path="/settings" render={() =>
                    <Settings/>}
                />
            </div>
        </main>
    );
}

export default App;
