import React from "react";
// COMPONENTS
import { Button } from "./Button";

export const Card = ({
  id,
  pet_name,
  pet_gender,
  owner_name,
  email,
  phone,
  date,
  time,
  notes,
  buttonClick,
}) => {
  return (
    <div className="card" key={id} data-id={id}>
      <p>
        <span>ID:</span>
        {id}
      </p>
      <p>
        <span>Pet name:</span> {pet_name}
      </p>
      <p>
        <span>Pet gender:</span> {pet_gender}
      </p>
      <p>
        <span>Owner name:</span> {owner_name}
      </p>
      <p>
        <span>Email:</span> {email}
      </p>
      <p>
        <span>Phone:</span> {phone}
      </p>
      <p>
        <span>Appointment date & time:</span> {date}, @{time}
      </p>
      <p>
        <span>Notes:</span> {notes}
      </p>
      <Button type="button" buttonClick={buttonClick}>
        Delete
      </Button>
    </div>
  );
};
