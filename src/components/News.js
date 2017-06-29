import React from 'react';
import { CardColumns } from 'reactstrap';
import NewsCard from '../components/NewsCard';

export default class News extends React.Component {
  render() {
    return (
      <CardColumns className="news container-fluid">
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
      </CardColumns>
    );
  }
};