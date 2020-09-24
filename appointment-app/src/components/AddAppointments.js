import React, { Component } from 'react';
import Label from './Label';
import Container from './Container';
import FormContainer from './FormContainer';
import 'react-calendar/dist/Calendar.css';

export default class AddAppointments extends Component {
  constructor() {
    super();
    this.state = {
      //where I will add all states I will work with
      petName: '',
      ownerName: '',
      aptDate: '',
      aptTime: '',
      aptNotes: '',
    };
    //bind(this) functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //add a function to handle with all different inputs from the form
  handleChange(event) {
    //create target, value and name const to keep in track each indidivual event, according to the const values
    //in this way, we can re-use the same code in different events
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    // console.log({ [name]: value });
  }
  //the onChange can be set straight away on the item we want to modify/update

  handleSubmit(event) {
    event.preventDefault(); //it will prevet the page to reload when the form is submited

    //create a temporary array, with the same structure then the original array saved in the json file
    let tempArray = {
      petName: this.state.petName,
      ownerName: this.state.ownerName,
      aptNotes: this.state.aptNotes,
      aptDate: this.state.aptDate + ' ' + this.state.aptTime,
    };

    //passing the temporary array to a prop that will be treated on the main file
    this.props.add(tempArray);

    //then, once the submition is done, we have to clean the form, setting empty values
    this.setState({
      petName: '',
      ownerName: '',
      aptDate: '',
      aptTime: '',
      aptNotes: '',
    });
    //this will add temporary the new items into the main array. it will not override or save into the json file!!!
  }

  render() {
    return (
      <Container>
        <Label>Add new Appointment</Label>
        <FormContainer>
          <form id="apptForm" noValidate onSubmit={this.handleSubmit}>
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
                  value={this.state.petName}
                  // onChange={this.handleChange}
                  onChange={(event) =>
                    this.setState({
                      petName: event.target.value,
                    })
                  }
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
                  value={this.state.ownerName}
                  onChange={this.handleChange}
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
                  id="aptDate"
                  name="aptDate"
                  value={this.state.aptDate}
                  onChange={this.handleChange}
                />
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
                  id="aptTime"
                  name="aptTime"
                  value={this.state.aptTime}
                  onChange={this.handleChange}
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
                  name="aptNotes"
                  rows="3"
                  cols="30"
                  value={this.state.aptNotes}
                  onChange={this.handleChange}
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
}
