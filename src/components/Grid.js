import React from "react";
import Grid from "@material-ui/core/Grid";

const MyGrid = props => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Grid item xs={12} md={10}>
      {props.children}
    </Grid>
  </Grid>
);

export default MyGrid;
