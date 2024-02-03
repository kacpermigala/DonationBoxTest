import { fireEvent, render, screen, within } from "@testing-library/react";
import DonationBox from "components/DonationBox";

describe("DonationBox", () => {
  describe("per month amount", () => {
    it("fills input with number without factorial", () => {
      render(<DonationBox />);
      const input = screen.getByTestId("amount-input");
      fireEvent.change(input, { target: { value: "10" } });

      const perMonth = screen.getByTestId("total-amount-per-month");

      expect(perMonth.textContent).toBe("$10");
    });
    it("fills input with number with 1-digit factorial", () => {
      render(<DonationBox />);
      const input = screen.getByTestId("amount-input");
      fireEvent.change(input, { target: { value: "10.1" } });

      const perMonth = screen.getByTestId("total-amount-per-month");

      expect(perMonth.textContent).toBe("$10.10");
    });
    it("fills input with number with 2-digit factorial", () => {
      render(<DonationBox />);
      const input = screen.getByTestId("amount-input");
      fireEvent.change(input, { target: { value: "10.11" } });

      const perMonth = screen.getByTestId("total-amount-per-month");

      expect(perMonth.textContent).toBe("$10.11");
    });
    it("fills input with number with 3-digit factorial", () => {
      render(<DonationBox />);
      const input = screen.getByTestId("amount-input");
      fireEvent.change(input, { target: { value: "10.111" } });

      const perMonth = screen.getByTestId("total-amount-per-month");

      expect(perMonth.textContent).toBe("$10.11");
    });
  });
  describe("total amount", () => {
    it("fills input with number without factorial", () => {
      render(<DonationBox />);
      const monthInput = screen.getByTestId("month-input");
      const rightMonthIcon = within(monthInput).getByTestId("right-month-icon");
      for (let i = 0; i < 3; i++) {
        fireEvent.click(rightMonthIcon);
      }

      const input = screen.getByTestId("amount-input");
      fireEvent.change(input, { target: { value: "33" } });

      const perMonth = screen.getByTestId("total-amount");

      expect(perMonth.textContent).toBe("$132");
    });
    it("fills input with number with 1-digit factorial", () => {
      render(<DonationBox />);
      const monthInput = screen.getByTestId("month-input");
      const rightMonthIcon = within(monthInput).getByTestId("right-month-icon");
      for (let i = 0; i < 3; i++) {
        fireEvent.click(rightMonthIcon);
      }

      const input = screen.getByTestId("amount-input");
      fireEvent.change(input, { target: { value: "33.3" } });

      const perMonth = screen.getByTestId("total-amount");

      expect(perMonth.textContent).toBe("$133.20");
    });
    it("fills input with number with 2-digit factorial", () => {
      render(<DonationBox />);
      const monthInput = screen.getByTestId("month-input");
      const rightMonthIcon = within(monthInput).getByTestId("right-month-icon");
      for (let i = 0; i < 3; i++) {
        fireEvent.click(rightMonthIcon);
      }

      const input = screen.getByTestId("amount-input");
      fireEvent.change(input, { target: { value: "33.33" } });

      const perMonth = screen.getByTestId("total-amount");

      expect(perMonth.textContent).toBe("$133.32");
    });
    it("fills input with number with 3-digit factorial", () => {
      render(<DonationBox />);
      const monthInput = screen.getByTestId("month-input");
      const rightMonthIcon = within(monthInput).getByTestId("right-month-icon");
      for (let i = 0; i < 3; i++) {
        fireEvent.click(rightMonthIcon);
      }
      const input = screen.getByTestId("amount-input");
      fireEvent.change(input, { target: { value: "33.33" } });

      const perMonth = screen.getByTestId("total-amount");

      expect(perMonth.textContent).toBe("$133.32");
    });
  });
  describe("left month click", () => {
    it("doesn't allow to click it if only one month forward", () => {
      render(<DonationBox />);
      const monthInput = screen.getByTestId("month-input");
      const left = within(monthInput).getByTestId("left-month-icon");
      expect(left).toBeDisabled();
    });

    it("does allow to click it if only more than month forward", () => {
      render(<DonationBox />);
      const monthInput = screen.getByTestId("month-input");

      const rightMonthIcon = within(monthInput).getByTestId("right-month-icon");
      fireEvent.click(rightMonthIcon);
      const left = within(monthInput).getByTestId("left-month-icon");
      expect(left).not.toBeDisabled();
    });
  });
  describe("month forward", () => {
    beforeAll(() => {
      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date(2020, 3, 1));
    });

    afterAll(() => {
      jest.useRealTimers();
    });
    it("fills correct month & year", () => {
      render(<DonationBox />);
      const monthInput = screen.getByTestId("month-input");
      const rightMonthIcon = within(monthInput).getByTestId("right-month-icon");
      for (let i = 0; i < 10; i++) {
        fireEvent.click(rightMonthIcon);
      }

      const yearMonth = screen.getByTestId("year-month");

      expect(yearMonth.textContent).toBe("March 2021");
    });
  });
});
