import React from 'react';
import Header from './components/Header';
import BooksContainer from './components/BooksContainer';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <BooksContainer />
      <Form />
    </div>
  );
}

export default App;
