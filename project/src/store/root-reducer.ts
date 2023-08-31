import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../const";
import { characterData } from "./character-data/character-data";

export const rootReducer = combineReducers({
  [NameSpace.Data]: characterData.reducer,
});
