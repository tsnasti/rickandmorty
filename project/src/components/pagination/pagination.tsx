import { useState, memo } from "react";
import "./pagination.css";

type PaginationProps = {
  currentPage: number;
  lastPage: number | undefined;
  prevLink: string | null | undefined;
  nextLink: string | null | undefined;
  onPageChange: (currentPage: number) => void;
};

function Pagination({
  currentPage,
  lastPage,
  prevLink,
  nextLink,
  onPageChange
}: PaginationProps): JSX.Element {
  const numbersListLimit = 5;
  const [maxNumbersList, setMaxNumbersList] = useState(5);
  const [minNumbersList, setMinNumbersList] = useState(0);

  const range: number[] = [];
  if (lastPage) {
  for (let i = 1; i <= lastPage; i++) {
    range.push(i);
  }
}

  const numbersList = range.map((pageNumber) => {
    if (pageNumber < maxNumbersList + 1 && pageNumber > minNumbersList) {
      return (
        <li className="pagination__item" key={pageNumber}>
          <button className="pagination__button button" disabled={pageNumber === currentPage} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </button>
        </li>
      );
    } else {
      return null;
    }
  });

  const onNext = () => {
    onPageChange(currentPage + 1);
    if (currentPage + 1 > maxNumbersList) {
      setMaxNumbersList(maxNumbersList + numbersListLimit);
      setMinNumbersList(minNumbersList + numbersListLimit);
    }
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    if ((currentPage - 1) % numbersListLimit === 0) {
      setMaxNumbersList(maxNumbersList - numbersListLimit);
      setMinNumbersList(minNumbersList - numbersListLimit);
    }
  };

  let incrementItem = null;
  if (range.length > maxNumbersList) {
    incrementItem = (
      <li>
        <button className="pagination__button pagination__increment-button button" onClick={onNext}>
          &hellip;
        </button>
      </li>
    );
  }

  let decrementItem = null;
  if (minNumbersList >= 1) {
    decrementItem = (
      <li>
        <button className="pagination__button pagination__decrement-button button" onClick={onPrevious}>
          &hellip;
        </button>
      </li>
    );
  }

  return (
    <div className="pagination__wrapper">
      <button className="pagination__button button" disabled={prevLink === null} onClick={onPrevious}>
        prev
      </button>
      <ul className="pagination__list">
        {decrementItem}
        {numbersList}
        {incrementItem}
      </ul>
      <button className="pagination__button button" disabled={nextLink === null} onClick={onNext}>
        next
      </button>
    </div>
  );
}

export default memo(Pagination);
