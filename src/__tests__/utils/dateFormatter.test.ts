import { dateFormatter } from "../../utils/dateFormatter";

describe("dateFormatter", () => {
  test("Formats date string into correct format", () => {
    expect(dateFormatter("2013-12-22")).toBe("Dec 22, 2013");
  })
});
