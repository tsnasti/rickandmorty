import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { fetchCharactersAction } from "../store/api-actions";
import { getInfo } from "../store/character-data/selectors";
import Filter from "../components/filter/filter";
import CardList from "../components/card-list/card-list";
import Pagination from "../components/pagination/pagination";
import "./main-page.css";

function MainPage(): JSX.Element {
  const info = useAppSelector(getInfo);
  const characters = info?.results;
  const prevLink = info?.info.prev;
  const nextLink = info?.info.next;
  const lastPage = info?.info.pages;

  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchCharactersAction({
        page: currentPage,
        name: name,
        status: status,
        species: species,
        type: type,
        gender: gender
      })
    );
  }, [dispatch, currentPage, name, status, species, type, gender]);

  return (
    <div className="container">
      <h2 className="main__title">The Rick and Morty characters</h2>
      <section className="filter section">
        <h2 className="filter__title">Find your characters</h2>
        <Filter
          name={name}
          onNameChange={setName}
          status={status}
          onStatusChange={setStatus}
          species={species}
          onSpeciesChange={setSpecies}
          type={type}
          onTypeChange={setType}
          gender={gender}
          onGenderChange={setGender}
        />
      </section>
      <section className="characters section">
        <CardList characters={characters} />
      </section>
      <section className="pagination section">
        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          prevLink={prevLink}
          nextLink={nextLink}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </div>
  );
}

export default MainPage;
