import { renderHook, act } from "@testing-library/react";

import useToggle from "../useToggle";

describe("useToggle", () => {
  it("Allows you to toggle value", () => {
    const { result } = renderHook(() => useToggle(false));
    // asset intial value
    expect(result.current.value).toBe(false);

    // toggle value
    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toBe(false);
  });
});
