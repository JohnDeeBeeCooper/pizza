import * as React from "react";
import { Layer, Stage, Wedge, Group, Text, Circle } from "react-konva";
import { PizzaSlice } from "atoms";
import getParametres from "utils/getParametres";

type ListItem = {
  id: number;
  value: string;
  color: string;
};

interface IProps {
  word: string;
  list: ListItem[];
}

const Spinner: React.FC<IProps> = (props) => {
  const {
    width,
    height,
    radius,
    fontSize,
    strokeWidth,
    arrowRadius,
    arrowStroke,
    capText,
    x,
    y,
    offsetY,
  } = getParametres();

  const arrowParametres = {
    x,
    y,
    rotation: 330,
    radius: arrowRadius,
    angle: 60,
    fill: "#BC5506",
    stroke: "#7F4F2A",
    strokeWidth: arrowStroke,
  };
  const textParametres = {
    x: width - 130,
    y: height / 2 - 10,
    text: props.word,
    fontFamily: "Arial",
    fontSize,
  };
  const item = props.list[0];
  const circleParametres = {
    x: width / 2,
    y: height / 2,
    radius,
    fill: item.color,
    stroke: "black",
    strokeWidth,
  };
  const circleText = {
    x: width / 2,
    y: height / 2,
    text: item.value,
    fontFamily: "Arial",
    fontSize,
    fontWeight: 400,
  };
  return (
    <Stage height={height} width={width}>
      <Layer>
        <Group>
          {props.list.length !== 1 ? (
            props.list.map((item: ListItem) => (
              <PizzaSlice
                key={item.id}
                renderProps={{
                  width,
                  height,
                  radius,
                  fontSize,
                  strokeWidth,
                  offsetY,
                }}
                param={item}
              />
            ))
          ) : (
            <Group>
              <Circle {...circleParametres} />
              <Text {...circleText} />
            </Group>
          )}
          <Wedge {...arrowParametres} />
          {capText ? <Text {...textParametres} /> : null}
        </Group>
      </Layer>
    </Stage>
  );
};

export default Spinner;
