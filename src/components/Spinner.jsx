import React from 'react';
import { Layer, Stage, Wedge, Group } from 'react-konva';
import styled from 'styled-components';
import Piece from './Piece'

export default (props) => {
    const angle = 360 / props.list.length;
    const width = 300;
    const height = 300;
    const param = {
        x: width,
        y: height / 2,
        rotation: 270,
        radius: 23,
        angle: 23,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2
    }
    return (
        <Stage width={width} height={height}>
            <Layer>
                <Group>
                    {props.list.map(item => <Piece key={item.id} angle={angle} param={item} />)}
                </Group>
            </Layer>
        </Stage>
    )
}