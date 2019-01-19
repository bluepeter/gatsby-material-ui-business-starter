import React from "react";
import { graphql, withPrefix, Link } from "gatsby";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { Gift, Rocket } from "mdi-material-ui";

const Home = props => {
  const markdown = props.data.allMarkdownRemark.edges,
    json = props.data.allFeaturesJson.edges;
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
        <Grid item xs={12} md={8}>
          <Card
            title="Our Products"
            avatar={
              <Avatar>
                <Gift />
              </Avatar>
            }
            action={
              <>
                <Button variant="contained" color="secondary">
                  <Link to="/products">View All Products</Link>
                </Button>
              </>
            }
          >
            <Carousel items={markdown} />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title="Features"
            avatar={
              <Avatar>
                <Rocket />
              </Avatar>
            }
          >
            {json.map(edge => (
              <div key={edge.node.id}>
                <Typography variant="h5" component="h5">
                  {edge.node.title}
                </Typography>
                {edge.node.description}
              </div>
            ))}
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
    allFeaturesJson {
      edges {
        node {
          id
          title
          description
        }
      }
    }
  }
`;

export default Home;
