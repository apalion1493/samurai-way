import reportWebVitals from './reportWebVitals';
import {StateType, store} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App addDialogMessage={store.addDialogMessage.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} addPost={store.addPost.bind(store)} profilePage={state.profilePage} messagePage={state.messagePage}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();
