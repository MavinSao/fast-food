import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Item from "./Item";

function Foods({ foods, ...rest }) {
  return (
    <Container>
      <h1 className="text-center my-4">FAST FOOD</h1>
      <Row>
        {foods.map((food, idx) => (
          <Col md={3} key={idx}>
            <Item food={food} event={rest} idx={idx} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Foods;
