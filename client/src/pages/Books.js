import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Container from "../components/Container";
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

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then((res) =>
                this.setState({
                    _id: "",
                    books: res.data,
                    title: "",
                    author: "",
                    synopsis: "",
                    link: ""
                })
            )
            .catch((err) => console.log(err));
    };

    saveBook = (id) => {
        API.saveBook(id)
            .then((res) => this.loadBooks())
            .catch((err) => console.log(err));
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.searchBook(this.state.query)
            .then(response => {
                let results = response.data.items;
                // console.log(response);
                
                results = results.map(result => {
                    result = {
                        id: result.id,
                        title: result.volumeInfo.title,
                        authors: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        infoLink: result.volumeInfo.infoLink,
                        image: result.volumeInfo.imageLinks.thumbnail,
                    };
                    console.log(result);
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
                {this.state.books.length ? (
                    <div>
                        <h3>Search Results</h3>
                        <Results books={this.state.books} saveBook={this.saveBook}/>
                    </div>
                    
                ) : (
                    <h3>No Search Results to Display</h3>
                )}
                
            </Container>
        );
    }
}

export default Books;
