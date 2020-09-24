import React, { useState } from "react";
import styled from 'styled-components';
import { TiDeleteOutline } from 'react-icons/ti';
import Moment from 'react-moment';

const ResultContainer = styled.div`
padding: 1% 2%;
margin-bottom: 1%;
background-color: var(--lg-gray);
border-radius: 4px;
& h5 {
    margin: 8px 0;
    color: var(--blue);
    font-size: 16px;
}
& p {
    margin: 6px 0;
}
/* overide the Button style properts */
.btn_delete {
    width: auto;
    float: right;
    margin-top: 1%;
    padding: 0;
    background-color: var(--lg-gray);
    border: none;
    color: var(--warning);
    cursor:pointer;   
    font-size: 32px;
}
`;

    function RenderListAppointments(props) {
    // console.log(props.listAppts);
   const [array, setArray] = useState([]);
  
    const deleteAppt = index => { 
        console.log("Index:", index);           
        let tempArray = [...props.listAppts];
        // tempArray = without(tempArray, index);
        tempArray.splice(index, 1);
        setArray(...array, tempArray);        
    //   console.log("Temp Array: ", tempArray); 
    //   console.log("Array: ", array);  
    //   console.log("It is not uodating the array!!");     
    };

    return (
    <>
      <p>List of Appointments</p> 
      {props.listAppts.map((item,index) => (
          <ResultContainer  key={index}>  
          <button className="btn_delete" alt="Delete Button" onClick={() => deleteAppt(index)}>
         <TiDeleteOutline />
         </button>       
        <h5>ID: {index}</h5>
        <h5>Pet Name: {item.petName}</h5>
        <p>Owner Name: {item.ownerName}</p>
        <p>Notes: {item.aptNotes}</p>
        <p>Appointment Date & Time:
        {/* Moment will take the date from your data to transform it in a new format (this case we will use month (3 letters), day, hour:min am/pm) */}
        <Moment 
        date={item.aptDate}
        parse="YYYY-MM-dd hh:mm"
        format="MMM-D h:mma"
        />
        </p>
        </ResultContainer>
))};      
    </>
    ); 
}

export default RenderListAppointments;
