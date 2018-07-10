import React from "react";

export const Button = props => {
  const { className, func, childText } = props;
  return (
    <div>
      {className !== undefined &&
        func === undefined && (
          <button className={className}>{childText}</button>
        )}
      {className !== undefined &&
        func !== undefined && (
          <button className={className} onClick={func}>
            {childText}
          </button>
        )}
    </div>
  );
};
