import { act, renderHook } from "@testing-library/react";

import { mockBots } from "../mocks";
import { FavoritesProvider, useFavorites } from "./useFavorites";

const mockedSetItemLocalStorage = jest.spyOn(Storage.prototype, "setItem");

describe("useFavorites", () => {
  beforeEach(() => {
    mockedSetItemLocalStorage.mockClear();
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValueOnce(JSON.stringify(mockBots));
  });

  it("should be able to initialize favorites with localStorage value", () => {
    const { result } = renderHook(useFavorites, {
      wrapper: FavoritesProvider,
    });

    expect(result.current.favorites).toEqual(mockBots);
  });

  it("should be able to add a new favorite", () => {
    const { result } = renderHook(useFavorites, {
      wrapper: FavoritesProvider,
    });

    const bot = {
      name: "Jonathan",
      type: "builder",
      created: "2020-03-31T14:35:44.510Z",
    };

    act(() => {
      result.current.addFavorite(bot);
    });

    expect(result.current.favorites).toEqual([...mockBots, bot]);
  });

  it("should be able to remove a favorite", () => {
    const { result } = renderHook(useFavorites, {
      wrapper: FavoritesProvider,
    });

    act(() => {
      result.current.removeFavorite("Suzie");
    });

    expect(result.current.favorites).toEqual([
      {
        name: "Billy Hargrove",
        type: "router",
        created: "2020-01-01T14:35:44.510Z",
      },
    ]);
  });

  it("should not be able to remove a favorite that does not exist", () => {
    const { result } = renderHook(useFavorites, {
      wrapper: FavoritesProvider,
    });

    act(() => {
      result.current.removeFavorite("Fake bot name");
    });

    expect(result.current.favorites).toEqual(mockBots);
    expect(mockedSetItemLocalStorage).not.toHaveBeenCalled();
  });
});
