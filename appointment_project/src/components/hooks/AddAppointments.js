import React, { useState } from "react";
import Label from "./Label";
import Container from "./Container";
import FormContainer from "./FormContainer";
// import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

function AddAppointments() {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  //adding methods to get and set a new state value for ours const
  const handleChange = (event) => {
    setPetName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //it will prevet the page to reload when the form is submited

    //create a temporary array, with the same structure then the original array saved in the json file
    let tempArray = {
      petName: { petName },
      petOwner: { ownerName },
      aptNotes: { note },
      aptDate: { date } + " " + { time },
    };

    this.props.add(tempArray);

    alert(
      `New appointment added: pet name ${petName}, which belongs to ${ownerName} has aapointment on ${date} at ${time}. Considering the notes: ${note}`
    );
  };

  return (
    <Container>
      <Label>Add new Appointment</Label>
      <FormContainer>
        <form id="apptForm" noValidate onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-reference">
              <label htmlFor="petName" readOnly>
                Pet Name
              </label>
            </div>
            <div className="form-input">
              <input
                type="text"
                id="petName"
                name="petName"
                value={petName}
                onChange={handleChange}
                // onChange={event => setPetName(event.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-reference">
              <label htmlFor="ownerName" readOnly>
                Owner Name
              </label>
            </div>
            <div className="form-input">
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={ownerName}
                onChange={(event) => setOwnerName(event.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-reference">
              <label htmlFor="date" readOnly>
                Date
              </label>
            </div>
            <div className="form-input">
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
              {/* <Calendar  id="date" name="date" 
              value={date}
              onChange={event => setDate(event.target.value)} /> */}
            </div>
          </div>

          <div className="form-row">
            <div className="form-reference">
              <label htmlFor="time" readOnly>
                Time
              </label>
            </div>
            <div className="form-input">
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-reference">
              <label htmlFor="note" readOnly>
                Note
              </label>
            </div>
            <div className="form-input">
              <textarea
                id="note"
                name="note"
                rows="3"
                cols="30"
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <input type="submit" value="SUBMIT" />
          </div>
        </form>
      </FormContainer>
    </Container>
  );
}

export default AddAppointments;
