import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import MainContent from '../components/News/MainContent';
import Footer from '../components/Footer';

class Article extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <NavBar/>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-3 col-lg-3"></div>
            <div className="col-sm-5 col-md-7 col-lg-7">
              <MainContent/>
            </div>
            <div className="col-sm-3 col-md-2 col-lg-2"></div>
          </div>
        </div>
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