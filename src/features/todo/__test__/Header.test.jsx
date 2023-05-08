import { render, screen } from "@testing-library/react";

import Header from "../header";

describe("Header", () => {
  it("should render same text passed into title prop", () => {
    const title = "Hello World!";
    render(<Header title={title} />);
    const titleEl = screen.getByText(/hello world!/i);
    expect(titleEl).toBeInTheDocument();
  });
});
