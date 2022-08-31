import { render, screen } from "@testing-library/react";

import Typography from ".";

describe("Typography", () => {
  it("should renders a children", () => {
    render(<Typography>Typography children</Typography>);

    const children = screen.getByText(/typography children/i);

    expect(children).toBeInTheDocument();
  });

  it("should render 'h1-normal' class by default", () => {
    render(<Typography>Default text</Typography>);

    const children = screen.getByText(/default text/i);

    expect(children).toHaveClass("h1-normal");
  });
});
