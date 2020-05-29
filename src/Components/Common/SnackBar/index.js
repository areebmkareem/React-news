import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { newsFeed } from "../../../Store/actionTypes";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomizedSnackbars = ({ snackbarProps, ...props }) => {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;

    props.handleSnackBarClose();
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={snackbarProps.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snackbarProps.message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }></Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    snackbarProps: state.news.snackbarProps,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSnackBarClose: () =>
      dispatch({ type: newsFeed.HANDLE_SNACKBAR, data: { open: false } }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizedSnackbars);
