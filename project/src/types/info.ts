import { Сharacter } from "./character";

export type Pages = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type Info = {
  info: Pages;
  results: Сharacter[];
};
