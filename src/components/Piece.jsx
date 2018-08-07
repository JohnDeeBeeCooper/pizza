import React from 'react';
import styled from 'styled-components';
import { Wedge, Text, Group } from 'react-konva';

export default (props) => {
    const rotate = props.angle * props.param.id;
    const x = 150;
    const y = 150;
    const wedgeParametres = {
        x: x,
        y: y,
        radius: 130,
        angle: props.angle,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        rotation: rotate,
    }
    const textParametres = {
        x: x,
        y: y,
        rotation: rotate,
        text: props.param.value
    }
    return (
        <Group>
            <Wedge {...wedgeParametres} />
            <Text {...textParametres} />
        </Group>
    )
}