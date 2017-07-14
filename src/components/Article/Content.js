import React from 'react';
import { Card, CardHeader, CardImg, CardBlock,
  CardTitle, CardFooter, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import TimeAgo from 'react-timeago'
import ruStrings from 'react-timeago/lib/language-strings/ru'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
 
const formatter = buildFormatter(ruStrings)

const Content = (props) => {
  return (
    <Card
      className="main-article main-article__panel"
      tag="article">
      <CardHeader>
        <h2 className="main-article__title">В Эстонии открыли вакансию корабельного кота</h2>
      </CardHeader>
      <CardBlock>
        <section className="main-article__content">
          <figure className="main-article__picture picture">
            <a className="picture__link" href="images/article-cat.jpg">
              <img className="picture__img img-thumbnail" src="https://placeholdit.co//i/138x138"/>
            </a>
            <figcaption className="picture__actions actions"><a className="actions__show-gallery show-gallery" href="#"><span className="show-gallery__count">3&nbsp;</span><i className="fa fa-camera"></i></a></figcaption>
          </figure>
          <p className="main-article__description">Капитан эстонского корабля "Katharina" Хейкки Халдре разместил на портале вакансий CV-Online объявление об открытии вакансии корабельного кота. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis asperiores esse est qui alias ipsum illo a quis! Quia, eveniet! Voluptatem quisquam quia modi a necessitatibus in atque suscipit ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni placeat exercitationem accusamus, fugit. Atque sunt, deleniti similique consequuntur perspiciatis architecto aliquam sed eius rem iste nulla natus reiciendis deserunt.</p>
        </section>
      </CardBlock>
      <CardFooter className="main-article__info-panel info-panel">
        <div className="row">
          <div className="col article-card__author author text-left">
            <a href="/user/1">
              <img src="https://placeholdit.co//i/138x138" className="author__avatar" alt="Хавронья фон Хрюкке"/>
            </a>
            <div className="author__info">
              <a href="/user/1" className="author__name align-top">Хавронья фон Хрюкке</a>
              <TimeAgo className="author__date date" date="2017-07-12T00:00:00.000Z" formatter={formatter} />
            </div>
          </div>
          <div className="col main-article__info info">
            <Button
              color="link"
              className="info__item info__item--article"
              type="button">
              <Icon name="thumbs-up"/>
              <span className="info__count">0</span>
            </Button>
            <Button
              color="link"
              className="info__item info__item--article"
              type="button">
              <Icon name="thumbs-down"/>
              <span className="info__count">0</span>
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
              <span className="info__count">0</span>
            </Button>
          </div>
        </div>
      </CardFooter>
      <CardBlock>
        <div className="alert alert-info comments__alert">
          <p>Чтобы оставить комментарий необходимо<a className="alert__log-in" data-target="#modalRegEnter" data-toggle="modal" href="#">Войти</a>&nbsp;или&nbsp;<a className="alert__log-in" href="#">Cоздать кабинет</a></p>
        </div>
      </CardBlock>
    </Card>
  );
};

export default Content;