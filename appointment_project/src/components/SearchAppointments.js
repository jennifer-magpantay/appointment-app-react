import React from "react";
import Label from "./Label";
import Container from "./Container";
import FormContainer from "./FormContainer";

function SearchAppointments() {
  return (
    <Container>
        <Label>Search an Appointment</Label>
        <FormContainer>        
        <form>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit"><i className=""></i></button>  
        </form>
        </FormContainer>      
    </Container>
     );
}

export default SearchAppointments;
