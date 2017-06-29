import React from 'react';
import { Card, CardImg, CardBlock,
  CardTitle, Button } from 'reactstrap';
import Icon from 'react-fontawesome';

const NewsCard = (props) => {
  return (
    <Card className="news__card text-center">
      <a 
        href="#"
        className="card__heading">
        <CardImg
          top
          className="card__main-img"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap" />
        <CardTitle className="card__title text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere velit magni expedita vero, ipsa quisquam provident consequatur ipsum enim ex alias quas.
        </CardTitle>
      </a>
      <p className="card__category">Новости страны</p>
      <CardBlock className="card__content">
        <a 
          href="#"
          className="card__city">
          Каир
        </a>
        <div className="card__author author text-left">
          <a href="#">
            <img
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=35&h=35"
              className="rounded-circle"
              alt="avatar"/>
          </a>
          <div className="author__info">
            <a
            href="#"
            className="author__name align-top">
              IUIC Boston
            </a>
            <span className="author__date date">25 минут назад</span>
          </div>
        </div>
        <div className="card__info info">
          <Button
            color="link"
            className="info__item"
            type="button">
            <Icon name="thumbs-up"/>
            <span className="info__count">0</span>
          </Button>
          <Button
            color="link"
            className="info__item"
            type="button">
            <Icon name="thumbs-down"/>
            <span className="info__count">0</span>
          </Button>
          <Button
            color="link"
            className="info__item ml-auto"
            type="button"
            disabled>
            <Icon name="eye"/>
            <span className="info__count">0</span>
          </Button>
        </div>
      </CardBlock>
    </Card>
  );
};

export default NewsCard;