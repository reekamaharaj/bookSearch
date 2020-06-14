import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Container from "../components/Container";
import Results from "../components/Results";

class Saved extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
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
                {this.state.books.length ? (
                    <div>
                        <h3>Saved Books</h3>
                        <Results books={this.state.books}/>
                        {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                    </div>
                ) : (
                    <h3>No Saved Books to Display</h3>
                )}
            </Container>
        );
    }
}

export default Saved;
