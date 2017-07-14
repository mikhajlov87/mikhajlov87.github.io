import React from 'react';
import { Card, CardImg, CardBlock,
  CardTitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import TimeAgo from 'react-timeago'
import ruStrings from 'react-timeago/lib/language-strings/ru'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
 
const formatter = buildFormatter(ruStrings)

const NewsCard = (props) => {
  return (
    <div className="col-sm-6 col-md-4 col-xl-3">
      <Card className="news__card text-center">
        <Link 
          to={props.mainUrl}
          className="card__heading">
          <CardImg
            top
            className="card__main-img"
            src={props.mainImg}
            alt="Card image" />
          <CardTitle className="card__title text-center">
            {props.title.replace(/"{2,}/g,"")}
          </CardTitle>
        </Link>
        <p className="card__category">Новости страны</p>
        <CardBlock className="card__content">
          <a 
            href={props.cityUrl}
            className="card__city">
            {props.cityName}
          </a>
          <div className="card__author author text-left">
            <a href={"/user/" + props.user.id}>
              <img
                src={props.user.avatar.thumb.url}
                className="rounded-circle author__avatar"
                alt={props.user.name}/>
            </a>
            <div className="author__info">
              <a
              href={"/user/" + props.user.id}
              className="author__name align-top">
                {props.user.name}
              </a>
              <TimeAgo className="author__date date" date={props.date} formatter={formatter} />
            </div>
          </div>
          <div className="card__info info">
            <Button
              color="link"
              className="info__item"
              type="button">
              <Icon name="thumbs-up"/>
              <span className="info__count">{props.like}</span>
            </Button>
            <Button
              color="link"
              className="info__item"
              type="button">
              <Icon name="thumbs-down"/>
              <span className="info__count">{props.dislike}</span>
            </Button>
            <Button
              color="link"
              className="info__item ml-auto"
              type="button"
              disabled>
              <Icon name="eye"/>
              <span className="info__count">{props.views}</span>
            </Button>
          </div>
        </CardBlock>
      </Card>
    </div>
  );
};

export default NewsCard;