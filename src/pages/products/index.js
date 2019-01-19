import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../../components/SEO";
import Typography from "@material-ui/core/Typography";
import Page from "../../components/Page";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const Products = props => {
  const products = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Products">
      <SEO title="Products" />
      <Grid
        spacing={24}
        container
        direction="row"
        alignItems="flex-start"
        justify="center"
      >
        {products.map(edge => {
          const {
            node: {
              excerpt,
              frontmatter: { path, title, image },
            },
          } = edge;
          return (
            <Grid item xs={12} md={6} key={path}>
              <Card>
                <CardMedia style={{ height: "200px" }} image={image} />
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
    </Page>
  );
};

export const query = graphql`
  query ProductsQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/products/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            image
          }
        }
      }
    }
  }
`;

export default Products;
