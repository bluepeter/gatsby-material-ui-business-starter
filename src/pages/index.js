import React from "react";
import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { Gift } from "mdi-material-ui";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../utils/withRoot";

const styles = theme => ({
    root: {
      backgroundColor: "#9c27b0",
      fontSize: "2em",
    },
  }),
  Home = props => {
    const markdown = props.data.allMarkdownRemark.edges;
    return (
      <Page title="Gatsby Material UI Business Starter">
        <SEO title="Home">
          <meta
            name="description"
            content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
          />
        </SEO>
        <Grid
          spacing={24}
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item xs={12} md={10} className={props.classes.root}>
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
              <Carousel items={markdown} />
            </Card>
          </Grid>
        </Grid>
      </Page>
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
