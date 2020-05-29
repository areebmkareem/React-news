import React from "react";
import { List, ListItem, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logoutUser } from "../../Store/Actions/Authentication";
const Profile = (props) => {
  return (
    <React.Fragment>
      <List>
        <ListItem button onClick={() => props.onLogoutUser()}>
          <Typography>Log out</Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
};

const mapsStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutUser: () => dispatch(logoutUser()),
  };
};
export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(withRouter(Profile));
