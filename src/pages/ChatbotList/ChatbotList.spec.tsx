import "@testing-library/jest-dom";

import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { BrowserRouter } from "react-router-dom";

import { mockBots } from "../../mocks";
import ChatbotList from ".";

const server = setupServer(
  rest.get("https://front-end-test.beta-cs.blip.ai/bots", (req, res, ctx) => {
    return res(ctx.json(mockBots));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("ChatbotList", () => {
  it("should be renders a chatbots list", async () => {
    render(<ChatbotList />, { wrapper: BrowserRouter });

    const chatbotsSection = within(
      await screen.findByRole("region", { name: /chatbots/i })
    );

    expect(chatbotsSection.getByText(/Billy Hargrove/i)).toBeInTheDocument();
    expect(chatbotsSection.getByText(/Suzie/i)).toBeInTheDocument();
  });

  it("should be add a favorite", async () => {
    render(<ChatbotList />, { wrapper: BrowserRouter });

    const chatbotsSection = within(
      await screen.findByRole("region", { name: /chatbots/i })
    );
    const [buttonStar] = chatbotsSection.getAllByRole("button", {
      name: /icon star/i,
    });
    userEvent.click(buttonStar);
    const favoritesSection = within(
      await screen.findByRole("region", { name: /favorites/i })
    );

    await waitFor(() => {
      expect(favoritesSection.getByText(/Billy Hargrove/i)).toBeInTheDocument();
    });
  });
});
