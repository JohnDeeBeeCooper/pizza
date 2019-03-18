import React, { Component } from 'react';
import { Items, Button } from './Items';
import Spinner from './Spinner'
import styled from 'styled-components';
import randomColor from 'randomcolor';
import update from 'immutability-helper';

export default class App extends Component {
  state = {
    choice: [],
    id: 0,
    value: '',
    spin: false,
    interval: null,
    luckyWord: '',
    speed: 3,
    timeout: null
  }
  handleAdd = (e) => {
    e.preventDefault();
    const { choice, value, id } = this.state;
    const len = choice.length + 1;
    const itemAngle = 360 / len;
    if (value !== '') {
      const newItems = [...choice, {
        id: id,
        value: value.trim(),
        rotation: null,
        angle: itemAngle,
        color: randomColor({
          luminosity: 'light',
          hue: 'random'
        })
      }].map(item => {
        const { id } = item;
        const newItem = update(item, { rotation: { $set: itemAngle * id }, angle: { $set: itemAngle } });
        return newItem;
      });
      this.setState(state => {
        return { choice: newItems, id: state.id + 1, value: '' };
      });
    }
  }
  handleRemove = (itemId) => (e) => {
    e.preventDefault();
    const items = this.state.choice;
    const len = items.length - 1;
    const itemAngle = len === 0 ? 0 : 360 / len;
    const newItems = items
      .filter(item => item.id !== itemId)
      .map(item => {
        const { id } = item;
        // if (id > itemId) {
        //   item.id = update(id, { $set: id - 1 });
        // }
        const newItem = update(item, { rotation: { $set: id * itemAngle }, angle: { $set: itemAngle }, id: { $set: id > itemId ? id - 1 : id } });
        return newItem;
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
    if (this.state.speed <= 0) {
      this.result();
    }
    const { speed, choice } = this.state;
    const newItems = choice.map(item => {
      const { rotation } = item;
      let nextRotate = rotation + speed;
      if (nextRotate >= 360) {
        nextRotate %= 360;
      }
      if (nextRotate < 0) {
        nextRotate += 360;
      }
      const newItem = update(item, { rotation: { $set: nextRotate } });
      return newItem;
    });
    const item = choice.filter(item => item.angle >= 360 - item.rotation)[0];
    const luckyWord = item ? item.value : this.state.luckyWord;
    this.setState({ choice: newItems, luckyWord: luckyWord });
  }
  result = () => {
    clearInterval(this.state.interval);
    this.setState({ interval: null, timeout: null, spin: false });
  }
  random = () => {
    const { speed, choice } = this.state;
    const rand = Math.random() * 180 * choice.length * Math.random();
    return speed < 1 ? rand * speed : rand / speed;
  }
  stopSpin = () => {
    clearTimeout(this.state.timeout);
    this.setState(state => {
      return {
        speed: state.speed - 0.030,
        timeout: setTimeout(this.stopSpin, this.random())
      };
    });
  }
  btnOnClick = () => {
    const { choice, spin } = this.state;
    if (choice.length > 1) {
      if (spin === false) {
        this.setState({
          interval: setInterval(this.spin, 1),
          spin: true,
          speed: 3,
          timeout: setTimeout(this.stopSpin, this.random()),
        });
      }
    }
  }
  renderSpinner() {
    const choice = this.state.choice;
    return (
      choice.length > 0 ?
        <Fortuna>
          <Spinner list={choice} word={this.state.luckyWord} />
          <Button onClick={this.btnOnClick}>Spin</Button>
        </Fortuna>
        : null
    )
  }

  render() {
    const itemsParametres = {
      value: this.state.value,
      handleRemove: this.handleRemove,
      handleAdd: this.handleAdd,
      handleChange: this.handleChange,
      choice: this.state.choice,
      spin: this.state.spin,
    }
    return (
      <Div>
        <Items {...itemsParametres} />
        {this.renderSpinner()}
      </Div>
    );
  }
}
const Fortuna = styled.div`
    margin: 0 auto;
    text-align: center;`;
const Div = styled.div`
    display: flex;
    margin: 0 auto;
    @media(max-width: 450px){
      flex-direction: column;
    }
`;