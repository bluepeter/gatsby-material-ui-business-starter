import withRoot from "../utils/withRoot";
import React from "react";
import Page from "../components/Page";

const Component = () => {
  return (
    <Page title="Not Found">
      <p>Hey! You just hit a page that doesn't exist...</p>
    </Page>
  );
};

export default withRoot(Component);
