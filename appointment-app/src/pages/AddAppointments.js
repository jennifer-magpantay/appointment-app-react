import React, { useState } from "react";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";

const INPUT_FORM = {
  pet_name: "",
  pet_gender: "",
  owner_name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  notes: "",
};

export const AddAppointments = ({ formValues, inputChange, formSubmit, buttonClick }) => {

  return (
    <>
      <Form formSubmit={formSubmit}>
        <Input
          type="text"
          id="pet"
          name="pet_name"
          value={formValues.pet_name}
          inputChange={inputChange}
          labelText="Pet's name:"
          required
        />

        <Input
          type="text"
          id="owner"
          name="owner_name"
          value={formValues.owner_name}
          inputChange={inputChange}
          labelText="Owner's name:"
          required
        />

        <Input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          inputChange={inputChange}
          labelText="Email:"
          required
          placeholder="owner@email.com"
        />

        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formValues.phone}
          inputChange={inputChange}
          labelText="Phone:"
          required
          pattern="[0-9]{3}[0-9]{3}-[0-9]{4}"
          placeholder="phone number format (xxx) xxx-xxxx"
        />

        <Input
          type="date"
          id="date"
          name="date"
          value={formValues.date}
          inputChange={inputChange}
          labelText="Date:"
          required
        />

        <Input
          type="time"
          id="time"
          name="time"
          value={formValues.time}
          inputChange={inputChange}
          labelText="Time:"
          required
        />

        <Textarea
          id="notes"
          name="notes"
          value={formValues.notes}
          rows="5"
          cols="30"
          inputChange={inputChange}
          labelText="Notes:"
          placeholder="Add notes about the pet"
        />
        <Button type="submit" buttonClick={buttonClick}>
          ADD APPOINTMENT
        </Button>
      </Form>
    </>
  );
};
