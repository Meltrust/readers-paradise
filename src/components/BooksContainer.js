import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../redux/books/books';
import BookItem from './BookItem';

const BooksContainer = () => {
  const dispatch = useDispatch();

  const booksList = useSelector((state) => state.booksReducer.books);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <div>
      <ul className="list-unstyled row mx-0 g-0 gy-3">
        {booksList.map((book) => {
          const currentProgress = Math.floor(Math.random() * 10) + 1;
          const bookLenght = Math.floor(Math.random() * 10 + currentProgress);

          return (
            <li key={book.id}>
              <BookItem
                id={book.id}
                title={book.title}
                author={book.author}
                category={book.category}
                currentProgress={currentProgress}
                bookLenght={bookLenght}
              />

            </li>
          );
        })}
      </ul>
      <div className="line-h my-5" />

    </div>
  );
};

export default BooksContainer;
