import React from 'react';
import styled from 'styled-components';

export const Items = (props) => {
    return (
        <Select>
            <form onSubmit={props.handleAdd}>
                <Input value={props.value} onChange={props.handleChange} placeholder="хукс" /><Button onClick={props.handleAdd}> Add </Button>
                <List>{props.choice.map(item => <Item key={item.id}><Value>{item.value}</Value><Button onClick={props.handleRemove(item.id)}>-</Button></Item>)}</List>
            </form>
        </Select>
    )
}
export const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: palevioletred;
    border: 2px solid palevioletred;`;
const Input = styled.input`
    border: 1px solid #cccccc;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -khtml-border-radius: 3px;
    background: #ffffff !important;
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
    float:left;
    margin-left:10px;`;
const List = styled.ul``;
const Item = styled.li`
    list-style-type:none;`;
const Value = styled.p``;
