import React from "react";
import {} from "@material-ui/icons";
import {
  Grid,
  Backdrop,
  CircularProgress,
  Typography,
} from "@material-ui/core";

import FeedCard from "../Common/FeedCard";
import { getNews, getSavedArticlesFromLocal } from "../../Store/Actions/News";
import { connect } from "react-redux";
// import ArticleList from "../Molecules/ArticleList";

const Home = ({ articles, ...props }) => {
  React.useEffect(() => {
    getTopStories();
    props.getSavedArticlesFromLocal();
  }, []);

  const getTopStories = () => {
    props.getNews();
  };

  const { isArticlesLoading, totalArticles } = props;

  const handlePagination = () => {
    let isTotalArticlesReached = articles.length === totalArticles;

    if (!isTotalArticlesReached) getTopStories();
  };

  return (
    <Grid container direction="row" alignItems="stretch">
      {isArticlesLoading ? (
        <Grid
          item
          xs={12}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}>
          <Grid>
            <CircularProgress />
            <Typography variant="h5">
              Stiching your favourate articles...
            </Typography>
          </Grid>
        </Grid>
      ) : (
        articles.map((item, index) => (
          <Grid key={index} item xs={12}>
            <FeedCard article={item} savedArticles={props.savedArticles} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    isArticlesLoading: state.news.isArticlesLoading,
    articles: state.news.articles,
    totalArticlesPerPage: state.news.totalArticlesPerPage,
    totalArticlesPage: state.news.totalArticlesPage,
    totalArticles: state.news.totalArticles,
    savedArticles: state.news.savedArticles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => dispatch(getNews()),
    getSavedArticlesFromLocal: () => dispatch(getSavedArticlesFromLocal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
