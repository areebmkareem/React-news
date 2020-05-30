import { newsFeed } from "../../actionTypes";

const IS_SUCESS = "ok";
const IS_FAIL = "error";

export const getNews = (isInitialFetch) => async (dispatch, getState) => {
  if (isInitialFetch)
    dispatch({ type: newsFeed.SET_IS_ARTICLE_LOADING, data: true });

  let articlesPerPage = await dispatch(paginateArticles());

  try {
    let URL = `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=${articlesPerPage}&apiKey=1ab3ef5e74654e1dbb6d2c457cb9474e`;

    let options = {
      method: "get",
    };
    let respone = await fetch(URL, options);
    let responsePayload = await respone.json();
    if (responsePayload.status === IS_FAIL) {
      dispatch({
        type: newsFeed.HANDLE_SNACKBAR,
        data: { open: true, message: responsePayload.message },
      });
      await dispatch({
        type: newsFeed.SET_NEWS_FEED,
        data: [],
        totalResults: 0,
      });
    }

    if (responsePayload.status === IS_SUCESS)
      await dispatch({
        type: newsFeed.SET_NEWS_FEED,
        data: responsePayload.articles,
        totalResults: responsePayload.totalResults,
      });

    return Promise.resolve();
  } catch (err) {
    dispatch({
      type: newsFeed.HANDLE_SNACKBAR,
      data: { open: true, message: JSON.stringify(err) },
    });
    dispatch({ type: newsFeed.SET_IS_ARTICLE_LOADING, data: false });
    return Promise.resolve();
  }
};

export const getComments = () => async (dispatch, getState) => {
  dispatch({ type: newsFeed.SET_IS_COMMENT_LOADING, data: true });

  try {
    let URL =
      "https://cors-anywhere.herokuapp.com/https://cookbookrecipes.in/test.php";
    let options = {
      method: "get",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    let respone = await fetch(URL, options);
    let responsePayload = await respone.json();
    dispatch({ type: newsFeed.SET_COMMENTS, data: responsePayload });
  } catch (err) {
    dispatch({
      type: newsFeed.HANDLE_SNACKBAR,
      data: { open: true, message: JSON.stringify(err) },
    });
    dispatch({ type: newsFeed.SET_IS_COMMENT_LOADING, data: false });
  }
};

export const paginateArticles = () => async (dispatch, getState) => {
  let page = getState() && getState().news.totalArticlesPage;
  let articlesPerPage = getState() && getState().news.totalArticlesPerPage;

  await dispatch({
    type: newsFeed.UPDATE_ARTILCE_PAGINATION,
    data: {
      totalArticlesPage: page + 1,
    },
  });
  return articlesPerPage * (page + 1);
};

export const getSavedArticlesFromLocal = () => async (dispatch, getState) => {
  dispatch({ type: newsFeed.SAVED_ARTICLES_LOADING, data: true });
  let data = localStorage.getItem("@savedArticles");
  let savedArticles = data ? JSON.parse(data) : {};
  dispatch({ type: newsFeed.SET_SAVED_ARTICLES, data: savedArticles });
};

export const upsertSavedArticles = (articleToUpdate) => async (
  dispatch,
  getState
) => {
  dispatch({ type: newsFeed.SAVED_ARTICLES_LOADING, data: true });
  let savedArticles = (getState() && getState().news.savedArticles) || {};
  // id is missing on some payloads

  let uniqueId = articleToUpdate.author + articleToUpdate.publishedAt;

  let articleAlreadyExist = savedArticles[uniqueId];

  if (articleAlreadyExist) delete savedArticles[uniqueId];
  else {
    savedArticles[uniqueId] = savedArticles[uniqueId] || {};
    savedArticles[uniqueId] = articleToUpdate;
  }

  dispatch({ type: newsFeed.SET_SAVED_ARTICLES, data: savedArticles });

  localStorage.setItem("@savedArticles", JSON.stringify(savedArticles));
  return Promise.resolve();
};
