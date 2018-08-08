import React from 'react';
import { Wedge, Text, Group } from 'react-konva';

export default (props) => {
    const param = props.param;
    const x = 150;
    const y = 150;
    const wedgeParametres = {
        x: x,
        y: y,
        radius: 130,
        angle: param.angle,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 2,
        rotation: param.rotation,
    }
    const textParametres = {
        x: x,
        y: y,
        rotation: param.rotation,
        text: param.value
    }
    return (
        <Group>
            <Wedge {...wedgeParametres} />
            <Text {...textParametres} />
        </Group>
    )
}