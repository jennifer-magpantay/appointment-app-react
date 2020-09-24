import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Aside from '../Aside';
import Wrapper from '../Wrapper';
import RenderListAppointments from "./RenderListAppointments";
import AddAppointments from "../AddAppointments";
import DeleteAppointments from "../DeleteAppointments";
import SearchAppointments from "../SearchAppointments";

const MainContainer = styled.main`
  width: 70%;
  height: calc(100vh - 100px);
  padding: 2%;
  background-color: var(--gray);
  color: var(--black);
  overflow: auto;
`;

function Main() {
  const [listAppointments, setListAppointments] = useState([]);
  
  const Delete = index => {
      console.log("Index:", index);           
      let tempArray = listAppointments;
      // tempArray = without(tempArray, index);
      tempArray.splice(index, 1);
      setListAppointments(tempArray);        
     }
 
// useEffect is similar to componentDidMount and componentDidUpdate:
//you can create a fetch function aprt and add it to the useEffect, or code the function already as part of the usefffect

//this is the step-by-step clear way: first create function then add useEffect
async function FetchData() {
    const response = await fetch("./data.json");
    const result = await response.json();
    const data = result;
    // console.log(data);
    setListAppointments(data);
}

useEffect(() => {
    FetchData();
}, []);

//this is all-in clean way
//   useEffect(() => {
//     //do something: fecth data from json file
//     fetch("./data.json")
//       .then((response) => response.json())
//       .then((result) => {
//           const appts = result.map(item => {
//               return item;
//           });
//           setAppointment(appts);
//         //   console.log(appts); 
//       });      
//   }); 

  return (
    <Wrapper>
    <Aside />
    <MainContainer>
    <AddAppointments />
    <DeleteAppointments />
    <SearchAppointments />      
    <RenderListAppointments 
    listAppts={listAppointments}
    delete={Delete}
    />
    </MainContainer>
    </Wrapper>
  );
}

export default Main;
