import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Button from "../components/Button";
import Thumbnail from "../components/Thumbnail";
import ResultContainer from "../components/ResultContainer";
import API from "../utils/API.js";

function Saved() {
  const [savedbooks, setSavedBooks] = useState([]);
  
  const loadBooks = () => {
    API.getBooks().then((res) => setSavedBooks(res.data));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const deleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h3>(React) Google Books Search</h3>
              <p>Seach for and Save Books of Internet</p>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <ResultContainer>
              {savedbooks.length ? (
                <>
                  <h4>Saved Books</h4>
                  {savedbooks.map((book) => {
                    return (
                      <Card  key={book.id}>
                        <Row>
                          <Col size="md-12">
                            <h3>{book.title}</h3>
                          </Col>
                        </Row>
                        <Row>
                          <Col size="md-10">
                            <h5>Authors: {book.authors}</h5>
                          </Col>
                          <Col size="md-2">
                            <a
                              href={book.bookLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <Button type="info">View</Button>
                            </a>
                            <Button type="danger" onClick={() => deleteBook(book._id)}>
                              Delete
                            </Button>
                          </Col>
                        </Row>
                        <Row>
                          <Col size="md-3">
                            <Thumbnail src={book.thumbnail} />
                          </Col>
                          <Col size="md-9">{book.description}</Col>
                        </Row>
                      </Card>
                    );
                  })}
                </>
              ) : (
                <h4> No Books Saved</h4>
              )}
            </ResultContainer>
          </Col>
        </Row>

        <Row>
          <Col size="md-12"></Col>
        </Row>
      </Container>
    </>
  );
}

export default Saved;
