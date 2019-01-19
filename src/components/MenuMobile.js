import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import { DotsVertical } from "mdi-material-ui";

class MenuMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    const { menuLinks } = this.props.data.site.siteMetadata;
    return (
      <>
        <IconButton onClick={this.toggleMenu}>
          <DotsVertical style={{ color: "#efefef" }} />
        </IconButton>
        <ClickAwayListener onClickAway={this.toggleMenu}>
          <Menu open={this.state.menuActive} onClose={this.toggleMenu}>
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link}>
                <MenuItem>{link.name}</MenuItem>
              </Link>
            ))}
            <a
              href="https://github.com/bluepeter/gatsby-material-ui-business-starter"
              target="_blank"
              rel="noopener"
            >
              <MenuItem>Fork me on Github</MenuItem>
            </a>
          </Menu>
        </ClickAwayListener>
      </>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
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
    render={data => <MenuMobile active={props.active} data={data} />}
  />
);
