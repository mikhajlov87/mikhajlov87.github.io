import React, { Component } from 'react';
import Icon from 'react-fontawesome';
import { Button } from 'reactstrap';

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <Button 
          color="link"
          size="sm"
          className="top-bar__about">
          <Icon
            name="bars"
            tag="i"/>
        </Button>
        <a className="top-bar__link"
          href="index.html">
          {/*<img src="%PUBLIC_URL%/main-logo.png" alt="IUIC"/>*/}
          <img
            className="top-bar__logo"
            src={process.env.PUBLIC_URL + "/main-logo.png"}
            alt="IUIC"/>
          <h1 className="top-bar__title">News</h1>
        </a>
      </div>
    );
  }
}

export default TopBar;