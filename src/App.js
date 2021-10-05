import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Header from './components/Header';
import MyRow from './components/MyRow';
import React from 'react';

class App extends React.Component {

  state = {
    query: ''
  }

  render() {
  return (
    <div className="App">
      <div className="app-container">
        <MyNav />
        <Header />
        <MyRow query={'batman'}/>
        <MyRow query={'spider'}/>
        <MyFooter />
      </div>
    </div>
  );
  }
}

export default App;
