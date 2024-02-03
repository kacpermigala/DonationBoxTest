import { ReactComponent as OpenIcon } from "icons/arrow_drop_down.svg";
import { ReactComponent as CloseIcon } from "icons/close.svg";
import { ReactComponent as HeaderIcon } from "icons/givingblock.svg";
import React from "react";
import styled from "styled-components";

const Box = styled.div`
  background-color: var(--salmon-color);
  padding: var(--spacing);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 24px 24px 28px 24px;
  }
`;

const TextBox = styled.div`
  text-align: left;
  margin-left: 20px;

  @media (max-width: 600px) {
    text-align: center;
    margin: 16px 0 0 0;
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: var(--midnight-color);
  margin: 0;
  padding: 0 0 4px 0;

  @media (max-width: 600px) {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.8rem;
    padding: 0;
    margin-bottom: 4px;
  }
`;

const P = styled.p`
  font-family: var(--inter-family);
  font-size: 1rem;
  font-weight: 400;
  color: var(--grey-color);
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const DropdownButton = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: 24px;
  width: 24px;
  height: 24px;

  &:hover {
    border-radius: 10px;
    background-color: #f2d0c1;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

interface HeaderProps {
  open: boolean;
  handleToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ open, handleToggle }) => {
  return (
    <Box>
      <DropdownButton onClick={handleToggle} data-testid="dropdown-button">
        {open ? <CloseIcon fill="#595d7b" /> : <OpenIcon fill="#595d7b" />}
      </DropdownButton>
      <HeaderIcon height={72} width={72} />
      <TextBox>
        <H1>The giving block</H1>
        <P>Set up your donation goal!</P>
      </TextBox>
    </Box>
  );
};

export default Header;
