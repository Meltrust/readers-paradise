import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import './index.css';
import App from './App';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="container min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);