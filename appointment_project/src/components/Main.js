import React, { Component } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { AsideContainer } from "./Aside";
import RenderListAppointments from "./RenderListAppointments";
import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import Button from "./Button";

// import { without } from "lodash";

const MainContainer = styled.main`
  width: 70%;
  height: 100%;
  padding: 2%;
  background-color: var(--gray);
  color: var(--black);
  overflow: auto;
`;

export default class Main extends Component {
  //to work with states, you have to add first a constructor()  followed by a super()
  constructor() {
    super();
    this.state = {
      //where I will add all states I will work with
      appointmentsList: [],
      displayList: false,
      displayForm: false,
      index: 0,
    };
    //then, add a bind(this) for every functions I will work with
    this.delete = this.delete.bind(this);
    this.handleDisplayList = this.handleDisplayList.bind(this);
    this.handleDisplayForm = this.handleDisplayForm.bind(this);
  }

   handleDisplayList() {
    // this function will change the state of the display everytime the button is clicked
    this.setState({ displayList: !this.state.displayList });
  }

  handleDisplayForm() {
    // this function will change the state of the display everytime the button is clicked
    this.setState({ displayForm: !this.state.displayForm });
  }

  //add my functions
  //delete an appointment
  delete(id) {
    let tempList = this.state.appointmentsList;
    // tempList = without(tempList, id);
    tempList.splice(id, 1);
    this.setState({
      appointmentsList: tempList,
    });
  }

  //reading my list by fetching data from json.file - do it by DidMount()
  componentDidMount() {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        const appts = result.map((item) => {
          item.id = this.state.index;
          this.setState({ index: this.state.index + 1 });
          return item;
        });
        this.setState({ appointmentsList: appts });
      });
  }

  render() {
    return (
      <Wrapper>
        <AsideContainer>
          <ul>
            <li>
              <Button onClick={this.handleDisplayList}>
                Display all Appointments
              </Button>
            </li>
            <li>
              <Button onClick={this.handleDisplayForm}>
                Add a new Appointment
              </Button>
            </li>
            <li>
              <Button onClick={this.handleDisplayComponent}>
                Search for Appointment
              </Button>
            </li>
          </ul>
        </AsideContainer>
        <MainContainer>
          {/* when the buttons are clcked, its own content will be display under certain conditions */}
          {/*  the state is used to determine whether to render each component */}
          {this.state.displayForm === true && (
          <AddAppointments displayForm={this.state.displayForm}
          />
          )}

          {this.state.displayList === true && (
            <RenderListAppointments
              render={this.state.appointmentsList}
              displayList={this.state.displayList}
              delete={this.delete}
            />
          )}

          <SearchAppointments />
        </MainContainer>
      </Wrapper>
    );
  }
}
