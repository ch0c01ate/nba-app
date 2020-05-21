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

function App() {
    return (
        <BrowserRouter>
            <Header></Header>
                <div className="main-container">
                    <Switch>
                        <Route path='/leaders' component={ LeagueLeaders } />
                        <Route path='/contact' component={ Contact } />
                        <Route path='/about' component= { About } />
                        <Route path='/signUp' component= { SignUp } />
                        <Route path='/createNews' component= { CreateNews } />
                        <Route path='/' component={ NewsList } />
                    </Switch>
                </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
