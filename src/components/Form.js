import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fantasy');

  const resetFields = () => {
    setAuthor('');
    setTitle('');
    setCategory('Fantasy');
  };

  const validate = (book) => {
    if (title === '' || author === '') {
      const errorPlace = document.getElementById('errPlace');
      const errorMsg = document.createElement('small');
      errorMsg.textContent = 'All fields are required';
      errorMsg.classList.add('text-black-50', 'mt-3', 'error');

      if (document.querySelector('.error') === null) {
        errorPlace.append(errorMsg);
      }
    } else {
      dispatch(addBook(book));
      resetFields();
      if (document.querySelector('.error') !== null) {
        document.querySelector('.error').remove();
      }
    }
  };

  const submitBookToStore = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(), // make sure it's unique
      title,
      author,
      category,
    };
    event.preventDefault();
    validate(newBook);
  };

  return (
    <div className="pb-5 pb-md-0">
      <h2 className="h4 fw-bold text-muted"> ADD NEW BOOK</h2>
      <form className="row mx-0 g-0 justify-content-between pb-5 pb-md-0" id="">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            required
          />
        </div>
        <div className="col-md-3">
          <select
            className="col-3 form-select try "
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >

            <option>Fantasy</option>
            <option>Science Fiction</option>
            <option>Education</option>
            <option>Thriller</option>
            <option>Horror</option>
            <option>Classics</option>

          </select>
        </div>
        <div className="col-md-2 pb-5 pb-md-0">
          <button type="submit" className="btn btn-primary w-100" onClick={submitBookToStore}>
            <span className="font-robotoslab small px-3">ADD BOOK</span>
          </button>
        </div>
      </form>
      <div id="errPlace" />
    </div>
  );
};
export default Form;
