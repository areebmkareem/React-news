import React from "react";
import { Grid, Typography } from "@material-ui/core";

import FeedCard from "../Common/FeedCard";
import { connect } from "react-redux";
// import ArticleList from "../Molecules/ArticleList";

const BookMarkedArticles = ({ articles, ...props }) => {
  return (
    <Grid container>
      {articles && articles.length ? (
        articles.map((item, index) => (
          <Grid key={index} item xs={12}>
            <FeedCard article={item} savedArticles={props.savedArticles} />
          </Grid>
        ))
      ) : (
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
          <Typography variant="h5">No bookmarks yet!</Typography>
        </Grid>
      )}
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
