import * as React from "react";
import { Wedge, Group, Text } from "react-konva";

type Param = {
  rotation?: number;
  angle?: number;
  value: string;
  color: string;
};
type SliceParams = {
  width: number;
  height: number;
  strokeWidth: number;
  offsetY: number;
  fontSize: number;
  radius: number;
};
interface IProps {
  param: Param;
  renderProps: SliceParams;
}

const PizzaSlice: React.FC<IProps> = (props) => {
  const param = props.param;
  const x = props.renderProps.width / 2;
  const y = props.renderProps.height / 2;
  const radius = props.renderProps.radius;

  const wedgeParametres = {
    x: x,
    y: y,
    radius: radius,
    angle: param.angle,
    fill: param.color,
    stroke: "black",
    strokeWidth: props.renderProps.strokeWidth,
    rotation: param.rotation,
  };
  const textLength = param.value.length * 0.75;
  const textParametres = {
    x: x,
    y: y,
    offsetX: -(radius / 3) + textLength,
    offsetY: props.renderProps.offsetY,
    rotation: param.rotation + param.angle / 2,
    text: param.value,
    fontFamily: "Arial",
    fontSize: props.renderProps.fontSize,
    fontWeight: 400,
  };
  return (
    <Group>
      <Wedge {...wedgeParametres} />
      <Text {...textParametres} />
    </Group>
  );
};

export default PizzaSlice;
