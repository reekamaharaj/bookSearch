import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Container from "../components/Container";
import SavedBooks from "../components/SavedBooks";

class Saved extends Component {
    state = {
        savedBookData: []
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then((res) =>
                this.setState({ savedBookData: res.data })
            )
            .catch((err) => console.log(err));
    };

    deleteBook = (id) => {
        API.deleteBook(id)
            .then((res) => this.loadBooks())
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <h1>Saved Books</h1>
                </Jumbotron>
                {this.state.savedBookData.length ? (
                    <div>
                        <h3>Saved Books</h3>
                        <SavedBooks savedBookData={this.state.savedBookData} deleteBook={this.deleteBook}/>
                    </div>
                ) : (
                    <h3>No Saved Books to Display</h3>
                )}
            </Container>
        );
    }
}

export default Saved;
