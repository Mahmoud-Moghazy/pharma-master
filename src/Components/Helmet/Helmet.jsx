import React from "react";

const Helmet = (props) => {
  document.title = "PHARMACY HUB - " + props.title;

  // No need to wrap props.children in a div
  return (
    <>
      <div className="w-100">{props.children}</div>
    </>
  );
};

export default Helmet;
