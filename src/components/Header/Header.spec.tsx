import { render, screen } from "@testing-library/react";

import Header from ".";

describe("Header", () => {
  it("should renders a children", () => {
    render(<Header>Header children</Header>);

    const children = screen.getByText(/header children/i);

    expect(children).toBeInTheDocument();
  });
});
