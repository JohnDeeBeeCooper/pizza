import React, { Component } from "react";
import styled, { css } from "styled-components";

export class Items extends Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.spin) {
      return false;
    }
    return true;
  }
  render() {
    const props = this.props;
    return (
      <Select isTrue={props.spin}>
        <Block blocked={props.spin} />
        <form onSubmit={props.handleAdd}>
          <Header>
            <Input
              value={props.value}
              onChange={props.handleChange}
              placeholder="What needs to be rolled"
            />
            <Button primary onClick={props.handleAdd}>
              Add
            </Button>
          </Header>
          <List>
            {props.choice.map((item) => (
              <Item key={item.id}>
                <Value>{item.value}</Value>
                <Button delete onClick={props.handleRemove(item.id)}>
                  -
                </Button>
              </Item>
            ))}
          </List>
        </form>
      </Select>
    );
  }
}
const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  text-align: center;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Block = styled.div`
  display: none;
  ${(props) =>
    props.blocked &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: block;
    `}
`;

const Input = styled.input`
  padding: 7px;
  border: 1px solid #6f3662;
  border-radius: 10px;
  background: #f8f8f2 !important;
  outline: none;
  height: 25px;
  min-width: 300px;
  max-width: 600px;
  color: #cccccc;
  font-size: 15pt;
  font-family: "Arial";
  &:focus {
    color: #000000;
    border: 1px solid #000000;
  }
`;

const Select = styled.div`
  margin: 30px;
  border-radius: 12px;
  min-width: 200px;
  max-width: 550px;
  display: flex;
  @media (max-width: 450px) {
    margin: 0 auto;
    max-width: 400px;
  }
  ${(props) =>
    props.isTrue &&
    css`
      opacity: 0.3;
    `}
`;

const List = styled.ul`
  padding: 0;
  font-family: "Arial";
`;

const Item = styled.li`
  list-style-type: none;
  padding: 10px 15px;
  display: block;
  border-bottom: 1px solid #e4d8e6;
`;

const Value = styled.span`
  font-family: "Arial" sans-serif;
  font-weight: 400;
  font-size: 15pt;
`;
