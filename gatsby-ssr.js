// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby

const React = require("react"),
  { renderToString } = require("react-dom/server"),
  StylesProvider = require("@material-ui/styles/StylesProvider").default,
  getPageContext = require("./src/utils/getPageContext").default;

function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) {
  // Get the context of the page to collected side effects.
  const muiPageContext = getPageContext(),
    bodyHTML = renderToString(
      <StylesProvider sheetsRegistry={muiPageContext.sheetsRegistry}>
        {bodyComponent}
      </StylesProvider>
    );

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      type="text/css"
      id="jss-server-side"
      key="jss-server-side"
      dangerouslySetInnerHTML={{
        __html: muiPageContext.sheetsRegistry.toString(),
      }}
    />,
  ]);
}

exports.replaceRenderer = replaceRenderer;
