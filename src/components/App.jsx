import React, { Component } from 'react';
import './App.css';
import { Items, Button } from './Items';
import randomSelect from '../functions/random';
import Spinner from './Spinner'
import styled from 'styled-components';

export default class App extends Component {
  state = {
    choice: [{ id: 1, value: 'удали меня' }, { id: 2, value: 'ну удали же' }],
    id: 3,
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
    const items = this.state.choice;
    const newItems = items
      .filter(item => item.id !== id)
      .map(item => {
        if (item.id > id) {
          item.id--;
        }
        return item;
      });
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
        <Items value={this.state.value} handleRemove={this.handleRemove} handleAdd={this.handleAdd} handleChange={this.handleChange} choice={this.state.choice} /><Button onClick={this.spin}>Spin</Button>
        <Test>
          <Spinner list={this.state.choice} />
        </Test>
      </div>
    );
  }
}
const Test = styled.div`
    position: absolute;
    left: 200px;
    top: 300px;`