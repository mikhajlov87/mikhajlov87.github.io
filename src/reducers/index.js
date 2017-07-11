import { 
  GET_NEWS_PENDING,
  GET_NEWS_FULFILLED,
  GET_NEWS_REJECTED } from '../actions'

const initialState = {
  news: {
    list: [],
    page: 1,
    hasMoreNews: false,
    noResults: false,
    pending: false,
    error: false
  }
}

export default function newsState(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_FULFILLED:
      let data = action.payload.data.data
      data.forEach(function(article) {
        state.news.list.push(article)
      })
      return { ...state,
        news: {
          ...state.news,
          list: state.news.list,
          page: ++state.news.page,
          noResults: !data,
          pending: false,
          error: false
        }
      }
    case GET_NEWS_PENDING:
      return { ...state,
        news: { 
          ...state.news,
          list: [],
          pending: true
        }
      }
    case GET_NEWS_REJECTED:
      return {...state,
        news: {
          ...state.news,
          pending: false,
          error: true
        }
      }
    default:
      return state
  }
}