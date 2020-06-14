import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
    state = {
        query : "",
        books: [],
    };

    handleInputChange = (event) => {
        const value = event.target.value;
        this.setState({ query: value });
    };

    search = query => {
        API.searchGoogleBks(query).then(response => {
            const books = [];
            
            if (response.data.items) {
                for (let i = 0; i < response.data.items.length; i++ ) {
                    let searchRes = {};

                    searchRes.title = response.data.items[i].volumeInfo.title;

                    //need to check if there are multiple
                    let authors = [ ];
                    for (let j = 0; j < response.data.items[i].authors[j].length; j++ ){
                        authors.push(response.data.items.authors[j]);
                    }
                    searchRes.authors = authors;
                    searchRes.description = response.data.description;
                    searchRes.selfLink = response.data.selfLink;
                    searchRes.image = response.data.imageLinks.thumbnail;
                    books.push(searchRes);
                }
            }
            this.setState({
                books: books
            })
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.search(this.state.query);
        }
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Search for Books and Save Ones you want to look at later</h1>
                        </Jumbotron>
                        <form>
                            <Input value={this.state.search} onChange={this.handleInputChange} name="search" placeholder="Search here" />
                            <FormBtn disabled={ !(this.state.search) } onClick={this.handleFormSubmit}> Search </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        );
    }

export default Books;
