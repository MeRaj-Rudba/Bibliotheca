import React from "react";
import { Badge, Button, Card } from "react-bootstrap";

const Book = (props) => {
  const { book } = props;
  const { title, author, status, img } = book;
  const handleBorrow = () => {
    window.alert(`You want to borrow a book named ${title}`);
  };
  return (
    <Card className="book-card shadow">
      <Card.Img className="book-card-img" variant="top" src={img} />
      <Card.Body>
        <Card.Title className="book-title">{title}</Card.Title>
        <Card.Text className="book-text-author">
         {author}
        </Card.Text>
        <Card.Text>
          <Badge className={status ? "bg-accent-3" : "bg-accent-5"}>
            {status ? "Available" : "Not available"}
          </Badge>
        </Card.Text>
        {status ? (
          <Button onClick={handleBorrow} className="my-theme-btn  shadow-sm">
            Borrow
          </Button>
        ) : (
          <Button disabled className="my-theme-btn shadow">
            Borrow
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Book;
