import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Grid, Typography } from "@material-ui/core";
import "../css/style.styl";

class Page extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <Header />
        <Grid container justify="center" style={{ marginTop: 94 }}>
          <Grid item style={{ maxWidth: 'calc(100% - 60px)'}}>
            {title ? (
              <Typography
                variant="h2"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                {title}
              </Typography>
            ) : null}
            {children}
            <Footer />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Page;
