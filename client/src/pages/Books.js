import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                synopsis: this.state.synopsis,
            })
                .then((res) => this.loadBooks())
                .catch((err) => console.log(err));
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
}

export default Books;
