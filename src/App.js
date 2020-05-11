import React from 'react';
import './App.css';

import NewsList from './components/news-list/news-list'
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Header></Header>
      <NewsList></NewsList>
      <Footer/>
    </div>
  );
}

export default App;
