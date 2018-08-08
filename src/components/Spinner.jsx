import React from 'react';
import { Layer, Stage, Wedge, Group } from 'react-konva';
import Piece from './Piece'

export default (props) => {
    const width = 600;
    const height = 300;
    const param = {
        x: width / 2 - 20,
        y: height / 2,
        rotation: 330,
        radius: 30,
        angle: 60,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 2
    }
    return (
        <Stage width={width} height={height}>
            <Layer>
                <Group>
                    {props.list.map(item => <Piece key={item.id} param={item} />)}
                    <Wedge {...param} />
                </Group>
            </Layer>
        </Stage>
    )
}