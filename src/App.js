import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Header from './components/Header';
import TvShows from './components/TvShows';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'

const App = () => {

  const [query, setQuery] = useState('')

  
  return (
    <div className="App">
      <div className="app-container">
        <Router>
        <MyNav query={query} setQuery={setQuery} />
        <Header />
        <Route path={'/tvshows'} exact render={(routerProps)=> <TvShows {...routerProps} query={query} dQuery={'row'}/>}/>
        <Route path={'/tvshows'} exact render={(routerProps)=> <TvShows {...routerProps} query={query} dQuery={'row'}/>}/>
        <Route path={'/home'} exact component={Home} />
        <MyFooter />
        </Router>
      </div>
    </div>
  );
  
}

export default App;
