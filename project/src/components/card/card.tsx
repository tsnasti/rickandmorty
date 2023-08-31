import { useState } from "react";
import { Сharacter } from "../../types/character";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchEpisodeAction } from "../../store/api-actions";
import { getEpisode } from "../../store/character-data/selectors";
import Modal from "../modal/modal";
import "./card.css";

type CardProps = {
  character: Сharacter;
};

function Card({ character }: CardProps): JSX.Element {
  const { id, name, status, species, gender, image, episode } = character;
  const [showModal, setShowModal] = useState(false);

  const episodeOnId = useAppSelector(getEpisode);
  const episodeName = episodeOnId?.name;
  const dispatch = useAppDispatch();

  const toggleShowModal = () => {
    const episodeId = String(String(episode[0]).match(/\d+/));
    dispatch(fetchEpisodeAction(episodeId));
    setShowModal(!showModal);
  };

  const toggleCloseModal = () => {
    setShowModal(!showModal);
  };

  let statusDescription = null;
  if (status === "Alive") {
    statusDescription = (
      <p className="characters__status characters__status-alive">{status}</p>
    );
  }
  if (status === "Dead") {
    statusDescription = (
      <p className="characters__status characters__status-dead">{status}</p>
    );
  }
  if (status === "unknown") {
    statusDescription = (
      <p className="characters__status characters__status-unknown">{status}</p>
    );
  }

  return (
    <>
      <article id={String(id)} className="characters__item" onClick={toggleShowModal}>
        <div className="characters__item-wrapper">
          <img className="characters__avatar" src={image} width="250" height="250" alt="character avatar"/>
          <div className="characters__description-wrapper">
            <h2 className="characters__title">{name}</h2>
            <p className="characters__type">
              {species} - {gender}
            </p>
            {statusDescription}
          </div>
        </div>
        <button className="characters__button button" onClick={toggleShowModal}>
          Show all
        </button>
      </article>
      <Modal
        character={character}
        show={showModal}
        onCloseButtonClick={toggleCloseModal}
        episodeName={episodeName}
        statusDescription={statusDescription}
      />
    </>
  );
}

export default Card;
