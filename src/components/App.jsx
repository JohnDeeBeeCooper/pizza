import React, { Component } from 'react';
import './App.css';
import { Items, Button } from './Items';
import randomSelect from '../functions/random';
import Spinner from './Spinner'
import styled from 'styled-components';
import randomColor from 'randomcolor';

export default class App extends Component {
  state = {
    choice: [{ id: 0, value: 'удали меня', rotation: 90, angle: 180, color: randomColor() }, { id: 1, value: 'ну удали же', rotation: 270, angle: 180, color: randomColor() }],
    id: 2,
    value: '',
    spin: false,
    interval: null,
    luckyWord: '',
    result: '',
    speed: 1,
  }
  handleAdd = (e) => {
    e.preventDefault();
    const len = this.state.choice.length + 1;
    const angle = 360 / len;
    if (this.state.value !== '') {
      const newItems = [...this.state.choice, { id: this.state.id, value: this.state.value, rotation: null, angle: angle, color: randomColor() }]
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
    });
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      value: e.target.value
    })
  }
  spin = () => {
    const newItems = this.state.choice.map(item => {
      item.rotation += 2;
      if (item.rotation >= 360) {
        item.rotation = item.rotation % 360;
      }
      if (item.rotation < 0) {
        item.rotation += 360;
      }
      return item;
    });
    const items = this.state.choice;
    const item = items.filter(item => item.angle >= 360 - item.rotation)[0];
    const luckyWord = item ? item.value : this.state.luckyWord;
    this.setState({ choice: newItems, luckyWord: luckyWord, speed: 1 });
  }

  btnOnClick = () => {
    if (this.state.interval === null) {
      this.setState({
        interval: setInterval(this.spin, this.state.speed),
        spin: true,
        result: randomSelect(this.state.choice)
      });
    }
    else {
      clearInterval(this.state.interval);
      this.setState({ interval: null, spin: false });
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
      <Div>
        <Items {...itemsParametres} />
        <Fortuna>
          <Spinner list={this.state.choice} word={this.state.luckyWord} />
          <Button onClick={this.btnOnClick}>Spin</Button>
        </Fortuna>
      </Div>
    );
  }
}
const Fortuna = styled.div`
    margin: 0 auto;
    text-align: center;`;
const Div = styled.div`
    display: flex;`;