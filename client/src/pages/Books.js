import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Form from "../components/Form";
import Results from "../components/Results";

class Books extends Component {
    state = {
        query: "",
        books: [],
    };

    handleInputChange = (event) => {
        const query = event.target.value;
        this.setState({ query });
    };

    saveBook = (id) => {
        API.saveBook(id)
        .then()
        .catch(err => console.log(err));
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.searchBook(this.state.query)
            .then(response => {
                let results = response.data.items;

                
                results = results.map(result => {
                    result = {
                        title: result.volumeInfo.title,
                        authors: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        selfLink: result.volumeInfo.selfLink,
                        image: result.volumeInfo.imageLinks.thumbnail,
                    };
                    return result;
                });
                this.setState({ books: results });
            })
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h2>
                        Search for Books and Save Ones you want to look at later
                    </h2>
                </Jumbotron>
                <Form
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <h3>Search Results</h3>
                <Results books={this.state.books}/>
            </Container>
        );
    }
}

export default Books;
