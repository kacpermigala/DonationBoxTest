import React, { createContext, useContext, useEffect, useState } from "react";
import { MAX_VALUE, stringToMoney } from "utils/helpers";

interface FormattedDate {
  year: number;
  month: string;
}

interface DonationBoxContextProps {
  amount: number;
  formattedAmount: string;
  handleSetAmount: (value: string) => void;
  formattedUntil: FormattedDate;
  handleSetUntil: (value: number) => void;
  until: number;
  stringToMoney: (value: string) => string;
}

const DonationBoxContext = createContext<DonationBoxContextProps | undefined>(
  undefined
);

export const DonationBoxProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [amount, setAmount] = useState<number>(0);
  const [formattedAmount, setFormattedAmount] = useState<string>("");

  const [until, setUntil] = useState<number>(1);
  const [formattedUntil, setFormattedUntil] = useState<FormattedDate>(
    {} as FormattedDate
  );

  const handleSetAmount = (value: string): void => {
    let sanitizedValue = value.replace(/[^0-9.]/g, "");

    if (!sanitizedValue) {
      setFormattedAmount("");
      setAmount(0);
      return;
    }

    sanitizedValue = stringToMoney(sanitizedValue);
    let numberValue = parseFloat(sanitizedValue.replace(/,/g, ""));

    if (numberValue > MAX_VALUE) {
      sanitizedValue = stringToMoney(MAX_VALUE.toString());
      numberValue = MAX_VALUE;
    }

    setFormattedAmount(sanitizedValue);
    setAmount(numberValue);
  };

  const handleSetUntil = (value: number) => {
    if (value === -1 && until > 1) {
      setUntil((prev) => prev - 1);
    } else if (value === 1) {
      setUntil((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + until);
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleDateString("en-US", { month: "long" });
    setFormattedUntil({ year, month });
  }, [until]);

  const contextValue: DonationBoxContextProps = {
    amount,
    formattedAmount,
    handleSetAmount,
    formattedUntil,
    handleSetUntil,
    until,
    stringToMoney,
  };

  return (
    <DonationBoxContext.Provider value={contextValue}>
      {children}
    </DonationBoxContext.Provider>
  );
};

export const useDonationBox = () => {
  const context = useContext(DonationBoxContext);

  if (!context) {
    throw new Error("useAmount must be used within an AmountProvider");
  }

  return context;
};
