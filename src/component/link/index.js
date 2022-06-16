import React from "react";
import "./link.scss";

function Link({ title, ...rest }) {
  return (
    <div className="link" {...rest}>
      {title}
    </div>
  );
}

export default Link;
