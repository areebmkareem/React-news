import React from "react";
import { List, ListItem, Grid } from "@material-ui/core";
// import StoryCard from "../Common/Cards/StoryCard";
const Stories = () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="stretch"
        style={{ padding: 10, marginBottom: 30 }}>
        <Grid item>
          <List disablePadding>
            {Array(10)
              .fill()
              .map((data, index) => {
                return (
                  <ListItem disableGutters key={index} alignItems="flex-start">
                    {/* <StoryCard></StoryCard> */}
                  </ListItem>
                );
              })}
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Stories;
