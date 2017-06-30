import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';

class Profile extends Component {
  render() {
    return (
      <div className="profile container-fluid">
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="profile__close-profile close-profile btn">
              <span className="close-profile__text">Закрыть кабинет &nbsp;</span>
              <Icon name="sign-out"></Icon>
            </Link>
          </div>
          <div className="profile__info col-md-6"></div>
        </div>
      </div>
    );
  }
}

export default Profile;
