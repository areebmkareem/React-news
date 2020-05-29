import React from "react";
import { Grid } from "@material-ui/core";

import FeedCard from "../Common/FeedCard";
import { connect } from "react-redux";
// import ArticleList from "../Molecules/ArticleList";

const BookMarkedArticles = ({ articles, ...props }) => {
  return (
    <Grid container>
      {articles.map((item, index) => (
        <Grid key={index} item xs={12}>
          <FeedCard article={item} savedArticles={props.savedArticles} />
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: Object.values(state.news.savedArticles),
    savedArticles: state.news.savedArticles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookMarkedArticles);
