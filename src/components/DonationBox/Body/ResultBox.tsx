import { useDonationBox } from "context/DonationBoxContext";
import React, { useMemo } from "react";
import styled from "styled-components";
import { stringToMoneyFormatted } from "utils/helpers";

const Box = styled.div`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
`;

const TotalAmountBox = styled.div`
  line-height: 1.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  @media (max-width: 600px) {
    padding: 24px 0 0 0;
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

const TotalAmount = styled.span`
  font-family: var(--inter-font);
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: var(--grey-color);

  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }
`;

const InfoBox = styled.div`
  margin-top: 24px;
  background-color: var(--light-color);
  padding: 24px 16px;
  font-size: 0.75rem;
  line-height: 1.05rem;
  text-align: left;
  color: var(--dark-grey-color);

  @media (max-width: 600px) {
    text-align: center;
  }
`;

const InfoBoxBold = styled.b`
  font-family: var(--inter);
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 1.05rem;
`;

const Result: React.FC = () => {
  const { amount, until, formattedUntil, stringToMoney } = useDonationBox();

  const totalAmount = useMemo(() => {
    const total = amount * until;

    return stringToMoneyFormatted(total);
  }, [amount, until]);

  const formattedEveryMonth = useMemo(() => {
    return stringToMoneyFormatted(amount);
  }, [amount]);

  return (
    <Box>
      <TotalAmountBox>
        <span>Total amount</span>
        <TotalAmount data-testid="total-amount">${totalAmount}</TotalAmount>
      </TotalAmountBox>
      <InfoBox>
        <span>
          You will be sending{" "}
          <b data-testid="total-amount-per-month">${formattedEveryMonth}</b>{" "}
          every month, until{" "}
          <InfoBoxBold data-testid="year-month">
            {formattedUntil.month} {formattedUntil.year}
          </InfoBoxBold>
          . Thank you!
        </span>
      </InfoBox>
    </Box>
  );
};

export default Result;
