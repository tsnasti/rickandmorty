import { Episode } from "./episodes";

export type Origin = {
  name: string;
};

export type Location = {
  name: string;
};

export type Сharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Episode[];
};
