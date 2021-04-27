import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import uniqid from 'uniqid';
import { db } from "../../Auth/Fire";
const AddBook = (props) => {
  
  const {show,handleClose}=props;
  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [img, setImg] = useState("");
  const [isbn, setIsbn] = useState("");

  const book = {
    author: "",
    genre: "",
    id: "",
    img:"",
    isbn:"",
    title: "",
    status: true,
  };
  const clearAddInput = () => {
    
    setTitle("");
    setAuthor("");
    setGenre("");
    setImg("");
    setIsbn("");

    console.log("Input Cleared!");
  };

  const handleAddBook = () => {
    const confirm = window.confirm(`Do you really want to add this book?`);
    if (confirm) {
      
      book.author = author;
      book.genre = genre;
      book.id = uniqid('b-');
      book.img = img;
      book.isbn = isbn;
      book.title = title;
      
      
      db.collection("books")
      .doc(book.id)
      .set(book)
      .then(() => {
        console.log("You added", book);
        clearAddInput();
        handleClose();
      })
      .catch(error => {
        console.log("Book adding failed ",error);
      });


      
      
    } else {
      console.log(`You Refused To add the book!`);
    }
  };
  return (
    <>
      <div className="container">
        

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <h4 className="display-4">Add Book</h4>
          </Modal.Header>
          <Modal.Body>
            <div className="card-body">
              
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Book Title"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  type="text"
                  className="form-control"
                  id="author"
                  placeholder="Book Author"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="genre" className="form-label">
                  Genre
                </label>
                <input
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  type="text"
                  className="form-control"
                  id="genre"
                  placeholder="Genre"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="img" className="form-label">
                  Image Url
                </label>
                <input
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  type="text"
                  className="form-control"
                  id="img"
                  placeholder="Image Url"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="isbn" className="form-label">
                  ISBN
                </label>
                <input
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                  type="text"
                  className="form-control"
                  id="isbn"
                  placeholder="ISBN"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={handleAddBook}
              type="submit"
              className="btn my-theme-btn shadow"
            >
              Add Book
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AddBook;
