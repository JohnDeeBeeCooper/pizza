import React from 'react';
import { Layer, Stage, Wedge, Group, Text, Circle } from 'react-konva';
import Piece from './Piece'
import getParametres from '../utils/getParametres';
import textCut from '../utils/textCut';

export default (props) => {
    const { width,
        height,
        radius,
        fontSize,
        strokeWidth,
        arrowRadius,
        arrowStroke,
        capText,
        x,
        y,
        offsetY} = getParametres();

    const arrowParametres = {
        x,
        y,
        rotation: 330,
        radius: arrowRadius,
        angle: 60,
        fill: '#BC5506',
        stroke: '#7F4F2A',
        strokeWidth: arrowStroke
    }
    const textParametres = {
        x: width - 130,
        y: height / 2 - 10,
        text: textCut(props.word),
        fontFamily: 'Arial',
        fontSize
    }
    const item = props.list[0];
    const circleParametres = {
        x: width / 2,
        y: height / 2,
        radius,
        fill: item.color,
        stroke: 'black',
        strokeWidth
    }
    const circleText = {
        x: width / 2,
        y: height / 2,
        text: textCut(item.value),
        fontFamily: 'Arial',
        fontSize,
        fontWeight: 400
    }
    return (
        <Stage width={width} height={height}>
            <Layer>
                <Group>
                    {props.list.length !== 1 ? props.list.map(item => <Piece key={item.id} wh={{ width, height, radius, fontSize, strokeWidth, offsetY}} param={item} />) : <Group><Circle {...circleParametres} /><Text {...circleText} /></Group>}
                    <Wedge {...arrowParametres} />{capText ? <Text {...textParametres} /> : null}
                </Group>
            </Layer>
        </Stage>
    )
}