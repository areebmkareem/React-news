import React from "react";
import { Grid } from "@material-ui/core";
// import CircleCard from "../Common/Cards/CircleCard";

const Circles = () => {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="stretch"
        style={{ marginBottom: 30, padding: 10 }}>
        {Array(5)
          .fill()
          .map((data, index) => {
            return (
              <Grid item key={index} style={{ margin: 5 }}>
                {/* <CircleCard></CircleCard> */}
              </Grid>
            );
          })}
      </Grid>
    </React.Fragment>
  );
};

export default Circles;
