import React from "react";
import { Link } from "gatsby";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withPrefix } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  cardMedia: {
    height: "200px"
  }
};

const List = props => {
  const { classes } = props;
  return (
    <Grid
      spacing={24}
      container
      direction="row"
      alignItems="flex-start"
      justify="center"
    >
      {props.items.map(edge => {
        const {
          node: {
            excerpt,
            frontmatter: {
              path,
              title,
              image: { publicURL },
            },
          },
        } = edge;
        return (
          <Grid item xs={12} md={6} key={path}>
            <Card>
              <CardMedia
                className={classes.cardMedia}
                image={withPrefix(publicURL)}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  <Link to={path}>{title}</Link>
                </Typography>
                <Typography component="p">{excerpt}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(styles)(List);
