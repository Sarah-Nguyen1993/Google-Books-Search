import React from "react";
import { Container, Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import ResultContainer from "../components/ResultContainer";

function Search(){
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
                        <Card>
                        <SearchBar/>
                        </Card>
                    </Col>
                </Row>
                
                <Row>
                    <Col size="md-12">
                    <ResultContainer>
                        <h4>Search Result</h4>
                    </ResultContainer>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Search;