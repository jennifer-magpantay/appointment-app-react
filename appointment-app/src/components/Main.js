import React, { Component } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import { AsideContainer } from "./Aside";
import RenderListAppointments from "./RenderListAppointments";
import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import Button from "./Button";
import { without } from "lodash";

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
      displaySearchBox: false,
      index: 0,
      orderBy: "petName",
      orderByDirection: "asc",
      searchText: "",
    };
    //then, add a bind(this) for every functions I will work with
    this.delete = this.delete.bind(this);
    this.handleDisplaySearchBox = this.handleDisplaySearchBox.bind(this);
    this.handleDisplayList = this.handleDisplayList.bind(this);
    this.handleDisplayForm = this.handleDisplayForm.bind(this);
    this.add = this.add.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.search = this.search.bind(this);
  }

  //handle functions to display/hide content
  handleDisplayList() {
    // this function will change the state of the display everytime the button is clicked
    this.setState({ displayList: !this.state.displayList });
  }

  handleDisplayForm() {
    // this function will change the state of the display everytime the button is clicked
    this.setState({ displayForm: !this.state.displayForm });
  }

  handleDisplaySearchBox() {
    // this function will change the state of the display everytime the button is clicked
    this.setState({ displaySearchBox: !this.state.displaySearchBox });
  }

  //add here the functions from our application
  //delete an appointment
  delete(id) {
    console.log(id);
    let tempList = this.state.appointmentsList;
    tempList = without(tempList, id);
    // tempList.splice(id, 1); 
    // splice is giving error! it is deleting the first item from the list!!
    this.setState({
      appointmentsList: tempList,
    });
  }

  //following a similar log from delete item
  add(item) {
    //create a temporary list with the value of the appointment list
    let tempList = this.state.appointmentsList;
    //create to this new item an id
    item.id = this.state.index;
    //push this new item at the beggining of the appointment list by using unshift() method
    tempList.unshift(item);
    //then, update the appointment list with the new item and its id
    this.setState({
      appointmentsList: tempList,
      index: this.state.index + 1,
    });
    console.log(item);
  }

  //sorting by searching
  //this will use two parameters to define a order of displaying content
  changeOrder(order, direction) {
    this.setState({
      orderBy: order,
      orderByDirection: direction,
    });
  }

  //searching by typing
  //this will use a parameter to define the displaying content
  search(text) {
    this.setState({
      searchText: text,
    });
  }

  //then, reading the list by fetching data from json.file - do it by DidMount()
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
    //in order to sort the data according to the state, add before retunr a temporary variable
    let order;
    let filteredAppointmentList = this.state.appointmentsList;
    //then, add a if statemente to change the order fo the lisyt for 1 or -1
    if (this.state.orderByDirection === "asc") {
      order = 1;
    } else {
      order = -1;
    }
    //add the sort method
    filteredAppointmentList = filteredAppointmentList
      .sort((a, b) => {
        if (a[this.state.orderBy] < b[this.state.orderBy]) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter((item) => {
        //filter will return the match on pet names OR owner names OR date
        return (
          item["petName"]
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()) ||
          item["ownerName"]
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()) ||
          item["aptDate"]
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase())
        );
      });

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
              <Button onClick={this.handleDisplaySearchBox}>
                Search for Appointment
              </Button>
            </li>
          </ul>
        </AsideContainer>
        <MainContainer>
          {/* when the buttons are clcked, its own content will be display under certain conditions */}
          {/*  the state is used to determine whether to render each component */}
          {this.state.displayForm === true && (
            <AddAppointments
              displayForm={this.state.displayForm}
              add={this.add}
            />
          )}

          {this.state.displayList === true && (
            <RenderListAppointments
              // render={this.state.appointmentsList}
              render={filteredAppointmentList}
              displayList={this.state.displayList}
              delete={this.delete}
            />
          )}

          {this.state.displaySearchBox === true && (
            <>
              <SearchAppointments
                orderBy={this.state.orderBy}
                orderByDirection={this.state.orderByDirection}
                changeOrder={this.changeOrder}
                search={this.search}
                // left side: our props from the original component
                // right side: our local function which will treat the props
              />
              <RenderListAppointments
                // render={this.state.appointmentsList}
                render={filteredAppointmentList}
                displayList={this.state.displayList}
                delete={this.delete}
              />
            </>
          )}
        </MainContainer>
      </Wrapper>
    );
  }
}
