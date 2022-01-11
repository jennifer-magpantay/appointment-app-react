import React from "react";
import { Card } from "../components/Card";

export const RenderAppointments = ({ data, buttonClick }) => {
  return (
    <>
      {data.map(
        ({
          id,
          pet_name,
          pet_gender,
          owner_name,
          email,
          phone,
          date,
          time,
          notes,
        }) => {
          return (
            <Card
              key={id}
              id={id}
              pet_name={pet_name}
              pet_gender={pet_gender}
              owner_name={owner_name}
              email={email}
              phone={phone}
              date={date}
              time={time}
              notes={notes}
              buttonClick={buttonClick}
            />
          );
        }
      )}
    </>
  );
};
