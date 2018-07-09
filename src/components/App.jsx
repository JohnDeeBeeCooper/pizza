import React, { Component } from 'react';
import './App.css';
import { Input, Button } from './Input';
import randomSelect from '../functions/random';

export default class App extends Component {
  state = {
    choice: [],
    id: 0,
    value: ''
  }
  handleAdd = (e) => {
    e.preventDefault();
    if (this.state.value !== '') {
      this.setState({ choice: [...this.state.choice, { id: this.state.id, value: this.state.value }], id: this.state.id + 1, value: '' });
    }
  }
  handleRemove = (id) => (e) => {
    e.preventDefault();
    console.log(id);
    const newItems = this.state.choice.filter(item => item.id !== id);
    this.setState({
      choice: newItems
    })

  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    })
  }
  spin = () => {
    const item = randomSelect(this.state.choice);
    console.log(item);
  }

  render() {
    return (
      <div className="App">
        <Input value={this.state.value} handleRemove={this.handleRemove} handleAdd={this.handleAdd} handleChange={this.handleChange} choice={this.state.choice} /><Button onClick={this.spin}>Spin</Button>
      </div>
    );
  }
}