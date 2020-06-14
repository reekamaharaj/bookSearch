import React from "react";
import "./style.css";

const Result = (props) => {
    return (
        <div>
            {props.books.map((book) => {
                return (
                    <div className="row justify-content-md-center m-4 p-4 border">
                        <div className="col-md-12" key={book._id}>
                            <div id="picandbtn">
                                <img src={book.image} alt={book.title} />
                                <p className="my-2">
                                    <strong>{book.title}</strong>
                                </p>
                                <p>
                                    <strong>by {book.authors}</strong>
                                </p>
                                <div
                                    className="btn-group mr-2"
                                    role="group"
                                    aria-label="Basic example">
                                    <button
                                        type="button"
                                        className="btn btn-info"
                                        id={book.id}
                                        onClick={book.saveBook}>
                                        Save
                                    </button>
                                </div>
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic example">
                                    <a href={book.link} target="_blank">
                                        <button
                                            type="button"
                                            className="btn btn-info">
                                            More Info
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="">{book.description}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default Result;
