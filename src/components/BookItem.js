import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ title, author }) => (
  <div className="card">
    <div className="row row-cols-auto mx-0 py-4 justify-content-around">
      <p>Action</p>
      <p>{title}</p>
      <p>{author}</p>
    </div>
  </div>
);

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookItem;
