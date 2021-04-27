import React  from "react";
import { Row, Col, Container,} from "react-bootstrap";
import { db } from "../Auth/Fire";
import Book from "./Book";
import { useCollection } from "react-firebase-hooks/firestore";
import SpinLoader from "./SpinLoader";

const BookCardView = () => {
  const [value, loading, error] = useCollection(db.collection("books").orderBy('author'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  return (
    <Container>
      <h1 className="display-4 text-center">Book List</h1>
      {loading ? (
        <SpinLoader />
      ) : (
        <Row className="book-card-view">
          {error && <strong>Error: {JSON.stringify(error)}</strong>}

          {value &&
            value.docs.map((doc) => (
              <Col key={doc.id} xs={6} md={4}>
                <Book  book={doc.data()} id={doc.id} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default BookCardView;
