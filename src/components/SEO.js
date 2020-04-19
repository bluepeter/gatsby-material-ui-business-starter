import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const SEO = (props) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const title = props.title || data.site.siteMetadata.title;
      return (
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
        >
          <title>{title}</title>
          {props.children}
        </Helmet>
      );
    }}
  />
);

SEO.defaultProps = {
  keywords: [],
  lang: "en",
  meta: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
