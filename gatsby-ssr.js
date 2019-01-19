// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby

const React = require("react");
const { renderToString } = require("react-dom/server");
const JssProvider = require("react-jss/lib/JssProvider").default;
const getPageContext = require("./src/utils/getPageContext").default;

function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) {
  // Get the context of the page to collected side effects.
  const muiPageContext = getPageContext();

  const bodyHTML = renderToString(
    <JssProvider registry={muiPageContext.sheetsRegistry}>
      {bodyComponent}
    </JssProvider>
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
