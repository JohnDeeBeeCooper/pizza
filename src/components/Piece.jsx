import React from 'react';
import { Wedge, Text, Group} from 'react-konva';
import textCut from '../utils/textCut';

export default (props) => {
    const param = props.param;
    const x = props.wh.width / 2;
    const y = props.wh.height / 2;
    const radius = props.wh.radius;

    const wedgeParametres = {
        x: x,
        y: y,
        radius: radius,
        angle: param.angle,
        fill: param.color,
        stroke: 'black',
        strokeWidth: props.wh.strokeWidth,
        rotation: param.rotation,
    }
    const textLength = param.value.length * 0.75;
    const textParametres = {
        x: x,
        y: y,
        offsetX: -(radius / 3) + textLength,
        offsetY: props.wh.offsetY,
        rotation: param.rotation + param.angle / 2,
        text: textCut(param.value),
        fontFamily: 'Arial',
        fontSize: props.wh.fontSize,
        fontWeight: 400
    }
    return (
        <Group>
            <Wedge {...wedgeParametres} />
            <Text {...textParametres} />
        </Group>
    )
}