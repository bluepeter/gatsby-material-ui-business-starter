import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const MyCard = ({ children, title, subheader, avatar, action, style = {} }) => (
  <Card style={style}>
    <CardHeader
      avatar={avatar ? avatar : null}
      title={title}
      subheader={subheader ? subheader : null}
    />
    <CardContent>{children}</CardContent>
    <CardActions style={{ float: "right" }}>{action}</CardActions>
  </Card>
);

export default MyCard;
