import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  cardActions: {
    float: "right",
  },
};

const MyCard = ({
  children,
  classes,
  title,
  subheader,
  avatar,
  action,
  style = {},
}) => (
  <Card style={style}>
    <CardHeader
      avatar={avatar ? avatar : null}
      subheader={subheader ? subheader : null}
      title={title}
    />
    <CardContent>{children}</CardContent>
    <CardActions className={classes.cardActions}>{action}</CardActions>
  </Card>
);

export default withStyles(styles)(MyCard);
