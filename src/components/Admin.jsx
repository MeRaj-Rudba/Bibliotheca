import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddBook from "./AdminComponents/AddBook";
import BookList from "./AdminComponents/BookList";

const Admin = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="admin-page">
      <div className="container w-50 mb-3">
        <input
          type="text"
          className="form-control"
          id="bookId"
          placeholder="Search..."
        />
      </div>

      <h1 className="display-4 font-main text-center">Book List</h1>

      <Button className="shadow-lg admin-mid-btn my-theme-btn "  onClick={handleShow}>
        Add Book
      </Button>
      <AddBook show={show} handleClose={handleClose} />
      <BookList />
    </div>
  );
};

export default Admin;
