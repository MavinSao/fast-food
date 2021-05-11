import './App.css';
import Foods from './components/Foods';
import NavMenu from './components/NavMenu';
import TableData from './components/TableData';

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: [
        {
          id: 1,
          name: "Pizza",
          thumbnail: "image/pizza.jpg",
          amount: 0,
          price: 15,
          total: 0
        },
        {
          id: 2,
          name: "Chicken",
          thumbnail: "image/chicken.jpg",
          amount: 0,
          price: 5,
          total: 0
        },
        {
          id: 3,
          name: "Burger",
          thumbnail: "image/burger.jpeg",
          amount: 0,
          price: 6,
          total: 0
        },
        {
          id: 4,
          name: "Coca",
          thumbnail: "image/coca.jpg",
          amount: 0,
          price: 2,
          total: 0
        }
      ]
    }
    this.onAdd = this.onAdd.bind(this)
    this.onDelete = this.onDelete.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  onAdd(index) {
    let foods = [...this.state.foods]
    foods[index].amount++
    foods[index].total = foods[index].amount * foods[index].price

    this.setState({
      foods
    })
  }

  onDelete(index) {
    let foods = [...this.state.foods]
    foods[index].amount--
    foods[index].total = foods[index].amount * foods[index].price
    this.setState({
      foods
    })
  }

  onReset() {
    let foods = [...this.state.foods]
    foods.map((food) => {
      food.amount = 0
      food.total = 0
    })

    this.setState({
      foods
    })

  }

  render() {
    return (
      <>
        <NavMenu />
        <Foods
          foods={this.state.foods}
          onAdd={this.onAdd}
          onDelete={this.onDelete} />
        <TableData foods={this.state.foods} onReset={this.onReset} />
      </>
    )
  }
}

