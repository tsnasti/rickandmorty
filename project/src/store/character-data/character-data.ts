import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../const";
import { СharacterData } from "../../types/state";
import {
  fetchCharactersAction,
  fetchEpisodeAction
} from "../api-actions";

export const initialState: СharacterData = {
  characters: undefined,
  episode: undefined
};

export const characterData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCharactersAction.fulfilled, (state, action) => {
        state.characters = action.payload;
      })
      .addCase(fetchEpisodeAction.fulfilled, (state, action) => {
        state.episode = action.payload;
      });
  }
});
