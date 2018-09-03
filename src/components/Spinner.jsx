import React from 'react';
import { Layer, Stage, Wedge, Group, Text, Circle } from 'react-konva';
import Piece from './Piece'

export default (props) => {
    const width = 800;
    const height = 520;
    const param = {
        x: width - 165,
        y: height / 2,
        rotation: 330,
        radius: 30,
        angle: 60,
        fill: '#BC5506',
        stroke: '#7F4F2A',
        strokeWidth: 4
    }
    const textParametres = {
        x: width - 120,
        y: height / 2 - 15,
        text: props.word,
        fontFamily: 'Arial',
        fontSize: 30
    }
    const item = props.list[0];
    const circleParametres = {
        x: width / 2,
        y: height / 2,
        radius: 250,
        fill: item.color,
        stroke: 'black',
        strokeWidth: 5,
    }
    const circleText = {
        x: width / 2,
        y: height / 2,
        text: item.value,
        fontFamily: 'Arial',
        fontSize: 18,
        fontWeight: 400
    }
    return (
        <Stage width={width} height={height}>
            <Layer>
                <Group>
                    {props.list.length !== 1 ? props.list.map(item => <Piece key={item.id} wh={{ width: width, height: height }} param={item} />) : <Group><Circle {...circleParametres} /><Text {...circleText} /></Group>}
                    <Wedge {...param} /><Text {...textParametres} />
                </Group>
            </Layer>
        </Stage>
    )
}