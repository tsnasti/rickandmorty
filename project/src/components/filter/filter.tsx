import { useAppDispatch } from "../../hooks";
import { fetchCharactersAction } from "../../store/api-actions";
import { useCallback } from "react";
import "./filter.css";

type FilterProps = {
  name: string;
  onNameChange: (name: string) => void;
  status: string;
  onStatusChange: (status: string) => void;
  species: string;
  onSpeciesChange: (species: string) => void;
  type: string;
  onTypeChange: (type: string) => void;
  gender: string;
  onGenderChange: (gender: string) => void;
};

function Filter({
  name,
  onNameChange,
  status,
  onStatusChange,
  species,
  onSpeciesChange,
  type,
  onTypeChange,
  gender,
  onGenderChange
}: FilterProps): JSX.Element {
  const handleNameChange = useCallback((event: { target: { value: string } }) => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  const handleStatusChange = useCallback((event: { target: { value: string } }) => {
      onStatusChange(event.target.value);
    },
    [onStatusChange]
  );

  const handleSpeciesChange = useCallback((event: { target: { value: string } }) => {
      onSpeciesChange(event.target.value);
    },
    [onSpeciesChange]
  );

  const handleTypeChange = useCallback((event: { target: { value: string } }) => {
      onTypeChange(event.target.value);
    },
    [onTypeChange]
  );

  const handleGenderChange = useCallback((event: { target: { value: string } }) => {
      onGenderChange(event.target.value);
    },
    [onGenderChange]
  );

  const dispatch = useAppDispatch();

  const handleResetClick = () => {
    onNameChange("");
    onGenderChange("");
    onSpeciesChange("");
    onTypeChange("");
    onStatusChange("");
    dispatch(
      fetchCharactersAction({
        page: 1,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: ""
      })
    );
  };

  return (
    <div className="filter__container">
      <div className="filter__wrapper">
        <label className="filter__label" htmlFor="name">
          Enter character name:
        </label>
        <input id="name" type="text" className="filter__input" placeholder="Rick/Morty/Summer/Beth or other" value={name} onChange={handleNameChange}/>
      </div>
      <div className="filter__wrapper">
        <label className="filter__label" htmlFor="status-select">
          Choose a status:
        </label>
        <select className="filter__select" name="status" id="status-select" value={status} onChange={handleStatusChange}>
          <option className="filter__option" value="">
            Please choose an option
          </option>
          <option className="filter__option" value="alive">
            Alive
          </option>
          <option className="filter__option" value="dead">
            Dead
          </option>
          <option className="filter__option" value="unknown">
            Unknown
          </option>
        </select>
      </div>
      <div className="filter__wrapper">
        <label className="filter__label" htmlFor="species">
          Enter character species:
        </label>
        <input id="species" type="text" className="filter__input" placeholder="Human/Robot/Alien or other" value={species} onChange={handleSpeciesChange}/>
      </div>
      <div className="filter__wrapper">
        <label className="filter__label" htmlFor="type">
          Enter character type:
        </label>
        <input id="type" type="text" className="filter__input" placeholder="Parasite/Cat-Person/Fish-Person or other" value={type} onChange={handleTypeChange}/>
      </div>
      <div className="filter__wrapper">
        <label className="filter__label" htmlFor="status-gender">
          Choose a character gender:
        </label>
        <select className="filter__select" name="gender" id="gender-select" value={gender} onChange={handleGenderChange}>
          <option className="filter__option" value="">
            Please choose an option
          </option>
          <option className="filter__option" value="female">
            Female
          </option>
          <option className="filter__option" value="male">
            Male
          </option>
          <option className="filter__option" value="genderless">
            Genderless
          </option>
          <option className="filter__option" value="unknown">
            Unknown
          </option>
        </select>
      </div>
      <button className="filter__button button" onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
}

export default Filter;
