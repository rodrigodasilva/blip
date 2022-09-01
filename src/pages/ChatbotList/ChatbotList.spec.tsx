import "@testing-library/jest-dom";

import { render, screen, within } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

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
  it("should renders chatbots list", async () => {
    render(<ChatbotList />);

    const chatbotsSection = within(
      await screen.findByRole("region", { name: /chatbots/i })
    );

    expect(chatbotsSection.getByText(/Billy Hargrove/i)).toBeInTheDocument();
    expect(chatbotsSection.getByText(/Suzie/i)).toBeInTheDocument();
  });
});
