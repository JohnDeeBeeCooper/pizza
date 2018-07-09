import React from 'react';
import styled from 'styled-components';

export const Input = (props) => {
    return (
        <div className="select">
            <form onSubmit={props.handleAdd}>
                <input value={props.value} onChange={props.handleChange} /><Button onClick={props.handleAdd}> Add </Button>
                {props.choice.map(item => <div><p>{item.value}</p><Button onClick={props.handleRemove(item.id)}>-</Button></div>)}
            </form>
        </div>
    )
}
export const Button = styled.button`
      border-radius: 3px;
      padding: 0.25em 1em;
      margin: 0 1em;
      background: transparent;
      color: palevioletred;
      border: 2px solid palevioletred;`;
