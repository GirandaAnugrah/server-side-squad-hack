import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ThunkActionType<T = void> = ThunkAction<
  T,
  RootState,
  unknown,
  AnyAction
>;