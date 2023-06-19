import React, { Component } from 'react'
import Store from "../../redux/store"


export default class Count extends Component {
  myRef = (currentNode) => {
    this.selectedNumber = currentNode;
  }

  increament = () => {
    const { value } = this.selectedNumber;
    Store.dispatch({ type: "increament", data: parseInt(value) });
  }

  decreament = () => {
    console.log(Store.getState());
    Store.dispatch({ type: 'decreament', data: parseInt(this.selectedNumber.value, 10) });
  }

  oddIncreament = () => {
    if (Store.getState() % 2 !== 0) {
      Store.dispatch({ type: "increament", data: parseInt(this.selectedNumber.value, 10) });
    }
  }
  render() {
    console.log(Store.getState())
    return (
      <div>
        <h1>Count amount {Store.getState()}</h1>
        <select ref={this.myRef}>
          <option value="1">1</option>&nbsp;
          <option value="2">2</option>&nbsp;
          <option value="3">3</option>&nbsp;
        </select>
        <button className='increament' onClick={this.increament}> + </button>
        <button className='decreament' onClick={this.decreament}> - </button>
        <button className='odd increament' onClick={this.oddIncreament}> Odd Increament</button>
      </div>
    )
  }
}
