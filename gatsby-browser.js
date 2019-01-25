import ReactDOM from "react-dom";

export const replaceHydrateFunction = () => {
  return (element, container, callback) => {
    ReactDOM.render(element, container, callback);
  };
};
