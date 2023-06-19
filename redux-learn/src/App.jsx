import React, { Component } from 'react';
import Count from './component/Count/index';
import Store from './redux/store';

export default class App extends Component {
  componentDidMount() {
    Store.subscribe(()=>{
      this.setState({})
    })
  }
  render() {
    return (
      <Count/>  
    )
  }
}
