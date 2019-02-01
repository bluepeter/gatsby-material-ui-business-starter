import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const Footer = props => {
  const {
    title,
    contact: { email, phone },
  } = props.data.site.siteMetadata;
  return (
    <>
      <Divider style={{ marginTop: "48px", marginBottom: "24px" }} />
      <footer
        style={{ marginBottom: "24px", whiteSpace: "nowrap" }}
        id="footer"
      >
        <span>
          <Typography variant="caption" component="span">
            ©{new Date().getFullYear()} {title}{" "}
            <Hidden only={["xs", "sm"]}>–</Hidden>
            <Hidden only={["xl", "lg", "md"]}>
              <br />
            </Hidden>{" "}
            {email} – {phone}
          </Typography>
        </span>
      </footer>
    </>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
