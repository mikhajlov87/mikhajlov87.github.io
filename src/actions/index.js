import axios from 'axios'

export const GET_NEWS = 'GET_NEWS'
export const GET_NEWS_PENDING = 'GET_NEWS_PENDING'
export const GET_NEWS_FULFILLED = 'GET_NEWS_FULFILLED'
export const GET_NEWS_REJECTED = 'GET_NEWS_REJECTED'

export const GET_NEWS_ITEM = 'GET_NEWS_ITEM'
export const GET_NEWS_ITEM_PENDING = 'GET_NEWS_ITEM_PENDING'
export const GET_NEWS_ITEM_FULFILLED = 'GET_NEWS_ITEM_FULFILLED'
export const GET_NEWS_ITEM_REJECTED = 'GET_NEWS_ITEM_REJECTED'

export const GO_AWAY_NEWS = 'GO_AWAY_NEWS'

const URL = 'http://news.iuic.info/v1/news'

export function getNews(page = 1, per_page = 16) {
  let params = {
    page: page,
    per_page: per_page
  }
  const request = axios.get(URL, { params: params })
  return {
    type: GET_NEWS,
    payload: request
  }
}

export function getNewsItem(id) {
  const itemURL = URL + "/" + id
  const request = axios.get(itemURL)
  return {
    type: GET_NEWS_ITEM,
    payload: request
  }
}

export function goAwayNews() {
  return {
    type: GO_AWAY_NEWS
  }
}