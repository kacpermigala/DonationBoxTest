import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  flex-basis: 0;
`;

const Label = styled.label`
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: var(----mid-grey-color);
  font-weight: 500;
  margin-bottom: 6px;
`;

const InputDiv = styled.div<{ $paddingUpDown?: string }>`
  border: 1px solid var(--blue-grey-color);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.$paddingUpDown}px 8px
    ${(props) => props.$paddingUpDown}px 8px;
  width: 100%;
  box-sizing: border-box;

  &:focus-within {
    border-color: var(----dark-blue-grey-color);
  }
`;

const IconWrapper = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  &:not([disabled]):hover {
    background-color: rgba(243, 245, 254, 1);
  }
  &:not([disabled]):active {
    background-color: rgba(232, 234, 242, 1);
  }
`;

interface InputBoxProps {
  label: string;
  IconLeft?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  IconRight?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconLeftClick?: () => void;
  iconRightClick?: () => void;
  paddingUpDown: string;
  disabled?: boolean;
  dataTestId?: string;
  children: React.ReactNode;
}

const InputBox: React.FC<InputBoxProps> = ({
  label,
  IconLeft,
  IconRight,
  iconLeftClick,
  iconRightClick,
  paddingUpDown,
  disabled,
  dataTestId,
  children,
}) => {
  return (
    <Box data-testid={dataTestId}>
      <Label>{label}</Label>
      <InputDiv $paddingUpDown={paddingUpDown}>
        {IconLeft && (
          <IconWrapper
            disabled={disabled}
            onClick={iconLeftClick}
            data-testid="left-month-icon"
          >
            <IconLeft width={24} height={24} />
          </IconWrapper>
        )}
        {children}
        {IconRight && (
          <IconWrapper onClick={iconRightClick} data-testid="right-month-icon">
            <IconRight width={24} height={24} />
          </IconWrapper>
        )}
      </InputDiv>
    </Box>
  );
};

InputBox.defaultProps = {
  disabled: false,
};

export default InputBox;
