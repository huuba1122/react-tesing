// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import { afterEach } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { mockServer } from "./__mock__/setupServer";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./app/rootReducer";

import "@testing-library/jest-dom";

beforeAll(() => mockServer.listen({ onUnhandledRequest: "bypass" }));
afterAll(() => mockServer.close());

afterEach(() => {
  cleanup();
  mockServer.resetHandlers();
});

export const setupStore = (preloadedState) =>
  configureStore({
    preloadedState,
    reducer: rootReducer,
  });

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
