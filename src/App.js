import React from 'react';
import './App.css';
import BooksContainer from './components/BooksContainer';
import Form from './components/Form';

function App() {
  return (
    <div className="container">
      <BooksContainer />
      <Form />
    </div>
  );
}

export default App;
