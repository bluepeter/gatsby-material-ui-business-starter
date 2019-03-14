# Gatsby Material UI Business Starter

**[Check out the demo.](https://bluepeter.github.io/gatsby-material-ui-business-starter/)**

Stripped-down Gatsby small business starter that uses the well-maintained and
beautiful [Material UI](https://material-ui.com/) React.js project. Fully
configured to reliably work with this powerful library out-of-the-box, in PROD,
and in DEV with hot-reloading.

<img width="1472" alt="screen shot 2019-01-19 at 12 48 22 am"
src="https://user-images.githubusercontent.com/2158187/51424533-07159a00-1b84-11e9-8dd8-59707e213639.png">
<img width="1472" alt="screen shot 2019-01-19 at 12 48 30 am"
src="https://user-images.githubusercontent.com/2158187/51424532-07159a00-1b84-11e9-9b29-347a59e022b4.png">
<img width="1472" alt="screen shot 2019-01-19 at 12 48 42 am"
src="https://user-images.githubusercontent.com/2158187/51424531-07159a00-1b84-11e9-81d3-afd2280fab10.png">
<img width="1472" alt="screen shot 2019-01-19 at 12 48 34 am"
src="https://user-images.githubusercontent.com/2158187/51424530-07159a00-1b84-11e9-9844-2d99d5a050c2.png">

- [Material UI](https://material-ui.com/): the world's most popular Material
  Design React.js framework
- [Stylus for CSS](http://stylus-lang.com/)
- [Material Design icons](https://materialdesignicons.com/)
- Relatively bare: we don't burden the project with a lot of complex hoopla

For something a bit simpler that also uses Material UI, check out our [Tiny
Agency starter](https://github.com/foxandgeese/tiny-agency).

## Structure

- Edit contact detail and menu items in
  [`gatsby-config.json`](https://github.com/bluepeter/gatsby-material-ui-business-starter/blob/master/gatsby-config.js).
- Want to add a new product? Just add a new markdown file in
  [`products`](https://github.com/bluepeter/gatsby-material-ui-business-starter/tree/master/src/pages/products)
  and it will automatically be included.

### Styling

You can use CSS in two different ways:

- Edit the Stylus file
  [`style.styl`](https://github.com/bluepeter/gatsby-material-ui-business-starter/blob/master/src/css/style.styl)
  directly to add classes/etc. You can then adjust components to use these
  classes.
- Use Material UI's `withStyles()` to override and dynamically set classes from
  within each component. For an example of how to do this, please see
  [`HomeFeatures.js`](https://github.com/bluepeter/gatsby-material-ui-business-starter/blob/master/src/components/HomeFeatures.js),
  including getting and using theme colors.

You can adjust the theme palette colors in
[`getPageContext.js`](https://github.com/bluepeter/gatsby-material-ui-business-starter/blob/master/src/utils/getPageContext.js).

## Deployment

```
yarn
```

To build, watch for file edits and hot-reload, and run locally:

```
yarn run develop
```

To build for PROD:

```
yarn run build
```

While you could run `gatsby` commands directly, it is preferable to use `yarn run` (and see corresponding scripts in `package.json`) so as to avoid
differences between local and global `gatsby` versions. ([See the CLI
instructions for more details](https://www.npmjs.com/package/gatsby-cli).)
