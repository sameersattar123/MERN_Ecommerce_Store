import React, { useState } from "react";
import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const GroupButton = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((count) => count + 1);
  };

  const handleMinus = () => {
    setCount((count) => count - 1);
  };
  return (
      <Component>
    <StyledButton onClick={() => handleMinus()} disabled={count === 0}>-</StyledButton>
    <Button>{count}</Button>
    <StyledButton onClick={() => handlePlus()}>+</StyledButton>
      </Component>
  );
};

export default GroupButton;
