import { useDonationBox } from "context/DonationBoxContext";
import { ReactComponent as ChevronLeft } from "icons/chevron_left.svg";
import { ReactComponent as ChevronRight } from "icons/chevron_right.svg";
import { ReactComponent as DollarIcon } from "icons/dollar.svg";

import React, { useCallback } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";

const Box = styled.div`
  margin: var(--spacing);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 32px 24px 40px 24px;
  }
`;

const Divider = styled.div`
  width: 24px;
`;

const AmountInput = styled.input`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #595d7b;
  outline: none;
  border: none;
  padding: 0 0 0 16px;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Month = styled.span`
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #595d7b;
`;

const Year = styled.span`
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #595d7b;
`;

const Form: React.FC = () => {
  const {
    formattedAmount,
    handleSetAmount,
    formattedUntil,
    handleSetUntil,
    until,
  } = useDonationBox();

  const onAmountChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    handleSetAmount(newValue);
  }, []);

  return (
    <Box>
      <InputBox label="I can donate" IconLeft={DollarIcon} paddingUpDown="16">
        <AmountInput
          data-testid="amount-input"
          type="string"
          value={formattedAmount}
          onChange={onAmountChange}
          placeholder="0.00"
        ></AmountInput>
      </InputBox>
      <Divider />
      <InputBox
        dataTestId="month-input"
        paddingUpDown="12"
        label="Every month until"
        IconLeft={ChevronLeft}
        disabled={until === 1}
        iconLeftClick={() => handleSetUntil(-1)}
        IconRight={ChevronRight}
        iconRightClick={() => handleSetUntil(1)}
      >
        <DateWrapper>
          <Month>{formattedUntil.month}</Month>
          <Year>{formattedUntil.year}</Year>
        </DateWrapper>
      </InputBox>
    </Box>
  );
};

export default Form;
