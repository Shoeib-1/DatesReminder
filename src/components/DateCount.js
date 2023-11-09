import React from "react";
import { Col, Row } from "react-bootstrap";

const DateCount = ({person}) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="">
        لديك {person.length} مواعيد اليوم
      </Col>
    </Row>
  );
};

export default DateCount;
