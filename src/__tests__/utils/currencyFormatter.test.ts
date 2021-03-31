import { currencyFormatter } from "../../utils/currencyFormatter";

describe("currencyFormatter", () => {
  test("Formats number into currency string", () => {
    expect(currencyFormatter(-1243.32)).toBe("-$1,243.32");
  })
});
