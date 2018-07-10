import React from "react";

export const InputText = props => {
  const { fieldHeading, type, className, name, value, func } = props;
  return (
    <div>
      <label htmlFor={name}>{fieldHeading}</label>
      <input
        type={type}
        className={className}
        name={name}
        value={value}
        onChange={func}
      />
    </div>
  );
};
