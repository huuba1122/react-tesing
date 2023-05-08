import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

const useAppDispatch = useDispatch;
const useAppSelector = useSelector;

export { store, useAppDispatch, useAppSelector };
