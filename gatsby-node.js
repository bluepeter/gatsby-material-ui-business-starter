const path = require("path"),
  fs = require("fs");

// Create pages from markdown files.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return Promise.all(
    ["products", "team"].map(async item => {
      const result = await graphql(
        `
        query {
          ${item}: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/${item}/" } }
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  date(formatString: "DD MMMM YYYY")
                }
                excerpt
              }
            }
          }
        }
      `
      );
      return Promise.all(
        result.data[item].edges.map(({ node }) => {
          const component = fs.existsSync(`src/templates/${item}.js`)
            ? // Use specific template for item, e.g., products.js, if it exists.
              path.resolve(`src/templates/${item}.js`)
            : // Or use general template.
              path.resolve(`src/templates/general.js`);
          return createPage({
            component,
            path: node.frontmatter.path,
            context: { id: node.id },
          });
        })
      );
    })
  );
};
