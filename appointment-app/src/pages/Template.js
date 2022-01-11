import React, { useState, useEffect } from "react";
// components
import { Header } from "../components/Header";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";
import { ButtonList } from "../components/ButtonList";
import { Spinning } from "../components/Spinning";
// data
import { APPOINTMENTS, BUTTON_LIST } from "../data/data";
import { RenderAppointments } from "./RenderAppointments";
import { AddAppointments } from "./AddAppointments";

export const Template = () => {
  // data to render
  const [list, setList] = useState(BUTTON_LIST);
  const [appointments, setAppointments] = useState(null);
  // display content
  const [isLoading, setIsLoading] = useState(true);
  const [displayAppointments, setDisplayAppointments] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);
  // form
  const [formValues, setFormValues] = useState({
    id: "",
    pet_name: "",
    pet_gender: "",
    owner_name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  useEffect(() => {
    // set appointments list once the page is loaded
    setAppointments(APPOINTMENTS);
    setDisplayAppointments(true);
    setIsLoading(false);
  }, []);

  function objLenght(obj) {
    var qtt = 0;
    var key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        qtt++;
      }
    }
    return qtt;
  }

  function filterList(data, event) {
    const elementID = event.currentTarget.parentNode.getAttribute("data-id");
    // convert {id} to string to filter properly
    const newList = data.filter(({ id }) => String(id) !== elementID);
    return newList;
  }

  function handleButtonListClick(event) {
    const elementID = event.currentTarget.parentNode.getAttribute("data-id");
    if (elementID === "2") {
      setDisplayForm(true);
      setDisplayAppointments(false);
      setDisplaySearch(false);
    } else if (elementID === "3") {
      setDisplaySearch(true);
      setDisplayAppointments(false);
      setDisplayForm(false);
    } else {
      setDisplayAppointments(true);
      setDisplayForm(false);
      setDisplaySearch(false);
    }
  }

  function handleInputOnChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleOnSubmit(event) {
    // save the form value into the appointment list
    setAppointments([...appointments, formValues]);
    // clean form fields
    setFormValues({
      id: "",
      pet_name: "",
      pet_gender: "",
      owner_name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      notes: "",
    });
    // display the appointments list
    setDisplayForm(false);
    setDisplayAppointments(true);
  }

  function handleButtonDeleteCick(event) {
    // filter the list by using the data-id as param and display it as new list
    setAppointments(filterList(appointments, event));
  }

  return (
    <>
      <Header />
      <div className="main__container">
        <Aside>
          {/* aside list options */}
          <ButtonList data={list} buttonClick={handleButtonListClick} />
        </Aside>
        <Main>
          {/* set the data to be displayed */}
          {isLoading && <Spinning />}
          {displayAppointments && (
            <RenderAppointments
              data={appointments}
              buttonClick={handleButtonDeleteCick}
            />
          )}
          {displayForm && (
            <AddAppointments
              formValues={formValues}
              inputChange={handleInputOnChange}
              formSubmit={handleOnSubmit}
              buttonClick={handleOnSubmit}
            />
          )}
        </Main>
      </div>
    </>
  );
};
