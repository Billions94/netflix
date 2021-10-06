import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Header from './components/Header';
import TvShows from './components/TvShows';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {

  state = {
    query: ''
  }

  render() {
  return (
    <div className="App">
      <div className="app-container">
        <Router>
        <MyNav />
        <Route path={'/tvshows'} exact render={(routerProps)=> <TvShows {...routerProps} query={'spider-man'}/>}/>
        <Route path={'/tvshows'} exact render={(routerProps)=> <TvShows {...routerProps} query={'batman'}/>}/>
        <Route path={'/home'} exact component={Home} />
        <MyFooter />
        </Router>
      </div>
    </div>
  );
  }
}

export default App;
