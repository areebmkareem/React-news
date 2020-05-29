import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Telegram from "@material-ui/icons/Telegram";
import Camera from "@material-ui/icons/Camera";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ isPush, title }) {
  const classes = useStyles();
  let history = useHistory();

  const onClickHandle = () => {
    if (isPush) history.goBack();
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: "white" }}>
        <Toolbar>
          <IconButton
            onClick={() => onClickHandle()}
            edge="start"
            className={classes.menuButton}
            color="default"
            aria-label="menu">
            {isPush ? <ArrowBack /> : <Camera />}
          </IconButton>
          <Typography
            variant="h6"
            color="textSecondary"
            className={classes.title}>
            {title || "Instagram"}
          </Typography>
          <IconButton edge="start" color="default" aria-label="menu">
            <Telegram />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
