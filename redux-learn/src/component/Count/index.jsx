import React, { Component } from 'react'

export default class Count extends Component {
  state = {count:0};  
  
  myRef = (currentNode) => {
      this.selectedNumber = currentNode;
    }
    
    increament = () => {
      const {count} = this.state;
      const value = this.selectedNumber.value;
      this.setState({count: count + parseInt(value,10)})
    }

    decreament = () => {
      const {count} = this.state;
      const {value} = this.selectedNumber;
      this.setState({count: count - value});
    }
  render() {
    return (
      <div>
        <h1>Count amount {this.state.count}</h1>
        <select ref={this.myRef}>
            <option value="1">1</option>&nbsp;
            <option value="2">2</option>&nbsp;
            <option value="3">3</option>&nbsp;
        </select>
        <button className='increament' onClick = {this.increament}> + </button>
        <button className='decreament' onClick = {this.decreament}> - </button>
      </div>
    )
  }
}
