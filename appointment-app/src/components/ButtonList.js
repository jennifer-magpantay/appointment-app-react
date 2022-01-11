import React from "react";
// components
import { Button } from "./Button";

export const ButtonList = ({ data, buttonClick }) => {
  return (
    <ul>
      {data.map(({ id, type, text }) => (
        <li key={id} data-id={id}>
          <Button type={type} buttonClick={buttonClick}>
            {text}
          </Button>
        </li>
      ))}
    </ul>
  );
};
