import React from 'react';
import styled, { css } from 'styled-components';

export const Items = (props) => {
    return (
        <Select isTrue={props.spin}>
            <Block blocked={props.spin} />
            <form onSubmit={props.handleAdd}>
                <Header>
                    <Input value={props.value} onChange={props.handleChange} placeholder="What needs to be rolled" />
                    <Button primary onClick={props.handleAdd}>Add</Button>
                </Header>
                <List>{props.choice.map(item => <Item key={item.id}><Value>{item.value}</Value><Button delete onClick={props.handleRemove(item.id)}>-</Button></Item>)}</List>
            </form>
        </Select>
    )
}
const Header = styled.div`
    margin-top: 20px;
    text-align: center;`;

const Block = styled.div`
    display: none;
    ${props => props.blocked && css`
    position: absolute;
    display: block;
    z-index: 1;
    width: 100%;
    height: 100%;
  `}`;

export const Button = styled.button`
    background-color:   #6F3662;
    -moz-border-radius: 10px;
    -webkit-border-radius:  10px;
    border-radius:  10px;
    border: none;
    display: inline-block;
    cursor: pointer;
    color:  #ffffff;
    font-family: Arial;
    font-size:  18px;
    padding: 2px 10px;
    text-decoration:none;
    text-shadow:0px 1px 0px #2f6627;
    :hover{
        background-color:#90487F;
    }
    :active{
        position:relative;
        top:1px;
    }
    ${props => props.primary && css`
    color: white;
    padding:5px 15px;
    margin-left: 10px;
  `}
  ${props => props.delete && css`
    float: right;
  `}`;

const Input = styled.input`
    border: 1px solid #6F3662;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -khtml-border-radius: 3px;
    background: #F8F8F2 !important;
    outline: none;
    height: 25px;
    width: 400px; 
    color: #cccccc;
    font-size: 15pt;
    font-family: Tahoma;
    &:focus{
        color: #000000;
        border: 1px solid #000000
    }`;

const Select = styled.div`
    margin: 30px;
    border-radius: 12px;
    min-width: 200px;
    max-width: 550px;
    ${props => props.isTrue && css`
    opacity: 0.3;
    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
  `}`;

const List = styled.ul`
    display: block;`;

const Item = styled.li`
    list-style-type:none;
    padding: 10px 15px;
    display: block;
    border-bottom:1px solid #e4d8e6;`;

const Value = styled.span`
    font-family: 'Arial' sans-serif;
    font-weight: 400;
    font-size: 15pt;`;
