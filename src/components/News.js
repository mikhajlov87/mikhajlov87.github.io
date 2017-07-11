import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import Masonry from 'react-masonry-component';
import NewsCard from '../components/NewsCard';

class News extends React.Component {
  onLoadComponent() {
    this.props.onFetchNews()
  }
  // onScrollNews() {
  //   if (window.pageYOffset + window.innerHeight > (document.body.scrollHeight - 116)) {
  //     this.props.onFetchNews()
  //   }
  // }
  componentWillMount() {
    this.onLoadComponent()
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScrollNews)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollNews)
  }
  render() {
    var newsItems = [];
    this.props.news.list.map((article) => {
      newsItems.push(
        <NewsCard
          key={article.id}
          mainUrl={"article/" + article.id}
          mainImg={article.attributes.title_screenshot.url}
          title={article.attributes.title_ru}
          cityUrl={"/city/" + article.attributes.city_id}
          cityName={article.attributes.city_name_ru}
          date={article.attributes.created_at}
          user={article.attributes.user}
          like={article.attributes.news_like.voices}
          dislike={article.attributes.news_dislike.voices}
          views={article.attributes.views}/>
      );
    });
    {/*return (
      <Masonry
        className="news"
        onScroll={this.onScrollNews}>
        {newsItems}
      </Masonry>
    );*/}
    return (
      <Masonry
        className="news">
        {newsItems}
      </Masonry>
    );
  }
}

News.propTypes = {
  onFetchNews: PropTypes.func.isRequired
}

function mapDispatchToProps(dispatch) {
  return({
    onScrollNews: () => {
      if (window.pageYOffset + window.innerHeight > (document.body.scrollHeight - 116)) {
        dispatch(this.props.actions.getNews(this.props.page))
      }
    }
  })
}

export default News