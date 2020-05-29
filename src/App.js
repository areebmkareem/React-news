import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./Components/Home";
import Comments from "./Components/Comments";
import { connect } from "react-redux";
import { isUserAuthenticated } from "./Store/Actions/Authentication";
import CustomizedSnackbars from "./Components/Common/SnackBar";

const PublicRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/comments/:title" exact component={Comments} />
    {/* <Route render={() => <Redirect to="/"></Redirect>} /> */}
  </Switch>
);

const App = (props) => {
  React.useEffect(() => {
    // props.OnAuthentication();
  }, []);

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="stretch"
      style={{ backgroundColor: "#D3D3D3" }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          position: "relative",
          backgroundColor: "white",
        }}>
        <PublicRoutes />
      </Grid>

      <CustomizedSnackbars />
    </Grid>
  );
};

const mapsStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    OnAuthentication: () => dispatch(isUserAuthenticated()),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(withRouter(App));
