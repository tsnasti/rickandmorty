import { store } from "../store/index";
import { Info } from "./info";
import { Episode } from "./episodes";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type СharacterData = {
  characters: Info | undefined;
  episode: Episode | undefined;
};

export type СharacterProcess = {
  name: string;
};
