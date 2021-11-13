import React from 'react';

const Form = () => (
  <div className="pb-5 pb-md-0">
    <h2 className="h4 fw-bold text-muted">ADD NEW BOOK</h2>
    <form className="row mx-0 g-0 justify-content-between pb-5 pb-md-0">
      <div className="col-md-3">
        <input
          type="text"
          className="form-control"
          placeholder="Book title"
          required
        />
      </div>
      <div className="col-md-3">
        <input
          type="text"
          className="form-control"
          placeholder="Book author"
          required
        />
      </div>
      <div className="col-md-3">
        <select
          className="col-3 form-select try"

        >

          <option>Fantasy</option>
          <option>Science Fiction</option>

        </select>
      </div>
      <div className="col-md-2 pb-5 pb-md-0">
        <button type="submit" className="btn btn-primary w-100">
          <span className="font-robotoslab small px-3">ADD BOOK</span>
        </button>
      </div>
    </form>
  </div>
);

export default Form;
