import ReactDOM from "react-dom";

export const replaceHydrateFunction = () => (element, container, callback) =>
  ReactDOM.render(element, container, callback);
