import React from "react";
import { Container, Table, Button } from "react-bootstrap";
function TableData({ foods, onReset }) {
  let filterFood = foods.filter((food) => food.amount > 0);
  return (
    <Container>
      <Button
        variant="info"
        className="text-white my-3"
        onClick={() => onReset()}
      >
        Reset
      </Button>
      <span className="badge bg-warning text-dark mx-2">
        {filterFood.length} count
      </span>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Food</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {filterFood.length > 0 ? (
            filterFood.map((food) => (
              <tr>
                <td>{food.id}</td>
                <td>{food.name}</td>
                <td>{food.amount}</td>
                <td>{food.price}</td>
                <td>{food.total}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>
                <h3 className="text-center">No Data</h3>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default TableData;
