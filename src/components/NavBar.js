import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledTooltip } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.toggleProfileButton = this.toggleProfileButton.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      profile: false
    };
  }
  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggleNavBar() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  toggleProfileButton() {
    if (window.pageYOffset > 78) {
      this.setState({
        profile: true
      })
    } else {
      this.setState({
        profile: false
      })
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.toggleProfileButton);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleProfileButton);
  }
  render() {
    return (
      <Navbar 
        className="main-navbar clearfix sticky-top"
        toggleable>
        <NavbarToggler
          className="main-navbar__toggler"
          right
          onClick={this.toggleNavBar}>
          <Icon name="bars"/>
        </NavbarToggler>
        <Collapse
          className="main-navbar__collapse"
          isOpen={this.state.isOpen}
          navbar>
          <Nav navbar>
            <NavItem>
              <NavLink 
                className="main-navbar__link" 
                href="#">
                <img 
                  src={process.env.PUBLIC_URL + "/navbar/globe.png"}
                  alt="В мире"
                  title="В мире"
                  className="main-navbar__icon hidden-xs-down hidden-lg-up"/>
                <span className="main-navbar__item">В мире</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                className="main-navbar__link" 
                href="#">
                <img 
                  src={process.env.PUBLIC_URL + "/navbar/location.png"}
                  alt="В стране"
                  title="В стране"
                  className="main-navbar__icon hidden-xs-down hidden-lg-up"/>
                <span className="main-navbar__item">В стране</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                className="main-navbar__link" 
                href="#">
                <img 
                  src={process.env.PUBLIC_URL + "/navbar/city.png"}
                  alt="Мой город"
                  title="Мой город"
                  className="main-navbar__icon hidden-xs-down hidden-lg-up"/>
                <span className="main-navbar__item">Мой город</span>
              </NavLink>
            </NavItem>
          </Nav>
          <form
            action="#"
            className="main-navbar__search search">
            <Input 
              className="search__input"
              type="text"
              name="search"
              placeholder="Поиск" />
          </form>
          { this.state.profile ? 
            <Link to="/profile"
              className="main-navbar__profile btn ml-auto"
              profile={this.state.profile}
              onScroll={this.toggleProfileButton}>
                Личный <br/> кабинет
              </Link> : null }
          <Button 
            className={this.state.profile ? "main-navbar__create" : "main-navbar__create ml-auto"}
            id="create">
            <Icon
              name="pencil"
              tag="i"/>
          </Button>
          <UncontrolledTooltip placement="bottom" target="create">
            Создать
          </UncontrolledTooltip>
          <Dropdown 
            className="main-navbar__language language"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggleDropdown}>
            <DropdownToggle
              className="language__button"
              caret>
              RU
            </DropdownToggle>
            <DropdownMenu
              className="language__menu">
              <DropdownItem
                className="language__item">
                EN
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Collapse>
      </Navbar>
    );
  }
}