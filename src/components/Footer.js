import React from 'react';
import { Nav, NavLink } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 footer__copyrights">
              <a href="#">
                <img 
                  src={process.env.PUBLIC_URL + "main-logo-gray.png"}
                  className="footer__logo"
                  alt="IUIC"/>
              </a>
              <address>
                <p className="footer__years">&copy; 2017</p>
              </address>
            </div>
            <div className="col-md-9 footer__navigation">
              <div className="col-md-9 col-sm-12">
                <img src={process.env.PUBLIC_URL + "about.png"}
                  className="footer__abbr img-fluid"
                  alt="International Union of Information Cities"/>
                <div className="footer__contacts contacts">
                  <a
                    className="footer__link"
                    href="mailto:iuic.info@gmail.com">
                    iuic.info@iuic.info
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <Nav
                  className="footer__links"
                  vertical>
                  <NavLink
                    href="#"
                    className="footer__link">
                    О проекте
                  </NavLink>
                  <NavLink
                    href="#"
                    className="footer__link">
                    Написать
                  </NavLink>
                  <NavLink
                    href="#"
                    className="footer__link">
                    Новости
                  </NavLink>
                  <NavLink
                    href="#"
                    className="footer__link">
                    Правила
                  </NavLink>
                </Nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}