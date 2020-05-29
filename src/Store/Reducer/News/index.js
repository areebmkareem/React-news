import { newsFeed } from "../../actionTypes";

const initialState = {
  articles: [],
  isArticlesLoading: true,
  isCommentsLoading: true,
  comments: [],
  totalArticlesPerPage: 5,
  totalArticlesPage: 0,
  totalArticles: 0,
  savedArticles: {},
  savedArticlesLoading: true,
  snackbarProps: {
    open: false,
    message: "test",
  },
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case newsFeed.SET_NEWS_FEED:
      return {
        ...state,
        articles: action.data,
        isArticlesLoading: false,
        totalArticles: action.totalResults,
      };
    case newsFeed.SET_COMMENTS:
      return {
        ...state,
        comments: action.data,
        isCommentsLoading: false,
      };
    case newsFeed.SET_SAVED_ARTICLES:
      return {
        ...state,
        savedArticles: action.data,
        savedArticlesLoading: false,
      };
    case newsFeed.SAVED_ARTICLES_LOADING:
      return {
        ...state,
        savedArticlesLoading: action.data,
      };
    case newsFeed.SET_IS_ARTICLE_LOADING:
      return {
        ...state,
        isArticlesLoading: action.data,
      };
    case newsFeed.SET_IS_COMMENT_LOADING:
      return {
        ...state,
        isCommentsLoading: action.data,
      };
    case newsFeed.UPDATE_ARTILCE_PAGINATION:
      return {
        ...state,
        ...action.data,
      };

    case newsFeed.HANDLE_SNACKBAR:
      return {
        ...state,
        snackbarProps: { ...state.snackbarProps, ...action.data },
      };
    default:
      return state;
  }
};

export default news;
