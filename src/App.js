import React from 'react';
import './App.css';

import NewsList from './components/news-list/news-list'
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import LeagueLeaders from "./components/leagueLeaders/leagueLeaders";
import Contact from "./components/contact/contact";
import About from "./components/about/about";
import SignUp from "./components/signUp/signUp";
import CreateNews from "./components/createNews/createNews";

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import configStore from "./store";
import {Provider} from "react-redux";
import Post from "./components/post/post";

const store = configStore()

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header></Header>
                    <div className="main-container">
                        <Switch>
                            <Route path='/leaders' component={ LeagueLeaders } />
                            <Route path='/contact' component={ Contact } />
                            <Route path='/about' component= { About } />
                            <Route path='/signUp' component= { SignUp } />
                            <Route path='/createNews' component= { CreateNews } />
                            <Route path='/news/:id' component={Post} />
                            <Route path='/' component={ NewsList } />
                        </Switch>
                    </div>
                <Footer/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
