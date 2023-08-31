import { Сharacter } from "../../types/character";
import "./modal.css";

type CardProps = {
  character: Сharacter;
  show: boolean;
  onCloseButtonClick: () => void;
  episodeName: string | undefined;
  statusDescription: JSX.Element | null;
};

function Modal({
  character,
  show,
  onCloseButtonClick,
  episodeName, statusDescription
}: CardProps): JSX.Element {
  const {
    id,
    name,
    species,
    type,
    gender,
    origin,
    location,
    image
  } = character;

  return (
    <div className={`${show ? "show" : "empty"}`}>
      <div className="modal" id={String(id)}>
        <img className="characters__avatar" src={image} width="300" height="300" alt="character avatar"/>
        <div className="modal__description-wrapper">
          <h2 className="modal__title">{name}</h2>
          <p className="modal__species">
            {species} - {gender}
          </p>
          {statusDescription}
          <p className="characters__gender">{type}</p>
          <p className="characters__gender">Origin location: {origin.name}</p>
          <p className="characters__gender">
            Last known location: {location.name}
          </p>
          <p>First seen in: {episodeName}</p>
        </div>
        <button className="modal__close button" onClick={onCloseButtonClick}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
