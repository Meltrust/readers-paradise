import React from 'react';
import BookItem from './BookItem';

const BooksContainer = () => {
  const booksList = [
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 2, title: 'The Da Vinci Code', author: 'Dan Brown' },
    { id: 3, title: 'Pinocchio', author: 'Carlo Collodi' },
  ];

  return (
    <ul>
      {booksList.map((book) => (
        <li key={book.id}><BookItem title={book.title} author={book.author} /></li>
      ))}
    </ul>
  );
};

export default BooksContainer;
