import React, { Component } from "react";
import Label from "../components/Label";
import Container from "./Container";
import FormContainer from "./FormContainer";

export default class SearchAppointments extends Component {
  render() {
    return (
      <Container>
        <Label>Search an Appointment</Label>
        <FormContainer>
          <div className="form-row">
            <div className="form-input">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Search.."
                onChange={(event) => this.props.search(event.target.value)}
              />
            </div>
            <div className="form-reference">
              <div className="dropdown">
                <button type="button" className="button-dropdown">
                  Sort by
                </button>
                <div className="dropdown-content">
                  <ul>
                    <li
                      onClick={(event) =>
                        this.props.changeOrder("petName", this.props.orderDir)
                      }
                      href="#"
                    >
                      Pet Name
                    </li>
                    <li
                      onClick={(event) =>
                        this.props.changeOrder("ownerName", this.props.orderDir)
                      }
                      href="#"
                    >
                      Owner Name
                    </li>
                    <li
                      onClick={(event) =>
                        this.props.changeOrder("aptDate", this.props.orderDir)
                      }
                      href="#"
                    >
                      Date
                    </li>
                    <hr />
                    <li
                      onClick={(event) =>
                        this.props.changeOrder(this.props.orderBy, "asc")
                      }
                      href="#"
                    >
                      Order by: Ascendent
                    </li>
                    <li
                      onClick={(event) =>
                        this.props.changeOrder(this.props.orderBy, "desc")
                      }
                      href="#"
                    >
                      Order by: Descendent
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FormContainer>
      </Container>
    );
  }
}
