import { rest } from "msw";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { renderWithProviders } from "@src/setupTest";
import { mockServer } from "@src/__mock__/setupServer";
import { BASE_API_URL } from "@shared/api/config";
import { postUrl } from "../consts";

import Post from "..";

const mockData = [
  {
    id: 1,
    title: "title 1",
    body: "body1",
    userId: 1,
  },
  {
    id: 2,
    title: "title 2",
    body: "body2",
    userId: 1,
  },
  {
    id: 3,
    title: "title 3",
    body: "body3",
    userId: 1,
  },
];

const getListPostsUrl = `${BASE_API_URL}${postUrl}`;

const mockFetchPost = rest.get(getListPostsUrl, async (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(mockData), ctx.delay(1000));
});

// const server = setupServer(mockFetchPost);

describe("Post", () => {
  it("fetch posts", async () => {
    mockServer.use(mockFetchPost);
    renderWithProviders(<Post />);

    await waitForElementToBeRemoved(() => screen.queryByText(/loading.../i), {
      timeout: 2000,
    });

    // await waitFor(
    //   () => expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument(),
    //   //   () => expect(loadingEl).not.toBeInTheDocument(), // not work
    //   { timeout: 2000 }
    // );

    const firstPostEl = screen.getByRole("heading", { name: /title 1/i });
    expect(firstPostEl).toBeInTheDocument();

    const postItemsEl = screen.getAllByRole("heading");
    expect(postItemsEl.length).toBe(mockData.length);
  });
});
