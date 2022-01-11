import React from "react";

export const Button = ({ type, children, buttonClick }) => {
  function handleButtonOnClick(event) {
    if (buttonClick) {
      event.persist();
      buttonClick(event);
    }
  }

  return (
    <button type={type} onClick={handleButtonOnClick}>
      {children}
    </button>
  );
};
