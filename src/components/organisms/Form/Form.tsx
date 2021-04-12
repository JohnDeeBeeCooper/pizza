import * as React from "react";

import { Input, Button } from "./styled";

const Form: React.FC = () => {
  const [value, setValue] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setValue(e.target.value.trim());
  };

  return <form onSubmit={onSubmit}>hooi</form>;
};

export default Form;
