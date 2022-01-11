import React from "react";
import { Input } from "./Input";

export const Form = ({ children, formSubmit }) => {
  function handleSubmit(event) {
    event.preventDefault();
    if (formSubmit) {
      formSubmit(event);
    }
  }
  return <form onSubmit={handleSubmit}>{children}</form>;
};
