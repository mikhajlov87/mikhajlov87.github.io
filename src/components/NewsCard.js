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
      <Card className="article-card text-center">
        <Link 
          to={props.mainUrl}
          className={props.mainImg ? "article-card__heading" : "article-card__heading article-card__heading--no-image"}>
          {props.mainImg ? 
            <CardImg
              top
              className="article-card__main-img"
              src={props.mainImg}
              alt="article-card image" />
            :null
          }
          <CardTitle className={props.mainImg ? "article-card__title text-center" : "article-card__title text-center article-card__title--no-image"}>
            {props.title.replace(/"{2,}/g,"")}
          </CardTitle>
        </Link>
        <p className="article-card__category">Новости страны</p>
        <CardBlock className="article-card__content">
          <a 
            href={props.cityUrl}
            className="article-card__city">
            {props.cityName}
          </a>
          <div className="article-card__author author text-left">
            <a href={"/user/" + props.user_id}>
              <img
                src={props.user_avatar}
                className="rounded-circle author__avatar"
                alt={props.user_name}/>
            </a>
            <div className="author__info">
              <a
              href={"/user/" + props.user_id}
              className="author__name align-top">
                {props.user_name}
              </a>
              <TimeAgo className="author__date date" date={props.date} formatter={formatter} />
            </div>
          </div>
          <div className="article-card__info info">
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