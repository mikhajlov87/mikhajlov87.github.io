import React from 'react';
import Masonry from 'react-masonry-component';
import NewsCard from '../components/NewsCard';

export default class News extends React.Component {
  render() {
    return (
      <Masonry className="news">
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
      </Masonry>
    );
  }
};