import axios from 'axios'

export const GET_NEWS = 'GET_NEWS'
export const GET_NEWS_PENDING = 'GET_NEWS_PENDING'
export const GET_NEWS_FULFILLED = 'GET_NEWS_FULFILLED'
export const GET_NEWS_REJECTED = 'GET_NEWS_REJECTED'

const URL = 'http://news.iuic.info/v1/news'

export function getNews(page = 1, per_page = 12) {
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