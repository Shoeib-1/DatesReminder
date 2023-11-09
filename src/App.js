import { Button, Col, Container, Row } from "react-bootstrap";
import { person } from "./data";
import DateCount from "./components/DateCount";
import DateList from "./components/DateList";
import DateAction from "./components/DateAction";
import React , { useEffect, useState } from "react";

function App() {
  const [personData ,setPersonData] = useState(person)
  const onDelete = ()=>{
    setPersonData([])
  }

  const onShow = ()=>{
   setPersonData(person)
  }

  // ..........
  useEffect(()=>{
    setPersonData([])
  },[])
  // ..........
  return (
    <div className="font color-body">
      <Container className="py-5">
        {/* one Row  */}
         <DateCount  person={personData}/>
        {/* Two Row */}
         <DateList person={personData}/>
        {/* Three Row */}
         <DateAction deleteDate={onDelete} showData={onShow}/>
      </Container>
    </div>
  );
}

export default App;
