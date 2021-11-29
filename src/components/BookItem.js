import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({
  id, title, author, category, currentProgress, bookLength, authorGoogleQuery,
}) => {
  const dispatch = useDispatch();
  const progressPercentage = Math.round((currentProgress / bookLength) * 100);
  const handleRemove = () => dispatch(removeBook(id));

  return (
    <div className="card pe-md-5">
      <div className="row mx-0 py-4 justify-content-between align-items-center ps-4 pe-5 ">
        <div className="col-md-6">
          <p className="fw-bold opacity-50 mb-0 text-category">{category}</p>
          <p className="fw-bold robotoslab fs-2 mb-0">{title}</p>
          <a href={`https://www.google.com/search?q=${authorGoogleQuery}`} target="_blank" className="border-0 bg-white p-0 mb-3 text-1" rel="noreferrer">
            {author}
          </a>
          <div className="row row-cols-auto mx-0 g-0">
            {/* <button type="button" className=" border-0 bg-white text-1">
              Comments
            </button> */}
            <div className="line-v px-0 mx-md-3 mx-1" />
            <button type="button" className=" border-0 bg-white text-1" onClick={handleRemove}>
              Remove
            </button>
            <div className="line-v px-0 mx-md-3 mx-1" />
            {/* <button type="button" className=" border-0 bg-white text-1">
              Edit
            </button> */}
          </div>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-center">
          <div className="row row-cols-auto mx-0 g-0 justify-content-center align-items-center py-3 py-md-0">
            <div className="col-2 col-md-5">
              <CircularProgress className="w-75" variant="determinate" value={progressPercentage} />
            </div>
            <div className="col-7">
              <p className="fs-2 mb-0">
                {progressPercentage}
                %
              </p>
              <p className="opacity-50 small mb-2">Completed</p>
            </div>
          </div>
        </div>
        <div className="col-md-2 robotoslab">
          <p className="mb-2 opacity-50">CURRENT CHAPTER</p>
          <p>
            Chapter
            {' '}
            {currentProgress}
          </p>
          <button
            type="button"
            className="btn btn-primary px-3"
          >
            <a href={`https://www.google.com/search?q=${authorGoogleQuery}`} target="_blank" className="opacity-50 small text-white" rel="noreferrer">VISIT AUTHOR</a>
          </button>
        </div>
      </div>
    </div>
  );
};
BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  currentProgress: PropTypes.number.isRequired,
  bookLength: PropTypes.number.isRequired,
  authorGoogleQuery: PropTypes.string.isRequired,
};

export default BookItem;
