import React from 'react';
import { Card, CardHeader, CardBlock,
  CardTitle, CardFooter, Button, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import TimeAgo from 'react-timeago'
import ruStrings from 'react-timeago/lib/language-strings/ru'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
 
const formatter = buildFormatter(ruStrings)

const MainContent = (props) => {
  return (
    <Card
      className="main-article main-article__panel"
      tag="article">
      <CardHeader>
        <h2 className="main-article__title">{props.title}</h2>
      </CardHeader>
      <CardBlock>
        <section className="main-article__content">
          {props.youtube_link ? 
            <div className="main-article__video embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src={props.youtube_link} allowfullscreen></iframe>
            </div>
            : null
          }
          {props.image_count !== 0 ? 
            <figure className="main-article__picture picture">
              <a className="picture__link" href={props.main_image.url}>
                <img className="picture__img img-thumbnail" src={props.main_image.small.url}/>
              </a>
              <figcaption className="picture__actions actions">
                <div className="actions__show-gallery show-gallery">
                  <span className="show-gallery__count">{props.image_count}&nbsp;</span>
                  <i className="fa fa-camera"></i>
                </div>
              </figcaption>
            </figure>
            : null
          }
          <div className="main-article__description" dangerouslySetInnerHTML={ {__html:props.description} }></div>
        </section>
      </CardBlock>
      <CardFooter className="main-article__info-panel info-panel">
        <div className="row">
          <div className="col article-card__author author text-left">
            <a href={props.user_link}>
              <img src={props.user_avatar} className="author__avatar" alt={props.user_name}/>
            </a>
            <div className="author__info">
              <a href={props.user_link} className="author__name align-top">{props.user_name}</a>
              <TimeAgo className="author__date date" date={props.date} formatter={formatter} />
            </div>
          </div>
          <div className="col main-article__info info">
            <Button
              color="link"
              className="info__item info__item--article"
              type="button">
              <Icon name="thumbs-up"/>
              <span className="info__count">{props.like}</span>
            </Button>
            <Button
              color="link"
              className="info__item info__item--article"
              type="button">
              <Icon name="thumbs-down"/>
              <span className="info__count">{props.dislike}</span>
            </Button>
            <Button
              color="link"
              className="info__item info__item--article"
              type="button">
              <Icon name="star"/>
              <span className="info__count">0</span>
            </Button>
            <Button
              color="link"
              className="info__item info__item--article"
              type="button"
              disabled>
              <Icon name="eye"/>
              <span className="info__count">{props.views}</span>
            </Button>
          </div>
        </div>
      </CardFooter>
      <CardBlock>
        <Alert color="info" className="comments__alert">
          Чтобы оставить комментарий необходимо&nbsp;
          <a className="alert__log-in" href="#">
            Войти
          </a>
          &nbsp;или&nbsp;
          <a className="alert__log-in" href="#">
            Cоздать кабинет
          </a>
        </Alert>
      </CardBlock>
    </Card>
  );
};

export default MainContent;