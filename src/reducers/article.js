import {
  ARTICLE_REQUEST,
  ARTICLE_SUCCESS,
  ARTICLE_FAILURE,
  ARTICLE_CLEAR
} from "../actions/article";

const initialState = {
  data: {},
  gettingArticle: false,
  gettingArticleError: null
};

function initializeState() {
  return Object.assign({}, initialState);
}

export default function article(state = initializeState(), action = {}) {
  switch (action.type) {
    case ARTICLE_REQUEST:
      return Object.assign({}, state, {
        gettingArticle: true,
        gettingArticleError: null
      });
    case ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        gettingArticle: false,
        gettingArticleError: null
      });
    case ARTICLE_FAILURE:
      return {
        ...state,
        data: {},
        gettingArticle: false,
        gettingArticleError: action.error
      };
    case ARTICLE_CLEAR:
      return {
        ...state,
        data: {},
        gettingArticle: false,
        gettingArticleError: null
      };
    default:
      return state;
  }
}
