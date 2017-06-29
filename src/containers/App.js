import React, { Component } from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import News from '../components/News';

class App extends Component {
  render() {
    return (
      <div>
      	<TopBar/>
        <NavBar/>
        <News/>
        <Footer/>
      </div>
    );
  }
}

export default App;
