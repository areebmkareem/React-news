import { newsFeed } from "../../actionTypes";

const IS_SUCESS = "ok";

export const getNews = (isInitialFetch) => async (dispatch, getState) => {
  if (isInitialFetch)
    dispatch({ type: newsFeed.SET_IS_ARTICLE_LOADING, data: true });

  let articlesPerPage = await dispatch(paginateArticles());

  try {
    let URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=${articlesPerPage}&apiKey=${process.env.NEWS_API_KEY}`;

    console.log("URL: ", URL);

    let options = { method: "get" };
    let respone = await fetch(URL, options);
    let responsePayload = await respone.json();

    if (responsePayload.status === IS_SUCESS)
      dispatch({
        type: newsFeed.SET_NEWS_FEED,
        data: responsePayload.articles,
        totalResults: responsePayload.totalResults,
      });
  } catch (err) {
    dispatch({ type: newsFeed.SET_IS_ARTICLE_LOADING, data: false });
  }
};

export const getComments = () => async (dispatch, getState) => {
  dispatch({ type: newsFeed.SET_IS_COMMENT_LOADING, data: true });

  try {
    let URL = "https://cookbookrecipes.in/test.php";
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
