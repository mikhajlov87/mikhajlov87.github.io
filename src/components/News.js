import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import Masonry from 'react-masonry-component';
import NewsCard from '../components/NewsCard';

var newsItems = [];

class News extends React.Component {
  constructor (props) {
    super(props)

    this.onScrollNews = this.onScrollNews.bind(this)
    this.onLoadComponent()
  }
  onLoadComponent() {
    this.props.onFetchNews()
  }
  onScrollNews() {
    if (window.pageYOffset + window.innerHeight > (document.body.scrollHeight - 116)) {
      this.props.onFetchNews(this.props.page)
      window.removeEventListener('scroll', this.onScrollNews)
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScrollNews)
  }
  componentDidUpdate() {
    window.addEventListener('scroll', this.onScrollNews)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollNews)
    newsItems.length = 0
    this.props.onGoAwayNews()
  }
  render() {
    this.props.news.list.map((article) => {
      newsItems.push(
        <NewsCard
          key={article.id}
          mainUrl={"news/" + article.id}
          mainImg={article.attributes.title_screenshot.mobile.url}
          title={article.attributes.title_ru}
          cityUrl={"/city/" + article.attributes.city_id}
          cityName={article.attributes.city_name_ru}
          date={article.attributes.created_at}
          user_id={article.attributes.user.id}
          user_avatar={article.attributes.user.avatar.thumb.url}
          user_name={article.attributes.user.name}
          like={article.attributes.news_like.voices}
          dislike={article.attributes.news_dislike.voices}
          views={article.attributes.views}/>
      );
    });
    return (
      <div className="container">
        <Masonry
          className="news"
          onScroll={this.onScrollNews.bind(this)}>
          {newsItems}
        </Masonry>
      </div>
    );
  }
}

News.propTypes = {
  onFetchNews: PropTypes.func.isRequired
}

export default News