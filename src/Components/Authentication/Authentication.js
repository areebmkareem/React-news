import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registerUser, loginUser } from "../../Store/actions/Authentication";

const Login = ({ handleOnchange }) => {
  return (
    <React.Fragment>
      <Grid item>
        <TextField variant="outlined" onChange={e => handleOnchange(e)} type="email" name="email" fullWidth label="Email"></TextField>
      </Grid>
      <Grid item>
        <TextField variant="outlined" onChange={e => handleOnchange(e)} type="password" name="password" fullWidth label="Password"></TextField>
      </Grid>
    </React.Fragment>
  );
};
const SignUp = ({ handleOnchange }) => {
  return (
    <React.Fragment>
      <Grid item>
        <TextField variant="outlined" onChange={e => handleOnchange(e)} name="name" type="text" fullWidth label="Name"></TextField>
      </Grid>
      <Grid item>
        <TextField variant="outlined" onChange={e => handleOnchange(e)} type="email" name="email" fullWidth label="Email"></TextField>
      </Grid>
      <Grid item>
        <TextField variant="outlined" onChange={e => handleOnchange(e)} type="password" name="password" fullWidth label="Password"></TextField>
      </Grid>
    </React.Fragment>
  );
};
const Register = props => {
  const [data, setData] = React.useState({ name: "", email: "", password: "" });
  const [authValue, setAuthValue] = React.useState(0);
  const handleOnchange = event => {
    const { name, value } = event.target;
    let dataClone = data;
    dataClone[name] = value;
    setData(data);
  };

  const handleOnClick = authAction => {
    console.log({ authAction });
    if (authAction === 0) props.OnLoginUser(data);
    else if (authAction === 1) props.OnRegisterUser(data);
  };
  return (
    <React.Fragment>
      <Grid container direction="column" spacing={2} justify="center" alignItems="stretch" style={{ textAlign: "center", height: "99vh", padding: 10 }}>
        <Grid item>
          <Typography variant="h3" color="textSecondary">
            Circle
          </Typography>
        </Grid>
        {authValue === 0 && <Login handleOnchange={handleOnchange} />}
        {authValue === 1 && <SignUp handleOnchange={handleOnchange} />}

        <Grid item>
          <Typography color="primary">{authValue === 0 ? <span onClick={() => setAuthValue(1)}>Create Account?</span> : <span onClick={() => setAuthValue(0)}>Login?</span>}</Typography>
        </Grid>

        <Grid item>
          <Button variant="contained" color="primary" onClick={() => handleOnClick(authValue)}>
            {authValue === 0 ? "Log in" : "Sign up"}
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapsStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    OnLoginUser: data => dispatch(loginUser(data)),
    OnRegisterUser: data => dispatch(registerUser(data))
  };
};
export default connect(
  mapsStateToProps,
  mapDispatchToProps
)(withRouter(Register));
