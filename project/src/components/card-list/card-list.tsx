import { Info } from "../../types/info";
import Card from "../card/card";
import "./card-list.css";

type CardListProps = {
  characters: Info["results"] | undefined;
};

function CardList({ characters }: CardListProps): JSX.Element {
  return (
    <div className="characters__list">
      {characters?.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
}

export default CardList;
