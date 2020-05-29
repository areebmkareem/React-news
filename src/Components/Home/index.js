import React from "react";
import Stories from "../Stories/Stories";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Paper,
} from "@material-ui/core";
import {
  Home as HomeIcon,
  Bookmark,
  RadioButtonUncheckedTwoTone,
} from "@material-ui/icons";
import Circles from "../Circles";
import ArticleList from "../ArticleList";
import BookMarkedArticles from "../BookMarkedArticles";
import AppBar from "../Common/AppBar";

const Home = () => {
  const [value, setValue] = React.useState(0);
  return (
    <React.Fragment>
      <AppBar />
      <Grid container alignItems="stretch" style={{ margin: "56px 0px" }}>
        <Grid item xs={12}>
          {value === 0 && <ArticleList />}
          {value === 2 && <BookMarkedArticles />}
        </Grid>
      </Grid>

      {/* Bottom Navigations */}
      <Paper
        elevation={2}
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction
            label="Circles"
            icon={<RadioButtonUncheckedTwoTone />}
          />

          <BottomNavigationAction label="BookMarks" icon={<Bookmark />} />
        </BottomNavigation>
      </Paper>
    </React.Fragment>
  );
};

export default Home;
