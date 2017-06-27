import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="news">
      	<TopBar/>
        <NavBar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
