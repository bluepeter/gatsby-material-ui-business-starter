import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { GithubCircle } from "mdi-material-ui";

const Menu = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <>
      {menuLinks.map(link => (
        <Link key={link.name} to={link.link}>
          <Button style={{ color: "#fff" }}>{link.name}</Button>
        </Link>
      ))}
      <a
        href="https://github.com/bluepeter/gatsby-material-ui-business-starter"
        target="_blank"
        rel="noopener"
      >
        <IconButton style={{ color: "#fff" }}>
          <GithubCircle />
        </IconButton>
      </a>
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);
