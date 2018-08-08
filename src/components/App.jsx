import React, { Component } from 'react';
import './App.css';
import { Items, Button } from './Items';
import randomSelect from '../functions/random';
import Spinner from './Spinner'
import styled from 'styled-components';

export default class App extends Component {
  state = {
    choice: [],
    id: 0,
    value: '',
    spin: false,
    interval: null
  }
  handleAdd = (e) => {
    e.preventDefault();
    const len = this.state.choice.length + 1;
    const angle = 360 / len;
    if (this.state.value !== '') {
      const newItems = [...this.state.choice, { id: this.state.id, value: this.state.value, rotation: null, angle: angle }]
        .map(item => {
          item.rotation = angle * item.id;
          item.angle = angle;
          return item;
        });
      this.setState({ choice: newItems, id: this.state.id + 1, value: '' });
    }
  }
  handleRemove = (id) => (e) => {
    e.preventDefault();
    const items = this.state.choice;
    const len = this.state.choice.length - 1;
    const angle = len === 0 ? 0 : 360 / len;
    const newItems = items
      .filter(item => item.id !== id)
      .map(item => {
        if (item.id > id) {
          item.id--;
        }
        item.rotation = item.id * angle;
        item.angle = angle;
        return item;
      });
    const newId = newItems.length > 0 ? newItems[newItems.length - 1].id + 1 : 0;
    this.setState({
      choice: newItems,
      id: newId
    })

  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    })
  }
  spin = () => {
    // const item = randomSelect(this.state.choice);
    // console.log(item);
    const newItems = this.state.choice.map(item => {
      item.rotation -= 2;
      return item;
    });
    this.setState({ choice: newItems });
  }
  update = () => {

  }
  btnOnClick = () => {
    if (this.state.interval === null) {
      this.setState({ interval: setInterval(this.spin, 15) });
    }
    else {
      clearInterval(this.state.interval);
      this.setState({ interval: null });
    }
  }
  render() {
    const itemsParametres = {
      value: this.state.value,
      handleRemove: this.handleRemove,
      handleAdd: this.handleAdd,
      handleChange: this.handleChange,
      choice: this.state.choice
    }
    return (
      <div className="App">
        <Items {...itemsParametres} />
        <Button onClick={this.btnOnClick}>Spin</Button>
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