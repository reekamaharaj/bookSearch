import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Results from "../components/Results";

class Books extends Component {
    state = {
        query : "",
        books: [],
    };

    handleInputChange = event => {
        this.setState({ query: event.target.value });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.searchGoogleBks(this.state.query).then(response => {
            let responses = response.data;

            responses = responses.map(response => {
                responses = {
                    title: response.items.volumeInfo.title,
                    authors: response.items.volumeInfo.authors,
                    description: response.items.volumeInfo.description,
                    selfLink: response.selfLink,
                    image: response.imageLinks.thumbnail
                }
                return response
            })
            this.setState({ books: responses })
        })
    }

    render() {
        return (
            <Container fluid>
                        <Jumbotron>
                            <h1>Search for Books and Save Ones you want to look at later</h1>
                        </Jumbotron>
                        <form>
                            <Input value={this.state.search} onChange={this.handleInputChange} name="search" placeholder="Search here" />
                            <FormBtn disabled={ !(this.state.search) } onClick={this.handleFormSubmit}> Search </FormBtn>
                        </form>

                        <Results books={this.state.books}></Results>
            </Container>
        )
    }
}

export default Books;
