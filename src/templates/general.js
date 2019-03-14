import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import withRoot from "../utils/withRoot";

const Detail = ({ data }) => {
  const {
      title,
      image: { publicURL },
    } = data.markdownRemark.frontmatter,
    { html } = data.markdownRemark;
  return (
    <Page>
      <SEO title={title} />
      <Card>
        <CardMedia style={{ height: "200px" }} image={publicURL} />
        <CardContent>
          <Typography gutterBottom variant="h2" component="h2">
            {title}
          </Typography>
          <Typography dangerouslySetInnerHTML={{ __html: html }} />
        </CardContent>
      </Card>
    </Page>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          publicURL
        }
        title
        path
      }
      html
    }
  }
`;

export default withRoot(Detail);
