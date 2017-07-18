import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'

import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import MainContent from '../components/News/MainContent';
import Footer from '../components/Footer';

class Article extends Component {
  onLoadComponent() {
    let newsId = this.props.location.pathname.match(/\d+/g);
    this.props.actions.getNewsItem(newsId)
  }
  componentWillMount() {
    this.onLoadComponent()
  }
  render() {
    let isEmptyState = !isEmpty(this.props.newsItem)
    return (
      <div>
        <TopBar/>
        <NavBar/>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-3 col-lg-3"></div>
            <div className="col-sm-5 col-md-7 col-lg-7">
              {isEmptyState ? 
                <MainContent
                  title={this.props.newsItem.title_ru}
                  youtube_link={this.props.newsItem.youtube_link}
                  image_count={this.props.newsItem.screenshots_count}
                  main_image={this.props.newsItem.title_screenshot}
                  description={this.props.newsItem.description_ru}
                  user_name={this.props.newsItem.user.name}
                  user_link={"/users/" + this.props.newsItem.user.id}
                  user_avatar={this.props.newsItem.user.avatar.thumb.url}
                  date={this.props.newsItem.user.updated_at}
                  like={this.props.newsItem.news_like.voices}
                  dislike={this.props.newsItem.news_dislike.voices}
                  views={this.props.newsItem.views}
                  />
                : <h3>Loading...</h3>
              }
            </div>
            <div className="col-sm-3 col-md-2 col-lg-2"></div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    newsItem: state.newsItem.content
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)