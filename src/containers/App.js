import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="news">
      	<TopBar/>
        <NavBar/>
      </div>
    );
  }
}

export default App;
