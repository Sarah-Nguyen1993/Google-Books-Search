import React, {useState} from "react";
import { Container, Col, Row } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Button from "../components/Button";
import Thumbnail from "../components/Thumbnail"
import ResultContainer from "../components/ResultContainer";
import API from "../utils/API.js"

function Search(){
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [savedBooks, setSavedBooks] = useState([]);

    function handleInputChange(e){
        setSearch(e.target.value);
    };
    function handeFormSubmit(e){
        e.preventDefault();

        if (search){
            API.searchBooks(search)
            .then(res =>{
                setResults(res.data.items)
                console.log(res.data.items)
            })
            .catch(err => console.log(err)); 
        }
        //unable to clear out input field
        setSearch("")
    };
    function saveBook(book){
        API.saveBook(book)
        //     title: book.volumeInfo.title,
        //     authors: book.volumeInfo.authors,
        //     description: book.volumeInfo.description,
        //     image: book.volumeInfo.imageLinks.thumbnail,
        //     link:book.volumeInfo.infoLink
        //  }
    };

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
                            <form onClick ={handeFormSubmit}>
                                <SearchBar
                                    onChange={handleInputChange}
                                />
                                <Button 
                                    type="primary" 
                                    // onClick ={handeFormSubmit} 
                                > 
                                Search 
                                </Button>
                            </form>
                        </Card>
                        
                    </Col>
                </Row>
                
                <Row>
                    <Col size="md-12">
                    <ResultContainer>
                        <h4>Search Result</h4>
                        {results.length ? (
                            <>
                                {results.map(book =>{
                           return(
                               <Card key={book.id}>
                                   <Row>
                                       <Col size="md-12">
                                       <h3>{book.volumeInfo.title}</h3>
                                       </Col>
                                   </Row>
                                   <Row>
                                       <Col size="md-10">
                                       <h5>Authors: {book.volumeInfo.authors}</h5>
                                       </Col>
                                       <Col size="md-2">
                                           <a href={book.volumeInfo.infoLink} target="_blank" rel="noreferrer"><Button type="info">View</Button></a>
                                            <Button type="success" onClick={() =>{saveBook(book);console.log("clicked");console.log(book)}}>Save</Button>
                                       </Col>
                                   </Row>
                                   <Row>
                                       <Col size="md-3">
                                           <Thumbnail src={book.volumeInfo.imageLinks.thumbnail}/>
                                       </Col>
                                       <Col size="md-9">
                                            {book.volumeInfo.description}
                                       </Col>
                                   </Row>
                                   
                               </Card>
                           )
                        })}
                            </>
                        ):(<h5>No Results to Display</h5>)}
                        
                    </ResultContainer>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Search;