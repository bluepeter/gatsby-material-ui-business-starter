import React from "react";
import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Row, Col } from "react-flexbox-grid";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";
import "../css/style.styl";
import withRoot from "../utils/withRoot";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

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
