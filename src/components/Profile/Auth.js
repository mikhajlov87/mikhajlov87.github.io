import React from 'react';
import Icon from 'react-fontawesome';
import { Button, Input, InputGroup } from 'reactstrap';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMail = this.toggleMail.bind(this);
    this.state = {
      mail: false
    };
  }
  toggleMail() {
    this.setState({
      mail: !this.state.mail
    });
  }
  render() {
    return (
      <form className="profile__auth auth">
        <div className="auth__methods">
          <span>Создать кабинет с помощью:</span>
          <Button
            color="link"
            className="auth__method facebook"
            type="button">
            <Icon name="facebook"/>
          </Button>
          <Button
            color="link"
            className="auth__method vk"
            type="button">
            <Icon name="vk"/>
          </Button>
          <Button
            color="link"
            className="auth__method odnoklassniki"
            type="button">
            <Icon name="odnoklassniki"/>
          </Button>
          <Button
            color="link"
            className="auth__method twitter"
            type="button">
            <Icon name="twitter"/>
          </Button>
          <Button
            color="link"
            className={this.state.mail ? "auth__method auth__mail-toggle active" : "auth__method auth__mail-toggle"}
            type="button"
            onClick={this.toggleMail}>
            <Icon name="envelope"/>
          </Button>
        </div>
        { this.state.mail ? 
          <div className="auth__mail">
            <InputGroup>
              <Input 
                className="mail__item input--transparent"
                type="e-mail"/>
              <Input 
                className="mail__item input--transparent"
                type="password"/>
              <Button
                className="mail__item button--transparent"
                type="submit">
                Готово
              </Button>
            </InputGroup>
          </div> : null }
      </form>
    )
  }
}