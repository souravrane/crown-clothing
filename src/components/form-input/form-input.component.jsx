import React from "react";

import "./form-input.styles.scss";

export const FormInput = ({ handleChange, label, ...rest }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...rest} />
      {label ? (
        <label
          className={`${rest.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
