const MAX_VALUE = 1_000_000;

const stringToMoney = (value: string) => {
  const [decimal, fraction] = value.split(".");

  const isFloat = !!value.match(/\./g);

  const dotPart = isFloat ? "." : "";
  const fractionPart = fraction ? `${fraction.slice(0, 2)}` : "";

  return (
    parseFloat(decimal || "0").toLocaleString("en-US") + dotPart + fractionPart
  );
};

const stringToMoneyFormatted = (value: number) => {
  let countDecimals = 0;

  if (value % 1 !== 0) {
    const decimalPart = value.toString().split(".")[1];
    countDecimals = decimalPart ? decimalPart.length : 0;
  }

  if (countDecimals) return stringToMoney(value.toFixed(2).toString());

  return stringToMoney(value.toString());
};

export { MAX_VALUE, stringToMoney, stringToMoneyFormatted };
