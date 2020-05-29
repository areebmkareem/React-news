import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Telegram from "@material-ui/icons/Telegram";
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";
import Bookmark from "@material-ui/icons/Bookmark";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";
import { truncateString } from "../../../Utils";
import { connect } from "react-redux";
import { upsertSavedArticles } from "../../../Store/Actions/News";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: 0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const StringLengthLimit = 50;

const FeedCard = ({ article, ...props }) => {
  const classes = useStyles();
  const [isTruncateEnabled, setIsTruncatedEnabled] = React.useState(true);
  const [forceRerender, setForceReRender] = React.useState(false);

  let history = useHistory();

  const handleClick = (title) => {
    history.push(`/comments/${title}`);
  };

  const handleBookMarkChange = async (articleToUpdateBookmark) => {
    await props.upsertSavedArticles(articleToUpdateBookmark);
    setForceReRender(!forceRerender);
  };

  let uniqueId = article.author + article.publishedAt;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {(article.author || "Unknown Source")[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={article.author || "Unknown Source"}
      />
      <CardMedia
        component="image"
        className={classes.media}
        image={article.urlToImage}
        title={article.title}
      />

      <CardContent>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}>
          <Grid>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ChatBubble />
            </IconButton>
            <IconButton aria-label="send">
              <Telegram />
            </IconButton>
          </Grid>
          <Grid>
            <IconButton onClick={() => handleBookMarkChange(article)}>
              {props.savedArticles[uniqueId] ? (
                <Bookmark />
              ) : (
                <BookmarkBorder />
              )}
            </IconButton>
          </Grid>
        </Grid>

        <Typography variant="body2" color="textSecondary" component="p">
          <span style={{ fontWeight: "bold" }}>{article.author}</span>{" "}
          {truncateString(article.title, StringLengthLimit, isTruncateEnabled)}{" "}
          {isTruncateEnabled && (
            <span
              style={{ cursor: "pointer" }}
              onClick={() => setIsTruncatedEnabled(!isTruncateEnabled)}>
              more
            </span>
          )}
        </Typography>

        <Typography
          style={{ cursor: "pointer" }}
          variant="body2"
          color="textSecondary"
          component="p"
          onClick={() => handleClick(article.title)}>
          View Comments
        </Typography>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    upsertSavedArticles: (payload) => dispatch(upsertSavedArticles(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedCard);
