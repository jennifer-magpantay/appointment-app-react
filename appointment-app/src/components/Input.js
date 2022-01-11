import React from "react";

export const Input = ({
  labelText,
  type,
  id,
  name,
  value,
  inputChange,
  ...props
}) => {
  function handleInputChange(event) {
    if (inputChange) {
      inputChange(event);
    }
  }
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
        {...props}
      />
    </>
  );
};
