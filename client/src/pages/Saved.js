import React from "react";
import { Container, Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import ResultContainer from "../components/ResultContainer";

function Saved(){
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
                            <h4>Saved Books</h4>
                        </ResultContainer>
                    </Col>
                </Row>
                
                <Row>
                    <Col size="md-12">
                   
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Saved;