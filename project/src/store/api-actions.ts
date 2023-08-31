import { AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../types/state";
import { Info } from "../types/info";
import { Filter } from "../types/filter";
import { Episode } from "../types/episodes";
import { APIRoute } from "../const";

export const fetchCharactersAction = createAsyncThunk<
  Info,
  Filter,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  "data/fetchFilteredCharacters",
  async ({ page, name, status, species, type, gender }, { dispatch, extra: api }) => {
    const { data: filteredData } = await api.get<Info>(
      `${APIRoute.Characters}?page=${page}&name${"=" + name}&status${
        "=" + status
      }&species${"=" + species}&type${"=" + type}&gender${"=" + gender}`
    );
    return filteredData;
  }
);

export const fetchEpisodeAction = createAsyncThunk<
  Episode,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("data/fetchEpisode", async (id, { dispatch, extra: api }) => {
  const { data: episodeData } = await api.get<Episode>(
    `${APIRoute.Episode}/${id}`
  );
  return episodeData;
});
