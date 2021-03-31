import { dateFormatter } from "../dateFormatter";

describe("currencyFormatter", () => {
  test("Formats date string into correct format", () => {
    expect(dateFormatter("2013-12-22")).toBe("Dec 22, 2013");
  })
});
