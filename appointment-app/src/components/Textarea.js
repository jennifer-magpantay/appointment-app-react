import React from "react";

export const Textarea = ({
  labelText,
  id,
  name,
  rows,
  cols,
  value,
  inputChange,
}) => {
  function handleTextareaOnChange(event) {
    if (inputChange) {
      inputChange(event);
    }
  }
  return (
    <>
      <label htmlFor={name}>{labelText}</label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        cols={cols}
        value={value}
        onChange={handleTextareaOnChange}
      />
    </>
  );
};
