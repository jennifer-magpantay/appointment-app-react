import React from "react";
import Label from "./Label";
import Container from "./Container";
import FormContainer from './FormContainer';

function AddAppointments() {
  return (
    <Container>
      <Label>Add new Appointment</Label>
      <FormContainer>
        <form>
          <div className="form-row">
            <div className="form-reference">
              <label htmlFor="">Pet Name</label>
            </div>
            <div className="form-input">
              <input type="text" id="petName" name="petName" />
              {/* value={this.state.value}
                    onChange={this.handleChange}    */}
            </div>
          </div>
          <div className="form-row">
            <div className="form-reference">
              <label htmlFor="">Owner Name</label>
            </div>
            <div className="form-input">
              <input type="text" id="ownerName" name="ownerName" />
              {/* value={this.state.value}
                    onChange={this.handleChange}    */}
            </div>
          </div>
          <div className="form-row">
            <div className="form-reference">
              <label htmlFor="">Note</label>
            </div>
            <div className="form-input">
            <textarea id="note" name="note" rows="3" cols="30" />
              {/* value={this.state.value}
                    onChange={this.handleChange}    */}
            </div>
          </div>
          <div className="form-row">
            <div className="form-reference">
              <label htmlFor="">Date & Time</label>
            </div>
            <div className="form-input">
              <input type="text" id="date" name="date" />
              {/* value={this.state.value}
                    onChange={this.handleChange}    */}
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
