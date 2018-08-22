import React from 'react';
import { Wedge, Text, Group} from 'react-konva';

export default (props) => {
    const param = props.param;
    const x = props.wh.width / 2;
    const y = props.wh.height / 2;
    const radius = 250;

    const wedgeParametres = {
        x: x,
        y: y,
        radius: radius,
        angle: param.angle,
        fill: param.color,
        stroke: 'black',
        strokeWidth: 5,
        rotation: param.rotation,
    }
    const textLength = param.value.length * 0.75;
    const textParametres = {
        x: x,
        y: y,
        offsetX: -(radius / 3) + textLength,
        offsetY: 10,
        rotation: param.rotation + param.angle / 2,
        text: param.value,
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: 400
    }
    return (
        <Group>
            <Wedge {...wedgeParametres} />
            <Text {...textParametres} />
        </Group>
    )
}