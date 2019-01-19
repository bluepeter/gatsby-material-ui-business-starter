import React from "react";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Row, Col } from "react-flexbox-grid";
import Typography from "@material-ui/core/Typography";
import withRoot from "../utils/withRoot";
import "../css/style.styl";

class Page extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <SEO />
        <Header />
        <Grid style={{ marginTop: "94px" }}>
          <Row>
            <Col xs={12}>
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
            </Col>
          </Row>
        </Grid>
      </>
    );
  }
}

export default withRoot(Page);
