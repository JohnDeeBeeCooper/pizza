import * as React from "react";
import { Button } from "atoms";
import { Item, Text } from "./styled";

interface IProps {
  onDelete: () => void;
  text: string;
}

const PizzaItem: React.FC<IProps> = (props) => {
  const { onDelete, text } = props;
  return (
    <Item>
      <Text>{text}</Text>
      <Button onClick={onDelete}> - </Button>
    </Item>
  );
};

export default PizzaItem;
