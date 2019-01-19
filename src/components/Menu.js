import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Button from "@material-ui/core/Button";

const Menu = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return (
    <>
      {menuLinks.map(link => (
        <Link key={link.name} to={link.link}>
          <Button style={{ color: "#fff" }}>{link.name}</Button>
        </Link>
      ))}
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
