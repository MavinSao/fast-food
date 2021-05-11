import React from "react";
import { Card, Button } from "react-bootstrap";
function Item({ food, event, idx }) {
  let { onAdd, onDelete } = event;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={food.thumbnail} />
        <Card.Body>
          <Card.Title>{food.name}</Card.Title>
          <Card.Text> Price: {food.price} $</Card.Text>
          <span className="badge bg-warning text-dark me-2">{food.amount}</span>
          <Button variant="primary" onClick={() => onAdd(idx)}>
            Add
          </Button>
          <Button
            variant="danger"
            className="mx-2"
            disabled={food.amount === 0 ? true : false}
            onClick={() => onDelete(idx)}
          >
            Delete
          </Button>
          <h5 className="my-2">Total: {food.total}$</h5>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;
