import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import { Button } from 'reactstrap';

export default class TopBar extends React.Component {
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
        <Link to="/"
          className="top-bar__link">
          {/*<img src="%PUBLIC_URL%/logo-news.png" alt="IUIC"/>*/}
          <img
            className="top-bar__logo"
            src={process.env.PUBLIC_URL + "/logo-news.png"}
            alt="IUIC.news"/>
        </Link>
        <div className="top-bar__social-sign social-sign">
          <p className="social-sign__text-caption">Войти с помощью:</p>
          <a className="social-sign__btn social-sign__btn--facebook" href="">
            <Icon
              name="facebook"
              tag="i"/>
          </a>
          <a className="social-sign__btn social-sign__btn--vk" href="">
            <Icon
              name="vk"
              tag="i"/>
          </a>
        </div>
      </div>
    );
  }
}