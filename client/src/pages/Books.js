import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import {Container } from "../components/Grid";
import Form from "../components/Form";
// import Results from "../components/Results";

class Books extends Component {
    state = {
        query : "",
        books: []
    };

    handleInputChange = event => {
        const query = event.target.value;
        this.setState({query});
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.searchBook(this.state.query).then(response => {
            let responses = response.data;

            responses = responses.map(response => {
                responses = {
                    title: response.items.volumeInfo.title,
                    authors: response.items.volumeInfo.authors,
                    description: response.items.volumeInfo.description,
                    selfLink: response.selfLink,
                    image: response.imageLinks.thumbnail
                }
                return response;
            })
            this.setState({ books: responses })
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h2>Search for Books and Save Ones you want to look at later</h2>
                </Jumbotron>
                <Form handleInputChange={this.handleInputChange}  handleFormSubmit={this.handleFormSubmit}/>

                {/* <Results books={this.state.books}/> */}
                <p>Things are going to go here</p>
            </Container>
        )
    }
}

export default Books;
