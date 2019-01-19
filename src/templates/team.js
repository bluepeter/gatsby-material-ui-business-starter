import React from "react";
import { graphql, withPrefix } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Detail = ({ data }) => {
  const { title, image, jobtitle } = data.markdownRemark.frontmatter,
    { html } = data.markdownRemark;
  return (
    <Page>
      <SEO title={title} />
      <Paper>
        <Grid
          spacing={24}
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item xs={12} md={4}>
            <img style={{ width: "100%" }} src={withPrefix(image)} alt="" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography gutterBottom variant="h2" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h5">
              {jobtitle}
            </Typography>
            <Typography dangerouslySetInnerHTML={{ __html: html }} />
          </Grid>
        </Grid>
      </Paper>
    </Page>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        path
        image
        jobtitle
      }
      html
    }
  }
`;

export default Detail;
