import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class Article extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <NavBar/>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)