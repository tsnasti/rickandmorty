import { NameSpace } from "../../const";
import { State } from "../../types/state";
import { Info } from "../../types/info";
import { Episode } from "../../types/episodes";

export const getInfo = (state: State): Info | undefined => state[NameSpace.Data].characters;

export const getEpisode = (state: State): Episode | undefined => state[NameSpace.Data].episode;
