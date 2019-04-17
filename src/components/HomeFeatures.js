import React from "react";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import withStyles from "@material-ui/styles/withStyles";
import { Robot } from "mdi-material-ui";

const styles = theme => ({
    featureChip: {
      fontSize: "16px",
      backgroundColor: "#fff",
      border: "1pt solid #eee",
    },
    featureChipRight: {
      fontSize: "16px",
      backgroundColor: "#fff",
      border: "1pt solid #eee",
      float: "right",
    },
    featureGrid: {
      marginBottom: "25px",
    },
    avi: {
      width: "40px",
      height: "40px",
      color: "#fff",
      backgroundColor: theme.palette.secondary.light,
    },
  }),
  HomeFeatures = props => {
    return (
      <Grid
        spacing={24}
        container
        justify="center"
        className={props.classes.featureGrid}
      >
        <Grid item md={6}>
          <Chip
            className={props.classes.featureChipRight}
            avatar={
              <Avatar className={props.classes.avi}>
                <Robot />
              </Avatar>
            }
            label="Uses Material UI"
          />
        </Grid>
        <Grid item md={6}>
          <Chip
            className={props.classes.featureChip}
            avatar={
              <Avatar className={props.classes.avi}>
                <Robot />
              </Avatar>
            }
            label="Uses Material Icons"
          />
        </Grid>
      </Grid>
    );
  };

HomeFeatures.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeFeatures);
