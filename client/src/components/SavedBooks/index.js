import React from "react";
import "./style.css";

const SavedBooks = (props) => {

    return (
        <div>
            {props.savedBookData.map((saved) => {
                return (
                    <div className="row justify-content-md-center m-4 p-4 border" key={saved._id}>
                        <div className="col-md-12">
                            <div id="picandbtn">
                                <img src={saved.image} alt={saved.title} />
                                <p className="my-2">
                                    <strong>{saved.title}</strong>
                                </p>
                                <p>
                                    <strong>by {saved.authors}</strong>
                                </p>
                                <div
                                    className="btn-group mr-2"
                                    role="group"
                                    aria-label="Basic example">
                                    <button
                                        type="button"
                                        className="btn btn-info"
                                        id={saved._id}
                                        onClick={() => props.deleteBook(saved._id)}>
                                        Delete
                                    </button>
                                </div>
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic example">
                                    <a href={saved.infoLink} rel="noopener noreferrer" target="_blank">
                                        <button
                                            type="button"
                                            className="btn btn-info">
                                            More Info
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="">{saved.description}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default SavedBooks;
