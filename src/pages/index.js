import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import HomeFeatures from "../components/HomeFeatures";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { Gift } from "mdi-material-ui";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../utils/withRoot";
import Hidden from "@material-ui/core/Hidden";

const styles = theme => ({
    root: {
      backgroundColor: "#9c27b0",
    },
  }),
  Home = props => {
    const products = props.data.allMarkdownRemark.edges;
    return (
      <Hidden implementation="css">
        <Page title="Gatsby Material UI Business Starter">
          <SEO title="Home">
            <meta
              name="description"
              content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
            />
          </SEO>

          <HomeFeatures />
          <Grid
            spacing={24}
            container
            direction="row"
            alignItems="flex-start"
            justify="center"
          >
            <Grid item xs={12} md={10} style={{ minHeight: "523px" }}>
              <Card
                title="Our Products"
                avatar={
                  <Avatar>
                    <Gift />
                  </Avatar>
                }
                action={
                  <>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={props.classes.root}
                    >
                      <Link to="/products">View All Products</Link>
                    </Button>
                  </>
                }
              >
                <Carousel items={products} />
              </Card>
            </Grid>
          </Grid>
        </Page>
      </Hidden>
    );
  };

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM YYYY")
            image
          }
          excerpt
        }
      }
    }
  }
`;

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));
