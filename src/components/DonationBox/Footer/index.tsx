import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const Box = styled.div`
  padding: var(--spacing);
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    justify-content: center;

    :first-child {
      display: none;
    }
  }
`;

const ActionFooter: React.FC = () => {
  return (
    <Box>
      <Button label="Cancel" btnLight />
      <Button label="Continue" />
    </Box>
  );
};

export default ActionFooter;
