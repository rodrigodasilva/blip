import { act, renderHook } from "@testing-library/react";

import useView, { ViewProvider } from "./useView";

const INITIAL_VIEW = "list";

describe("useView", () => {
  beforeEach(() => {
    jest
      .spyOn(Storage.prototype, "getItem")
      .mockReturnValueOnce(JSON.stringify(INITIAL_VIEW));
  });

  it("should get 'list' with initial state", () => {
    const { result } = renderHook(useView, {
      wrapper: ViewProvider,
    });

    expect(result.current.view).toBe("list");
  });

  it("should be able change value", () => {
    const { result } = renderHook(useView, {
      wrapper: ViewProvider,
    });

    act(() => {
      result.current.onViewChange("block");
    });

    expect(result.current.view).toBe("block");
  });
});
