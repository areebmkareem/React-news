import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { getComments } from "../../Store/Actions/News";
import { connect } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Header from "../Common/AppBar";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

function Comments({ comments, isCommentsLoading, ...props }) {
  React.useEffect(() => {
    props.getComments();
  }, []);

  const classes = useStyles();
  console.log(comments);
  return (
    <>
      <Header />
      <Grid container style={{ marginTop: 56 }}>
        <Grid item xs={12}>
          {isCommentsLoading ? (
            <Grid container>
              <Grid item>
                <CircularProgress />
              </Grid>
            </Grid>
          ) : comments && comments.length ? (
            <List className={classes.root}>
              {comments.map((item, index) => (
                <ListItem key={index} alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary">
                          Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                      </React.Fragment>
                    }
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Grid container>
              <Grid item>
                <Typography>No Comments</Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isCommentsLoading: state.news.isCommentsLoading,
    comments: state.news.comments,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getComments: () => dispatch(getComments()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
