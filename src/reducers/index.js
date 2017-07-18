import { 
  GET_NEWS_PENDING,
  GET_NEWS_FULFILLED,
  GET_NEWS_REJECTED,
  GET_NEWS_ITEM_PENDING,
  GET_NEWS_ITEM_FULFILLED,
  GET_NEWS_ITEM_REJECTED,
  GO_AWAY_NEWS } from '../actions'

const initialState = {
  news: {
    list: [],
    page: 1,
    noResults: false,
    pending: false,
    error: false
  },
  newsItem: {
    content: {},
    pending: false,
    error: false
  }
}

export default function newsState(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS_FULFILLED:
      let data = action.payload.data.data
      let newsArray = []
      data.forEach(function(article) {
        newsArray.push(article)
      })
      return { ...state,
        news: {
          ...state.news,
          list: newsArray,
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
    case GO_AWAY_NEWS: 
      return { ...state,
        news: {
          ...state.news,
          page: 1
        }
      }
    case GET_NEWS_ITEM_FULFILLED:
      return { ...state,
        newsItem: {
          ...state.newsItem,
          content: action.payload.data.data.attributes,
          pending: false,
          error: false
        }
      }
    case GET_NEWS_ITEM_PENDING:
      return { ...state,
        newsItem: {
          ...state.newsItem,
          content: {},
          pending: true,
          error: false
        }
      }
    case GET_NEWS_ITEM_REJECTED:
      return {...state,
        newsItem: {
          ...state.newsItem,
          pending: false,
          error: true
        }
      }
    default:
      return state
  }
}